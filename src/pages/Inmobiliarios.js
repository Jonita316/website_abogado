import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import InmobiliariosImg from "../assets/images/inmobiliarios.jpg";
import ContactInfoItem from "../components/ContactInfoItem";
import { FaBalanceScale } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { FaBalanceScaleRight } from "react-icons/fa";
import ContactBanner from "../components/ContactBanner";

const InmobiliariosPageStyles = styled.div`
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

export default function Inmobiliarios() {
  return (
    <InmobiliariosPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              ASESORAMIENTO LEGAL PARA COMPRAVENTA Y LITIGIOS INMOBILIARIOS
            </p>
            <h2 className="about__heading">DERECHO INMOBILIARIO</h2>
            <p className="about__subheading">
              <span>PROTEGIENDO SUS INVERSIONES Y PROPIEDADES</span>
            </p>
            <div className="about__info">
              <PText>
                EN EL SECTOR INMOBILIARIO, CADA TRANSACCIÓN DEBE ESTAR
                RESPALDADA POR UNA BASE LEGAL SÓLIDA. COMO ABOGADO INMOBILIARIO,
                LE ASESORO EN CONTRATOS DE COMPRAVENTA, ARRENDAMIENTOS,
                RECLAMACIONES POR VICIOS CONSTRUCTIVOS Y OTROS ASUNTOS
                RELACIONADOS. PROTEJO SUS DERECHOS Y LE AYUDO A TOMAR DECISIONES
                SEGURAS Y RENTABLES
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={InmobiliariosImg} alt="penal" />
          </div>
        </div>
      </div>
      <div className="container">
        <p className="about__subheading__up">
          <span>
            CONOCIMIENTO PROFUNDO EN LAS DIFERENTES SITUACIONES DEL DERECHO
            INMOBILIARIO
          </span>
        </p>
        <div className="top-section">
          <div className="left__left">
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="EVALUACIÓN Y VERIFICACIÓN DE INMUEBLES"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="ASESORÍA EN MATERIA HIPOTECARIA"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleLeft />}
              text="CONTRATOS DE COMPRAVENTA"
            />
            <ContactInfoItem icon={<CgFileDocument />} text="ARRENDAMIENTO" />
            <ContactInfoItem icon={<FaBalanceScaleRight />} text="COMODATO" />
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="REGULARIZACIÓN DE ÁREAS"
            />
          </div>
          <div className="right__right">
            <ContactInfoItem
              icon={<FaBalanceScale />}
              text="ASESORÍA LEGAL EN INVERSIONES INMOBILIARIAS"
            />
            <ContactInfoItem
              icon={<MdAccountBalance />}
              text="INSCRIPCIÓN DE INMUEBLES EN EL REGISTRO DE LA PROPIEDAD"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleLeft />}
              text="OBTENCIÓN DE PERMISOS DE CONSTRUCCIÓN"
            />
            <ContactInfoItem
              icon={<CgFileDocument />}
              text="PROPIEDAD HORIZONTAL"
            />
            <ContactInfoItem
              icon={<FaBalanceScaleRight />}
              text="ACTUALIZACIÓN CATASTRAL"
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </InmobiliariosPageStyles>
  );
}
