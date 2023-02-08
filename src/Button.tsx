import "./button.css";
import "./button.scss";

import { StyledButton } from "./button.styles";

export function Button() {
  return (
    <>
      <button className="button-css">Click me</button>
      <button className="button-scss">Click me</button>
      <StyledButton>Styled Button</StyledButton>
    </>
  );
}
