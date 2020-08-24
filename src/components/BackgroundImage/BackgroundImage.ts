import styled from 'styled-components';

interface IBackgroundImageProps {
  readonly image: string;
}

export const BackgroundImage = styled.div<IBackgroundImageProps>`
  background-image: ${(props) => props.image && `url(${props.image})`};
  height: 100%;
  width: 100%;
  position: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  z-index: -1;
`;

export const BackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000099;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;
