'use client';

import { useChat } from 'ai/react';
import { useState, useCallback, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

import Questions from './components/questions';

import styles from './page.module.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { title } from 'process';

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
    title: "your weight",
    src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYW9oZzFicW5paGtidzNobnkzbTNxc3lobTBwcmVvcW1wZW5hazAwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ApD1UsWcVdJXmFLnCP/giphy.gif"
  },
  {
    title: "your height",
    src: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjM5djg5YTV0cDUzcXlqNWdjOG4wbDkyMDRmYmlkZ2hjanlvcGphMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dSdYfe1n62M94t5p5W/giphy-downsized-large.gif"
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
ratingsMap.set("your weight", "");
ratingsMap.set("your height", "")
ratingsMap.set("play style", "");


export default function Chat() {
  const { messages, input, setInput, handleInputChange, handleSubmit } = useChat();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [boolCheck, setBoolCheck] = useState(false);

  const handleNextQuestion = (event:any) => {
    handleSubmit
    event.preventDefault();
    setCurrentQuestion(prev => prev + 1);
  }
  const resetQuestion = () => {
    setCurrentQuestion(0);
  }
  let playStyles = Array.from(ratingsMap.keys());
  let myRatings = Array.from(ratingsMap.values());
 
  let statsArr = [];
  for (let i= 0; i<playStyles.length; i++){
   statsArr[i] = playStyles[i] +": "+ myRatings[i] 
  }

  let myInput = 'Make me soccer recommandations assuming i have these values out of 10, and my weight height and play style. Give me tips like which position i should play, how to improve my lower skills based on these: ' + statsArr;
 
  const setMyInput = () => {
    setInput(myInput)
    setBoolCheck(true)
  }

  return (
    <div className={`container ${styles.chatContainer}`}>
      {currentQuestion >= questions.length && boolCheck && <Card bg = "success" className="text-center" text = 'light'>
        <div className="mt-5">
        <Card.Title>Here are Soccer AI's tips for you</Card.Title>
          {messages.map((m) => (
            <div key={m.id}>
              <Card.Text>{m.role == 'assistant' && m.content}</Card.Text>
            </div>
          ))}
        </div>
      </Card>}    
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
          <div className={styles.endQueries}>
            <ListGroup>
              {statsArr.map( myItem => (
                <ListGroup.Item variant='info'>{myItem}</ListGroup.Item>
              ))}  
            </ListGroup> 
            <div style = {{paddingTop: "3%"}}>     
            <Button onClick= {resetQuestion} type='submit'>Re-Enter stats</Button>
              &nbsp;
            <Button  onClick= {setMyInput} type='submit'>Query AI</Button>  
            </div>  
          </div>
        </form>
        }
    </div>
  );
}