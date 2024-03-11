import { FC } from "react";

import whiteSvg from "../assets/sweco_white.svg";
import blackSvg from "../assets/sweco_black.svg";

export const SwecoLogo: FC<{ size: number; black?: true }> = ({
  size,
  black,
}) => {
  return <img src={black ? blackSvg : whiteSvg} height={size} alt="" />;
};
