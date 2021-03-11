import React, { useContext } from "react"
// import { Link } from "react-router-dom"
import "./Article.css"
import { ArticleContext } from "./ArticleProvider"
import { useHistory } from "react-router-dom"


export const ArticleCard = ({ article }) => {

    const { deleteArticle }=useContext(ArticleContext)

    const history = useHistory()

    const handleRelease = () => {
        deleteArticle(article.id)
        .then(() => {
            history.push("/articles")
        })
    }
    
    return (
    <section className="articleCard">
        <h3 className="articleTitle"> Title: {article.title}</h3>
        <div className="articleUrl"> Url: {article.url}</div>
        <div className="articleSynopsis"> Synopsis: {article.synopsis}</div>
        <div className="articleTime"> Time: {article.timeStamp}</div>
        <button onClick={handleRelease}>Delete Article</button>
    </section>
)
    
    }