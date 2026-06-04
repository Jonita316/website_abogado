import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import TestamentoImg from "../assets/images/testamento.jpg";
import ContactInfoItem from "../components/ContactInfoItem";
import {
  FaHandHoldingUsd,
  FaPenNib,
  FaFileSignature,
  FaUsers,
  FaComments,
  FaIdCard,
  FaHandshake,
  FaListUl,
  FaMoneyCheck,
  FaKey,
  FaGavel,
  FaFolder,
} from "react-icons/fa";
import ContactBanner from "../components/ContactBanner";

const HerenciasPageStyles = styled.div`
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

export default function Herencias() {
  return (
    <HerenciasPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              SOLUCIONES LEGALES PARA LA DISTRIBUCIÓN JUSTA DE HERENCIAS
            </p>
            <h2 className="about__heading">HERENCIAS Y SUCESIONES</h2>
            <p className="about__subheading">
              <span>PLANIFICACIÓN Y DEFENSA DE SU PATRIMONIO</span>
            </p>
            <div className="about__info">
              <PText>
                LA PLANIFICACIÓN SUCESORIA ES FUNDAMENTAL PARA GARANTIZAR QUE SU
                PATRIMONIO SE DISTRIBUYA SEGÚN SUS DESEOS Y SIN COMPLICACIONES
                LEGALES. COMO ABOGADO ESPECIALIZADO EN HERENCIAS Y SUCESIONES,
                LE ASESORO EN TESTAMENTOS, DECLARACIÓN DE HEREDEROS Y DISPUTAS
                SUCESORIAS, BRINDÁNDOLE SEGURIDAD JURÍDICA Y TRANQUILIDAD
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={TestamentoImg} alt="herencias" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__subheading__up">
          <span>
            CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO
            SUCESORIO
          </span>
        </p>
        <div className="top-section">
          <div className="left__left">
            <ContactInfoItem
              icon={<FaHandHoldingUsd />}
              text="RECLAMACIÓN DE HERENCIA"
            />
            <ContactInfoItem
              icon={<FaPenNib />}
              text="ELABORACIÓN DE TESTAMENTOS"
            />
            <ContactInfoItem
              icon={<FaFileSignature />}
              text="TESTAMENTO ABIERTO"
            />
            <ContactInfoItem
              icon={<FaUsers />}
              text="TRAMITACIÓN DE SUCESIÓN INTESTADA"
            />
            <ContactInfoItem
              icon={<FaComments />}
              text="MEDIACIÓN EN ASUNTOS SUCESORIOS"
            />
            <ContactInfoItem
              icon={<FaIdCard />}
              text="DECLARACIONES DE HEREDEROS"
            />
          </div>
          <div className="right__right">
            <ContactInfoItem
              icon={<FaHandshake />}
              text="ACUERDOS DE DISTRIBUCIÓN"
            />
            <ContactInfoItem
              icon={<FaListUl />}
              text="INVENTARIO Y AVALÚO DE BIENES"
            />
            <ContactInfoItem
              icon={<FaMoneyCheck />}
              text="IMPUESTO AL PATRIMONIO HEREDADO"
            />
            <ContactInfoItem icon={<FaKey />} text="POSESIÓN HEREDITARIA" />
            <ContactInfoItem
              icon={<FaGavel />}
              text="IMPUGNACIÓN DE TESTAMENTOS"
            />
            <ContactInfoItem icon={<FaFolder />} text="INSCRIPCIÓN DE BIENES" />
          </div>
        </div>
      </div>
      <ContactBanner />
    </HerenciasPageStyles>
  );
}
