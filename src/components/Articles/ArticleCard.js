import React, { useContext, useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import "./Article.css"
import { ArticleContext } from "./ArticleProvider"
import { useHistory, useParams } from "react-router-dom"


export const ArticleCard = ({ article }) => {
    // line 10 is being used on line 38 for the "Edit"... useEffect, useState, useParams not needed here for 
    const history = useHistory()
        
    // const [article, setArticle] = useState({})
    
    // const {articleId } = useParams
    
    const { deleteArticle, getArticlebyId} = useContext(ArticleContext)
             
    // useEffect(() => {
    //     getArticlebyId(articleId)
    //     .then((response) => {
    //         setArticle(response)
    //     })
    // })
    
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
        <button onClick={() => history.push(`/articles/edit/${article.id}`)}>Edit Article</button>
        <button onClick={handleRelease}>Delete Article</button>
    </section>
)
    
    }