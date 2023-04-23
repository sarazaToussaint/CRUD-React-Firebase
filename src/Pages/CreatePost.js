import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title, 
      postText, 
      auth: {name: auth.currentUser.displayName, id: auth.currentUser.uid }
    });
    navigate("/");
  };

  useEffect (() => {
    if(!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h2>Create a Post</h2>
        <div className="inputGp">
          <label>Title:</label>
          <input type="text" placeholder="Title"
           onChange={(e) => {
            setTitle(e.target.value);
            }}/>
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea placeholder="Post..."
           onChange={(e) => {
            setPostText(e.target.value);
            }}/>
        </div>
        <button type="button" onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost;
