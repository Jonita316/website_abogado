import React from "react";
import HeroImg from "../assets/images/portada1.png";
import PText from "./PText";
import Button from "./Button";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import { MdOutlineAccountBalance } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import styled from "styled-components";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;

    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 5.5rem;
      font-family: "Montserrat Bold";
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 550px;
    margin: 0 auto;
    border: 6px solid var(--gray-2);
    box-shadow: 6px 6px 6px #000;
  }
  .hero__info {
    margin-top: -18rem;
    p {
      background-color: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(5px);
      padding: 2rem;
      border-radius: 20px;
      display: inline-block;
      box-shadow: 0 0 50px 30px rgba(0, 0, 0, 0.6);
    }
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 2rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.4rem;
      text-transform: uppercase;
      margin-bottom: 2.5rem;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
      margin-top: 6rem;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-270deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;

        p {
          font-size: 1.7rem;
        }
        img {
          max-height: 60px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>HOLA, ME LLAMO </span>
            <span className="hero__name">GABRIEL RODRÍGUEZ</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              GABRIEL RODRÍGUEZ, ABOGADO CON AMPLIA EXPERIENCIA EN DIVERSAS
              ÁREAS DEL DERECHO. BRINDO ASESORÍA LEGAL PERSONALIZADA, ÉTICA Y
              EFICAZ PARA PROTEGER SUS DERECHOS E INTERESES
            </PText>
            <Button btnLink="/projects" btnText="AREAS LEGALES" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>CONTACTANOS</p>
              <img src={SocialMediaArrow} alt="social media arrow" />
            </div>
            <div className="hero__social__text">
              <div className="hero__social__indicator">
                <FaBalanceScale />
              </div>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>ASESORIAS</p>
            <MdOutlineAccountBalance />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
