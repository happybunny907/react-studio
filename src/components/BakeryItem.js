// TODO: create a component that displays a single bakery item
import { useState } from 'react';
export default function BakeryItem({prop1, prop2, prop3, prop4, prop5,updateCart}) {
   const [index, setIndex] = useState(0);
//    const [currentM, setCurrentM] = React.useState({ text: '', key: '' });
    function handleClick(){
        setIndex(index+1);
    }
    return (
        <div>{prop2} {prop1.name} 
        {prop3.description} {prop4.price} 
        <br></br>
        <img style={{width:'10rem', heigh:'auto'}} src={prop5.image} ></img> 
        <button onClick = {()=>updateCart(prop1.name, prop4.price)}>Add to cart</button>;
        </div>

    )
}