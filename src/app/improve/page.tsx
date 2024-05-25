'use client';

import { useChat } from 'ai/react';
import Rating from '@mui/material/Rating'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [firstq, setFirstq] = useState(true);
  const [secondq, setSecondq] = useState(false);
  const [thirdq, setThirdq] = useState(false);
  const [fourthq, setFourthq] = useState(false);
  const [fifthq, setFifthq] = useState(false);
  function disableFirstQ (){
    setFirstq(false);
    setSecondq(true);
  } 
  function disableSecondQ (){
    setSecondq(false);
    setThirdq(true);
  } 
  function disableThirdQ (){
    setThirdq(false);
    setFourthq(true);
  }
  function disableFourthQ (){
    setFourthq(false);
    setFifthq(true);
  }
  function disableFifthQ (){
    setFifthq(false);
  }

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">

        {firstq && <form onSubmit={disableFirstQ}>
            <h1>Rate your shooting from 0 to 10</h1>
            <Rating precision = {0.5} name="customized-10" defaultValue={0} max={10} />
            <Button type='submit'>Next</Button>
        </form>}

        {secondq && <form onSubmit={disableSecondQ}>
            <h1>Rate your passing from 0 to 10</h1>
            <Rating precision = {0.5} name="customized-10" defaultValue={0} max={10} />
            <Button type = 'submit'>Next</Button>            
        </form>}
        {thirdq && <form onSubmit={disableThirdQ}>
            <h1>Rate your dribbling from 0 to 10</h1>
            <Rating precision = {0.5} name="customized-10" defaultValue={0} max={10} />
            <Button type = 'submit'>Next</Button>            
        </form>}
        {fourthq && <form onSubmit={disableFourthQ}>
            <h1>Rate your speed from 0 to 10</h1>
            <Rating precision = {0.5} name="customized-10" defaultValue={0} max={10} />
            <Button type = 'submit'>Next</Button>            
        </form>}
        {fifthq && <form onSubmit={disableFifthQ}>
            <h1>Summarize your play style</h1>
            <input placeholder = "Summary"/>
            <Button type = 'submit'>Next</Button>            
        </form>}
        
        {messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
                {/* {m.role === 'user' ? 'User: ' : 'AI: '} */}
                {m.content}
            </div>
        ))}
        <form onSubmit={handleSubmit}>
            <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            />
        </form>
    </div>
  );
}
