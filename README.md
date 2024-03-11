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
