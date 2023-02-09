import { Button as MButton } from "@mantine/core";

import "./button.css";
import "./button.scss";
import { StyledButton } from "./button.styles";

export function Button() {
  return (
    <div className="btn-list">
      <button className="button-css">Click me</button>
      <button className="button-scss">Click me</button>
      <StyledButton>I am a styled button</StyledButton>
      <MButton color="violet" size="lg">
        I am React Component Library Btn
      </MButton>
    </div>
  );
}
