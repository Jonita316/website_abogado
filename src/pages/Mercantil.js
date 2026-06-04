import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import MercantilImg from "../assets/images/mercantil.jpg";
import ContactInfoItem from "../components/ContactInfoItem";
import {
  FaBuilding,
  FaIdCard,
  FaUsers,
  FaFileContract,
  FaSync,
  FaChartLine,
  FaBriefcase,
  FaHandHoldingUsd,
  FaCalculator,
  FaRegistered,
  FaFileSignature,
  FaGavel,
  FaChartPie,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import ContactBanner from "../components/ContactBanner";

const MercantilPageStyles = styled.div`
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

export default function Mercantil() {
  return (
    <MercantilPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              SOLUCIONES EFICIENTES PARA EMPRENDEDORES Y CORPORACIONES
            </p>
            <h2 className="about__heading">DERECHO MERCANTIL</h2>
            <p className="about__subheading">
              <span>ASESORAMIENTO LEGAL PARA EMPRESAS Y NEGOCIOS</span>
            </p>
            <div className="about__info">
              <PText>
                EN EL ÁMBITO MERCANTIL, UNA BUENA ESTRUCTURA LEGAL ES CLAVE PARA
                EL ÉXITO EMPRESARIAL. COMO ABOGADO MERCANTILISTA, LE ASESORO EN
                CONTRATOS, SOCIEDADES, DISPUTAS COMERCIALES Y PROTECCIÓN DE SUS
                INTERESES EMPRESARIALES. LE AYUDO A PREVENIR RIESGOS LEGALES Y A
                GARANTIZAR EL CUMPLIMIENTO DE LAS NORMATIVAS
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={MercantilImg} alt="penal" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__subheading__up">
          <span>
            CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO
            COMERCIAL
          </span>
        </p>
        <div className="top-section">
          <div className="left__left">
            <ContactInfoItem
              icon={<FaBuilding />}
              text="CONSTITUCIÓN DE EMPRESAS"
            />
            <ContactInfoItem
              icon={<FaIdCard />}
              text="OBTENCIÓN DE PERMISOS Y LICENCIAS PARA OPERAR"
            />
            <ContactInfoItem
              icon={<FaUsers />}
              text="REDACCIÓN DE PACTOS DE ACCIONISTAS"
            />
            <ContactInfoItem
              icon={<FaFileContract />}
              text="LIQUIDACIÓN Y DISOLUCIÓN DE EMPRESAS"
            />
            <ContactInfoItem
              icon={<FaSync />}
              text="REACTIVACIÓN DE COMPAÑÍAS"
            />
            <ContactInfoItem
              icon={<FaChartLine />}
              text="AUMENTOS Y REDUCCIÓN DE CAPITAL"
            />
            <ContactInfoItem
              icon={<FaBriefcase />}
              text="ASESORÍA LEGAL EN TEMAS SOCIETARIOS"
            />
          </div>
          <div className="right__right">
            <ContactInfoItem
              icon={<FaHandHoldingUsd />}
              text="OBTENCIÓN DE PRÉSTAMOS Y LÍNEAS DE CRÉDITO"
            />
            <ContactInfoItem
              icon={<FaCalculator />}
              text="REESTRUCTURACIÓN DE DEUDA"
            />
            <ContactInfoItem
              icon={<FaRegistered />}
              text="REGISTRO DE PATENTES, MARCAS Y DERECHOS DE AUTOR"
            />
            <ContactInfoItem
              icon={<FaFileSignature />}
              text="NEGOCIACIÓN Y ELABORACIÓN DE ACUERDOS DE LICENCIA"
            />
            <ContactInfoItem
              icon={<FaGavel />}
              text="LITIGIOS EN MATERIA DE PROPIEDAD INTELECTUAL"
            />
            <ContactInfoItem
              icon={<CgFileDocument />}
              text="REDACCIÓN Y REVISIÓN DE CONTRATOS COMERCIALES"
            />
            <ContactInfoItem
              icon={<FaChartPie />}
              text="PLANIFICACIÓN FISCAL PARA EMPRESAS"
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </MercantilPageStyles>
  );
}
