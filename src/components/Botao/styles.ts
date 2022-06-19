import styled from "styled-components";

interface CoresBotao {
  [key: string]: string
}
const coresBotao: CoresBotao = {
  success: "green",
  alert: "yellow",
  error: "red",
}

interface BotaoDefaultProps {
  cor: string
}

export const BotaoDefault = styled.button<BotaoDefaultProps>`
  border: none;
  background-color: ${(props) => coresBotao[props.cor]};
  color: white;
  border-radius: 20px;
  padding: 10px 30px;
`;