import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Card(props) {

    
    function handleClick(prix, titre, description, image) {
        titre = props.title
        description = props.desc
        prix = props.price
        image = props.image
        console.log('titre : '+ titre + '\n' + 'description : ' + description + '\n' + 'prix : ' + prix + '\n' + 'Url de l\'image : ' +image)        
      } 

    return (
        <div className='simpleCard'>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <h4>prix : {props.price}</h4>
            {props.image && <Image src={props.image} height="200" width="200" />}
            <Link href={`/${props.title}?title=${props.title}${props.desc}${props.price}`}>
                <div>page</div>
            </Link>
            
            <button onClick={handleClick}>Afficher les props dans la console</button>
        </div>
    )
}