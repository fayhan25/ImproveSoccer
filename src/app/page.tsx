'use client';
import Image from 'next/image';
import { useChat } from 'ai/react';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


export default function Home() {
  return (
    <div className={styles.container}>
      <header className="bg-dark text-white text-center py-5">
        <h1 className="display-3">Welcome to SoccerAI</h1>
        <p className="lead">Your ultimate soccer companion app</p>
      </header>

      <div className="my-3">
        <Carousel>
          <Carousel.Item>
            <div className={styles.carouselImageContainer}>
              <Image src="/images/soccer1.jpg" layout="fill" objectFit="cover" alt="Soccer Match"  />
            </div>
            <Carousel.Caption>
              <h3>Improve Your Game</h3>
              <p>Get recommendations on how and which position you should play</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselImageContainer}>
              <Image src="/images/soccer2.jpg" alt="Training" layout="fill" objectFit="cover" />
            </div>
            <Carousel.Caption>
              <h3>Training Tips</h3>
              <p>The AI helps you improve your game by recommending specific trainings for your weaknesses.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselImageContainer}>
              <Image src="/images/soccer3.jpg" alt="Team" layout="fill" objectFit="cover" />
            </div>
            <Carousel.Caption>
              <h3>Track Your Progress</h3>
              <p>You can track your progress as you improve and use this app as your soccer diary</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}