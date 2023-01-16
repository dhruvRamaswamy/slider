const range = document.querySelector("#range");
const labelForRangeSlider = document.querySelector("#range + label");
const root = document.documentElement;
const thumbWidth = parseInt(
  getComputedStyle(root).getPropertyValue("--thumb-width")
);
range.addEventListener("input", (e) => {
  const value = +e.target.value;
  updateLabel(value);
  updatePosition(e, value);
});

function updateLabel(value) {
  labelForRangeSlider.textContent = value;
}

function updatePosition(e, value) {
  const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidth =
    getComputedStyle(labelForRangeSlider).getPropertyValue("width");
  const numWidth = parseInt(rangeWidth);
  const numLabelWidth = parseInt(labelWidth);
  const max = +e.target.max;
  const min = +e.target.min;
  labelForRangeSlider.style.left = `${
    value * ((numWidth - thumbWidth) / max) - (numLabelWidth - thumbWidth) / 2
  }px`;
  labelForRangeSlider.style.marginLeft = "20px";
}
