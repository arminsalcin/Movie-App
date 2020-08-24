import styled from 'styled-components';

export const Likes = styled.p`
  font-size: 0.6em;
  opacity: 0;
  margin-left: 8px;
  transition: all 0.3s;
`;

export const Date = styled.p`
  font-size: 0.6em;
  opacity: 0.9;
`;

export const ReadMoreButton = styled.div`
  margin: 1em auto 1em;
  text-align: center;
  font-size: 0.7em;
  color: #fff;
  font-weight: 700;

  &:after {
    content: '→';
    opacity: 0;
    margin-left: 8px;
    transition: all 0.3s;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }
`;

export const Overview = styled.p`
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  /* number of lines to show */
  margin: 0;
  min-height: 57px;
`;

export const Title = styled.h1`
  font-size: 1.7em;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  margin-bottom: 16px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`;

export const TopBar = styled.div`
  position: relative;
  color: white;
  z-index: 2;
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const CardData = styled.div`
  position: relative;
  color: white;
  z-index: 2;
  transform: translateY(calc(100px + 1em));
  transition: transform 0.1s;
  padding: 1em;
  text-align: center;
`;

export const Image = styled.img`
  position: absolute;
  display: block;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: 0;
`;

export const Container = styled.div`
  border-radius: 10px;
  background-color: black;
  height: 400px;
  position: relative;
  overflow: hidden;
  box-shadow: 8px 16px 17px -14px #0000002e;
  &:hover ${Image} {
    -webkit-filter: blur(2px);
    /* Chrome, Safari, Opera */
    filter: blur(2px);
  }

  &:hover ${CardData} {
    transform: translateY(0);
  }

  &:hover ${Likes} {
    opacity: 0.9;
  }

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.66) 100%
    );
  }
`;
