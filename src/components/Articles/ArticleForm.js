import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import { useHistory, useParams } from 'react-router-dom';
import "./Article.css"


export const ArticleForm = () => {
    const { addArticles, articles, getArticles, updateArticle, getArticleById } = useContext(ArticleContext)
    // "updateArticle" on line 8 added in for "edit" feature

    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))    

    const [article, setArticle] = useState({

        userID: currentUserId,
        url: "",
        title: "",
        synopsis: "",
        date: "",
        id: ""
        // time: getTime()
    });

    // code below on line 25 and 26  added for "edit" feature
    const [isLoading, setIsLoading] = useState(true)
    const { articleId } = useParams;
    
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
    
    const handleClickSaveArticle = () => {
        // event.preventDefault() ALSO took out event in parameter of line 51
        // This code on line 52-55  was original code before refactored for "EDIT" feature
            //  addArticles(article)
            // .then(() => history.push("/articles"))   

            // Refactored code for "EDIT" feature
            if(article.name === "") {
                window.alert("Please complete all fields")
            }else{
                setIsLoading(true);
                if (articleId) {
                    updateArticle({
                        userId: currentUserId,
                        url: article.url,
                        title: article.title,
                        synopsis: article.synopsis,
                        date: article.date,
                        id: article.id,
                    })
                    .then(() => history.push(`/articles`))
                } else {
                    addArticles(article)
                    .then(() => history.push("/articles"))
            }
    }
}

        useEffect(() => {
            getArticles().then(() => {
                if (articleId) {
                    getArticleById(articleId)
                    .then(article => {
                        setArticle(article)
                        setIsLoading(false)
                    })
                } else {
                    setIsLoading(false)
                }
            })

        }, [])
    
    // in the "return" we have the actual form that will render to the Dom
    return (
        <form className="articleForm">
            {/* <h2 className="articleForm__title">New Article</h2> */}
            <h2 className="articleForm__title">{articleId ? "Edit Article" : "Add Article"}</h2>
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
                {/* <button className="saveArticle" onClick={handleClickSaveArticle}>  "FIRST SAVE BUTTON I DID"*/}
                <button className="SaveEditButton" disabled={isLoading} onClick={event => {
                    event.preventDefault()
                    handleClickSaveArticle()
                }}>
                {articleId ? "Save Article" : "Add Article"}
                </button>
        </form>
        )
    
}
