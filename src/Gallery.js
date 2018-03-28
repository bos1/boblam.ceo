import React from "react";
import certificate from "./images/certificate-of-participation.png";
import me from "./images/me-doing-the-computer.jpg";
import { Flex, Box } from "reflexbox";
import styled from "styled-components";
import back from "./images/back.jpg";
import champion from "./images/champion.jpg";
import seceret from "./images/code.JPG";
import r2d2 from "./images/r2d2.jpg";
import Iframe from "react-iframe";
import video from "./99.mp4";

const IMAGE_WIDTH = 350;

const Everything = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Gallery = () => (
  <Everything>
    <img src={certificate} width={`${IMAGE_WIDTH}px`} />
    <img src={champion} width={`${IMAGE_WIDTH}px`} />
    <img src={me} width={`${IMAGE_WIDTH}px`} />
    <img src={back} width={`${IMAGE_WIDTH}px`} />
    <img src={r2d2} width={`${IMAGE_WIDTH}px`} />
    <img src={seceret} width={`${IMAGE_WIDTH}px`} />
    <Iframe
      url={video}
      width="450px"
      height="450px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
      allowFullScreen
    />
  </Everything>
);
export default Gallery;
