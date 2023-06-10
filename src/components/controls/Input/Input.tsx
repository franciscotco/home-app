import React, { ForwardedRef, HTMLAttributes, useEffect, type ReactElement, InputHTMLAttributes, useCallback, forwardRef } from "react";

import classNames from "classnames";

import "./input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, disabled, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement => (
  <input {...props} ref={ref} disabled={disabled} className={classNames(className, "input")} />
);

export default forwardRef(Input);
