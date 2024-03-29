import React, { useEffect } from 'react';
import styled from 'styled-components';

const SakuraFalling = ({ numberOfPetals = 10 }) => {
    useEffect(() => {
        const container = document.getElementById('sakura-container');

        // Create sakura petals
        for (let i = 0; i < numberOfPetals; i++) {
            const petal = document.createElement('div');
            petal.className = 'sakura-petal';
            container.appendChild(petal);

            // Set initial position
            const initialX = Math.random() * window.innerWidth;
            const initialY = Math.random() * window.innerHeight - window.innerHeight;
            petal.style.left = `${initialX}px`;
            petal.style.top = `${initialY}px`;

            // Animation
            const animationDuration = Math.random() * 5 + 5; // between 5 and 10 seconds
            petal.style.animation = `fall ${animationDuration}s linear infinite`;

            // Remove petal after animation
            petal.addEventListener('animationiteration', () => {
                petal.style.top = `${Math.random() * window.innerHeight - window.innerHeight}px`;
                petal.style.left = `${Math.random() * window.innerWidth}px`;
            });
        }

        // Clean up on component unmount
        return () => {
            container.innerHTML = '';
        };
    }, [numberOfPetals]);

    return <SakuraContainer id="sakura-container" />;
};

const SakuraContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  z-index: 9999;

  .sakura-petal {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #f7c3d1;
    clip-path: polygon(
        50% 0%,
        90% 10%,
        100% 40%,
        80% 70%,
        50% 100%,
        20% 70%,
        0% 40%,
        10% 10%
      );
  }

  @keyframes fall {
    to {
      transform: translateY(${window.innerHeight}px);
    }
  }
`;

export default SakuraFalling;
