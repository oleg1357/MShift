import styled, { keyframes } from "styled-components";

const Pixel = styled.div`
  background: ${(props) => props.color};
`;

const beat = keyframes`
  to {
    transform: scale(0.9);
  }
`;

const Art = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) => props.width * props.pixelWidth}px;
  height: ${(props) => props.height * props.pixelHeight}px;

  & > ${Pixel} {
    width: ${(props) => props.pixelWidth}px;
    height: ${(props) => props.pixelHeight}px;
  }
  animation: ${beat} 1.25s infinite;
`;

const R = `rgb(200, 0, 0)`;
const S = `rgb(160, 0, 0)`;
const H = `rgb(255, 255, 255)`;
const B = "rgb(0, 0, 0)";
const _ = "rgba(0, 0, 0, 0)";

const data = [
  _,
  _,
  B,
  B,
  B,
  _,
  _,
  _,
  B,
  B,
  B,
  _,
  _,
  _,
  B,
  R,
  R,
  R,
  B,
  _,
  B,
  R,
  R,
  S,
  B,
  _,
  B,
  R,
  H,
  H,
  R,
  R,
  B,
  R,
  R,
  R,
  R,
  S,
  B,
  B,
  R,
  H,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  S,
  B,
  B,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  S,
  B,
  B,
  R,
  H,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  S,
  B,
  _,
  B,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  R,
  S,
  B,
  _,
  _,
  _,
  B,
  R,
  R,
  R,
  R,
  R,
  R,
  S,
  B,
  _,
  _,
  _,
  _,
  _,
  B,
  R,
  R,
  R,
  R,
  S,
  B,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  B,
  R,
  R,
  S,
  B,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  B,
  S,
  B,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  B,
  _,
  _,
  _,
  _,
  _,
  _,
];

const Display = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  font-family: monospace;
  justify-content: center;
  width: 100%;
  height: 100%;
  h1 {
    color: azure;
  }
`;

const Heart = (props) => (
  <Display>
    <Art width={13} height={12} pixelWidth={20} pixelHeight={20}>
      {data.map((i, index) => (
        <Pixel color={i} key={index} />
      ))}
    </Art>
    <h1>You didn't like anything yet</h1>
  </Display>
);

export default Heart;
