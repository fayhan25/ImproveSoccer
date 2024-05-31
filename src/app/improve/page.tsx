'use client';

import { useChat } from 'ai/react';
import { useState } from 'react';

import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Card from 'react-bootstrap/Card'

import Image from 'next/image';

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
            <Card className="text-center">
            <Card.Title><h4 className="font-bold text-large">Rate your shooting from 0 to 10</h4></Card.Title>
            <div className={styles.carouselImageContainer}>
              <Image 
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjZzbDFvemN2MjBzdzNhN3VtZ2hjYTMxNjh5Y3E3dHVoeTBzYzE1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y1MnfWIvQUIXq6Apia/giphy.gif" 
                alt='Shooting image' 
                layout="fill" 
                objectFit="cover"
                quality={100}
              />
            </div>

            <Rating precision={0.5} name="customized-10" defaultValue={0} max={10} />
            <Button type="submit" className="mt-3">Next</Button>
            </Card>
          </Form>
        )}

        {secondq && (
          <Form onSubmit={disableSecondQ} className="mb-3">
            <Card className="text-center">
            <Card.Title>Rate your passing from 0 to 10</Card.Title>
            <div className={styles.carouselImageContainer}>
              <Image 
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxidGV1NG55NW1pa24zNGdiMzEzMWw2NzR3ODRwcGllc3c2ZTR2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vnopV0LmQp9OFV9ibX/giphy.gif" 
                alt='Passing image' 
                layout="fill" 
                objectFit="cover"
                quality={100}
              />
            </div>
            <Rating precision={0.5} name="customized-10" defaultValue={0} max={10} />
            <Button type="submit" className="mt-3">Next</Button>
            </Card>
          </Form>
        )}

        {thirdq && (
          <Form onSubmit={disableThirdQ} className="mb-3">
            <Card className="text-center">
            <Card.Title>Rate your dribbling from 0 to 10</Card.Title>
            <div className={styles.carouselImageContainer}>
              <Image 
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2FjbnR3aXdpdnVvaGY2eXAzOXFjemdueGZ1MnJ2OWc5b3lhMTBhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k5fpeWhuGsQhEEOinT/giphy-downsized-large.gif" 
                alt='Dribbling image' 
                layout="fill" 
                objectFit="cover"
                quality={100}
              />
            </div>
            <Rating precision={0.5} name="customized-10" defaultValue={0} max={10} />
            <Button type="submit" className="mt-3">Next</Button>
            </Card>
          </Form>
        )}

        {fourthq && (
          <Form onSubmit={disableFourthQ} className="mb-3">
            <Card className="text-center">
            <Card.Title>Rate your speed from 0 to 10</Card.Title>
            <div className={styles.carouselImageContainer}>
              <Image 
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG5ocGl2ZThiZGZmdnFmcDc2YWZybXZxbXF0MHR4NXd1aXJyNXcxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2t9oQRS8lBgVZCard.TitleE0t/giphy.gif" 
                alt='Passing image' 
                layout="fill" 
                objectFit="cover"
                quality={100}
              />
            </div>
            <Rating precision={0.5} name="customized-10" defaultValue={0} max={10} />
            <Button type="submit" className="mt-3">Next</Button>
            </Card>
          </Form>
        )}

        {fifthq && (
          <Form onSubmit={disableFifthQ} className="mb-3">
            <Card className="text-center">
            <Card.Title>Summarize your play style</Card.Title>
            <div className={styles.carouselImageContainer}>
              <Image 
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGxidGV1NG55NW1pa24zNGdiMzEzMWw2NzR3ODRwcGllc3c2ZTR2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vnopV0LmQp9OFV9ibX/giphy.gif" 
                alt='Passing image' 
                layout="fill" 
                objectFit="cover"
                quality={100}
              />
            </div>
            <Form.Control type="text" placeholder="Summary" className="mb-3" />
            <Button type="submit">Next</Button>
            </Card>
          </Form>
        )}

        <div className="mt-5">
          {messages.map((m) => (
            <div key={m.id}>
              {m.content}
            </div>
          ))}
        </div>

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