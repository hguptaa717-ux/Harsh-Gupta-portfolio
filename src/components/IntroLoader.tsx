"use client";

import { useEffect, useState } from "react";
import styles from "./IntroLoader.module.scss";

const storageKey = "harsh-portfolio-intro-seen-v2";
const introDuration = 2500;

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

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

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(
        100,
        Math.round((elapsed / introDuration) * 100),
      );

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        finishIntro();
      } else {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  function finishIntro() {
    try {
      sessionStorage.setItem(storageKey, "true");
    } catch {
      // The intro can still be dismissed if session storage is unavailable.
    }

    setProgress(100);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <div className={styles.content}>
        <h1 className={styles.name}>Harsh Gupta</h1>
        <p className={styles.subtitle}>Business Analytics Portfolio</p>

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
          <span className={styles.percentage} aria-label={`${progress}% loaded`}>
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
