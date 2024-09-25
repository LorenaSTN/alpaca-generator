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
      <div ref={imageContainerRef}>
        <ImageLayer src={layer.Background} />
        <ImageLayer src={layer.Neck} />
        <ImageLayer src={layer.Hair} />
        <ImageLayer src={layer.Ears} />
        <ImageLayer src={layer.Eyes} />
        <ImageLayer src={layer.Nose} />
        <ImageLayer src={layer.Mouth} />
        <ImageLayer src={layer.Leg} />
      </div>
    </div>
  );
}

export default App;
