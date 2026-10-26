"use client";

import { useEffect, useState } from "react";
import styles from "./IntroLoader.module.scss";

const storageKey = "harsh-portfolio-intro-seen-v2";
const introDuration = 1800;
const fadeDuration = 550;
const startingProgress = 5;

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(startingProgress);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey) === "true") {
        setVisible(false);
        return;
      }
    } catch {
      // Continue showing the intro if session storage is unavailable.
    }

    const startTime = Date.now();
    let animationFrame = 0;
    let fallbackTimer: number | undefined;
    let exitTimer: number | undefined;
    let completed = false;

    const completeIntro = () => {
      if (completed) return;
      completed = true;

      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
      }

      try {
        sessionStorage.setItem(storageKey, "true");
      } catch {
        // The intro can still finish if session storage is unavailable.
      }

      setProgress(100);
      setExiting(true);
      exitTimer = window.setTimeout(() => setVisible(false), fadeDuration);
    };

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const fraction = Math.min(elapsed / introDuration, 1);
      const nextProgress = Math.min(
        100,
        startingProgress + Math.round(fraction * (100 - startingProgress)),
      );

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        completeIntro();
      } else {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    // Fallback in case animation frames are delayed or throttled.
    fallbackTimer = window.setTimeout(completeIntro, introDuration + 100);

    return () => {
      window.cancelAnimationFrame(animationFrame);

      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
      }

      if (exitTimer !== undefined) {
        window.clearTimeout(exitTimer);
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${exiting ? styles.exiting : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className={styles.content}>
        <h1 className={styles.name}>Harsh Gupta</h1>
        <p className={styles.subtitle}>Business Analytics Portfolio</p>

        <div className={styles.loadingSection}>
          <span className={styles.loadingLabel}>Loading portfolio</span>

          <div className={styles.progressRow}>
            <div
              className={styles.progressTrack}
              role="progressbar"
              aria-label="Loading portfolio"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className={styles.percentage}>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
