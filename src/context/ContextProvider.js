import React, { useState,useEffect } from "react";
import AppContext from ".";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [example, setExample] = useState([]);


useEffect(() => {
  const token = localStorage.getItem("token");

  const requestOptions = {

    headers: {
      Authorization: token
    }

  };
  axios
    .get("https://dt-back-end.herokuapp.com/pictures", requestOptions)

    .then(response => {
      console.log(response.data)
      setExample(response.data );

    })
    .catch(() => {});
  return () => {

  }
})

  
  const context = {
    setExample,
    example,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
export default ContextProvider;
