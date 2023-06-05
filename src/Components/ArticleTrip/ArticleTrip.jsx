import React from "react";

import "./ArticleTrip.css";

export default function ArticleTrip({ article }) {
  return (
    <>
      <div className="wip-modal">Work in progress</div>
      <div className="article-trip__wrapper">
        <div>{article.title}</div>
        <div>{article.date}</div>
        <div>{article.subtitle}</div>
        <div>{article.description}</div>
        <img src={article.img} alt="" />
      </div>
    </>
  );
}
