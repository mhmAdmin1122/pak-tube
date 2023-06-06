'use client'
import React, { useEffect, useState } from 'react';

const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-06-05&to=2023-06-05&sortBy=popularity&apiKey=060b4b10339f4b739d6f5ebd613519a2');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>

    </div>
  );
};

export default News;





