import React from "react";
import PText from "../components/PText";
import AboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import ContactBanner from "../components/ContactBanner";
import Advantages from "../components/Advantages";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
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
      box-shadow: 6px 6px 6px #000;
    }
  }
  .about__info__items {
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  .about__info__item {
    margin-bottom: 4rem;
    color: var(--gray-1);
  }
  .about__info__item .info-line {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 0;
    margin-bottom: 1rem;
  }
  .about__info__item .para {
    max-width: 100%;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  .about__info__item strong {
    display: inline-flex;
    min-width: 80px;
    margin-right: 0.8rem;
    font-weight: 700;
    color: var(--white);
  }
  .about__info__heading {
    font-size: 2.8rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 2.4rem;
    }
    .about__info__items {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .about__info__item .para {
      font-size: 1.4rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              HOLA, SOY <span>GABRIEL RODRÍGUEZ</span>
            </p>
            <h2 className="about__heading">ABOGADO DE LOS TRIBUNALES</h2>
            <div className="about__info">
              <PText>
                COMO ABOGADO, MI PRINCIPAL COMPROMISO ES DEFENDER LOS DERECHOS
                DE MIS CLIENTES CON INTEGRIDAD Y PROFESIONALISMO. CADA CASO
                REPRESENTA UN RETO ÚNICO QUE REQUIERE UN ANÁLISIS DETALLADO Y
                ESTRATEGIAS PERSONALIZADAS PARA GARANTIZAR LA MEJOR
                REPRESENTACIÓN LEGAL POSIBLE
                <br /> <br />
                CUENTO CON UNA AMPLIA EXPERIENCIA EN DIVERSAS ÁREAS DEL DERECHO,
                INCLUYENDO DERECHO CIVIL, PENAL, LABORAL, MERCANTIL, FAMILIAR Y
                ADMINISTRATIVO. ESTA TRAYECTORIA ME PERMITE ABORDAR CADA CASO
                CON UNA VISIÓN INTEGRAL Y PROPONER SOLUCIONES EFECTIVAS
                ADAPTADAS A LAS NECESIDADES DE MIS CLIENTES
                <br /> <br />
                EL EJERCICIO DEL DERECHO EXIGE NO SOLO CONOCIMIENTO PROFUNDO DE
                LAS NORMATIVAS VIGENTES, SINO TAMBIÉN LA CAPACIDAD DE NEGOCIAR Y
                ARGUMENTAR CON SOLIDEZ. EN CADA SITUACIÓN, BUSCO SOLUCIONES
                EFICIENTES Y FAVORABLES, PRIORIZANDO SIEMPRE LOS INTERESES Y LA
                TRANQUILIDAD DE MIS REPRESENTADOS
                <br /> <br />
                EN UN MUNDO EN CONSTANTE CAMBIO, LA ACTUALIZACIÓN JURÍDICA ES
                FUNDAMENTAL. POR ELLO, ME MANTENGO AL DÍA CON LAS ÚLTIMAS
                REFORMAS LEGALES Y PRECEDENTES JUDICIALES, ASEGURANDO QUE MIS
                CLIENTES RECIBAN ASESORÍA BASADA EN LA LEGISLACIÓN MÁS RECIENTE
                Y EFECTIVA
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="GABRIEL RODRÍGUEZ IMG" />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h2 className="about__info__heading">DATOS PERSONALES</h2>
            <PText>
              <span className="info-line">
                <strong>NOMBRE:</strong> JOSÉ GABRIEL RODRÍGUEZ MERINO
              </span>

              <span className="info-line">
                <strong>TELÉFONO:</strong> 0993972833
              </span>
              <span className="info-line">
                <strong>EMAIL:</strong> g.rodriguezm0730@gmail.com
              </span>
            </PText>
          </div>

          <div className="about__info__item">
            <h2 className="about__info__heading">FORMACIÓN ACADÉMICA</h2>
            <PText>
              <span className="info-line">
                <strong>UNIVERSITARIOS:</strong> ABOGADO DE LOS TRIBUNALES Y
                JUZGADOS DE LA REPÚBLICA DEL ECUADOR – UNIVERSIDAD DE LOS
                HEMISFERIOS (MENCIÓN DERECHO PROCESAL)
              </span>
              <span className="info-line">
                <strong>ESTUDIOS SECUNDARIOS:</strong> COLEGIO PARTICULAR “MARIA
                AUGUSTA URRUTIA DE ESCUDERO”
              </span>
              <span className="info-line">
                <strong>ESTUDIOS PRIMARIOS:</strong> ESCUELA JUAN PABLO II
              </span>
            </PText>
          </div>

          <div className="about__info__item">
            <h2 className="about__info__heading">EXPERIENCIA LABORAL</h2>
            <PText>
              <span className="info-line">
                <strong>TRUST FIDUCIARIA</strong> — MAYO 2004 – AGOSTO 2017
              </span>
              <span className="info-line">CARGO: ASESOR LEGAL FIDUCIARIO</span>
              <span className="info-line">
                RESPONSABILIDADES PRINCIPALES: REVISIÓN DE AVISOS DE
                INCUMPLIMIENTO, CONFIRMACIÓN DE GARANTÍAS, ELABORACIÓN DE CARTAS
                DE NOTIFICACIÓN Y RETIRO, COORDINACIÓN DE CUADRILLAS PARA
                RETIROS DE VEHÍCULOS, INGRESO Y CONTROL DE INFORMACIÓN EN
                SISTEMAS Y REPORTES, ELABORACIÓN DE KPI Y ATENCIÓN AL CLIENTE.
              </span>
              <span className="info-line" style={{ marginTop: "2rem" }}>
                <strong>LAW-FIRM ROJAS Y RODRÍGUEZ ABOGADOS</strong> — ABRIL
                2018 – PRESENTE
              </span>
              <span className="info-line">
                CARGO: ABOGADO LITIGANTE PATROCINADOR
              </span>
              <span className="info-line">
                ÁREAS: CIVIL, PENAL, LABORAL, ADMINISTRATIVO, TRÁNSITO,
                SOCIETARIO.
              </span>
            </PText>
          </div>

          <div className="about__info__item">
            <h2 className="about__info__heading">REFERENCIAS PERSONALES</h2>
            <PText>
              <span className="info-line">
                DR. JUAN PABLO AGUIRRE — DPTO. LEGAL, DINERS CLUB — 0992716706
              </span>
              <span className="info-line">
                DR. MIGUEL LIMA ENDARA — ESTUDIO JURÍDICO LIMA ASOCIADOS —
                0992735112
              </span>
              <span className="info-line">
                DR. GABRIEL ROJAS — LAW-FIRM ROJAS Y RODRÍGUEZ ABOGADOS —
                0995088604
              </span>
              <span className="info-line">
                DR. ARMANDO MAYORGA — ESTUDIO JURÍDICO MAYORGA ASOCIADOS —
                0992767318
              </span>
            </PText>
          </div>
        </div>
        <Advantages />
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
