import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  background-color: ${(props) => props.variant === 'outline' ? '#FFF' : 'palevioletred'};
  color: ${(props) => props.variant === 'outline' ? 'palevioletred' : '#fff'};
  font-size: 1.5em;
  margin: 1em;
  padding: 1em;
  border: 2px solid palevioletred;
  border-radius: 5px;
  display: block;
  cursor: pointer;
`
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`