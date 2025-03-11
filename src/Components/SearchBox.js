import React from 'react';

const SearchBox = ({ searchChange }) => {  // ✅ Correct object destructuring
    return (
        <div className={'pa2 pb5'}>
            <input
                className={'pa3 ba b--green bg-light-blue tc'}
                type={'search'}
                placeholder={'Search Robot'}
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
