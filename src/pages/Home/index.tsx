import React from "react";

import { FiCornerRightDown, FiGithub, FiLinkedin, FiSlack } from "react-icons/fi";

import controllerImg  from '../../assets/images/controller.jpg';
import productImg  from '../../assets/images/product.jpg';

import './style.scss';

export const Home: React.FC = () => {
  return(
    <>
      <header>
        <div id="brand">
          <a href="#">Hiring-Coders</a>
        </div>
        <nav>
          <ul>
            <li><a href="#">Products</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="photo">
          <img src={controllerImg} alt="controller" />
        </div>
        <div>
          <h2>Lorem, ipsum dolor.</h2>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio maiores quidem beatae facilis voluptate cum.</p>
          <a className="button" href="#">See More</a>
        </div>
      </main>
      <nav id="social">
        <ul>
          <li>
            <a href="https://github.com/pedro-drosa"><FiGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pedrojuraci/"><FiLinkedin /></a>
          </li>
          <li>
            <a href="https://slack.com/intl/pt-br/"><FiSlack /></a>
          </li>
        </ul>
      </nav>
      <section className="description">
        <div>
          <h2>Last added products</h2>
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
      <section className="description">
        <div>
          <h2>Last added users</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, sed rem dolor corporis consectetur adipisci.</p>
        </div>
        <FiCornerRightDown/>
      </section>
      <section className="customers">
        <dl>
          <dt>Pedro Mascarenhas</dt>
          <dd>asd@asd.com</dd>
          <dd>25 anos, Barra Velha - SC</dd>
        </dl>
        <dl>
          <dt>Pedro Mascarenhas</dt>
          <dd>asd@asd.com</dd>
          <dd>25 anos, Barra Velha - SC</dd>
        </dl>
        <dl>
          <dt>Pedro Mascarenhas</dt>
          <dd>asd@asd.com</dd>
          <dd>25 anos, Barra Velha - SC</dd>
        </dl>
        <dl>
          <dt>Pedro Mascarenhas</dt>
          <dd>asd@asd.com</dd>
          <dd>25 anos, Barra Velha - SC</dd>
        </dl>
      </section>
      <footer>
      <p>This project was created during the <a href="https://www.hiringcoders.com.br/">Hiring Coders</a> training,<br/> promoted by <a href="https://www.gama.academy/">Gama Academy</a> in partnership with <a href="https://vtex.com/br-pt/">V-Tex</a> <br/>and is under license from MIT.</p>
      </footer>
    </>
  );
}
