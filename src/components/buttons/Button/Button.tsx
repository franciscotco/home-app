import React, { forwardRef, type ButtonHTMLAttributes, type ReactElement, ForwardedRef } from "react";

import classNames from "classnames";

import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...buttonProps }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>): ReactElement => (
  <button {...buttonProps} ref={ref} className={classNames(className, "button")}>{children}</button>
);

export default forwardRef(Button);
