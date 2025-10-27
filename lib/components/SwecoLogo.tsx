import { FC } from "react";

import whiteSvg from "../assets/sweco_white.svg";
import blackSvg from "../assets/sweco_black.svg";
import { Image, type ImageProps } from "@mantine/core";

export const SwecoLogo: FC<
  { size: number; black?: true } & Omit<
    ImageProps,
    "src" | "alt" | "height" | "w" | "fit"
  >
> = ({ size, black, ...rest }) => {
  return (
    <Image
      src={black ? blackSvg : whiteSvg}
      height={size}
      alt=""
      w="auto"
      fit="contain"
      {...rest}
    />
  );
};
