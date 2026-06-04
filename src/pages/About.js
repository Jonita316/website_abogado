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
    display: block;
    margin-bottom: 1.2rem;
  }
  .about__info__item .para {
    max-width: 100%;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
  .about__info__item strong {
    display: inline-block;
    min-width: 180px;
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
              HOLA, SOY <span>GABRIEL RODRIGUEZ</span>
            </p>
            <h2 className="about__heading">DOCTOR EN JURISPRUDENCIA</h2>
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
            <img src={AboutImg} alt="Gabriel Rodriguez img" />
          </div>
        </div>

        <div className="about__info__items">
          <div className="about__info__item">
            <h2 className="about__info__heading">Datos personales</h2>
            <PText>
              <span className="info-line">
                <strong>Nombre:</strong> José Gabriel Rodríguez Merino
              </span>
              <span className="info-line">
                <strong>Cédula:</strong> 1715792451
              </span>
              <span className="info-line">
                <strong>Fecha de nacimiento:</strong> 1 de abril de 1980
              </span>
              <span className="info-line">
                <strong>Lugar de nacimiento:</strong> Loja, Cariamanga
              </span>
              <span className="info-line">
                <strong>Estado civil:</strong> Divorciado
              </span>
              <span className="info-line">
                <strong>Dirección:</strong> Turubamba Alto, SMB. M17 Casa 5
              </span>
              <span className="info-line">
                <strong>Teléfono:</strong> 0993972833
              </span>
              <span className="info-line">
                <strong>Email:</strong> g.rodriguezm0730@gmail.com
              </span>
            </PText>
          </div>

          <div className="about__info__item">
            <h2 className="about__info__heading">Formación académica</h2>
            <PText>
              <span className="info-line">
                <strong>Universitarios:</strong> Abogado de los Tribunales y
                Juzgados de la República del Ecuador – Universidad de los
                Hemisferios (Mención Derecho Procesal)
              </span>
              <span className="info-line">
                <strong>Estudios secundarios:</strong> Colegio Particular “Maria
                Augusta Urrutia de Escudero”
              </span>
              <span className="info-line">
                <strong>Estudios primarios:</strong> Escuela Juan Pablo II
              </span>
            </PText>
          </div>

          <div className="about__info__item">
            <h2 className="about__info__heading">Experiencia laboral</h2>
            <PText>
              <span className="info-line">
                <strong>Trust Fiduciaria</strong> — Mayo 2004 – Agosto 2017
              </span>
              <span className="info-line">Cargo: Asesor Legal Fiduciario</span>
              <span className="info-line">
                Responsabilidades principales: revisión de avisos de
                incumplimiento, confirmación de garantías, elaboración de cartas
                de notificación y retiro, coordinación de cuadrillas para
                retiros de vehículos, ingreso y control de información en
                sistemas y reportes, elaboración de KPI y atención al cliente.
              </span>
              <span className="info-line" style={{ marginTop: "2rem" }}>
                <strong>Law-Firm Rojas y Rodríguez Abogados</strong> — Abril
                2018 – Presente
              </span>
              <span className="info-line">
                Cargo: Abogado litigante patrocinador
              </span>
              <span className="info-line">
                Áreas: civil, penal, laboral, administrativo, tránsito,
                societario.
              </span>
            </PText>
          </div>

          <div className="about__info__item">
            <h2 className="about__info__heading">Referencias personales</h2>
            <PText>
              <span className="info-line">
                Dr. Juan Pablo Aguirre — Dpto. Legal, Diners Club — 0992716706
              </span>
              <span className="info-line">
                Dr. Miguel Lima Endara — Estudio Jurídico Lima Asociados —
                0992735112
              </span>
              <span className="info-line">
                Dr. Gabriel Rojas — Law-Firm Rojas y Rodríguez Abogados —
                0995088604
              </span>
              <span className="info-line">
                Dr. Armando Mayorga — Estudio Jurídico Mayorga Asociados —
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
