import React, { useContext, useEffect } from "react"
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"
import { useHistory } from "react-router"


// userSpecific data lines 11-12 and .map() lines 32-35
export const ArticleList = () => {
    const { articles, getArticles } = useContext(ArticleContext)
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    const userArticles = articles.filter(articles => currentUserId === articles.userId)
    const history=useHistory()

  

    useEffect(() => {
        // console.log("ArticleList: useEffect")
        getArticles()
    }, [])

    return (
        <>
        <div className="articles">

        {/* step 2 "in return" add button */}
            <button className="addButton" onClick={() => {history.push("/articles/create")}}>
            "New Article"
            </button>

            {/* step1 in "return" below */}
            {
                userArticles.map(article => {
                    return <ArticleCard key={article.id} article={article} />
                })
            }
        </div>
        </>
    )
}