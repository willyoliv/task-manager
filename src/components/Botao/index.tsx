import { BotaoDefault } from "./styles";

interface BotaoProps {
  texto: string;
  cor: string;
  acao?: () => void
}

export default function Botao(props: BotaoProps) {
  return <BotaoDefault cor={props.cor} onClick={props.acao}>{props.texto}</BotaoDefault>
}