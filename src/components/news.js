import React, { useState, useEffect } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = "701c34ddf4514fd68572239183716cad";
    const fetchData = async () => {
      const apiUrl = `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${apiKey}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.log(`Failed to fetch data: ${response.statusText}`);
      }
      const parsedData = await response.json();
      setArticles(parsedData.articles);
      console.log(parsedData.articles);
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
