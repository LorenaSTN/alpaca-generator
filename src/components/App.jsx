import "../scss/App.scss";
import { useState, useRef } from "react";
import { images } from "./images.js";

function App() {
  const [layer, setLayers] = useState({
    Background: images.backgrounds.Blue50.src,
    Neck: images.neck.Default.src,
    Hair: images.hair.Normal.src,
    Ears: images.ears.Default.src,
    Eyes: images.eyes.Default.src,
    Nose: images.nose.Default.src,
    Mouth: images.mouth.Default.src,
    Leg: images.leg.Default.src,
  });

  return (
    <div>
      <h2 className="app__title">Alpaca Generator</h2>
    </div>
  );
}

export default App;
