import styled, { css } from "styled-components";

interface ItemProps {
  done?: boolean
}
export const Item = styled.li<ItemProps>`
  display: flex;
  justify-content: space-between;
  text-align: left;

  img {
    width: 20px;
    height: 20px;
  }

  ${(props) => (props.done ? css`
    text-decoration: line-through;
    color: gray;
    cursor: not-allowed;
  `: ``)}
`;