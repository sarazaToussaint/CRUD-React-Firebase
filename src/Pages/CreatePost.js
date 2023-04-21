import React from 'react'

const CreatePost = () => {
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input type="text" placeholder="Title..." />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea placeholder="Post..." />
        </div>
        <button type="button">Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost;
