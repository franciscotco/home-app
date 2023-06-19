import React, { type ReactElement } from "react";

import { type ExpenseName } from "@src/interfaces/Expenses";

import { Root } from "./Avatar.styles";

const formatName = (name: ExpenseName): string =>
  name.substring(0, 2).toUpperCase();

export interface AvatarProps {
  name: ExpenseName;
}

const Avatar = ({ name }: AvatarProps): ReactElement => (
  <Root name={name}>{formatName(name)}</Root>
);

export default Avatar;
