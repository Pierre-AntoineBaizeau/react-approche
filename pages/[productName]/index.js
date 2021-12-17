import React from "react";
import Card from '../../components/Card'
import { useRouter } from "next/router";
import Image from "next/image";
export default function ProductDetails() {
    const router = useRouter()
    const { name, desc, prix, img } = router.query
    return (
        //<Card title={card[0]} desc={card[1]} price={card[2]} image={card[3]} />
        <div>
            <p>Description du produit : </p>
            {name} <br/>
            {desc} <br/>
            {prix} <br/>
            {img && <Image src={img} height="200" width="200" />}
        </div>
    )

}