import React from "react"
import Article from "./Article"

function ArticleList({posts}) {
    const postsList = posts.map((post) => {
        return <Article title={post.title}
                        date={post.date}
                        preview={post.preview}
                        key={post.id}/>
    })

    return (
        <main>
            {postsList}
        </main>
    )
}

export default ArticleList