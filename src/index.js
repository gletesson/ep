import "../src/assets/styles/styles.scss";
import "./index.scss";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputAge = document.getElementById("input1").value;
  const inputDonnee = document.getElementById("input2").value;
  const messageProg = document.querySelector("#messagetelechargement");
  if (inputAge >= 18 && inputDonnee >= 50) {
    messageProg.innerHTML = `
   <button class="btn btn-secondary"> <a href="./assets/images/programme1.pdf"> Voici ton programme</a> </button> 
    `;
  } else if (
    inputAge < 18 &&
    inputAge >= 16 &&
    inputDonnee >= 30 &&
    inputDonnee < 50
  ) {
    messageProg.innerHTML = `
    <button class="btn btn-secondary"> <a href="./assets/images/programme2.pdf"> Voici ton programme</a> </button> 
    `;
  } else if (
    inputAge < 16 &&
    inputAge >= 14 &&
    inputDonnee >= 20 &&
    inputDonnee < 30
  ) {
    messageProg.innerHTML = `
      <button class="btn btn-secondary"> <a href="./assets/images/programme3.pdf"> Voici ton programme</a> </button> 
      `;
  } else if (inputAge < 14 && inputAge >= 12 && inputDonnee < 20) {
    messageProg.innerHTML = `
        <button class="btn btn-secondary"> <a href="./assets/images/programme4.pdf"> Voici ton programme</a> </button> 
        `;
  } else if (!inputAge || !inputDonnee) {
    messageProg.innerHTML = `
    <p> Merci de bien vouloir introduire vos données</p> 
    `;
  } else {
    messageProg.innerHTML = `
    <p> Désolé, le programme est destiné au 12 ans et + </p> 
    `;
  }
});
