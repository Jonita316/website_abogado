import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import CivilImg from "../assets/images/civil.png";
import ContactInfoItem from "../components/ContactInfoItem";
import { FaBalanceScale } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { FaBalanceScaleRight } from "react-icons/fa";
import ContactBanner from "../components/ContactBanner";

const CivilesPageStyles = styled.div`
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

export default function Civiles() {
  return (
    <CivilesPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              REPRESENTACIÓN Y ASESORÍA EN TODO TIPO DE ASUNTOS CIVILES
            </p>
            <h2 className="about__heading">DERECHO CIVIL</h2>
            <p className="about__subheading">
              <span>
                SOLUCIONES LEGALES PARA SU PATRIMONIO Y RELACIONES CIVILES
              </span>
            </p>
            <div className="about__info">
              <PText>
                EL DERECHO CIVIL REGULA ASUNTOS COMO CONTRATOS, RESPONSABILIDAD
                CIVIL, RECLAMACIONES POR DAÑOS Y OTROS TEMAS FUNDAMENTALES. COMO
                ABOGADO CIVILISTA, LE ASESORO Y REPRESENTO ANTE CUALQUIER
                CONTROVERSIA, BUSCANDO SIEMPRE SU MEJOR INTERÉS Y UNA SOLUCIÓN
                JUSTA Y FAVORABLE
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={CivilImg} alt="penal" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__subheading__up">
          <span>
            CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO
            CIVIL
          </span>
        </p>
        <div className="top-section">
          <div className="left__left">
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="ASESORÍA PATRIMONIAL Y SUCESORIA"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="NEGOCIOS FIDUCIARIOS"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleLeft />}
              text="LITIGIOS Y DEFENSA EN JUICIOS CIVILES"
            />
            <ContactInfoItem
              icon={<CgFileDocument />}
              text="DEMANDAS CIVILES"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleRight />}
              text="MATERIA SOCIETARIA"
            />
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="CONTRATOS Y ACUERDOS"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="DERECHO DE PROPIEDAD"
            />
          </div>
          <div className="right__right">
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="COMPRAVENTA DE BIENES INMUEBLES"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="RESPONSABILIDAD CIVIL CONTRACTUAL Y EXTRACONTRACTUAL"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleLeft />}
              text="DERECHO DE LAS PERSONAS Y FAMILIA"
            />
            <ContactInfoItem
              icon={<CgFileDocument />}
              text="DAÑOS Y PERJUICIOS"
            />
            <ContactInfoItem icon={<FaBalanceScaleRight />} text="SEGUROS" />
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="CANCELACIÓN DE ANTECEDENTES PENALES"
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </CivilesPageStyles>
  );
}
