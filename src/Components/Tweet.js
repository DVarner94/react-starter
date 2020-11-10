import React from 'react';

const Tweet = ({ author, message }) => {
    return (
        <div className="tweet">
            <h2>Name: {author}</h2>
            <h3>Message: {message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>
    );
};

export default Tweet;