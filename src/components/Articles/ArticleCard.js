import React from "react"
// import { Link } from "react-router-dom"
import "./Article.css"
// import { ArticleList } from "./ArticleList"

export const ArticleCard = ( { articles }) => (
    <section className="articleCard">
        <h3 className="articleName"> Name: {articles.name}</h3>
        <h3 className="articleUrl"> url: {articles.url}</h3>
        <h3 className="articleTitle"> Title: {articles.title}</h3>
        <h3 className="articleSynopsis"> Synopsis: {articles.synopsis}</h3>
        <h3 className="articleTime"> Time: {articles.timeStamp}</h3>
    </section>
)