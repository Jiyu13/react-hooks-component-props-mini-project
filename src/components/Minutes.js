import React from "react"

const coffeeCupEmoji = "☕️"
const bentoBoxEmoji =  "🍱"

function Minutes({minutes}) {

    function renderEmojis() {
        let quotient
        let remainder

        if (minutes <= 30 ) {
            quotient = parseInt(parseInt(minutes) / 5)
            remainder = minutes % 5    
            if (remainder > 0) {
                return coffeeCupEmoji.repeat(quotient+1)
            } else {
                return coffeeCupEmoji.repeat(quotient)
            }
        } else {
            quotient = parseInt(parseInt(minutes) / 10)
            remainder = minutes % 10    
            if (remainder > 0) {
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
