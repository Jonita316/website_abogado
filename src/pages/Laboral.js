import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import LaboralImg from "../assets/images/laboral.png";
import ContactInfoItem from "../components/ContactInfoItem";
import {
  FaBalanceScale,
  FaFileSignature,
  FaUsers,
  FaGavel,
  FaUserSlash,
  FaExclamationCircle,
  FaShieldAlt,
  FaIdCard,
  FaHandHoldingUsd,
  FaUserPlus,
  FaMoneyBillWave,
  FaBan,
  FaBriefcaseMedical,
  FaHandshake,
  FaComments,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import ContactBanner from "../components/ContactBanner";

const LaboralPageStyles = styled.div`
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

export default function Laboral() {
  return (
    <LaboralPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              PROTECCIÓN LEGAL PARA TRABAJADORES Y EMPLEADORES
            </p>
            <h2 className="about__heading">DERECHO LABORAL</h2>
            <p className="about__subheading">
              <span>DEFENDIENDO SUS DERECHOS EN EL ÁMBITO LABORAL</span>
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
            <img src={LaboralImg} alt="penal" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__subheading__up">
          <span>
            CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO
            LABORAL
          </span>
        </p>
        <div className="top-section">
          <div className="left__left">
            <ContactInfoItem
              icon={<FaFileSignature />}
              text="REDACCIÓN DE CONTRATOS DE TRABAJO"
            />
            <ContactInfoItem
              icon={<FaUsers />}
              text="NEGOCIACIÓN DE CONVENIOS COLECTIVOS"
            />
            <ContactInfoItem
              icon={<FaGavel />}
              text="REPRESENTACIÓN EN JUICIOS LABORALES"
            />
            <ContactInfoItem
              icon={<FaUserSlash />}
              text="DESPIDOS Y TERMINACIÓN LABORAL"
            />
            <ContactInfoItem
              icon={<FaExclamationCircle />}
              text="RECLAMACIONES LABORALES"
            />
            <ContactInfoItem
              icon={<FaShieldAlt />}
              text="ASESORAMIENTO SOBRE SEGURIDAD SOCIAL"
            />
            <ContactInfoItem
              icon={<FaIdCard />}
              text="OBTENCIÓN DE PERMISOS DE TRABAJO"
            />
            <ContactInfoItem
              icon={<FaHandHoldingUsd />}
              text="INDEMNIZACIONES LABORALES"
            />
          </div>
          <div className="right__right">
            <ContactInfoItem
              icon={<FaUserPlus />}
              text="AFILIACIÓN A LA SEGURIDAD SOCIAL"
            />
            <ContactInfoItem
              icon={<FaMoneyBillWave />}
              text="RECLAMACIÓN DE PRESTACIONES SOCIALES"
            />
            <ContactInfoItem icon={<FaBan />} text="ACOSO LABORAL" />
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="DISCRIMINACIÓN LABORAL"
            />
            <ContactInfoItem
              icon={<FaBriefcaseMedical />}
              text="ACCIDENTES DE TRABAJO"
            />
            <ContactInfoItem
              icon={<FaHandshake />}
              text="NEGOCIACIÓN DE FINIQUITOS"
            />
            <ContactInfoItem
              icon={<FaComments />}
              text="REPRESENTACIÓN EN MEDIACIONES Y ARBITRAJES"
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </LaboralPageStyles>
  );
}
