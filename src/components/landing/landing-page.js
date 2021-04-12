import React from "react";
import { useHistory } from "react-router-dom";
import Menu from "../menu/menu";
import Lorena from "./img/Lorena.png";
import Cake from "./img/cake.png";
import Decoration from "./img/Decoration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const LandingPage = () => {
  const history = useHistory();
  return (
    <div>
      <section className="home">
        <img className="back" src={Decoration} alt="" />
        <Menu></Menu>
        <div className="slide">
          <div className="banner flex_center_row">
            <nav className="dots">
              <div className="ativo" />
              <div className />
              <div className />
              <div className />
            </nav>
            <div className="text">
              <h1>
                Bolos <br /> Divinos
              </h1>
              <p>
                Há mais de 8 anos no mercado, sempre usando os melhores
                igredientes, tudo feito artesanalmente com muito amor!
              </p>
              <a href>
                <button>Provar</button>
              </a>
            </div>
            <div className="banner-img">
              <img src={Cake} alt="" />
              <div className="circle" />
            </div>
            <div className="social-media">
              <a href>
                <FontAwesomeIcon className="media-icon" icon={faInstagram} />
              </a>
              <a href>
                <FontAwesomeIcon
                  className="media-icon"
                  icon={faWhatsapp}
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="produtos">
        <div className="title flex_center_column">
          <h1>Produtos</h1>
          <p>
            Aqui você pode ver e conhcer nosso maravilhosos produtos <br />
            de alta qualidade, com os melhores ingredientes, e feitos com muito
            amor!
          </p>
        </div>
        <div className="produtos-grid">
          <div className="prod" />
          <div className="prod" />
          <div className="prod" />
          <div className="prod" />
          <div className="prod" />
          <div className="prod" />
        </div>
      </section>
      <section className="about container flex_center_column">
        <div className="flex_center_row">
          <h1 className="stand-h1">
            Sobre <span className="stand-h1">Nós</span>
          </h1>
        </div>
        <div className="row flex_center_row">
          <div className="about-foto">
            <div className="fundo" />
            <img src={Lorena} alt="" srcSet />
          </div>
          <p className="stand-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            sequi consectetur ab ipsa quia laboriosam molestias cum quisquam hic
            eligendi, iusto dolorum excepturi placeat repellat nostrum maiores
            nemo, iste totam? Aut distinctio, explicabo aliquid deleniti
            doloribus ad tempore cupiditate modi nulla id officiis excepturi
            sunt quibusdam quas, nesciunt, dignissimos minus numquam minima.
            Atque saepe, minima ea non explicabo hic inventore. Explicabo
            suscipit facere quos odio tempora aut nobis corporis.
            <br />
            <br />
            Repudiandae ad blanditiis vel illum exercitationem officiis,
            adipisci repellendus aliquam nihil, porro ullam aliquid quis quo
            aperiam veniam unde natus? Laboriosam? Dolore quasi qui nulla, est
            nobis quidem nisi vel. Consequatur eaque debitis ducimus autem
            officiis ratione cupiditate sunt maiores hic omnis vel optio eum
            amet soluta dicta inventore, deserunt aliquam? Distinctio
            perspiciatis obcaecati fugit, porro maxime doloribus dicta quasi,
            iusto deleniti voluptate veniam doloremque debitis nesciunt quidem!
            Amet voluptatum ullam explicabo, asperiores mollitia rerum qui et,
            ea tenetur delectus at.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
