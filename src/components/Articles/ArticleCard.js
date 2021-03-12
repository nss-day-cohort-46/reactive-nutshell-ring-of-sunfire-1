import React, { useContext } from "react"
// import { Link } from "react-router-dom"
import "./Article.css"
import { ArticleContext } from "./ArticleProvider"
import { useHistory} from "react-router-dom"


export const ArticleCard = ({ article }) => {
    // line 10 is being used on line 38 for the "Edit"... useEffect, useState, useParams not needed here for edit button. More code entered on form component
    const history = useHistory()
        
  
    
    const { deleteArticle, getArticlebyId} = useContext(ArticleContext)
             
       
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
        <div className="articleDate">Date: {article.date}</div>
                <button onClick={() => history.push(`/articles/edit/${article.id}`)}>Edit Article</button>
        <button onClick={handleRelease}>Delete Article</button>
    </section>
)
    
    }