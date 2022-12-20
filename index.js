import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {IoHeart, IoHeartOutline} from 'react-icons/io5';

function Star(props){
    return(
        <div className='star'>
            {props.isLiked ? 
                <IoHeart
                    size='32'
                    color='#eb3068'
                    onClick={props.handleClick}
                /> :
                <IoHeartOutline
                    size='32'
                    color='#808080'
                    onClick={props.handleClick}
                />
            }
        </div>
    )
}

function Card (){
    const [user, setUser]= React.useState({
        firstName: 'John',
        lastName: 'Doe',
        contact: '0990898201',
        email: 'johndoe@gmail.com',
        isLiked: false
    })

    function toggleLike(){
        setUser((profile)=>{
            return {
                ...profile,
                isLiked: !profile.isLiked
            }
        })
    }

    return(
        <div className='card'>
            <div className='card--image-div'>
                <img
                    className='card--image'
                    src='https://www.kindpng.com/picc/m/24-248729_stockvader-predicted-adig-user-profile-image-png-transparent.png'
                    alt=''
                    />
            </div>
            <div className='card--info'>
                <Star
                    isLiked = {user.isLiked}
                    handleClick={toggleLike}/>
                <h2>{user.firstName} {user.lastName}</h2>
                <p>{user.contact}</p>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

function App (){
    return (
        <div>
           <Card/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));