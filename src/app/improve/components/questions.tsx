'use client';

import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';


import Card from 'react-bootstrap/Card'

import Image from 'next/image';

import styles from './questions.module.css'
export default function Questions(props:any){
    function Capitalize(str:string){
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    return (
        <Card className="text-center">
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
        <Rating precision={0.5} name="customized-10" defaultValue={0} max={10} style={{paddingLeft:"27%"}} />
        <Button type="submit" className="mt-3">Next</Button>
        </Card>
    )
}