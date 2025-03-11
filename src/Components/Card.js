import React from 'react'

const Card = ({name, username, email, id}) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img alt= 'Robo' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                {/*<img src={props.img} alt='' width='200' height='200'/>*/}
                <h2> Name : {name}</h2>
                <h4>Username : {username}</h4>
                <p> Email : {email}</p>
            </div>
        </div>
    )
}
export default Card
