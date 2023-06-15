import React, { type ReactElement } from "react";

import { type Name } from "@src/interfaces/Name";

import "./Avatar.css";

interface AvatarItem {
  code: Uppercase<string>;
  color: `#${string}`;
}

const AVATARS = {
  francois: { code: "FR", color: "#555F38" },
  emma: { code: "EM", color: "#272AB0" },
} satisfies Record<Name, AvatarItem>;

export interface AvatarProps {
  name: Name;
}

const Avatar = ({ name }: AvatarProps): ReactElement => (
  <div className="avatar" style={{ color: AVATARS[name].color }}>
    {AVATARS[name].code}
  </div>
);

export default Avatar;
