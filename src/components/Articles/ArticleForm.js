import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import { useHistory } from 'react-router-dom';
import "./Article.css"


export const ArticleForm = () => {
    const { addArticles, articles, getArticles, } = useContext(ArticleContext)
    // const {articles, getArticles} = useContext(ArticleContext)

    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))    

    const [article, setArticle] = useState({

        userID: currentUserId,
        url: "",
        title: "",
        synopsis: "",
        date: "",
        // time: getTime()
    });

    useEffect(() => {
        getArticles()
    }, [])

    const history = useHistory();

    // line 25 is a function for when someone types into the form
    const handleControlledInputChange = (event) => {
        // console.log("Event", event)

        const newArticle = {...article}
        // console.log("newArticle", newArticle)

        let selectedVal = event.target.value
            console.log(selectedVal)

            if (event.target.id.includes("Id")) {
                selectedVal = parseInt(selectedVal)
            }

            newArticle[event.target.id] = selectedVal
            setArticle(newArticle)
    }
    
    const handleClickSaveArticle = (event) => {
        event.preventDefault() 
        
             addArticles(article)
            .then(() => history.push("/articles"))
        
    }
    
    // in the "return" we have the actual form that will render to the Dom
    return (
        <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="url">Article URL:</label>
                    <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="formControl" placeholder="Article url" value={articles.url}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Article Title: </label>
                    <input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="formControl" placeholder="Article Title" value={articles.title}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="synopsis">Article Synopsis: </label>
                    <input type="textarea" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="formControl" placeholder="Article Synopsis" value={articles.synopsis}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Article Date: </label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="formControl" placeholder="" value={articles.timeStamp}/>
                </div>
            </fieldset>
                <button className="saveArticle" onClick={handleClickSaveArticle}>
                "Save Article"
                </button>
        </form>
    )
}


// "userId": 1,
// "url": "https://sussexroyal.com/",
// "title": "Duke and Duchess of Sussex",
// "synopsis": "Overview of awesome royals and their foundation",
// "timeStamp":