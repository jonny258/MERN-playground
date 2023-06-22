import React, { useEffect, useState } from "react";

const RedditLinkSidebar = () => {
  const [apiRedditLinks, setApiRedditLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/scrapper/links");
        const data = await response.json();
        setApiRedditLinks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const redditLinkHandler = (item) => {
    console.log(item);
  };

  return (
    <div id="sidebar">
      <h3>Scrollable Sidebar</h3>
      <ul className="list-group">
        {apiRedditLinks.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => redditLinkHandler(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedditLinkSidebar;
