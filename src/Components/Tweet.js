import React from 'react';

const Tweet = (props) => {
    return (
        <div className="tweet">
            <h2>Name: {props.author}</h2>
            <h3>Message: {props.message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>
    );
};

export default Tweet;