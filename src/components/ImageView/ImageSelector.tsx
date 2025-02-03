"use client";
import { useEffect, useState } from "react";
import {
  StandBottom,
  StandLeft,
  StandRight,
  StandTop,
  WalkBottom,
  WalkBottomLeft,
  WalkBottomRight,
  WalkLeft,
  WalkRight,
  WalkTop,
  WalkTopLeft,
  WalkTopRight,
} from "./ImageDirections";

import "./ImageSelector.css";

const validKeys = ["a", "s", "d", "w"];

export const ImageSelector = () => {
  const [lastDirection, setLastDirection] = useState("bottom");
  const [imageView, setImageView] = useState("stand-bottom");
  const [teclasPresionadas, setTeclasPresionadas] = useState({
    a: false,
    s: false,
    d: false,
    w: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const keyPressed = event.key.toLowerCase();
      if (validKeys.includes(keyPressed)) {
        setTeclasPresionadas((prevState) => ({
          ...prevState,
          [event.key]: true,
        }));
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const keyPressed = event.key.toLowerCase();

      if (validKeys.includes(keyPressed)) {
        setTeclasPresionadas((prevState) => ({
          ...prevState,
          [event.key]: false,
        }));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const { a, s, d, w } = teclasPresionadas;
    if (s && d) {
      setImageView("walk-bottom-right");
      setLastDirection("bottom");
    } else if (s && a) {
      setImageView("walk-bottom-left");
      setLastDirection("bottom");
    } else if (w && a) {
      setImageView("walk-top-left");
      setLastDirection("top");
    } else if (w && d) {
      setImageView("walk-top-right");
      setLastDirection("top");
    } else if (s) {
      setImageView("walk-bottom");
      setLastDirection("bottom");
    } else if (w) {
      setImageView("walk-top");
      setLastDirection("top");
    } else if (d) {
      setImageView("walk-right");
      setLastDirection("right");
    } else if (a) {
      setImageView("walk-left");
      setLastDirection("left");
    } else {
      // no hay ninguna tecla presionada
      setImageView(`stand-${lastDirection}`);
    }
  }, [teclasPresionadas]);

  return (
    <div className="imageSelector">
      {imageView === "walk-right" && <WalkRight />}
      {imageView === "walk-left" && <WalkLeft />}
      {imageView === "walk-top" && <WalkTop />}
      {imageView === "walk-bottom" && <WalkBottom />}

      {imageView === "walk-bottom-right" && <WalkBottomRight />}
      {imageView === "walk-bottom-left" && <WalkBottomLeft />}
      {imageView === "walk-top-left" && <WalkTopLeft />}
      {imageView === "walk-top-right" && <WalkTopRight />}

      {imageView === "stand-right" && <StandRight />}
      {imageView === "stand-left" && <StandLeft />}
      {imageView === "stand-top" && <StandTop />}
      {imageView === "stand-bottom" && <StandBottom />}
    </div>
  );
};
