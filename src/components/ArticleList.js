import React from "react"

function ArticleList({posts}) {
    const postsList = posts.map((post) => {
        return <Article post={post}/>
    })

    return (
        <main>
            {postsList}
        </main>
    )
}

export default ArticleList