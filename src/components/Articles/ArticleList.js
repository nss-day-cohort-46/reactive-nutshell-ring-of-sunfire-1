import React, { useContext, useEffect } from "react"
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"
import { useHistory } from "react-router"

export const ArticleList = () => {
    const { articles, getArticles } = useContext(ArticleContext)
    const history=useHistory()

    useEffect(() => {
        console.log("ArticleList: useEffect")
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
                articles.map(article => {
                    return <ArticleCard key={article.id} article={article} />
                })
            }
        </div>
        </>
    )
}