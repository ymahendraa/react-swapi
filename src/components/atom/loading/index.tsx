import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    box-shadow: 0.2em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: 0.2em 0.2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 0.2em 0 0px currentcolor;
  }
  37% {
    box-shadow: -0.2em 0.2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -0.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -0.2em -0.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -0.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: 0.2em -0.2em 0 0 currentcolor;
  }
`;

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
`;

const rotateccw = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
`;

const Loader = styled.div`
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #fff;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s ${spin} linear infinite;
  }

  &:after {
    color: #ff3d00;
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }

  @media (prefers-reduced-motion: reduce) {
    /* Disable animations on systems with reduced motion preference */
    animation: none;

    &:before,
    &:after {
      animation: none;
    }
  }
`;

export default Loader;
