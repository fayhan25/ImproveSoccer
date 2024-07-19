'use client';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import Card from 'react-bootstrap/Card'

import Image from 'next/image';

import styles from './questions.module.css'



export default function Questions(props:any){
  const [value,setValue] = useState<number | null>(2);
  const [summaryVal, setSummaryVal] = useState("")
    function Capitalize(str:string){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    function consoleCheck (){
      if (props.title != "play style"){
        {props.ratingsMap.set(props.title,value)}
      }
      else{
        {props.ratingsMap.set(props.title,summaryVal)}
        props.submit;
      }
      console.log(props.ratingsMap);
    }
    function handleChange(e:any) {
      setSummaryVal(e.target.value);
    }

    return (
        
        props.title === "play style" ? <Card bg = "Success" className="text-center">
        <Card.Title>{Capitalize(props.title)}</Card.Title>
        <Card.Text>Summarize your {props.title}</Card.Text>
        <div className={styles.carouselImageContainer}>
        
          <Image 
            src= {props.src} 
            alt={`${props.title} image`} 
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        
        </div>
        <Form.Control 
          value={summaryVal}
          onChange={handleChange} 
          as="textarea" 
          placeholder="Summarize" 
          rows={2}
        />
        
      
        <Button onClick = {consoleCheck} type="submit" className="mt-3">Submit</Button>
      </Card>:
      <Card bg = "Success" className="text-center">
          <Card.Title>{Capitalize(props.title)}</Card.Title>
          <Card.Text>Rate your {props.title} from 0 to 10</Card.Text>
          <div className={styles.carouselImageContainer}>        
            <Image 
              src= {props.src} 
              alt={`${props.title} image`} 
              layout='fill'
              objectFit='cover'
              quality={100}
            />         
          </div>
          <Card.Text>Click on the star that you think shows your level</Card.Text>
          <div style={{textAlign:"center"}}>

          
          <Rating precision={0.5} name="customized-10" defaultValue={0} max={10} 
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);                
              }}
          />
          </div>
          <Button onClick = {consoleCheck} type="submit" className="mt-3">Next</Button>
        </Card>
    )
}