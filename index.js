const app = document.getElementById("app");
app.getStep = () => Number(app.getAttribute("data-step"));
app.nextStep = () => {
  const currentStep = Number(app.getStep()),
    nextStep = currentStep + 1;
  app.setAttribute("data-step", nextStep);
  return nextStep;
};
// FIXME Run this during onchange's to keep the next button disabled
app.validate = () => {
  // FIXME Repeating "currentStep" is annoying, but the single source of truth is in the html until a framework like Angular is used
  const currentStep = Number(app.getStep());
  if (currentStep === 1) {
    const spreadTitle = document.getElementById("spread-title").value;
    if (spreadTitle) {
      app.spread = { title: spreadTitle };
    } else {
      // FIXME (See note above about disabling next button)
      window.alert("Please provide a spread title.");
      return;
    }
  } else {
    console.log("This step has no validation.");
  }
  // FIXME (See note above about disabling next button)
  app.nextStep();
};
app.addPosition = () => {
  const newPosition = document.createElement("div");
  newPosition.classList.add("position");

  const newInput = document.createElement("input"),
    newButton = document.createElement("button");
  // TODO Add example question placeholders
  newPosition.appendChild(newInput);
  newPosition.appendChild(newButton);
  newButton.innerHTML = "-";
  
  const positions = document.getElementById("positions"),
    addPosition = document.getElementById("add-position");
  positions.insertBefore(newPosition, addPosition);
};

console.log("Javascript file is loading properly!");
