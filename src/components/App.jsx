import "../scss/App.scss";
import { useState, useRef } from "react";
import ImageLayer from "./ImageLayer.jsx";
import Options from "./Options.jsx";
import { toPng } from "html-to-image";
import { images } from "./Images.js";

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

  const [visibleLayer, setVisibleLayer] = useState(null);
  const imageContainerRef = useRef(null);

  const handleLayerChange = (layer, option) => {
    setLayers((prevLayers) => ({
      ...prevLayers,
      [layer]: option,
    }));
  };

  const handleLayerVisibility = (layer) => {
    setVisibleLayer((prevLayer) => (prevLayer === layer ? null : layer));
  };

  const handleSaveImage = () => {
    if (imageContainerRef.current === null) {
      return;
    }

    toPng(imageContainerRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "generated-image.png";
        link.click();
      })
      .catch((err) => {
        console.error("Error capturing image:", err);
      });
  };

  return (
    <div>
      <h2 className="app__title">Alpaca Generator</h2>
      <div className="app__section">
        <section className="app__section1">
          <div className="app__imagebox">
            <div className="app__imagepreview" ref={imageContainerRef}>
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
          <div className="app__savediv">
            <button className="button__save" onClick={handleSaveImage}>
              Save Image
            </button>
          </div>
        </section>
        <section className="app__options">
          <Options
            layer="Background"
            options={Object.values(images.backgrounds)}
            current={layer.Background}
            onLayerChange={handleLayerChange}
            isVisible={visibleLayer === "Background"}
            onLayerVisibility={() => handleLayerVisibility("Background")}
          />

          <Options
            layer="Neck"
            options={Object.values(images.neck)}
            current={layer.Neck}
            onLayerChange={handleLayerChange}
            isVisible={visibleLayer === "Neck"}
            onLayerVisibility={() => handleLayerVisibility("Neck")}
          />

          <Options
            layer="Hair"
            options={Object.values(images.hair)}
            current={layer.Hair}
            onLayerChange={handleLayerChange}
            isVisible={visibleLayer === "Hair"}
            onLayerVisibility={() => handleLayerVisibility("Hair")}
          />

          <Options
            layer="Ears"
            options={Object.values(images.ears)}
            current={layer.Ears}
            onLayerChange={handleLayerChange}
            isVisible={visibleLayer === "Ears"}
            onLayerVisibility={() => handleLayerVisibility("Ears")}
          />

          <Options
            layer="Eyes"
            options={Object.values(images.eyes)}
            current={layer.Eyes}
            onLayerChange={handleLayerChange}
            isVisible={visibleLayer === "Eyes"}
            onLayerVisibility={() => handleLayerVisibility("Eyes")}
          />

          <Options
            layer="Mouth"
            options={Object.values(images.mouth)}
            current={layer.Mouth}
            onLayerChange={handleLayerChange}
            isVisible={visibleLayer === "Mouth"}
            onLayerVisibility={() => handleLayerVisibility("Mouth")}
          />

          <Options
            layer="Leg"
            options={Object.values(images.leg)}
            current={layer.Leg}
            onLayerChange={handleLayerChange}
            isVisible={visibleLayer === "Leg"}
            onLayerVisibility={() => handleLayerVisibility("Leg")}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
