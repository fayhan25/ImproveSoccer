'use client';

import { useChat } from 'ai/react';
import { useState, useCallback, useEffect } from 'react';

import Form from 'react-bootstrap/Form';

import Questions from './components/questions';

import styles from './page.module.css';
import Button from 'react-bootstrap/Button';

const questions = [
  {
    title: "shooting",
    src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZzbDFvemN2MjBzdzNhN3VtZ2hjYTMxNjh5Y3E3dHVoeTBzYzE1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y1MnfWIvQUIXq6Apia/giphy.gif"
  },
  {
    title: "passing",
    src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxidGV1NG55NW1pa24zNGdiMzEzMWw2NzR3ODRwcGllc3c2ZTR2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vnopV0LmQp9OFV9ibX/giphy.gif"
  },
  {
    title: "dribbling",
    src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FjbnR3aXdpdnVvaGY2eXAzOXFjemdueGZ1MnJ2OWc5b3lhMTBhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k5fpeWhuGsQhEEOinT/giphy-downsized-large.gif"
  },
  {
    title: "speed",
    src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHk5bm0waGhuemhiMW45dHdnZGpmNHQ5NGZjeDFwMWl1czNnZGN1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H7WGljzHQmOY132mSi/giphy.gif"
  },
  {
    title: "play style",
    src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxidGV1NG55NW1pa24zNGdiMzEzMWw2NzR3ODRwcGllc3c2ZTR2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vnopV0LmQp9OFV9ibX/giphy.gif"
  }
];

let ratingsMap = new Map();
ratingsMap.set("shooting", 0);
ratingsMap.set("passing", 0);
ratingsMap.set("dribbling", 0);
ratingsMap.set("speed", 0);
ratingsMap.set("play style", "");


export default function Chat() {
  // const myElement = document.getElementById("button");
  const myForm =  document.getElementById("allForm");
  const { messages, input, setInput, handleInputChange, handleSubmit } = useChat();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [statsArr, setStatsArr] = useState(['Make me soccer recommandations assuming i have these values out of 10. Give me tips like which position i should play, and youtoube videos from unisport on how to improve my lower skills: ']);


  const handleNextQuestion = (event:any) => {
    handleSubmit
    event.preventDefault();
    setCurrentQuestion(prev => prev + 1);
  }
  

  let playStyles = Array.from(ratingsMap.keys());
  let myRatings = Array.from(ratingsMap.values());
 
  for (let i= 1; i<playStyles.length; i++){
   statsArr[i] = playStyles[i] +": "+ myRatings[i] 
  }

  // if (myElement === null && currentQuestion > questions.length){
  //   alert('oops');
  // }
  // else if (currentQuestion == questions.length-1 && myElement!=null){
  //   useEffect(() => {
  //     myElement.click()
  //   }, []);
  // }
  let myInput = 'Make me soccer recommandations assuming i have these values out of 10. Give me tips like which position i should play, and youtoube videos from unisport on how to improve my lower skills: ' + statsArr;
  
  const setMyInput = () => {
    setInput(myInput)
  }

  return (
    <div className={`container ${styles.chatContainer}`}>
        <div className="mt-5">
          {messages.map((m) => (
            <div key={m.id}>
              {m.content}
            </div>
          ))}
        </div>

      {currentQuestion < questions.length ? <Form onSubmit= {handleNextQuestion} className="mb-3">
          <Questions 
            title={questions[currentQuestion].title}
            src={questions[currentQuestion].src}
            ratingsMap = {ratingsMap}
          />
        </Form>:
        
        <form name = "allForm" onSubmit={handleSubmit}>
          <input
            className="w-100 p-2"
            value={input}
            onChange={handleInputChange}
            type='submit'
          />        
          <button onClick= {setMyInput} type='submit'>Query AI</button>
        </form>
        }
    </div>
  );
}