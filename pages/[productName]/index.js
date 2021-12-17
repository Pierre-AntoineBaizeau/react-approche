import React from "react";
import Card from '../../components/Card'
import { useRouter } from "next/router";

export default function ProductDetails() {
    const router = useRouter()
    const { title } = router.query
    return (
        //<Card title={card[0]} desc={card[1]} price={card[2]} image={card[3]} />
        <div>
            {title}
        </div>
    )

}