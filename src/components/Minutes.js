import React from "react"

const coffeeCupEmoji = "☕️"
const bentoBoxEmoji =  "🍱"

function Minutes({minutes}) {

    function renderEmojis() {
        let quotient
        let remainer

        if (minutes <= 30 ) {
            quotient = parseInt(parseInt(minutes) / 5)
            remainer = minutes % 5    
            if (remainer > 0) {
                return coffeeCupEmoji.repeat(quotient+1)
            } else {
                return coffeeCupEmoji.repeat(quotient)
            }
        } else {
            quotient = parseInt(parseInt(minutes) / 10)
            remainer = minutes % 10    
            if (remainer > 0) {
                return bentoBoxEmoji.repeat(quotient+1)
            } else {
                return bentoBoxEmoji.repeat(quotient)
            }
        }
    }

    const showEmojis = renderEmojis()

    return (
        <small>{" | " + showEmojis + minutes +" min to read"}</small>
        
    )
}


export default Minutes