'use client';

import { useChat } from 'ai/react';
import { useState, useCallback } from 'react';

import Form from 'react-bootstrap/Form';

import Questions from './components/questions';

import styles from './page.module.css';


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
let el = [];

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [currentQuestion, setCurrentQuestion] = useState(0);


  const handleNextQuestion = (event:any) => {
    event.preventDefault();
    setCurrentQuestion(prev => prev + 1);
  }

  let playStyles = Array.from(ratingsMap.keys());
  let myRatings = Array.from(ratingsMap.values());
  let statsArr = []
  for (let i= 0; i<playStyles.length; i++){
    statsArr[i] = playStyles[i] +": "+ myRatings[i] 
  }
  return (
    <div className={`container ${styles.chatContainer}`}>
{      currentQuestion < questions.length ? <Form onSubmit={handleNextQuestion} className="mb-3">
          <Questions 
            title={questions[currentQuestion].title}
            src={questions[currentQuestion].src}
            ratingsMap = {ratingsMap}
          />
        </Form>:
        <div>
          <ul>
            {statsArr.map((myStyles) => (                    
              <li>{myStyles}</li> 
            ))}
          </ul>          
        </div>}
      

        {/* <div className="mt-5">
          {messages.map((m) => (
            <div key={m.id}>
              {m.content}
            </div>
          ))}
        </div> */}

        {/* <Form onSubmit={handleSubmit} className="fixed-bottom p-3 bg-light border-top">
          <Form.Control
            className="w-100 p-2"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </Form> */}
    </div>
  );
}