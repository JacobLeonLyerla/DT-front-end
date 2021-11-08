import React, { useState } from "react";
import AppContext from ".";
import axios from "axios";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [tags, setTags] = useState([]);
  const [currentPicture, setCurrentPicture] = useState();
  const [currentTag, setCurrentTag] = useState();
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState([]);
  const [post, setPost] = useState([]);

  //comment section useStat declecations
  const [toggle, setToggle] = useState(false);
  const [reply, setReply] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [description, setDescription] = useState("");
  const [filteredTagsArr, setFilteredTagsArr] = useState([]);
  const [filteredLocationsArr, setFilteredLocationsArr] = useState([]);
  const [renderReplies, setRenderReplies] = useState(false);
  const [newReplies,setNewReplies] = useState([])

  const loadUser = () => {
    const token = localStorage.getItem("token");

    const id = localStorage.getItem("id");
    const requestOptions = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get(`https://dt-back-end.herokuapp.com/users/${id}`, requestOptions)

      .then((response) => {
        setUser(response.data);

        let count = 0;

        response.data.post.forEach((like) => {
          count += like.unreadComment;
          count += like.unreadLike;
        });

        setCount(count);
        setPost(response.data.post);
      })

      .catch((err) => {});
  };

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
        setPictures([...response.data]);
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

        setTags(tagArr);
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
        const current = response.data.filter(
          (res) => res.name.toLowerCase() === id
        );

        setCurrentPicture(current[0]);
      })
      .catch(() => {});
    return () => {};
  };

  const getTagById = (id) => {
    axios
      .get(`https://dt-back-end.herokuapp.com/tags/${id}`)
      .then((response) => {
        setCurrentTag(response.data);
      })

      .catch((err) => {});
  };

  const getComments = (id) => {
    axios
      .get(`https://dt-back-end.herokuapp.com/tags/${id}`)
      .then((response) => {
        setComments(response.data.comments);
      });
  };
  const setCurrentToggleState = () => {
    setToggle(!toggle);
  };
  const handleComment = () => {
    let commentObj = {};

    const checkedString = !comment.replace(/\s/g, "").length
      ? setComment("")
      : comment;
    if (comment !== "") {
      commentObj.comment = checkedString;
      commentObj.username = user.username;
    }
    axios
      .post("https://dt-back-end.herokuapp.com/comments", commentObj)
      .then((response) => {
        // we now reset our comment object
        commentObj = {};
        // we set the comment key to the value of the comments passed in from props
        commentObj.comments = currentTag.comments;
        // when than push in this new id into that comments array
        // on the backend the array is a ref by id so it uses the comment id's to reference the comments
        // from the comment collection
        commentObj.comments.push(response.data._id);
        // when than get post  from the tags endpoint

        axios
          .get(`https://dt-back-end.herokuapp.com/tags/${currentTag._id}`)
          .then((response) => {
            // we set up a unread variable
            let unread;
            // if the user posting is not the user who made the post
            // than we increment the undread counter for the post
            // and if it is them we don't increment it we just pass in the current
            if (currentTag.user !== user.username) {
              unread = response.data.unreadComment + 1;
            } else {
              unread = response.data.unreadComment;
            }
            // we add that new undread value to the comment object under the unreadComment key
            // and we update the tag(post) with that new value
            // this will mean the post has a new notification :D!!!
            commentObj.unreadComment = unread;

            axios
              .put(
                `https://dt-back-end.herokuapp.com/tags/${currentTag._id}`,
                commentObj
              )
              // we than reset our comment input and call these functions to update the data being rendered
              .then((response) => {
                setComment("");
                getComments(currentTag._id);
              });
          });
      });
  };
  const handleReply = (comment) => {
    const { _id, replies } = comment;

    setCurrentToggleState();
    let replyObj = {};
    replyObj.username = user.username;
    replyObj.replyTo = _id;
    replyObj.comment = reply;

    //creates a comment to be stored in our comments collection
    axios
      .post("https://dt-back-end.herokuapp.com/comments", replyObj)
      .then((response) => {
        let commentObj = {};
        replyObj = response.data 
        commentObj.replies = replies;
        commentObj.replies.push(response.data._id);
        // puts our reply into our comments replies so it can render them
        axios
          .put(`https://dt-back-end.herokuapp.com/comments/${_id}`, commentObj)
          .then((response) => {
            let unread;
            if (user.username !== currentTag.user) {
              unread = currentTag.unreadComment + 1;
            } else {
              unread = currentTag.unreadComment;
            }
            commentObj = {};
            commentObj.unreadComment = unread;
            //just if the user who made the post is not the one commenting the user gets a unread comment notification increment
            axios
              .put(
                `https://dt-back-end.herokuapp.com/tags/${currentTag._id}`,
                commentObj
              )
              .then((response) => {
                setReply("");
                setNewReplies([...newReplies, replyObj])
              })
              .catch((err) => {});
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  };
  const handlePost = () => {
    const location = filteredLocationsArr;
    const mainLocation = filteredLocationsArr.shift();

    if (location.length === 0) {
      location.push(mainLocation);
    }

    const post = {};

    if (
      description !== "" &&
      title !== "" &&
      filteredTagsArr.length &&
      location.length
    ) {
      // set up keys and values for post object
      post.user = user.username;

      post.tag = filteredTagsArr;

      post.description = description;

      post.name = title;

      post.lat = mainLocation.cords.lat;

      post.lng = mainLocation.cords.lng;
      // blanks for now because we are not using them right now
      post.city = "";

      post.region = "";

      post.country = "";

      post.locationName = mainLocation.name;
      post.markers = location;
    }
    post.user = user.username
    axios
      .post("https://dt-back-end.herokuapp.com/tags", post)
      .then((response) => {
        const postId = {};
        postId.post = user.post;

        postId.post.push(response.data._id);

        axios
          .put(`https://dt-back-end.herokuapp.com/users/${user._id}`, postId)
          .then(() => {
            // after we move the user to thier post page
            // this.props.history.push(
            //   `/dashboard/${this.props.user.username}/post`
            // );
            setDescription("");
            setTitle("");
            setFilteredLocationsArr([]);
            setFilteredTagsArr([]);
          });
      });
  };
  const editComment = (id, comment) => {
    // first we make an edit object
    let edit = {};
    // we than set the key of comment to this.state.comment
    edit.comment = comment;
    // we use the id that was passed from the edit component to know what comment we want to edit
    // than we run a put request targeting that compoennt by the id and updating it with the new edit object
    axios
      .put(`https://dt-back-end.herokuapp.com/comments/${id}`, edit)
      .then((response) => {
        setRenderReplies(!renderReplies);
      })
      .catch((err) => {});
  };
  const deleteComment = (id) => {
    axios
      .delete(`https://dt-back-end.herokuapp.com/comments/${id}`)
      .then((response) => {
        setRenderReplies(!renderReplies);

      })
      .catch((err) => {});
  };
  const deleteTag =(id)=>{
    const token = localStorage.getItem("token");

    const requestOptions = {
      headers: {
        Authorization: token,
      },
    };
    axios
    .delete(`https://dt-back-end.herokuapp.com/tags/${id}`,requestOptions)
    .then((response) => {
      return "success"

    })
    
  }
  const clearNotifications =(id)=>{

    const notifcations ={unreadComment:0,unreadLike:0}

    axios
    .put(`https://dt-back-end.herokuapp.com/tags/${id}`,notifcations)
    .then(response=>{
    })
  }

  const context = {
    setUser,
    user,
    setPictures,
    pictures,
    setTags,
    tags,
    setCurrentPicture,
    currentPicture,
    setCurrentTag,
    currentTag,
    setComments,
    comments,
    setCount,
    count,
    setPost,
    post,
    setReply,
    reply,
    setToggle,
    toggle,
    setFilteredTagsArr,
    filteredTagsArr,
    setFilteredLocationsArr,
    filteredLocationsArr,
    setTitle,
    title,
    setDescription,
    description,
    setComment,
    comment,
    setNewReplies,
    newReplies,

    getPictures,
    getCurrentPicture,
    getTags,
    getTagById,
    getComments,
    loadUser,
    handleReply,
    setCurrentToggleState,
    handlePost,
    handleComment,
    editComment,
    deleteComment,

    renderReplies,
    setRenderReplies,
    clearNotifications,
    deleteTag,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
export default ContextProvider;
