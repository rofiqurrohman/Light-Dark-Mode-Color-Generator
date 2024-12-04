//Color Picker
// Inputs
const valueInput = document.querySelector('input[type="text"]');
const colorInput = document.querySelector('input[type="color"]');

// Sync the color from the picker
const syncColorFromPicker = () => {
  valueInput.value = colorInput.value;
};

// Sync the color from the field
const syncColorFromText = () => {
  colorInput.value = valueInput.value;
};

// Bind events to callbacks
colorInput.addEventListener("input", syncColorFromPicker, false);
valueInput.addEventListener("input", syncColorFromText, false);

// Optional: Trigger the picker when the text field is focused
valueInput.addEventListener("focus", () => colorInput.click(), true);

// Refresh the text field
syncColorFromPicker();

//Made using Ant Design Colors: https://www.jsdelivr.com/package/npm/@ant-design/colors?tab=files&path=lib
//Ant Design Colors imports packages from TinyColor: https://www.jsdelivr.com/package/npm/@ctrl/tinycolor

import {
  generate,
  presetPalettes,
  presetDarkPalettes
} from "https://cdn.skypack.dev/@ant-design/colors@7.0.0";

//Light Theme Generator
const lightPalette = (color, el) => {
  // const colors = getColors(color);
  const colors = generate(color);
  let lis = "";
  colors.forEach((color) => {
    lis += `<li style="background:${color}">${color}</li>`;
  });
  el.innerHTML = lis;
};

//Dark Theme Generator
const darkPalette = (color, el) => {
  // const colors = getColors(color);
  const colors = generate(color, {
    theme: "dark",
    backgroundColor: "#141414"
  });
  let lis = "";
  colors.forEach((color) => {
    lis += `<li style="background:${color}">${color}</li>`;
  });
  el.innerHTML = lis;
};

//Default color
lightPalette("#001AFF", document.getElementById("palette"));
darkPalette("#001AFF", document.getElementById("palette2"));

//Getting HEX value from input
document.getElementById("get-value").onclick = function () {
  var inputHEX = document.getElementById("input-hex");

  //alert(inputHEX.value);

  lightPalette(inputHEX.value, document.getElementById("palette"));
  darkPalette(inputHEX.value, document.getElementById("palette2"));

  document.querySelector(".outputLight").textContent = inputHEX.value;
  document.querySelector(".outputDark").textContent = inputHEX.value;
};