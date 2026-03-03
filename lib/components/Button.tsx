import { FC } from "react";
import { Button, ButtonProps } from "@mantine/core";

export const PrimaryButton: FC<ButtonProps> = ({ ...props }) => {
  return <Button color="green" {...props} />;
};

export const SecondaryButton: FC<ButtonProps> = ({ ...props }) => {
  return <Button variant="outline" color="green" {...props} />;
};

export const TertiaryButton: FC<ButtonProps> = ({ ...props }) => {
  return <Button color="green.0" {...props} />;
};