import React from "react";
import styled, { keyframes } from "styled-components";
import {
  FaAward,
  FaBalanceScale,
  FaUserTie,
  FaHandshake,
  FaGavel,
  FaChartLine,
  FaCoins,
  FaRegCreditCard,
} from "react-icons/fa";

const FeaturesBannerStyles = styled.div`
  padding: 2rem 0;
  background-color: var(--primary-bg);

  .features__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .features__item {
    padding: 2.5rem;
    background: linear-gradient(
      300deg,
      #7e7d7d 10%,
      #555555 25%,
      #3b3b3b 50%,
      #272727 75%,
      #000 100%
    );
    border: 1px solid #333;
    border-radius: 8px;
    text-align: left;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 3px 3px 3px #000;

    &:hover {
      transform: translateY(-5px);
      border-color: #555;
      box-shadow: 6px 6px 6px #000;
    }
  }

  .features__icon {
    font-size: 3rem;
    width: 8rem;
    height: 8rem;
    flex-shrink: 0;
    border-radius: 12px;
    background: linear-gradient(
      300deg,
      #7e7d7d 10%,
      #555555 25%,
      #3b3b3b 50%,
      #272727 75%,
      #7e7d7d 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    margin-right: 1.5rem;
    color: var(--accent-gold);

    box-shadow: 3px 3px 3px #000;
    svg {
      width: 5rem;
      height: 5rem;
    }
  }

  .features__title {
    font-size: 1.3rem;
    font-family: "Montserrat SemiBold", sans-serif;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.5;
    text-shadow: -0.2rem 0.1rem rgba(0, 0, 0, 0.5);
  }

  /* Responsividad */
  @media only screen and (max-width: 900px) {
    .features__wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 500px) {
    .features__wrapper {
      grid-template-columns: 1fr;
    }
  }
`;

export default function FeaturesBanner() {
  const features = [
    { id: 1, icon: <FaAward />, title: "Alta especialización y trayectoria" },
    {
      id: 2,
      icon: <FaBalanceScale />,
      title: "Análisis técnico de Viabilidad",
    },
    { id: 3, icon: <FaUserTie />, title: "Atención personalizada" },
    { id: 4, icon: <FaHandshake />, title: "Gestión procesal ágil" },
    {
      id: 5,
      icon: <FaGavel />,
      title: "Eficiencia en litigios complejos",
    },
    { id: 6, icon: <FaChartLine />, title: "Alto índice de éxito" },
    {
      id: 7,
      icon: <FaCoins />,
      title: "Honorarios profesionales competitivos",
    },
    {
      id: 8,
      icon: <FaRegCreditCard />,
      title: "Facilidades de pago | 0% Interés",
    },
  ];

  return (
    <FeaturesBannerStyles>
      <div className="container">
        <div className="features__wrapper">
          {features.map((item) => (
            <div className="features__item" key={item.id}>
              <div className="features__icon">{item.icon}</div>
              <p className="features__title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </FeaturesBannerStyles>
  );
}
