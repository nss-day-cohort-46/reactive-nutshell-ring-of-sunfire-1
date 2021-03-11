import React, { useContext, useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import "./Article.css"
import { ArticleContext } from "./ArticleProvider"
import { useHistory, useParams } from "react-router-dom"

const history = useHistory()

const [article, setArticle] = useState({})

const {articleId } = useParams

const { getArticlebyId, deleteArticle } = useContext(ArticleContext)

const ArticleDetail = () = {

   useEffect(() => {
       getArticlebyId(article)
    })   
    
            const handleClickEditEvent = () => {
                getArticlebyId(article)
                .then()
    
            }
   
}


export const ArticleCard = ({ article }) => {


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
        <button onClick={handleClickEditEvent}>Edite Article</button>
        <button onClick={handleRelease}>Delete Article</button>
    </section>
)
    
    }