import React, { useState, useEffect } from "react";
import AppContext from ".";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [example, setExample] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentPicture, setCurrentPicture] = useState({});

  const getPictures = () => {
    const token = localStorage.getItem("token");

    const requestOptions = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get("https://dt-back-end.herokuapp.com/pictures", requestOptions)

      .then((response) => {
        setExample([...response.data]);
      })
      .catch(() => {});
    return () => {};
  };

  const getTags = (id, tagArr = []) => {
    const token = localStorage.getItem("token");

    const requestOptions = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get("https://dt-back-end.herokuapp.com/tags", requestOptions)
      .then((response) => {
        // create an array

        // iterate over our resposne from our axios call
        response.data.forEach((post) => {
          // this iterates though each and pushes in the post
          // that match the main category or tag in this case
          for (let index = 0; index < post.tag.length; index++) {
            if (post.tag[index].toLowerCase() === id.toLowerCase()) {
              tagArr.push(post);
            }
          }
        });

        setTags([...tagArr]);
      })

      .catch((err) => {
        return [];
      });
  };

  const getCurrentPicture = (id) => {
    const token = localStorage.getItem("token");

    const requestOptions = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get("https://dt-back-end.herokuapp.com/pictures", requestOptions)

      .then((response) => {
          
        const current = response.data.filter(res => res.name.toLowerCase() === id);

        setCurrentPicture([...current]);
      })
      .catch(() => {});
    return () => {};
  };

  const context = {
    setExample,
    example,
    setTags,
    tags,
    setCurrentPicture,
    currentPicture,
    getPictures,
    getCurrentPicture,
    getTags
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
export default ContextProvider;
