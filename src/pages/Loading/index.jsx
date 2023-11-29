import { Container, Svg } from "./style";

export const Loading = () => {
  return (
    <>
      <Container></Container>
      <Svg width="0" height="0">
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </Svg>
    </>
  );
};
