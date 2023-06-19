import React, {
  type ForwardedRef,
  type ReactElement,
  type InputHTMLAttributes,
  forwardRef,
} from "react";

import { InputRoot } from "./Input.styles";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = (
  { disabled, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
): ReactElement => <InputRoot {...props} ref={ref} disabled={disabled} />;

export default forwardRef(Input);
