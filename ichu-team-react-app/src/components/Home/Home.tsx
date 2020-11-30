import React from "react";
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="content">
        <h2>
          Bienvenido a <span>Ichu team</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo
          maiores nam quibusdam fugit fugiat, deleniti optio nulla quasi,
          tempore reiciendis doloribus consequatur neque voluptate doloremque
          adipisci, asperiores repudiandae. Quod!
        </p>
        <Link to='/nosotros' className="btn-info">
          Saber más
        </Link>
      </div>
    </>
  );
}

export default Home;
