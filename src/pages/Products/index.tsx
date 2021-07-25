import React, { FormEvent, useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

import { 
  FiCornerRightDown, 
  FiX,
  FiPlus,
  FiTerminal,
  FiPackage,
  FiInfo
} from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import './style.scss';
import '../../components/Button/style.scss';

interface Product {
  name: string;
  price: string;
  description: string;
}

export const Products:React.FC = () => {
  const [products, setProducts] = useState<Product[]>(()=>{
    const productsStorage = localStorage.getItem('products');
    if (productsStorage) {
      return JSON.parse(productsStorage);
    }
    return []
  });

  useEffect(()=>{
    localStorage.setItem('products', JSON.stringify(products));
  },[products])

  //Input Values
  const [newProductName, setNewProductName] = useState<string>();
  const [newDescription, setNewDescription] = useState<string>();
  const [newPrice, setNewPrice] = useState<string>();

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    price: Yup.string().matches(/^\d+(,\d{1,2})?$/).required(),
    description: Yup.string().required(),
  });

  async function handleAddProduct(event:FormEvent) {
    event.preventDefault();
    
    if(newProductName?.trim() === ''){
      console.error('validation error')
      return;
    }

    if(!(await schema.isValid({name: newProductName, price: newPrice, description: newDescription}))){
      console.error('validation error')
      return;
    }

    //Convert Price
    const rawPrice = newPrice?.replace(/[,.]/g, ".") as string;
    const parsedPrice = parseFloat(rawPrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    if(newProductName && newDescription && newPrice) {
      const newProduct:Product = {
        name: newProductName,
        description: newDescription,
        price: parsedPrice
      } 

      setProducts([...products, newProduct]);
      
      //Clear input
      setNewProductName('');
      setNewPrice('');
      setNewDescription('');
    }

    localStorage.setItem('products', JSON.stringify(products));
  }

  return(
    <>
      <header>
        <div id="brand">
          <a href="/products"><FiTerminal/></a>
        </div>
        <nav>
          <ul>
            <li><Link to="/"><FiX/>Sair</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
          <h2>Registration and Listing</h2>
          <h1>View and list all registered products</h1>
          <p>you can add new items via the form, they will remain saved in your local storage.</p>
        </div>
        <form onSubmit={handleAddProduct}>
          <h2>Product Information</h2>
          <Input value={newProductName} 
            onChange={e => setNewProductName(e.target.value)} 
            type="text" 
            placeholder="Product Name"
          />
          <Input value={newPrice}
            onChange={e => setNewPrice(e.target.value)}
            type="text"
            placeholder="Enter a price"
          />
          <Input value={newDescription} 
            onChange={e => setNewDescription(e.target.value)}
            type="text" 
            placeholder="Enter a description"
          />
          <div className="btn-group">
            <Button type="submit" className="btn btn-primary"><FiPlus/>Add</Button>
          </div>
        </form>
      </main>
      <section className="description">
        <div>
          <h2><FiPackage/>Added Products</h2>
          <p>This section contains a list of all products registered in localstorage</p>
        </div>
        <FiCornerRightDown/>
      </section>
      <section className="products">
        {
          products.length > 0 ?
          products.map((product, index) => {
            return(
              <dl key={index}>
                <dt>{product.name}</dt>
                <dd>{product.price}</dd>
                <dd><FiInfo/>{product.description}</dd>
              </dl>
            );
          }) : <h1 className="info">Ops, no customers registered :(</h1>
        }
      </section>
      <footer>
      <p>This project was created during the <a href="https://www.hiringcoders.com.br/">Hiring Coders</a> training,<br/> promoted by <a href="https://www.gama.academy/">Gama Academy</a> in partnership with <a href="https://vtex.com/br-pt/">V-Tex</a> <br/>and is under license from MIT.</p>
      </footer>
    </>
  )
}
