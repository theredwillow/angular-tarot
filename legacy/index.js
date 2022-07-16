// const app = document.getElementById("app");
// app.getStep = () => Number(app.getAttribute("data-step"));
// app.nextStep = () => {
//   const currentStep = Number(app.getStep()),
//     nextStep = currentStep + 1;
//   app.setAttribute("data-step", nextStep);
//   return nextStep;
// };
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
  } else if (currentStep === 2) {
    const positions = Array.from(
      document.getElementsByClassName("position")
    ).map((position) => position.querySelector("input").value);
    if (positions.some((value) => value === "")) {
      // FIXME Make this into an error display message element
      window.alert("Don't leave any positions empty!");
      return;
    }
    app.spread.cards = positions.map((value) => ({ position: value }));
    document.getElementById(
      "spread-title-display"
    ).innerHTML = `The ${app.spread.title} Spread`;
    for (const card in app.spread.cards) {
      if (Object.hasOwnProperty.call(app.spread.cards, card)) {
        app.addCard(app.spread.cards[card].position);
      }
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
  newButton.addEventListener("click", (e) =>
    app.removePosition(e.target.parentElement)
  );

  const positions = document.getElementById("positions"),
    addPosition = document.getElementById("add-position");
  positions.insertBefore(newPosition, addPosition);
};
app.removePosition = (position) => {
  const positions = document.querySelectorAll(".position");
  if (positions.length > 1) {
    position.remove();
  } else {
    // FIXME Make this into an error display message element
    window.alert("You need at least one position to do a reading!");
  }
};
app.addCard = (position) => {
  const newCard = document.createElement("div");
  newCard.dataset.position = position;
  newCard.classList.add("card");
  // FIXME Style this
  newCard.innerHTML = `This is the back side of your ${position} card.`;
  newCard.addEventListener("click", (e) => app.drawCard(e.target));

  const cards = document.getElementById("cards");
  cards.appendChild(newCard);
};
app.drawCard = async (card) => {
  // FIXME Replace this with CSS animations or something cool
  card.innerHTML = "Flipping your card!";
  const response = await fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1");
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  const cardDrawn = data.cards[0];
  // FIXME Fix this style
  card.innerHTML = `You drew the <b>${cardDrawn.name}</b> in the <i>${card.dataset.position}</i> position.<br /><br />This card symbolizes: ${cardDrawn.meaning_up}`;
  // FIXME card.removeEventListener("click");
};

// This makes sure that all positions are exactly the same (i.e. generated by javascript), even the first one
app.addPosition();

console.log("Javascript file is loading properly!");
