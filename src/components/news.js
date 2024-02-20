import React, { useState, useEffect } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = "vzHZl1RrPOpJU4e1XsnbwUxLhxbL5Z";
    const fetchData = async () => {
      const apiUrl = `https://newsapi.in/newsapi/news.php?key=${apiKey}&category=afrikaans`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.log(`Failed to fetch data: ${response.statusText}`);
      }
      const parsedData = await response.json();
      setArticles(parsedData.News);
      console.log(parsedData.News);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hey!</h1>
      {articles.map((article, index) => (
        <div key={index}>{article.title}</div>
      ))}
    </div>
  );
};

export default News;
