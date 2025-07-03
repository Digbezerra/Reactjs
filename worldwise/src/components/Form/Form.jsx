// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useReducer, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import { useUrlPosition } from "../../hooks/useUrlPosition";

import { useCities } from "../../context/CitiesContext";

import Button from "../Button/Button";
import ButtonBack from "../Button/ButtonBack";
import Message from "../Message/Message";

import styles from "./Form.module.css";
import Spinner from "../Spinner/Spinner";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const initialState = {
  cityName: "",
  country: "",
  date: new Date(),
  notes: "",
  position: {
    lat: "",
    lng: "",
  },
  emoji: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "cityName/created":
      return {
        ...state,
        cityName: action.payload,
      };
    case "country/created":
      return {
        ...state,
        countryName: action.payload,
      };
    case "emoji/created":
      return {
        ...state,
        emoji: convertToEmoji(action.payload),
      };
    case "date/created":
      return {
        ...state,
        date: action.payload,
      };
    case "notes/created":
      return {
        ...state,
        notes: action.payload,
      };
    default:
      throw new Error("There's something wrong with action");
  }
}

function Form() {
  const [{ cityName, date, notes, emoji, country }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [geoCodingError, setGeoCodingError] = useState("");

  const [lat, lng] = useUrlPosition([]);
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  const handleSetCityName = (cityName) => {
    dispatch({ type: "cityName/created", payload: cityName });
  };

  const handleSetCountry = (countryName) => {
    dispatch({ type: "country/created", payload: countryName });
  };

  const handleSetEmoji = (countryCode) => {
    dispatch({ type: "emoji/created", payload: countryCode });
  };

  const handleSetDate = (date) => {
    dispatch({ type: "date/created", payload: date });
  };

  const handleSetNotes = (notes) => {
    dispatch({ type: "notes/created", payload: notes });
  };

  useEffect(() => {
    if (!lat && !lng) return;
    async function fetchCityData() {
      try {
        setIsLoadingGeoCoding(true);
        setGeoCodingError("");
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const data = await res.json();
        if (!data.countryCode) {
          throw new Error(
            "That doesn't seems to be a valid location, please click on a city. 😉"
          );
        }
        handleSetCityName(data.locality || data.locality || "");
        handleSetCountry(data.countryName);
        handleSetEmoji(data.countryCode);
      } catch (err) {
        setGeoCodingError(err.message);
      } finally {
        setIsLoadingGeoCoding(false);
      }
    }
    fetchCityData();
  }, [lat, lng]);

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map!" />;
  if (isLoadingGeoCoding) return <Spinner />;
  if (geoCodingError) return <Message message={geoCodingError} />;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: {
        lat,
        lng,
      },
    };
    await createCity(newCity);
    navigate("/app/cities");
  }

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => handleSetCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>
      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(date) => handleSetDate(date)}
          dateFormat={"dd/MM/yyyy"}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => handleSetNotes(e.target.value)}
          value={notes}
        />
      </div>
      <div className={styles.buttons}>
        <Button type="primary">Add +</Button>
        <ButtonBack />
      </div>
    </form>
  );
}

export default Form;
