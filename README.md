# Sweco theme for [Mantine](https://mantine.dev/)

Usage:

```tsx
import { theme, cssVariablesResolver } from "@sweco/theme-mantine";
// must be after the import of Mantine's own styles
import "@sweco/theme-mantine/style.css";

...

    <MantineProvider
      theme={theme}
      cssVariablesResolver={cssVariablesResolver}
    >
      <App />
    </MantineProvider>

...
```

## Components

This package exposes a small set of ready-to-use Sweco branded components under `@sweco/theme-mantine/lib/components`.

### `<SwecoLogo />`

```tsx
import { SwecoLogo } from "@sweco/theme-mantine";

function Example() {
  return (
    <Group gap="md">
      <SwecoLogo size={32} />
      <SwecoLogo size={32} black />
    </Group>
  );
}
```

The logo renders the Sweco mark at the specified pixel `size`. Set `black` to switch to the dark-on-light variant (defaults to the white-on-dark asset). All other Mantine `<Image>` props (except `src`, `alt`, `height`, `w`, `fit`) are forwarded.

### `<Header />`

```tsx
import { AppShell } from "@mantine/core";
import { Header } from "@sweco/theme-mantine";

function Layout() {
  return (
    <AppShell
      header={{ height: 72 }}
    >
      <Header light>{/* navigation/actions */}</Header>
      <AppShell.Main>{/* page content */}</AppShell.Main>
    </AppShell>
  );
}
```

`Header` wraps `AppShell.Header` and applies the Sweco palette, spacing and typography. Pass the optional `light` prop to render the light background version with dark text, or omit it for the default dark header. Any other `AppShellHeaderProps` are forwarded so you can keep using Mantine's slot-based layout.

## Subtle navigation button variant

The theme introduces a `variant="subtle"` style for Mantine `<Button>` when it contains a `rightSection` (ideal for navigation CTAs). The button gains a pill-shaped accent for the right section and adapts automatically to light/dark schemes.

```tsx
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

function Cta() {
  return (
    <Button variant="subtle" color="green" size="lg" rightSection={<IconArrowRight />}>
      Go there now
    </Button>
  );
}
```
