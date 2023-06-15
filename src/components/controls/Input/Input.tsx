import React, {
  type ForwardedRef,
  type ReactElement,
  type InputHTMLAttributes,
  forwardRef,
} from "react";

import classNames from "classnames";

import "./input.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (
  { className, disabled, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement => (
  <input
    {...props}
    ref={ref}
    disabled={disabled}
    className={classNames(className, "input")}
  />
);

export default forwardRef(Input);
