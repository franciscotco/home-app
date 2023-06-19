import React, { forwardRef, type ReactElement, type ForwardedRef } from "react";

import Button, { type ButtonProps } from "@src/components/buttons/Button";

import { Img } from "./ButtonIcon.styles";

export interface ButtonIconProps extends ButtonProps {
  src: string;
  alt?: string;
}

const ButtonIcon = (
  { src, alt, ...buttonProps }: ButtonIconProps,
  ref: ForwardedRef<HTMLButtonElement>
): ReactElement => (
  <Button {...buttonProps} ref={ref}>
    <Img height="100%" src={src} alt={alt} />
  </Button>
);

export default forwardRef(ButtonIcon);
