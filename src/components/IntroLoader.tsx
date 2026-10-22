"use client";

import { useEffect, useState } from "react";
import styles from "./IntroLoader.module.scss";

const storageKey = "harsh-portfolio-intro-seen";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(storageKey) === "true") {
        setVisible(false);
        return;
      }
    } catch {
      // Continue showing the intro if session storage is unavailable.
    }

    const timer = window.setTimeout(finishIntro, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  function finishIntro() {
    try {
      sessionStorage.setItem(storageKey, "true");
    } catch {
      // The intro can still be dismissed if session storage is unavailable.
    }

    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <div className={styles.content}>
        <h1 className={styles.name}>Harsh Gupta</h1>
        <p className={styles.subtitle}>Business Analytics Portfolio</p>

        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-label="Loading portfolio"
        >
          <div className={styles.progressBar} />
        </div>

        <button
          className={styles.skipButton}
          type="button"
          onClick={finishIntro}
        >
          Skip intro
        </button>
      </div>
    </div>
  );
}
