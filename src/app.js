/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Any string");
  function myFunction() {
    const pronoun = ["the", "our"];
    const adj = ["great", "big"];
    const noun = ["jogger", "racoon"];
    const extensions = [".com", ".net", ".us", ".io"];
    const allConcat = [];
    let extensiones;
    let concatenacion1;
    let generarCombinación;
    let showToTheHtml;

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          concatenacion1 = pronoun[i] + adj[j] + noun[k];
          allConcat.push(concatenacion1);
        }
      }
    }

    showToTheHtml = document.querySelector("#the-excuse");
    generarCombinación = document.querySelector("#generar");

    for (let i = 0; i < allConcat.length; i++) {
      for (let j = 0; j < extensions.length; j++) {
        extensiones = allConcat[i] + extensions[j];
        showToTheHtml.innerHTML +=
          "<li class=' list-unstyled fs-5 m-2'>" + extensiones + "</li>";
      }
    }
  }

  document.getElementById("generar").addEventListener("click", myFunction);
};
