'use client'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ProgressBar} from 'react-bootstrap';
import styles from './page.module.css';
import useSWR from 'swr'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Progress = () => {
  const router = useRouter()
  const infoModal = useDisclosure();
  const deleteModal = useDisclosure();
  const [userInfo, setUserInfo] = useState(null)
  const [userMessage, setUserMessage] = useState(null)
  const fetcher = (URL:any )=> fetch(URL).then(r => r.json())
  const {data,error} = useSWR('api/getposts',fetcher)

  const handleOpen = (myId:any) => {
    setUserInfo(myId);
    deleteModal.onOpen();
  }
  const handleMessage = (myMessage:any) => {
    setUserMessage(myMessage)
    infoModal.onOpen();
  }
  const handleClose = () =>{
    setUserInfo(null);
    deleteModal.onClose();
  }

  const handleMessageClose = () =>{
    setUserMessage(null);
    infoModal.onClose();
  }
  const deletePost = (postId:any) =>{
    try {
      fetch('/api/deletepost', {
        method: 'DELETE', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({postId})})
        window.location.reload()
    }
    catch(error){
      console.log(error);
    }
    
  }

  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div> 

  const userProgress =data.data.posts
  console.log(userProgress);
  return ( 
    <Container className={styles.progressContainer}>
    <div className={styles.container}>
      <header className="text-center py-5">
        <h1 className="display-3">Progress Tracker</h1>
        <p className="lead">Track your progress here sorted by date</p>
      </header>
    </div>
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
            <Button color="secondary" onPress={() => handleMessage(progress.messages)}>View Details</Button>
            <Button 
              style = {{paddingLeft: "150%"}} 
              color="danger" 
              onPress={() => handleOpen(progress.id)}
            >
                Delete    
            </Button>
          </Card.Footer>
        </Card>


        </React.Fragment>
        
      ))}

      
      <Modal 
        backdrop="opaque" 
        size = 'xl'
        isOpen={infoModal.isOpen} 
        onOpenChange={infoModal.onOpenChange}
        scrollBehavior='inside'
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
                    {userMessage}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={handleMessageClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
      </Modal>

      <Modal 
        backdrop="opaque" 
        size = 'xl'
        isOpen={deleteModal.isOpen} 
        onOpenChange={deleteModal.onOpenChange}
        scrollBehavior='inside'
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
                <ModalHeader className="flex flex-col gap-1">Are you sure?</ModalHeader>
                <ModalBody>
                  <p> 
                    Your progress will be permanently deleted if you press Delete
                  </p>
                </ModalBody>
                <ModalFooter>
                <Button color="danger" variant="solid" onClick={(event) => {deletePost(userInfo)}}>
                    Delete
                  </Button>
                  <Button color="danger" variant="light" onPress={handleClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )
            }
          </ModalContent>
      </Modal>
    </Container>
  );
};

export default Progress;
