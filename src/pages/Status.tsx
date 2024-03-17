import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"


export const Status =()=> {
  const [newAnswer,setNewAnswer] = useState('');
  const [answers,setAnswers] = useState([
    'concordo...',
    'olha,faz sentido!',
    'parabens pelo projeto'
    ])
    function createNewTweet(event:FormEvent) {
      event.preventDefault();
  
      setAnswers([newAnswer,...answers])
      setNewAnswer('')
    }
    function handleHotKeySubmit(event:KeyboardEvent){
      if (event.key === 'Enter' &&  (event.ctrlKey || event.metaKey)){
        setAnswers([newAnswer,...answers])
        setNewAnswer('')
      }
    }
    return (
        <main className="status">
          <Header title='Tweet'/>
          <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi incidunt vel tempore nesciunt voluptatum, officiis aliquam iste rerum quidem, commodi dolorum! Distinctio dolorum quam ex nam voluptatum fuga fugit nisi.
"/>       <Separator/>
          <form onSubmit={createNewTweet} className='answer_tweet_form'>
            <label htmlFor='tweet'>
              <img src="https://github.com/teodorogit.png" alt="Matheus Teodoro" />
              <textarea id='tweet'
              placeholder='Tweet your answer'
              value={newAnswer}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
                setNewAnswer(event?.target.value)
              }}/>
            </label>
            <button type="submit">
              <PaperPlaneRight/>
              <span>Answer</span></button>
          </form>
      

          {answers.map(answer => {
            return <Tweet key={answer} content={answer}/>
          })}

        </main>
    )
}