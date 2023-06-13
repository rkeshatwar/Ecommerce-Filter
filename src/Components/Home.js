import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Category from './Catogary';
import './Style.css'

const Home = () => {
const [products, setProducts] = useState(Category)

const filter1 = (a)=>{
    const results = products.filter((b)=>{
        return b.category===a
    }) 
    setProducts(results)
}

const filter2 = (c)=>{
    const results2 = products.filter((d)=>{
        return d.category===c
    }) 
    setProducts(results2)
}

const filter3 = (e)=>{
    const results3 = products.filter((f)=>{
        return f.category===e
    }) 
    setProducts(results3)
}


  return (
    <div>

      <div className='buttons'>
            <button onClick={()=>filter1(`men's clothing`)}>Mens</button>
            <button onClick={()=>filter2(`women's clothing`)}>Women</button>
            <button onClick={()=>filter3(`jewelery`)}>Jewelery</button>
        </div>

        <div className='cards'>
        {products && products.map((item)=>{
            return(
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                  <p>Price: {item.price}</p>
                  <p>Description: {item.description}</p>
                    
                  </Card.Text>
                  <Button variant="primary">Info</Button>
                </Card.Body>
              </Card>
            )
        })}
        </div>
    </div>
  )
}

export default Home