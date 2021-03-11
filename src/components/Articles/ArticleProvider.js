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

return (
    <ArticleContext.Provider value={{
        articles, getArticles, addArticles, deleteArticle
    }}>
        {props.children}
    </ArticleContext.Provider>
)

}