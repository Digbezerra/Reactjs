import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";

const BASE_URL = "http://localhost:8000";
const CitiesContext = createContext();

const initialState = {
  cities: [],
  currentCity: {},
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "rejected":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "cities/loaded":
      return {
        ...state,
        cities: [...action.payload],
        isLoading: false,
      };
    case "city/created":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        isLoading: false,
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
        currentCity: {},
      };
    case "currentCity/loaded":
      return {
        ...state,
        currentCity: action.payload,
        isLoading: false,
      };
    default:
      throw new Error("Something wrong with action");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, currentCity, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const handleSetIsLoading = () => {
    dispatch({ type: "loading" });
  };
  const handleRejectedFetch = (message) => {
    dispatch({ type: "rejected", payload: message });
  };
  const handleSetCities = (data) => {
    dispatch({ type: "cities/loaded", payload: data });
  };
  const handleGetCurrentCity = (data) => {
    dispatch({ type: "currentCity/loaded", payload: data });
  };
  const handleCreateCity = (newCity) => {
    dispatch({ type: "city/created", payload: newCity });
  };
  const handleDeleteCity = (id) => {
    dispatch({ type: "city/deleted", payload: id });
  };

  useEffect(() => {
    async function fetchCities() {
      try {
        handleSetIsLoading();
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        handleSetCities(data);
      } catch (err) {
        handleRejectedFetch("Error when trying to fetch cities");
      }
    }

    fetchCities();
  }, []);

  async function getCurrentCity(id) {
    if (Number(id) === currentCity.id) return;
    try {
      handleSetIsLoading();
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      handleGetCurrentCity(data);
    } catch (err) {
      handleRejectedFetch("Error when trying action");
    }
  }

  async function createCity(newCity) {
    try {
      handleSetIsLoading();
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      handleCreateCity(data);
    } catch (err) {
      handleRejectedFetch("Error when trying action");
    }
  }

  async function deleteCity(id) {
    try {
      handleSetIsLoading();
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      handleDeleteCity(id);
    } catch (err) {
      handleRejectedFetch("Error when trying action");
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCurrentCity,
        createCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

const useCities = () => {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside CitiesProvider");
  return context;
};

export { CitiesProvider, useCities };
