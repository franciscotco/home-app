import React, { type PropsWithChildren, type ReactElement } from "react";

import "./FormGroup.css";

export interface FormGroupProps {
  label: string;
  name: string;
}

const FormGroup = ({
  children,
  label,
  name,
}: PropsWithChildren<FormGroupProps>): ReactElement => (
  <div className="form-group">
    <label htmlFor={name} className="form-group--label">
      {label}
    </label>
    <div>{children}</div>
  </div>
);

export default FormGroup;
