const app = document.getElementById("app");
app.getStep = () => Number(app.getAttribute("data-step"));
app.nextStep = () => {
  const currentStep = Number(app.getStep()),
    nextStep = currentStep + 1;
  app.setAttribute("data-step", nextStep);
  return nextStep;
};

console.log("Javascript file is loading properly!");
