import React from "react";

import { 
  FiCornerRightDown, 
  FiX,
  FiPlus,
  FiTerminal
} from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import productImg  from '../../assets/images/product.jpg';


import './style.scss';
import '../../components/Button/style.scss';

export const Products:React.FC = () => {
  return(
    <>
      <header>
        <div id="brand">
          <a href="#"><FiTerminal/></a>
        </div>
        <nav>
          <ul>
            <li><a href="#"><FiX/>Sair</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
          <h2>Registration and Listing</h2>
          <h1>View and list all registered products</h1>
          <p>you can add new items via the form, they will remain saved in your local storage.</p>
        </div>
        <form>
          <h2>Product Information</h2>
          <Input type="text" placeholder="Product Name"/>
          <Input type="text" placeholder="Price"/>
          <div className="btn-group">
            <Button className="btn btn-primary"><FiPlus/>Add</Button>
          </div>
        </form>
      </main>
      <section className="description">
        <div>
          <h2>Added Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sed rem dolor corporis consectetur adipisci.</p>
        </div>
        <FiCornerRightDown/>
      </section>
      <section className="products">
          <div>
            <a href="#"><img src={productImg} alt="product" /></a>
          </div>
          <div>
            <a href="#"><img src={productImg} alt="product" /></a>
          </div>
          <div>
            <a href="#"><img src={productImg} alt="product" /></a>
          </div>
      </section>
      <footer>
      <p>This project was created during the <a href="https://www.hiringcoders.com.br/">Hiring Coders</a> training,<br/> promoted by <a href="https://www.gama.academy/">Gama Academy</a> in partnership with <a href="https://vtex.com/br-pt/">V-Tex</a> <br/>and is under license from MIT.</p>
      </footer>
    </>
  )
}
