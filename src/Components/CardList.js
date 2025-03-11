import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {  // ✅ Accept robots as a prop
    return (
        <div>
            {robots.length > 0 ? (
                robots.map((user, i) => (
                    <Card
                        key={i}
                        id={user.id}
                        name={user.name}
                        username={user.username}
                        email={user.email}
                    />
                ))
            ) : (
                <h2 style={{color: 'white'}}>No robots found</h2>
                // ✅ Show message if no results match
            )}
        </div>
    );
};

export default CardList;
