import React from 'react'

const EmojiGrid = ({ emoji }) => {
    return (
        <div className="flex justify-center items-center rounded-xl text-4xl">
            {emoji}
        </div>
    )
}

export default EmojiGrid