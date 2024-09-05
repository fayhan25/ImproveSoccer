'use client'
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';
import styles from './page.module.css';
import { useAuth } from '@clerk/nextjs';
import { PrismaClient, Prisma } from '@prisma/client'
import useSWR from 'swr'


const Progress = () => {
  const prisma = new PrismaClient()
  const {userId} = useAuth();
  const fetcher = (URL:any )=> fetch(URL).then(r => r.json())
 
  const {data,error} = useSWR('api/getposts',fetcher)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div> 
  console.log("my posts", data.data.posts[0])  
  const userProgress =data.data.posts

  return ( 
    <Container className={styles.progressContainer}>
      <h1 className="text-center mt-4 mb-4">Your Progress Tracker</h1>
 
      {userProgress.map((progress:any, index:any) => (
        <Card key={index} className={`mb-4 ${styles.progressCard}`}>
          <Card.Header as="h5">{progress.date}</Card.Header>
          <Card.Body>
            <Row>
              <Col md={4} className={styles.statCol}>
                <h6>Shooting:</h6>
                <ProgressBar now={progress.shooting * 10} label={`${progress.shooting * 10}%`} />
              </Col>
              <Col md={4} className={styles.statCol}>
                <h6>Passing:</h6>
                <ProgressBar now={progress.passing * 10} label={`${progress.passing * 10}%`} />
              </Col>
              <Col md={4} className={styles.statCol}>
                <h6>Dribbling:</h6>
                <ProgressBar now={progress.dribbling*10} label={`${progress.dribbling * 10}%`} />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4} className={styles.statCol}>
                <h6>Speed:</h6>
                <ProgressBar now={progress.speed * 10} label={`${progress.speed * 10}%`} />
              </Col>
              <Col md={4} className={styles.statCol}>
                <h6>Weight:</h6>
                <ProgressBar now={progress.weight} label={`${progress.weight}`} />
              </Col>
              <Col md={4} className={styles.statCol}>
                <h6>Height:</h6>
                <ProgressBar now={progress.height } label={`${progress.height }`} />
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button variant="primary">View Details</Button>
          </Card.Footer>
        </Card>
      ))}
    </Container>
  );
};

export default Progress;
