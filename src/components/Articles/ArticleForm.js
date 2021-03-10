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
        date: ""
    });

    useEffect(() => {
        getArticles()
    }, [])

    const history = useHistory();

    // line 25 is a function for when someone types into the form
    const handleConstrolledInputChage = (event) => {
        const newArticle = {...article}
        let selectedVal = event.target.value

            if (event.target.id.includes("Id")) {
                selectedVal = parseInt(selectedVal)
            }

            newArticle[event.target.id] = selectedVal
            setArticle(newArticle)
    }
    
    const handleClickSaveArticle = (event) => {
        event.preventDefault() 
        
        const userId = articles.userId
        
        if (userId === 0) {
            window.alert("Please select user")
        } else {
            addArticles(articles)
            .then(() => history.push("/articles"))
        }
    }
    
    // in the "return" we have the actual form that will render to the Dom
    return (
        <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
            <filedset>
                <div className="form-group">
                    <label htmlFor="url">Article URL:</label>
                    <input type="text" id="url" onChange={handleConstrolledInputChage} required autoFocus className="formControl" placeholder="Article url" value={articles.url}/>
                </div>
            </filedset>
            <filedset>
                <div className="form-group">
                    <label htmlFor="title">Article Title: </label>
                    <input type="text" id="title" onChange={handleConstrolledInputChage} required autoFocus className="formControl" placeholder="Article Title" value={articles.title}/>
                </div>
            </filedset>
            <filedset>
                <div className="form-group">
                    <label htmlFor="synopsis">Article Synopsis: </label>
                    <input type="textarea" id="synopsis" onChange={handleConstrolledInputChage} required autoFocus className="formControl" placeholder="Article Synopsis" value={articles.synopsis}/>
                </div>
            </filedset>
            <filedset>
                <div className="form-group">
                    <label htmlFor="title">Article Date: </label>
                    <input type="date" id="date" onChange={handleConstrolledInputChage} required autoFocus className="formControl" placeholder="" value={articles.timeStamp}/>
                </div>
            </filedset>
            {/* <filedset>
                <div className="form-group">
                    <label htmlFor="userId">User: </label>
                    <select value={articles.userId} name="user" id="userId" onchange={handleConstrolledInputChage} className="form-control">
                    <option value="0">Select a User</option>
                    {users.map(u => (
                        <option key={u.id} value={u.id}>
                            {u.name}
                        </option>
                    ))}
                    </select>
                </div>
            </filedset> */}
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