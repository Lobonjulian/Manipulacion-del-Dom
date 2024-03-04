import Hamburguesa from "../assets/hamburguesa.jpg";
import Pizza from "../assets/pizzas.jpg";
import HogDog from "../assets/hotdog.jpg";
import ColitasCubana from "../assets/sandwich-cubano.jpg";
import SalchiPapas from "../assets/salchipapas.jpg";

export default (function Menu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");

  menuContainer.appendChild(
    newCard(
      "Hamburguesa",
      Hamburguesa,
      "Hamburguesa con papas fritas y salsas de la casa",
      28000
    )
  );

  menuContainer.appendChild(
    newCard(
      "Colita Cubanas",
      ColitasCubana,
      "Colita cubana con papas fritas y salsas de la casa",
      18000
    )
  );

  menuContainer.appendChild(
    newCard(
      "SalchiPapas",
      SalchiPapas,
      "salchichas papas fritas carne y salsas de la casa",
      20000
    )
  );

  menuContainer.appendChild(
    newCard("Pizza", Pizza, "Pizza de jamón, peperoni, hongos y queso", 15000)
  );

  menuContainer.appendChild(
    newCard("Perro Caliente", HogDog, "Perro caliente con papas fritas", 22000)
  );

  return menuContainer;
})();

function newCard(name, img, desc, price) {
  const card = document.createElement("div");
  const cardTitulo = document.createElement("h3");
  const cardImg = document.createElement("img");
  const cardDesc = document.createElement("p");
  const cardPrice = document.createElement("p");

  card.classList.add("card");
  cardDesc.classList.add("text-description");
  cardTitulo.innerHTML = name;
  cardImg.src = img;
  cardDesc.innerHTML = desc;
  cardPrice.innerHTML = "Precio: $" + price;

  card.appendChild(cardImg);
  card.appendChild(cardTitulo);
  card.appendChild(cardDesc);
  card.appendChild(cardPrice);

  return card;
}
