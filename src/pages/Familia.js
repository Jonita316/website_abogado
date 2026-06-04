import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import FamiliaImg from "../assets/images/familia.png";
import ContactInfoItem from "../components/ContactInfoItem";
import {
  FaFileSignature,
  FaHeartBroken,
  FaBan,
  FaCalculator,
  FaUsers,
  FaCalendarAlt,
  FaBaby,
  FaIdCard,
  FaDna,
  FaUserShield,
  FaHandsHelping,
  FaExclamationTriangle,
  FaHandHoldingUsd,
  FaScroll,
  FaUserSlash,
  FaRunning,
  FaSignature,
  FaBabyCarriage,
} from "react-icons/fa";
import ContactBanner from "../components/ContactBanner";

const FamiliaPageStyles = styled.div`
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

export default function Familia() {
  return (
    <FamiliaPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              SOLUCIONES LEGALES EFECTIVAS PARA SU TRANQUILIDAD
            </p>
            <h2 className="about__heading">DERECHO DE FAMILIA</h2>
            <p className="about__subheading">
              <span>PROTEGIENDO SUS VÍNCULOS Y BIENESTAR</span>
            </p>
            <div className="about__info">
              <PText>
                EL MUNDO LABORAL REQUIERE UN CONOCIMIENTO PROFUNDO DE LAS LEYES
                Y DERECHOS QUE LO RIGEN. COMO ABOGADO LABORALISTA, LE BRINDO
                ASESORAMIENTO EN DESPIDOS INJUSTIFICADOS, RECLAMACIONES
                SALARIALES, ACCIDENTES LABORALES Y OTROS ASUNTOS RELACIONADOS.
                TANTO SI ES TRABAJADOR COMO EMPLEADOR, LE AYUDARÉ A PROTEGER SUS
                INTERESES CON ESTRATEGIAS LEGALES EFICIENTES
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={FamiliaImg} alt="penal" />
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
              icon={<FaFileSignature />}
              text="REDACCIÓN Y FIRMA DE CAPITULACIONES MATRIMONIALES"
            />
            <ContactInfoItem icon={<FaHeartBroken />} text="DIVORCIOS" />
            <ContactInfoItem icon={<FaBan />} text="NULIDAD MATRIMONIAL" />
            <ContactInfoItem
              icon={<FaCalculator />}
              text="LIQUIDACIÓN DE LA SOCIEDAD CONYUGAL"
            />
            <ContactInfoItem icon={<FaUsers />} text="PATRIA POTESTAD" />
            <ContactInfoItem
              icon={<FaCalendarAlt />}
              text="RÉGIMEN DE VISITAS"
            />
            <ContactInfoItem icon={<FaBaby />} text="TENENCIA DE HIJOS" />
            <ContactInfoItem
              icon={<FaIdCard />}
              text="RECONOCIMIENTO DE HIJOS"
            />
            <ContactInfoItem
              icon={<FaDna />}
              text="IMPUGNACIÓN DE LA FILIACIÓN"
            />
          </div>
          <div className="right__right">
            <ContactInfoItem
              icon={<FaUserShield />}
              text="DECLARACIÓN DE INTERDICCIÓN"
            />
            <ContactInfoItem
              icon={<FaHandsHelping />}
              text="NOMBRAMIENTO DE TUTOR O CURADOR"
            />
            <ContactInfoItem
              icon={<FaExclamationTriangle />}
              text="VIOLENCIA INTRAFAMILIAR"
            />
            <ContactInfoItem
              icon={<FaHandHoldingUsd />}
              text="PENSIONES DE ALIMENTOS"
            />
            <ContactInfoItem icon={<FaScroll />} text="HERENCIAS" />
            <ContactInfoItem
              icon={<FaUserSlash />}
              text="DECLARACIÓN DE AUSENCIA"
            />
            <ContactInfoItem icon={<FaRunning />} text="EMANCIPACIÓN" />
            <ContactInfoItem icon={<FaSignature />} text="CAMBIO DE NOMBRE" />
            <ContactInfoItem icon={<FaBabyCarriage />} text="ADOPCIÓN" />
          </div>
        </div>
      </div>
      <ContactBanner />
    </FamiliaPageStyles>
  );
}
