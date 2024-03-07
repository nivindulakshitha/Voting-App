import React, { useState } from "react";
import "./Card.css";

const Card = ({ player }) => {
    const [votes, setVotes] = useState(player.votes);

    const handleVote = () => {
        setVotes(votes + 1);
    };

    return (
        <div className="card">
            <div className="image-container">
                <img src={player.image} alt={player.name} className="rounded-image" />
            </div>
            <div className="info-container">
                <h3>{player.name}</h3>
                <p>Votes: {votes}</p>
                <button onClick={handleVote}>Vote</button>
            </div>
        </div>
    );
};

export default Card;
