'use client'
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar} from 'react-bootstrap';
import styles from './page.module.css';
import { useAuth } from '@clerk/nextjs';
import { PrismaClient, Prisma } from '@prisma/client'
import useSWR from 'swr'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";

const Progress = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
        <React.Fragment>
        <Card key={index} className={`mb-4 ${styles.progressCard}`}>
          <Card.Header as="h5">{progress.CreatedDate.slice(0,10)}</Card.Header>
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
            <Button color="secondary" onPress={onOpen}>View Details</Button>
          </Card.Footer>
        </Card>


        <Modal 
        backdrop="opaque" 
        size = '4xl'
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">AI Recommendations</ModalHeader>
                <ModalBody>
                  <p> 
                    {progress.messages}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
      </Modal>
        </React.Fragment>
        
      ))}
    </Container>
  );
};

export default Progress;
