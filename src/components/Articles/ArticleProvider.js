import React, { useState, createContext } from "react"

export const EventContext = createContext()

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])
    
        // console.log("Hear me News", getArticles)

    const getArticles = () => {
        return fetch ("http://localhost:8088/articles")
        .then(res => res.json())
        .then(setArticles)
    }

    const addArticles = ArticleObj => {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ArticleObj)
    })
    .then(getArticles)
}

// step 3 add "delete" to delete a card
    const deleteArticle = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
        .then(getArticles)
    }

    // step 4 add "Put" method for "Editing" then add "updateArticle" to line 50
    const updateArticle = article=> {
        // debugger
        return fetch (`http://localhost:8088/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
        .then(getArticles)
    }

    // For Edit function to be used on Article Form
    const getArticleById = (id) => {
        return fetch(`http://localhost:8088/articles/${id}`)
        .then(res => res.json())
        }
return (
    <ArticleContext.Provider value={{
        articles, getArticles, addArticles, deleteArticle, updateArticle, getArticleById
    }}>
        {props.children}
    </ArticleContext.Provider>
)

}