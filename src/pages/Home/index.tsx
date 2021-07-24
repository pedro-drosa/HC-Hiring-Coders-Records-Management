import React from "react";
import {Link} from 'react-router-dom';

import { 
  FiCornerRightDown, 
  FiGithub, 
  FiLinkedin, 
  FiSlack, 
  FiUserPlus,
  FiUsers,
  FiTerminal,
  FiPackage
} from "react-icons/fi";

import homeImg  from '../../assets/images/files.svg';

import './style.scss';
import '../../components/Button/style.scss';

export const Home: React.FC = () => {
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
          <h2><FiPackage/>Last Added Products</h2>
          <p>This section contains a list of the latest products registered on the system. The list fetches data stored in local storage.</p>
        </div>
        <FiCornerRightDown/>
      </section>
      <section className="card">
        <dl>
          <dt>Xbox-One</dt>
          <dd>$1000.00</dd>
          <dd>an exclusive product.</dd>
        </dl>
        <dl>
          <dt>Xbox-Series X</dt>
          <dd>$1000.00</dd>
          <dd>an exclusive product.</dd>
        </dl>
        <dl>
          <dt>Controller X-Supreme</dt>
          <dd>$1000.00</dd>
          <dd>an exclusive product.</dd>
        </dl>
        <dl>
          <dt>Gears of War</dt>
          <dd>$1000.00</dd>
          <dd>an exclusive product</dd>
        </dl>
      </section>
      <section className="description">
        <div>
          <h2><FiUsers/>Last Added Users</h2>
          <p>This section contains a list of the last users registered on the system. The list fetches data stored in local storage</p>
        </div>
        <FiCornerRightDown/>
      </section>
      <section className="card">
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
