import React, { useEffect, useState } from "react";

const RedditLinkSidebar = ({ func }) => {
  const [apiRedditLinks, setApiRedditLinks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState([]);

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

  const redditLinkHandler = (item, index) => {
    setSelectedIndex(index)
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/scrapper/pages/${item.link}`
        );
        const data = await response.json();

        await func(data)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  };

  return (
    <div id="sidebar">
      <h3>Scrollable Sidebar</h3>
      <ul className="list-group">
        {apiRedditLinks.map((item, index) => (
          <li
            key={index}
            className={index === selectedIndex ? "list-group-item active" : "list-group-item"}
            onClick={() => redditLinkHandler(item, index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedditLinkSidebar;
