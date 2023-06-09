import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from "../firebase";

const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  useEffect (() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    
    getPosts();
    
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id );
    await deleteDoc(postDoc);
  }

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.auth.id === auth.currentUser.uid && (
                 <button type="button"
                  className="trashBtn"
                  onClick={() => {
                  deletePost(post.id);
                  }}
                  > &#128465;
                  </button>
                  )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.auth.name}</h3>
          </div>
        );
      })};
    </div>
  )
}

export default Home;
