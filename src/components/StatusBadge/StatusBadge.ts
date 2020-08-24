import styled from 'styled-components';

interface IStatusBadge {
  readonly outlined?: boolean;
}

const StatusBadge = styled.div<IStatusBadge>`
  background-color: ${(props) => (props.outlined ? 'transparent' : '#2fb759')};
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  ${(props) =>
    props.outlined &&
    ` 
  border:1px solid #fff;
  padding:5px;
  font-weight:300;
  font-size:0.9em;
  border-radius:6px;
  
  `};
`;

export default StatusBadge;
