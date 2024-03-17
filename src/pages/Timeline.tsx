import { FormEvent, useState } from 'react'
import Separator from '../components/Separator'
import { Header } from '../components/Header'
import Tweet from '../components/Tweet'
import './Timeline.css'
  

const Timeline = () => {
  const [newTweet,setNewTweet] = useState('');
  const [tweets,setTweets] = useState([
      'meu primeiro tweet',
      'teste tweeter',
      'deu certo tweetar'
    ])

    function createNewTweet(event:FormEvent) {
    event.preventDefault();

    setTweets([...tweets,newTweet])
    setNewTweet('')
  }
  return (
    <main className="timeline">
          <Header title='Home'/>
          <form  onSubmit={createNewTweet} className='new_tweet_form'>
            <label htmlFor='tweet'>
              <img src="https://github.com/teodorogit.png" alt="Matheus Teodoro" />
              <textarea id='tweet'
               placeholder='Whats happening?'
               value={newTweet}
               onChange={(event) => {
                setNewTweet(event.target.value)
               }}/>
            </label>
            <button type="submit">Tweet</button>
          </form>
          <Separator/>

          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet}/>
          })}

        </main>
  )
}

export default Timeline
