import { ComponentPropsWithoutRef, FC } from "react";
import { Button, ButtonProps } from "@mantine/core";

type Props = ButtonProps & ComponentPropsWithoutRef<"button">;

export const PrimaryButton: FC<Props> = ({ ...props }) => {
  return <Button color="green" {...props} />;
};

export const SecondaryButton: FC<Props> = ({ ...props }) => {
  return <Button variant="outline" color="green" {...props} />;
};

export const TertiaryButton: FC<Props> = ({ ...props }) => {
  return <Button color="green.0" {...props} />;
};
