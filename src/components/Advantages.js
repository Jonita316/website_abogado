import React from "react";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import { MdSchool } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

const AdvantagesStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background: linear-gradient(
      300deg,
      #7e7d7d 10%,
      #555555 25%,
      #3b3b3b 50%,
      #272727 75%,
      #272727 100%
    );
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
    box-shadow: 6px 6px 6px #000;
  }
  .about__subheading__up {
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    text-align: center;
    span {
      text-shadow: -0.2rem 0.1rem rgba(0, 0, 0, 0.5);
    }
  }
  .top-section {
    display: flex;
    align-items: flex-start; /* Align items to the top */
    justify-content: center;
    gap: 2rem;
  }
  .left__left,
  .right__right {
    flex: 1; /* Each column takes up equal space */
    text-shadow: -0.2rem 0.1rem rgba(0, 0, 0, 0.5);
  }

  /* Responsive Styles */
  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .top-section {
      flex-direction: column;
      gap: -10; /* Remove gap to rely on item margin for spacing */
      align-items: center; /* Center the columns */
    }
    .left__left,
    .right__right {
      width: 100%;
      max-width: 500px; /* Max width for the columns */
    }
  }
`;

export default function Advantages() {
  return (
    <AdvantagesStyles>
      <div className="contactBanner__wrapper">
        <div className="container">
          <p className="about__subheading__up">
            <span>COMPROMISO, EXCELENCIA Y RESULTADOS</span>
          </p>
          <div className="top-section">
            <div className="left__left">
              <ContactInfoItem
                icon={<MdSchool />}
                text="ESPECIALIZACIÓN Y EXPERIENCIA"
              />
              <ContactInfoItem
                icon={<AiOutlineCheckCircle />}
                text="COMPROBAMOS VIABILIDAD"
              />
              <ContactInfoItem
                icon={<FaUserAlt />}
                text="ATENCIÓN PERSONALIZADA"
              />
              <ContactInfoItem icon={<FaRocket />} text="PROCESOS ÁGILES" />
            </div>
            <div className="right__right">
              <ContactInfoItem
                icon={<FaRegFileAlt />}
                text="MÚLTIPLES CASOS ANUALES"
              />
              <ContactInfoItem
                icon={<AiOutlineBarChart />}
                text="ALTO PORCIENTO ÉXITO"
              />
              <ContactInfoItem
                icon={<FaDollarSign />}
                text="HONORARIOS ECONÓMICOS"
              />
              <ContactInfoItem
                icon={<FaRegCreditCard />}
                text="PAGOS SIN INTERESES"
              />
            </div>
          </div>
        </div>
      </div>
    </AdvantagesStyles>
  );
}
