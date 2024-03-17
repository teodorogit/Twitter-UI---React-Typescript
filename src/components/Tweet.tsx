import React from 'react'
import './Tweet.css'
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import {Link} from 'react-router-dom'

interface TweetProps{
  content:string
}
const Tweet = (props:TweetProps) => {
  return (
    <Link to="/status" className='tweet'>
      <img src="https://github.com/teodorogit.png" alt="matheus-image" />
      <div className="tweet_content">
        <div className="tweet_content_header">
          <strong>Matheus Teodoro</strong>
          <span>@matheus_teodoro</span>
        </div>
          <p>{props.content} </p>
        <div className="tweet_content_footer">
          <button type="button"><ChatCircle/> 20</button>
          <button type="button"><ArrowsClockwise/> 20</button>
          <button type="button"><Heart/> 20</button>
        </div>
      </div>
    </Link>
  )
}

export default Tweet
