import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import TributarioImg from "../assets/images/tributario.jpg";
import ContactInfoItem from "../components/ContactInfoItem";
import { FaBalanceScale } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import ContactBanner from "../components/ContactBanner";

const TributarioPageStyles = styled.div`
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

export default function Tributario() {
  return (
    <TributarioPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              ESTRATEGIAS LEGALES PARA UN CUMPLIMIENTO TRIBUTARIO EFICIENTE
            </p>
            <h2 className="about__heading">DERECHO TRIBUTARIO</h2>
            <p className="about__subheading">
              <span>OPTIMIZACIÓN FISCAL Y DEFENSA ANTE LA ADMINISTRACIÓN</span>
            </p>
            <div className="about__info">
              <PText>
                EL DERECHO TRIBUTARIO EXIGE UN ASESORAMIENTO PRECISO PARA EVITAR
                SANCIONES Y OPTIMIZAR SU SITUACIÓN FISCAL. COMO ABOGADO
                TRIBUTARISTA, LE BRINDO ORIENTACIÓN EN IMPUESTOS, RECLAMACIONES
                ADMINISTRATIVAS Y DEFENSA FISCAL. LE AYUDARÉ A CUMPLIR CON SUS
                OBLIGACIONES Y A APROVECHAR LOS BENEFICIOS FISCALES DISPONIBLES
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={TributarioImg} alt="penal" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__subheading__up">
          <span>
            CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO
            FISCAL
          </span>
        </p>
        <div className="top-section">
          <div className="left__left">
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="PLANIFICACIÓN FISCAL"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="GESTIONES ANTE EL SERVICIO DE RENTAS INTERNAS (SRI)"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleLeft />}
              text="AUDITORÍA TRIBUTARIA"
            />
            <ContactInfoItem
              icon={<CgFileDocument />}
              text="REVISIÓN DE OBLIGACIONES FISCALES"
            />
          </div>
          <div className="right__right">
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="DECLARACIONES FISCALES"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="RECURSOS Y APELACIONES"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleLeft />}
              text="ASESORÍA EN MATERIA DE TRIBUTACIÓN INTERNACIONAL"
            />
            <ContactInfoItem
              icon={<CgFileDocument />}
              text="DEFENSA EN LITIGIOS FISCALES"
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </TributarioPageStyles>
  );
}
