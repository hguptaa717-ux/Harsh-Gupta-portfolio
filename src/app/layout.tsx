import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import type { Viewport } from "next";
import classNames from "classnames";

import {
  Background,
  Column,
  Flex,
  Meta,
  Opacity,
  RevealFx,
  SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from "@/components";
import { IntroLoader } from "@/components/IntroLoader";
import { baseURL, effects, fonts, style, dataStyle, home, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

// viewport-fit=cover lets the bottom menu sit above the home indicator.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang={person.locale ?? "en"}
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;

                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};

                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });

                  function applyTimeBasedTheme() {
                    const hour = new Date().getHours();
                    const theme = hour >= 20 || hour < 6 ? 'dark' : 'light';

                    root.setAttribute('data-theme', theme);
                    localStorage.setItem('data-theme', theme);
                  }

                  function scheduleNextThemeChange() {
                    const now = new Date();
                    const hour = now.getHours();
                    const nextChange = new Date(now);

                    if (hour < 6) {
                      nextChange.setHours(6, 0, 0, 0);
                    } else if (hour < 20) {
                      nextChange.setHours(20, 0, 0, 0);
                    } else {
                      nextChange.setDate(nextChange.getDate() + 1);
                      nextChange.setHours(6, 0, 0, 0);
                    }

                    const delay = nextChange.getTime() - now.getTime();

                    window.setTimeout(function() {
                      applyTimeBasedTheme();
                      scheduleNextThemeChange();
                    }, delay);
                  }

                  applyTimeBasedTheme();
                  scheduleNextThemeChange();

                  Object.keys(config).forEach((key) => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>

      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{ minHeight: "100vh" }}
          margin="0"
          padding="0"
          horizontal="center"
        >
          <IntroLoader />

          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as Opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as Opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as Opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as Opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>

          {/* Animated analytics background */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            style={{
              position: "fixed",
              inset: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
              zIndex: 0,
              opacity: 0.72,
            }}
          >
            <style>
              {`
                .analytics-wash {
                  fill: rgba(255, 244, 225, 0.42);
                }

                .analytics-glow {
                  opacity: 0.42;
                }

                :root[data-theme="dark"] .analytics-wash {
                  fill: rgba(28, 22, 17, 0.38);
                }

                :root[data-theme="dark"] .analytics-glow {
                  opacity: 0.22;
                }

                @media (prefers-reduced-motion: reduce) {
                  .moving-particle,
                  .pulse-node {
                    display: none;
                  }
                }
              `}
            </style>

            <defs>
              <radialGradient id="cyanGlow">
                <stop offset="0%" stopColor="#ffe3a3" stopOpacity="0.72" />
                <stop offset="45%" stopColor="#ffd18a" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#ffd18a" stopOpacity="0" />
              </radialGradient>

              <radialGradient id="blueGlow">
                <stop offset="0%" stopColor="#ffc9a8" stopOpacity="0.58" />
                <stop offset="48%" stopColor="#ffc9a8" stopOpacity="0.23" />
                <stop offset="100%" stopColor="#ffc9a8" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="analyticsLine" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#d49a4a" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#c78b3b" stopOpacity="0.48" />
                <stop offset="100%" stopColor="#e2ad69" stopOpacity="0.12" />
              </linearGradient>

              <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="48" />
              </filter>

              <path
                id="leftDataFlow"
                d="M -40 650 C 130 610, 180 720, 330 650 S 520 590, 650 670"
              />
              <path
                id="rightDataFlow"
                d="M 820 260 C 970 320, 1060 210, 1180 270 S 1350 350, 1490 250"
              />
            </defs>

            {/* Warm background tint */}
            <rect className="analytics-wash" width="1440" height="900" />

            {/* Soft amber and peach glow */}
            <circle
              className="analytics-glow"
              cx="490"
              cy="360"
              r="330"
              fill="url(#cyanGlow)"
              filter="url(#softGlow)"
            />
            <circle
              className="analytics-glow"
              cx="1060"
              cy="590"
              r="300"
              fill="url(#blueGlow)"
              filter="url(#softGlow)"
            />

            {/* Chart-like connections */}
            <g fill="none" stroke="url(#analyticsLine)" strokeWidth="1.5">
              <path d="M -20 690 L 120 620 L 235 665 L 355 565 L 490 610 L 620 530" />
              <path d="M 820 340 L 950 390 L 1075 305 L 1190 350 L 1325 245 L 1470 290" />
              <path d="M 80 300 L 205 355 L 300 285 L 420 330" />
              <path d="M 1050 650 L 1150 590 L 1270 640 L 1390 555 L 1470 580" />
            </g>

            {/* Connected data points */}
            <g fill="#c78b3b" fillOpacity="0.46">
              <circle cx="120" cy="620" r="3" />
              <circle cx="235" cy="665" r="4" />
              <circle cx="355" cy="565" r="3" />
              <circle cx="490" cy="610" r="4" />
              <circle cx="950" cy="390" r="3" />
              <circle cx="1075" cy="305" r="4" />
              <circle cx="1190" cy="350" r="3" />
              <circle cx="1325" cy="245" r="4" />
              <circle cx="205" cy="355" r="3" />
              <circle cx="300" cy="285" r="4" />
              <circle cx="1150" cy="590" r="3" />
              <circle cx="1270" cy="640" r="4" />
            </g>

            {/* Moving data points */}
            <circle className="moving-particle" r="4" fill="#b8782c">
              <animateMotion dur="12s" repeatCount="indefinite">
                <mpath href="#leftDataFlow" />
              </animateMotion>
            </circle>

            <circle className="moving-particle" r="3.5" fill="#d39a55">
              <animateMotion dur="16s" repeatCount="indefinite">
                <mpath href="#rightDataFlow" />
              </animateMotion>
            </circle>

            {/* Gentle pulses on selected data points */}
            <circle className="pulse-node" cx="355" cy="565" r="4" fill="#c78b3b">
              <animate
                attributeName="r"
                values="3;6;3"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.35;0.8;0.35"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            <circle className="pulse-node" cx="1075" cy="305" r="4" fill="#d39a55">
              <animate
                attributeName="r"
                values="3;6;3"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.3;0.75;0.3"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          <Flex fillWidth minHeight="16" s={{ hide: true }} />
          <Header />

          <Flex
            as="main"
            zIndex={0}
            fillWidth
            padding="l"
            horizontal="center"
            flex={1}
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>

          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}
