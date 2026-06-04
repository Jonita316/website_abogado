import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import AmbientalImg from "../assets/images/ambiental.png";
import ContactInfoItem from "../components/ContactInfoItem";
import { FaBalanceScale } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { FaBalanceScaleRight } from "react-icons/fa";
import ContactBanner from "../components/ContactBanner";

const AmbientalPageStyles = styled.div`
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

export default function Ambiental() {
  return (
    <AmbientalPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              SOLUCIONES LEGALES PARA PROTEGER EL MEDIO AMBIENTE Y SUS INTERESES
            </p>
            <h2 className="about__heading">DERECHO AMBIENTAL</h2>
            <p className="about__subheading">
              <span>DEFENSA Y CUMPLIMIENTO DE LA LEGISLACIÓN AMBIENTAL</span>
            </p>
            <div className="about__info">
              <PText>
                EL CUMPLIMIENTO DE LAS NORMAS AMBIENTALES ES ESENCIAL PARA
                EVITAR SANCIONES Y PROTEGER NUESTRO ENTORNO. COMO ABOGADO
                AMBIENTALISTA, LE ASESORO EN PERMISOS AMBIENTALES, LITIGIOS POR
                CONTAMINACIÓN Y POLÍTICAS DE SOSTENIBILIDAD. MI OBJETIVO ES
                GARANTIZAR QUE SU ACTIVIDAD CUMPLA CON LA LEGISLACIÓN VIGENTE Y
                CONTRIBUYA AL DESARROLLO SOSTENIBLE
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={AmbientalImg} alt="penal" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__subheading__up">
          <span>
            CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO
            AMBIENTAL
          </span>
        </p>
        <div className="top-section">
          <div className="left__left">
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="EVALUACIÓN Y GESTIÓN DE IMPACTO AMBIENTAL"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="LICENCIAS Y PERMISOS AMBIENTALES"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleLeft />}
              text="CUMPLIMIENTO DE NORMAS AMBIENTALES"
            />
            <ContactInfoItem
              icon={<CgFileDocument />}
              text="LITIGIOS AMBIENTALES"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleRight />}
              text="INFORMES DE MONITOREOS"
            />
          </div>
          <div className="right__right">
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="NEGOCIACIÓN DE ACUERDOS AMBIENTALES CON TERCEROS"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="GESTIÓN DE REGISTROS DE GENERADOR DE DESECHOS PELIGROSOS"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleLeft />}
              text="PERMISOS DE MANEJO DE RESIDUOS"
            />
            <ContactInfoItem
              icon={<CgFileDocument />}
              text="BUENAS PRÁCTICAS AMBIENTALES"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleRight />}
              text="INFORMES DE FACTIBILIDAD AMBIENTAL
"
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AmbientalPageStyles>
  );
}
