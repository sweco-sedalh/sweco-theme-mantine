import { FC } from "react";

import { AppShell, AppShellHeaderProps } from "@mantine/core";
import cx from "clsx";

import classes from "./Header.module.css";

export interface HeaderProps extends AppShellHeaderProps {
  light?: boolean;
}

export const Header: FC<HeaderProps> = ({ light, ...props }) => {
  return (
    <AppShell.Header
      {...props}
      className={cx(classes.header, light && classes["header-light"])}
    />
  );
};
