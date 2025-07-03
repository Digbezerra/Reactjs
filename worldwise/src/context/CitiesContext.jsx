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
};

function reducer(state, action) {
  switch (action.type) {
    case "setCities":
      return {
        ...state,
        cities: [...action.payload],
      };
    case "setCurrentCity":
      return {
        ...state,
        currentCity: action.payload,
      };
    case "createCity":
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case "deleteCity":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    default:
      throw new Error("Something wrong with action");
  }
}

function CitiesProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [{ cities, currentCity }, dispatch] = useReducer(reducer, initialState);

  const handleSetCities = (data) => {
    dispatch({ type: "setCities", payload: data });
  };

  const handleGetCurrentCity = (data) => {
    dispatch({ type: "setCurrentCity", payload: data });
  };

  const handleCreateCity = (newCity) => {
    dispatch({ type: "createCity", payload: newCity });
  };

  const handleDeleteCity = (id) => {
    dispatch({ type: "deleteCity", payload: id });
  };

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        handleSetCities(data);
      } catch (err) {
        throw new Error("Error when trying to fetch cities");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCurrentCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      handleGetCurrentCity(data);
    } catch (err) {
      throw new Error("Error when trying to fetch cities");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();
      handleCreateCity(data);
      handleGetCurrentCity(data);
    } catch (err) {
      throw new Error("Error when trying to fetch cities");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      handleDeleteCity(id);
    } catch (err) {
      throw new Error("Error when trying to fetch cities");
    } finally {
      setIsLoading(false);
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
