import React, { createContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import Hero from "../../assets/hero.svg";
import About1 from "../../assets/about1.svg";

const AppContext = createContext();

const API = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=9";

const initialState = {
  name: "",
  image: "",
  service: [],
};

const AppProvider = ({ children }) => {
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Faizan Khan",
        image: Hero,
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Faizan Khan",
        image: About1,
      },
    });
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICE", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
