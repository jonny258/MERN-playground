import React, { useState } from "react";
import RedditLinkSidebar from "../components/redditLinkSidebar";

function RedditPage() {
  const [redditPosts, setRedditPosts] = useState([]);

  const renderPosts = () => {
    return redditPosts.map((post, index) => (
      <a key={index} href={post.cardLink}>
        <div className="alert alert-info">{post.cardTitle}</div>
      </a>
    ));
  };

  const pullData = (data) => {
    setRedditPosts(data);
  };

  return (
    <>
      <RedditLinkSidebar func={pullData} />
      <div className="reddit-posts">
        <h2>Posts</h2>
        {redditPosts.length !== 0 ? (
          renderPosts()
        ) : (
          <div>Please select a sub</div>
        )}
      </div>
    </>
  );
}

export default RedditPage;
