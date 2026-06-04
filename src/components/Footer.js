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
          <h1 className="footer__col1__title">GABRIEL RODRIGUEZ</h1>
          <PText>
            PROFESIONAL DEL DERECHO CON EXPERIENCIA EN MÚLTIPLES ÁREAS LEGALES,
            COMPROMETIDO CON BRINDAR SOLUCIONES EFECTIVAS Y UN ASESORAMIENTO
            PERSONALIZADO
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
                path: "http://facebook.com",
              },
              {
                title: "INSTAGRAM",
                path: "http://instagram.com",
              },
              {
                title: "TWITTER",
                path: "http://twitter.com",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>&copy;PUCKCODERS 2025</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
