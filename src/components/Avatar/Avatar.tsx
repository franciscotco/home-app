import React, { type ReactElement } from "react";

import { type ExpenseName } from "@src/interfaces/Expenses";

import "./Avatar.css";

interface AvatarItem {
  code: Uppercase<string>;
  color: `#${string}`;
}

const AVATARS = {
  francois: { code: "FR", color: "#228B22" },
  emma: { code: "EM", color: "#00008B" },
} satisfies Record<ExpenseName, AvatarItem>;

export interface AvatarProps {
  name: ExpenseName;
}

const Avatar = ({ name }: AvatarProps): ReactElement => (
  <div className="avatar" style={{ color: AVATARS[name].color }}>
    {AVATARS[name].code}
  </div>
);

export default Avatar;
