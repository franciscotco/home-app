import React, { forwardRef, type ButtonHTMLAttributes, type ReactElement, ForwardedRef } from "react";

import classNames from "classnames";

import { type ControlSize } from "../../../interfaces/Controls";

import "./Button.css";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
  size?: ControlSize
}

const Button = ({ children, className, size = "medium", ...buttonProps }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): ReactElement => (
  <button {...buttonProps} ref={ref} className={classNames(className, "button", { [size]: Boolean(size) })}>{children}</button>
);

export default forwardRef(Button);
