import { createContext, useState } from "react";

export const rotation = [
  "Legumes",
  "Greens",
  "Fruiting Vegetables",
  "Root Veggies",
];

let index = 0;

export const benefits = [
  "Adds Nitrogen to soil",
  "Require ample nitrogen",
  "Need ample phosphorus (+ some nitrogen)",
  "Light feeders, like more potassium and phosphorus than nitrogen",
];

export const rotationContext = createContext({
  currRotation: index,
  setRotation: (newRotation: number) => {},
});
