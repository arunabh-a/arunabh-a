import React from 'react'

const Loading = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
                <div className="w-6 h-6 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
                <div className="w-6 h-6 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
            </div>
        </div>
    )
}

export default Loading