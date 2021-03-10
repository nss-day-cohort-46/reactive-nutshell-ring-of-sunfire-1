import React from "react"
// import { Link } from "react-router-dom"
import "./Article.css"
// import { ArticleList } from "./ArticleList"

export const ArticleCard = ({ article }) => (
    <>
    
    <section className="articleCard">
        <h3 className="articleTitle"> Title: {article.title}</h3>
        <div className="articleUrl"> Url: {article.url}</div>
        <div className="articleSynopsis"> Synopsis: {article.synopsis}</div>
        <div className="articleTime"> Time: {article.timeStamp}</div>
    </section>
    
    </>
)