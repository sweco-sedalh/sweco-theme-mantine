import { ComponentPropsWithoutRef, FC } from "react";
import { Button, ButtonProps } from "@mantine/core";

type Props = ButtonProps & ComponentPropsWithoutRef<"button">;

/**
 * Use `<Button variant="filled|outline|light|quaternary|warning|caution">`
 * directly in app code — that is the primary API.
 *
 * The wrappers below are kept as a fallback for the rare case where you
 * want a pre-bound variant (e.g. to override the default color for a
 * specific call site) or for backwards compatibility with older imports.
 *
 * Mirrors the 6 variants documented in `src/sections/SectionButtons.tsx`.
 */

export const PrimaryButton: FC<Props> = (props) => (
  <Button variant="filled" {...props} />
);

export const SecondaryButton: FC<Props> = (props) => (
  <Button variant="outline" {...props} />
);

export const TertiaryButton: FC<Props> = (props) => (
  <Button variant="light" {...props} />
);

export const QuaternaryButton: FC<Props> = (props) => (
  <Button variant="quaternary" {...props} />
);

export const WarningButton: FC<Props> = (props) => (
  <Button variant="warning" {...props} />
);

export const CautionButton: FC<Props> = (props) => (
  <Button variant="caution" {...props} />
);
