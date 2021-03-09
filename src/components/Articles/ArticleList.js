import React, { useContext, useEffect } from "react"
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"

export const ArticleList = () => {
    const { articles, getArticles } = useContext(ArticleContext)

    useEffect(() => {
        console.log("ArticleList: useEffect")
        getArticles()
    }, [])

    return (
        <>
        <div className="articles">
            {
                articles.map(article => {
                    return <ArticleCard key={article.id} article={article} />
                })
            }
        </div>
        </>
    )
}