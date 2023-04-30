/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import './Music.css';



const musicimg = 'https://th.bing.com/th/id/OIP.nYRjrEcySmdAa9LyYu3OjQHaE7?w=279&h=186&c=7&r=0&o=5&pid=1.7'

function Music() {
    return(
        <div className='portfolios'>
        <div className='option music1'>
          <h1>Music</h1>
          <img className="option musicimage" src={musicimg}></img>
          <a href="https://twitter.com/" target="blank">Twitter</a>
        </div>
      </div>
    )
}

export default Music;
