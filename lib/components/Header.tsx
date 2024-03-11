import { FC } from "react";

import { AppShell, AppShellHeaderProps } from "@mantine/core";

import classes from "./Header.module.css";

export const Header: FC<AppShellHeaderProps> = (props) => {
  return <AppShell.Header {...props} className={classes.header} />;
};
