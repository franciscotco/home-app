import React, {
  type ReactNode,
  type PropsWithChildren,
  type ReactElement,
} from "react";

import { Label, Root } from "./FormGroup.styles";

export interface FormGroupProps {
  align?: "center";
  label: ReactNode;
  name: string;
  width?: "full";
}

const FormGroup = ({
  align,
  children,
  label,
  name,
  width,
}: PropsWithChildren<FormGroupProps>): ReactElement => (
  <Root width={width}>
    <Label align={align} htmlFor={name}>
      {label}
    </Label>
    {children}
  </Root>
);

export default FormGroup;
