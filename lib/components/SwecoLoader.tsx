import { forwardRef } from "react";
import type { MantineLoaderComponent } from "@mantine/core";

/**
 * Custom Sweco spinner — a background track ring with an animated
 * stroke-dash circle rotating on top.
 *
 * Respects `color` via `var(--loader-color)` and `size` via `var(--loader-size)`,
 * both set automatically by Mantine's `<Loader>` wrapper.
 */
export const SwecoLoader: MantineLoaderComponent = forwardRef(
  (props, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
      style={{
        width: "var(--loader-size)",
        height: "var(--loader-size)",
        ...((props as Record<string, unknown>).style as React.CSSProperties),
      }}
    >
      <style>{`
        .sweco-spinner {
          transform-origin: center;
          animation: swecoSpin 2s linear infinite;
        }
        .sweco-spinner circle {
          stroke-linecap: round;
          animation: swecoStroke 1.5s ease-in-out infinite;
        }
        @keyframes swecoSpin {
          100% { transform: rotate(360deg); }
        }
        @keyframes swecoStroke {
          0%         { stroke-dasharray: 0 150;  stroke-dashoffset: 0;   }
          47.5%      { stroke-dasharray: 42 150; stroke-dashoffset: -16; }
          95%, 100%  { stroke-dasharray: 42 150; stroke-dashoffset: -59; }
        }
      `}</style>
      {/* Background track ring */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.1667C17.0626 21.1667 21.1667 17.0626 21.1667 12C21.1667 6.93739 17.0626 2.83333 12 2.83333C6.93739 2.83333 2.83333 6.93739 2.83333 12C2.83333 17.0626 6.93739 21.1667 12 21.1667ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
        fill="#E1E1E1"
      />
      {/* Animated spinner stroke */}
      <g className="sweco-spinner">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          strokeWidth="2"
          stroke="var(--loader-color, currentColor)"
        />
      </g>
    </svg>
  ),
);

SwecoLoader.displayName = "SwecoLoader";


