import React from "react"

function ArticleList({posts}) {
    const postsList = posts.map((post) => {
        return <Article post={post} key={post.key}/>
    })

    return (
        <main>
            {postsList}
        </main>
    )
}

export default ArticleList