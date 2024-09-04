'use client'
import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Button } from 'react-bootstrap';
import styles from './page.module.css';
const userProgress = [
    {
        date: '2024-08-01',
        shooting: 75,
        passing: 60,
        dribbling: 80,
        speed: 70,
        weight: 65,
        height: 90,
    },
    {
        date: '2024-09-01',
        shooting: 80,
        passing: 65,
        dribbling: 85,
        speed: 72,
        weight: 64,
        height: 90,
    },
    ]; 
const Progress = () => {
  return (
    <Container className={styles.progressContainer}>
      <h1 className="text-center mt-4 mb-4">Your Progress Tracker</h1>
 
      {userProgress.map((progress, index) => (
        <Card key={index} className={`mb-4 ${styles.progressCard}`}>
          <Card.Header as="h5">{progress.date}</Card.Header>
          <Card.Body>
            <Row>
              <Col md={4} className={styles.statCol}>
                <h6>Shooting:</h6>
                <ProgressBar now={progress.shooting} label={`${progress.shooting}%`} />
              </Col>
              <Col md={4} className={styles.statCol}>
                <h6>Passing:</h6>
                <ProgressBar now={progress.passing} label={`${progress.passing}%`} />
              </Col>
              <Col md={4} className={styles.statCol}>
                <h6>Dribbling:</h6>
                <ProgressBar now={progress.dribbling} label={`${progress.dribbling}%`} />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4} className={styles.statCol}>
                <h6>Speed:</h6>
                <ProgressBar now={progress.speed} label={`${progress.speed}%`} />
              </Col>
              <Col md={4} className={styles.statCol}>
                <h6>Weight:</h6>
                <ProgressBar now={progress.weight} label={`${progress.weight}%`} />
              </Col>
              <Col md={4} className={styles.statCol}>
                <h6>Height:</h6>
                <ProgressBar now={progress.height} label={`${progress.height}%`} />
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
