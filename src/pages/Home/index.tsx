import React, { useState } from "react";
import {Link} from 'react-router-dom';

import { 
  FiCornerRightDown, 
  FiGithub, 
  FiLinkedin, 
  FiSlack, 
  FiUserPlus,
  FiUsers,
  FiTerminal,
  FiPackage,
  FiMail,
  FiMapPin,
  FiInfo,
} from "react-icons/fi";

import homeImg  from '../../assets/images/files.svg';

import './style.scss';
import '../../components/Button/style.scss';

interface Customer {
  name: string;
  email: string;
  address: {
    cep: string;
    uf: string;
    city: string;             
  }
}

interface Product {
  name: string;
  price: string;
  description: string;
}

export const Home: React.FC = () => {
  const [lastCustomers] = useState<Customer[]>(() => {
    const storageCustomers = JSON.parse(localStorage.getItem('customers') as string);
    if (storageCustomers) {
      return getLastItens(storageCustomers, 3);
    }
    return [];
  });

  const [lastProducts] = useState<Product[]>(() => {
    const storageProducts = JSON.parse(localStorage.getItem('products') as string);
    if (storageProducts) {
      return getLastItens(storageProducts, 3);
    }
    return [];
  });

  function getLastItens(itens:Array<any>, range: number) {
    return itens.reverse().filter((iten, index) => {
      return index <= range;
    })
  }
  
  return(
    <>
      <header>
        <div id="brand">
          <a href="/"><FiTerminal/></a>
        </div>
      </header>
      <main>
        <div className="photo">
          <img src={homeImg} alt="page ilustration" />
        </div>
        <div>
          <h2>Simple and Objective</h2>
          <h1>Managing Products and Customers.</h1>
          <p>Product and customer management system, the system stores information in local storage. click the buttons and start managing your data.</p>
          <div className="btn-group">
            <Link className="btn btn-primary" to="/customers"><FiUserPlus/> customer</Link>
            <Link className="btn btn-primary" to="/products"><FiPackage/>product</Link>
          </div>
        </div>
      </main>
      <nav id="social">
        <ul>
          <li>
            <a href="https://github.com/pedro-drosa" rel="noopener noreferrer" target="_blank"><FiGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pedrojuraci/" rel="noopener noreferrer" target="_blank"><FiLinkedin /></a>
          </li>
          <li>
            <a href="https://slack.com/intl/pt-br/" rel="noopener noreferrer" target="_blank"><FiSlack /></a>
          </li>
        </ul>
      </nav>
      <section className="description">
        <div>
          <h2><FiPackage/>Last Added Products</h2>
          <p>This section contains a list of the latest products registered on the system. The list fetches data stored in local storage.</p>
        </div>
        <FiCornerRightDown/>
      </section>
      <section className="card">
        {
          lastProducts.length > 0 ?
          lastProducts.map((product, index) => {
            return(
              <dl key={index}>
                <dt>{product.name}</dt>
                <dd>{product.price}</dd>
                <dd><FiInfo/>{product.description}</dd>
              </dl>
            );
          })
          : <h1 className="info">Ops, no products registered :(</h1>
        }
      </section>
      <section className="description">
        <div>
          <h2><FiUsers/>Last Added Users</h2>
          <p>This section contains a list of the last users registered on the system. The list fetches data stored in local storage</p>
        </div>
        <FiCornerRightDown/>
      </section>
      <section className="card">
        {
          lastCustomers.length > 0 ?
          lastCustomers.map((customer, index) => {
            return(
              <dl>
                <dt>{customer.name}</dt>
                <dd><FiMail/>{customer.email}</dd>
                <dd><FiMapPin/>{customer.address.city}, {customer.address.uf}</dd>
              </dl>
            )
          }) : <h1 className="info">Ops, no items registered :(</h1>
        }
      </section>
      <footer>
      <p>This project was created during the <a href="https://www.hiringcoders.com.br/">Hiring Coders</a> training,<br/> promoted by <a href="https://www.gama.academy/">Gama Academy</a> in partnership with <a href="https://vtex.com/br-pt/">V-Tex</a> <br/>and is under license from MIT.</p>
      </footer>
    </>
  );
}
