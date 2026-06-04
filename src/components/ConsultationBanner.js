import React from "react";
import styled, { keyframes } from "styled-components";
import { FaLaptop, FaPhoneVolume, FaUserTie } from "react-icons/fa";

// Animación de flotación
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const ConsultationBannerStyles = styled.div`
  padding: 5rem 0;
  background-color: var(--dark-bg);

  .consultation__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .consultation__item {
    background: linear-gradient(
      50deg,
      #7e7d7d 10%,
      #555555 25%,
      #3b3b3b 50%,
      #555555 75%,
      #555555 100%
    );
    padding: 2rem;
    border-radius: 12px;
    text-align: left;
    transition: 0.3s ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    &:hover {
      transform: scale(1.05);
      border-color: var(--gray-1);
    }
  }

  .consultation__icon {
    font-size: 3rem;
    width: 8rem;
    height: 8rem;
    flex-shrink: 0;
    border-radius: 50%;
    background: linear-gradient(
      300deg,
      #7e7d7d 10%,
      #555555 25%,
      #3b3b3b 50%,
      #272727 75%,
      #7e7d7d 100%
    );
    display: flex;

    border: 1px solid #333;
    box-shadow: 3px 3px 3px #000;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    margin-right: 1.5rem;
    /* Aplicamos la animación aquí */
    animation: ${float} 3s ease-in-out infinite;
    svg {
      width: 4rem;
      height: 4rem;
    }
  }

  .consultation__title {
    font-size: 1.4rem;
    font-family: "Montserrat SemiBold";
    color: var(--gray-1);
    text-transform: uppercase;
    line-height: 1.5;
    text-shadow: -0.2rem 0.1rem rgba(0, 0, 0, 0.5);
  }

  /* Responsividad */
  @media only screen and (max-width: 900px) {
    .consultation__wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 600px) {
    .consultation__wrapper {
      grid-template-columns: 1fr;
    }
  }
`;

export default function ConsultationBanner() {
  const items = [
    {
      id: 1,
      icon: <FaLaptop />,
      title: "Consulte su duda legal  en Quito en línea",
    },
    {
      id: 2,
      icon: <FaPhoneVolume />,
      title: "Consulta por TELÉFONO AHORA",
    },
    {
      id: 3,
      icon: <FaUserTie />,
      title: "CONSULTA PRESENCIAL ",
    },
  ];

  return (
    <ConsultationBannerStyles>
      <div className="container">
        <div className="consultation__wrapper">
          {items.map((item) => (
            <div className="consultation__item" key={item.id}>
              <div className="consultation__icon">{item.icon}</div>
              <p className="consultation__title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </ConsultationBannerStyles>
  );
}
