// images.js
import Blue50 from "../images/backgrounds/blue50.png";
import Blue60 from "../images/backgrounds/blue60.png";
import Blue70 from "../images/backgrounds/blue70.png";
import DarkBlue30 from "../images/backgrounds/darkblue30.png";
import DarkBlue50 from "../images/backgrounds/darkblue50.png";
import DarkBlue70 from "../images/backgrounds/darkblue70.png";
import Green50 from "../images/backgrounds/green50.png";
import Green60 from "../images/backgrounds/green60.png";
import Green70 from "../images/backgrounds/green70.png";
import Grey40 from "../images/backgrounds/grey40.png";
import Grey70 from "../images/backgrounds/grey70.png";
import Grey80 from "../images/backgrounds/grey80.png";
import Red50 from "../images/backgrounds/red50.png";
import Red60 from "../images/backgrounds/red60.png";
import Red70 from "../images/backgrounds/red70.png";
import Yellow50 from "../images/backgrounds/yellow50.png";
import Yellow60 from "../images/backgrounds/yellow60.png";

import DefaultNeck from "../images/neck/default.png";
import BendBackwards from "../images/neck/bend-backward.png";
import BendForward from "../images/neck/bend-forward.png";
import ThickNeck from "../images/neck/thick.png";

import NormalHair from "../images/hair/default.png";
import Bang from "../images/hair/bang.png";
import Curls from "../images/hair/curls.png";
import Elegant from "../images/hair/elegant.png";
import Fancy from "../images/hair/fancy.png";
import Short from "../images/hair/short.png";

import DefaultEars from "../images/ears/default.png";
import TiltBackwardEars from "../images/ears/tilt-backward.png";
import TiltForwardEars from "../images/ears/tilt-forward.png";

import DefaultEyes from "../images/eyes/default.png";
import AngryEyes from "../images/eyes/angry.png";
import NaughtyEyes from "../images/eyes/naughty.png";
import PandaEyes from "../images/eyes/panda.png";
import SmartEyes from "../images/eyes/smart.png";
import StarEyes from "../images/eyes/star.png";

import Nose from "../images/nose.png"; // Ajusta la ruta según sea necesario

import DefaultMouth from "../images/mouth/default.png";
import AstonishedMouth from "../images/mouth/astonished.png";
import EatingMouth from "../images/mouth/eating.png";
import LaughMouth from "../images/mouth/laugh.png";
import TongueMouth from "../images/mouth/tongue.png";

import DefaultLeg from "../images/leg/default.png";
import BubbleTea from "../images/leg/bubble-tea.png";
import Cookie from "../images/leg/cookie.png";
import GameConsole from "../images/leg/game-console.png";
import TiltBackwardLeg from "../images/leg/tilt-backward.png";
import TiltForwardLeg from "../images/leg/tilt-forward.png";

// Exportamos las imágenes con nombre y src
export const images = {
  backgrounds: {
    Blue50: { src: Blue50, name: "Blue 50" },
    Blue60: { src: Blue60, name: "Blue 60" },
    Blue70: { src: Blue70, name: "Blue 70" },
    DarkBlue30: { src: DarkBlue30, name: "Dark Blue 30" },
    DarkBlue50: { src: DarkBlue50, name: "Dark Blue 50" },
    DarkBlue70: { src: DarkBlue70, name: "Dark Blue 70" },
    Green50: { src: Green50, name: "Green 50" },
    Green60: { src: Green60, name: "Green 60" },
    Green70: { src: Green70, name: "Green 70" },
    Grey40: { src: Grey40, name: "Grey 40" },
    Grey70: { src: Grey70, name: "Grey 70" },
    Grey80: { src: Grey80, name: "Grey 80" },
    Red50: { src: Red50, name: "Red 50" },
    Red60: { src: Red60, name: "Red 60" },
    Red70: { src: Red70, name: "Red 70" },
    Yellow50: { src: Yellow50, name: "Yellow 50" },
    Yellow60: { src: Yellow60, name: "Yellow 60" },
  },
  neck: {
    Default: { src: DefaultNeck, name: "Default Neck" },
    Bend_Backwards: { src: BendBackwards, name: "Bend Backwards" },
    Bend_Forward: { src: BendForward, name: "Bend Forwards" },
    Thick: { src: ThickNeck, name: "Thick Neck" },
  },
  hair: {
    Normal: { src: NormalHair, name: "Normal Hair" },
    Bang: { src: Bang, name: "Bang" },
    Curls: { src: Curls, name: "Curls" },
    Elegant: { src: Elegant, name: "Elegant Hair" },
    Fancy: { src: Fancy, name: "Fancy Hair" },
    Short: { src: Short, name: "Short Hair" },
  },
  ears: {
    Default: { src: DefaultEars, name: "Default Ears" },
    Tilt_Backward: { src: TiltBackwardEars, name: "Tilt Backward Ears" },
    Tilt_Forward: { src: TiltForwardEars, name: "Tilt Forward Ears" },
  },
  eyes: {
    Default: { src: DefaultEyes, name: "Default Eyes" },
    Angry: { src: AngryEyes, name: "Angry Eyes" },
    Naughty: { src: NaughtyEyes, name: "Naughty Eyes" },
    Panda: { src: PandaEyes, name: "Panda Eyes" },
    Smart: { src: SmartEyes, name: "Smart Eyes" },
    Star: { src: StarEyes, name: "Star Eyes" },
  },
  nose: {
    Default: { src: Nose, name: "Default Nose" },
  },
  mouth: {
    Default: { src: DefaultMouth, name: "Default Mouth" },
    Astonished: { src: AstonishedMouth, name: "Astonished Mouth" },
    Eating: { src: EatingMouth, name: "Eating Mouth" },
    Laugh: { src: LaughMouth, name: "Laugh Mouth" },
    Tongue: { src: TongueMouth, name: "Tongue Out" },
  },
  leg: {
    Default: { src: DefaultLeg, name: "Default Leg" },
    BubbleTea: { src: BubbleTea, name: "Bubble Tea Leg" },
    Cookie: { src: Cookie, name: "Cookie Leg" },
    GameConsole: { src: GameConsole, name: "Game Console Leg" },
    Tilt_Backward: { src: TiltBackwardLeg, name: "Tilt Backward Leg" },
    Tilt_Forward: { src: TiltForwardLeg, name: "Tilt Forward Leg" },
  },
};
