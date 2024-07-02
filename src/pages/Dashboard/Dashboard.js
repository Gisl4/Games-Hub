import { initControler } from "../../utils/Route";
import { getInfo } from "../../utils/dataPokemon";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dhshflrbz/image/upload/v1712435128/juegos/pokemon-go-campeonato-mundial-2022_hilsp9.jpg"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateWhakaTopo">
          <img
            src="https://res.cloudinary.com/dhshflrbz/image/upload/v1713198110/1835817_v6x3rs.png"
            alt=" go to wacka topo game"
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateTresEnRaya">
          <img
            src="https://res.cloudinary.com/dhshflrbz/image/upload/v1712433708/juegos/istockphoto-1364153524-612x612_cm8nmn.jpg"
            alt="go to Tres en Raya game"
          />
          <h2>TRES EN RAYA</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateWhakaTopo = document.getElementById("navigateWhakaTopo");
  navigateWhakaTopo.addEventListener("click", () => {
    initControler("Topo");
  });
  const navigateTresEnRaya = document.getElementById("navigateTresEnRaya");
  navigateTresEnRaya.addEventListener("click", () => {
    initControler("TresEnRaya");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();

  document.querySelector("nav").style.display = "flex";

  addEventListeners();
};

getInfo();
