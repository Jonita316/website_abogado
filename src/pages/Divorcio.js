import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import DivorcioImg from "../assets/images/divorcio.png";
import ContactInfoItem from "../components/ContactInfoItem";
import {
  FaHandshake,
  FaGavel,
  FaRocket,
  FaCalculator,
  FaHandHoldingUsd,
  FaCalendarAlt,
  FaUsers,
  FaFileSignature,
  FaComments,
  FaHome,
  FaBaby,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import ContactBanner from "../components/ContactBanner";

const DivorcioPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-shadow: -0.2rem 0.1rem rgba(0, 0, 0, 0.5);
  }
  .left {
    flex: 3;
  }
  .right,
  .right__right,
  .left__left {
    flex: 2;
  }

  .about__subheading {
    font-size: 2rem;
    margin-bottom: 2rem;
    span {
      background-color: #000;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      border-radius: 2rem;
      box-shadow: 17px 11px 23px #000;
    }
  }
  .about__subheading__up {
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    text-align: center;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 1rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }

    .left__left,
    .right__right {
      max-width: 100%;
      width: 100%;
      max-width: 500px;
    }
    .about__subheading__up {
      text-align: center;
    }
  }
`;

export default function Divorcio() {
  return (
    <DivorcioPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              ASESORÍA LEGAL EN PROCESOS DE DIVORCIO Y ACUERDOS AMISTOSOS O
              LITIGIOSOS
            </p>
            <h2 className="about__heading">DIVORCIOS Y SEPARACIONES</h2>
            <p className="about__subheading">
              <span>DEFENSA DE SUS DERECHOS PATRIMONIALES Y FAMILIARES</span>
            </p>
            <div className="about__info">
              <PText>
                UN PROCESO DE DIVORCIO PUEDE SER COMPLEJO Y EMOCIONALMENTE
                DESAFIANTE. COMO ABOGADO, LE ACOMPAÑO EN CADA ETAPA PARA
                GARANTIZAR UNA SEPARACIÓN EQUITATIVA, PROTEGIENDO SUS DERECHOS
                EN CUESTIONES DE PATRIMONIO, CUSTODIA Y PENSIÓN ALIMENTICIA. MI
                OBJETIVO ES LOGRAR UNA RESOLUCIÓN JUSTA Y FAVORABLE PARA USTED
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={DivorcioImg} alt="penal" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__subheading__up">
          <span>
            CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO
            FAMILIAR
          </span>
        </p>
        <div className="top-section">
          <div className="left__left">
            <ContactInfoItem
              icon={<FaHandshake />}
              text="DIVORCIO POR MUTUO ACUERDO"
            />
            <ContactInfoItem icon={<FaGavel />} text="DIVORCIO CONTENCIOSO" />
            <ContactInfoItem icon={<FaRocket />} text="DIVORCIO EXPRESS" />
            <ContactInfoItem
              icon={<FaCalculator />}
              text="LIQUIDACIÓN DE LA SOCIEDAD CONYUGAL"
            />
            <ContactInfoItem
              icon={<FaHandHoldingUsd />}
              text="PENSIÓN ALIMENTICIA"
            />
            <ContactInfoItem
              icon={<FaCalendarAlt />}
              text="RÉGIMEN DE VISITAS"
            />
          </div>
          <div className="right__right">
            <ContactInfoItem icon={<FaUsers />} text="PATRIA POTESTAD" />
            <ContactInfoItem
              icon={<FaFileSignature />}
              text="REDACCIÓN DEL ACUERDO DE DIVORCIO"
            />
            <ContactInfoItem
              icon={<CgFileDocument />}
              text="PRESENTACIÓN DE LA DEMANDA DE DIVORCIO"
            />
            <ContactInfoItem
              icon={<FaComments />}
              text="NEGOCIACIÓN DE LOS TÉRMINOS DEL DIVORCIO"
            />
            <ContactInfoItem icon={<FaHome />} text="DIVISIÓN DE BIENES" />
            <ContactInfoItem icon={<FaBaby />} text="CUSTODIA DE HIJOS" />
          </div>
        </div>
      </div>
      <ContactBanner />
    </DivorcioPageStyles>
  );
}
