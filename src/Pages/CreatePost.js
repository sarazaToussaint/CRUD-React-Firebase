import React, { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input type="text" placeholder="Title..."
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
        <button type="button">Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost;
