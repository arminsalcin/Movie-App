import styled from 'styled-components';

interface IStyledActive {
  active?: boolean;
}

const Item = styled.li`
  padding: 0 0.5rem;
`;

const Button = styled.button<IStyledActive>`
  background-color: transparent;
  border-radius: 5px;
  border: ${(props) => (props.active ? '1px solid #fff' : 'none')};
  color: white;
  opacity: ${(props) => (props.active ? 1 : 0.8)};
  text-decoration: none;
  padding: 5px;
  font-size: 1.1em;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

export { Item, Button };
