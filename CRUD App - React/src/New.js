import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
function New(Props) {
  let [newsdata, setnewsdata] = useState([]);

  useEffect(() => {
    let res = axios.get(
      `https://newsapi.org/v2/everything?q=${Props.category} &language=hi&apiKey=a53f9d592bcb4b328768abfedcdcbf8b`
    );
    res.then((pro) => {
      // console.log(pro.data.articles);
      setnewsdata(pro.data.articles);
    });
  }, [Props.category]);

  return (
    <>
      {newsdata ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {newsdata.map((item) => {
            return (
              <NewsItem
                title={item.title}
                dec={item.description}
                idata={item.urlToImage}
                url={item.url}
              />
            );
          })}
        </div>
      ) : (
        <p>No data</p>
      )}
    </>
  );
}

export default New;
