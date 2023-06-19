import React, {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ForwardedRef,
} from "react";

import { type ControlSize } from "@src/interfaces/Controls";
import { type Variant } from "@src/interfaces/Variants";

import { ButtonRoot } from "./Button.styles";

export interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "size" | "width" | "className"
  > {
  size?: ControlSize;
  width?: "full";
  variant?: Variant;
}

const Button = (
  { children, size, width, ...buttonProps }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
): ReactElement => (
  <ButtonRoot {...buttonProps} ref={ref} size={size} width={width}>
    {children}
  </ButtonRoot>
);

export default forwardRef(Button);
