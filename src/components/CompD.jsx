import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import fetchReducer, { initialState } from "../reducers/fetchReducer";

const CompD = () => {
  // const [posts, setPosts] = useState({});

  const [myPosts, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {

    const getPosts = (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
         dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    })(); //call iteself

  }, []);

  return (
    <div>
      <h2>Comp D</h2>
      <div>
        myPost <br/>
        {myPosts.loading ? "Loading..." : myPosts.posts.title}
        {myPosts.error ? myPosts.error : null}
      </div>
    </div>
  );
};

export default CompD;
