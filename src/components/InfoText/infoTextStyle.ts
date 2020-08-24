import styled from 'styled-components';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoName = styled.p`
  line-height: 2;
  color: #fff;

  font-size: 1.5em;
  font-weight: bold;
`;

const InfoValue = styled.p`
  font-weight: 400;
  color: #fff;
`;

export { InfoName, InfoWrapper, InfoValue };
