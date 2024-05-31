'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';

import Questions from './components/questions';

import styles from './page.module.css';


export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [firstq, setFirstq] = useState(true);
  const [secondq, setSecondq] = useState(false);
  const [thirdq, setThirdq] = useState(false);
  const [fourthq, setFourthq] = useState(false);
  const [fifthq, setFifthq] = useState(false);

  function disableFirstQ() {
    setFirstq(false);
    setSecondq(true);
  }

  function disableSecondQ() {
    setSecondq(false);
    setThirdq(true);
  }

  function disableThirdQ() {
    setThirdq(false);
    setFourthq(true);
  }

  function disableFourthQ() {
    setFourthq(false);
    setFifthq(true);
  }

  function disableFifthQ() {
    setFifthq(false);
  }

  return (
    <div className={`container ${styles.chatContainer}`}>
        {firstq && (
          
          <Form onSubmit={disableFirstQ} className="mb-3">
            <Questions 
              title = "shooting"
              src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZzbDFvemN2MjBzdzNhN3VtZ2hjYTMxNjh5Y3E3dHVoeTBzYzE1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y1MnfWIvQUIXq6Apia/giphy.gif"
            />
          </Form>
        )}

        {secondq && (
          <Form onSubmit={disableSecondQ}>
            <Questions 
              title = "passing"
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxidGV1NG55NW1pa24zNGdiMzEzMWw2NzR3ODRwcGllc3c2ZTR2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vnopV0LmQp9OFV9ibX/giphy.gif" 
            />
          </Form>
        )}

        {thirdq && (
          <Form onSubmit={disableThirdQ} className="mb-3">
            <Questions
              title = "dribbling"
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FjbnR3aXdpdnVvaGY2eXAzOXFjemdueGZ1MnJ2OWc5b3lhMTBhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k5fpeWhuGsQhEEOinT/giphy-downsized-large.gif" 
            />
          </Form>
        )}

        {fourthq && (
          <Form onSubmit={disableFourthQ} className="mb-3">
            <Questions
              title = "speed"
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHk5bm0waGhuemhiMW45dHdnZGpmNHQ5NGZjeDFwMWl1czNnZGN1biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H7WGljzHQmOY132mSi/giphy.gif" 
            />
          </Form>
        )}

        {fifthq && (
          <Form onSubmit={disableFifthQ} className="mb-3">
            <Questions
              title = "play style"
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxidGV1NG55NW1pa24zNGdiMzEzMWw2NzR3ODRwcGllc3c2ZTR2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vnopV0LmQp9OFV9ibX/giphy.gif" 
            />
          </Form>
        )}

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