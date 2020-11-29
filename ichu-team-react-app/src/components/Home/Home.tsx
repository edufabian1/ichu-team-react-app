import React from "react";
import './Home.css'

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
        <a href="/" className="btn-info">
          Saber mas
        </a>
      </div>
    </>
  );
}

export default Home;
