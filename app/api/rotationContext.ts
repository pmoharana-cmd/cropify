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

export const description = [
  [
    "Nitrogen Fixation: Enhance soil nitrogen content via symbiotic relationships with nitrogen-fixing bacteria.",
    "Improved Soil Fertility: Reduce the need for synthetic fertilizers and promote soil fertility.",
    "Crop Rotation Benefits: Break disease cycles and improve nutrient availability with legume inclusion in crop rotation.",
  ],
  [
    "Minimal Soil Disturbance: Shallow root systems cause minimal soil disruption.",
    "Organic Matter Contribution: Decomposing residues add organic matter and enhance soil structure.",
    "Soil Protection: Serve as effective cover crops, preventing erosion and weed growth.",
  ],
  [
    "Moderate Impact: Medium-sized root systems have a moderate impact on soil.",
    "Nutrient Uptake: Absorb nutrients, necessitating nutrient replenishment as needed.",
  ],
  [
    "Soil Disturbance: Harvesting can disrupt soil structure, requiring careful handling.",
    "Organic Matter Addition: Contribute organic matter through root systems and decaying plant matter.",
  ],
];

export const rotationContext = createContext({
  currRotation: index,
  setRotation: (newRotation: number) => {},
});
