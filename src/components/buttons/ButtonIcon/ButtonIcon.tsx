import React, { forwardRef, type ReactElement, type ForwardedRef } from "react";

import classNames from "classnames";

import Button, { type ButtonProps } from "@src/components/buttons/Button";

import "./ButtonIcon.css";

export interface ButtonIconProps extends ButtonProps {
  src: string;
  alt?: string;
}

const ButtonIcon = (
  { className, src, alt, ...buttonProps }: ButtonIconProps,
  ref: ForwardedRef<HTMLButtonElement>
): ReactElement => (
  <Button
    {...buttonProps}
    ref={ref}
    className={classNames("button-icon", className)}
  >
    <img height="100%" src={src} alt={alt} />
  </Button>
);

export default forwardRef(ButtonIcon);
