import React, { forwardRef, type ButtonHTMLAttributes, type ReactElement } from "react";

import classNames from "classnames";

import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...buttonProps }: ButtonProps): ReactElement => (
  <button {...buttonProps} className={classNames(className, "button")}>{children}</button>
);

export default forwardRef(Button);
