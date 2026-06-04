import React from "react";
import PText from "./PText";
import FooterCol from "./FooterCol";
import styled from "styled-components";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin: center;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">GABRIEL RODRÍGUEZ</h1>
          <PText>
            DEFENSA LEGAL INTEGRAL CON LOS MÁS ALTOS ESTÁNDARES DE ÉTICA Y
            PROFESIONALISMO. COMPROMETIDOS CON LA PROTECCIÓN DE SUS DERECHOS Y
            LA OBTENCIÓN DE RESULTADOS EFECTIVOS EN CADA PROCESO JURÍDICO.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="MENU"
            links={[
              {
                title: "INICIO",
                path: "/",
                type: "Link",
              },
              {
                title: "SOBRE MI",
                path: "/about",
                type: "Link",
              },
              {
                title: "CONCULTA LEGAL",
                path: "/ConsultaLegal",
                type: "Link",
              },

              {
                title: "AREAS LEGALES",
                path: "/projects",
                type: "Link",
              },
              {
                title: "CONTACTO",
                path: "/contact",
                type: "Link",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="INFORMACION DE CONTACTO"
            links={[
              {
                title: "0993972833",
                path: "0993972833",
              },
              {
                title: "g.rodriguezm0730@gmail.com",
                path: "jg.rodriguezm0730@gmail.com",
              },
              {
                title: "Turumbamba alto, Quito, Pichimcha, Ecuador",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="REDES SOCIALES"
            links={[
              {
                title: "FACEBOOK",
                path: "https://www.facebook.com/gabriel.rodriguez.711593",
              },
              {
                title: "INSTAGRAM",
                path: "https://www.instagram.com/gabrielrodriguez556/",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>JONYSOFT 2026</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
