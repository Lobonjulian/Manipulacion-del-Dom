import loadHome from "./home";
import loadContacto from "./contact";
import loadMenu from "./menu";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.classList.add("header--title"); 
  title.textContent = "JulitoMuxik-RestauranteBar";

  header.appendChild(title);
  header.appendChild(createNav());

  return header
}

function createNav() {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav__btn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", (e) => {
    if(e.target.classList.contains("active"))
    return;
    setActiveButton(homeBtn);
    loadHome();
  });

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav__btn");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", (e) => {
    if(e.target.classList.contains("active"))
    return;
    setActiveButton(menuBtn);
    loadMenu();
  })

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("nav__btn");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", (e) => {
    if(e.target.classList.contains("active"))
    return;
    setActiveButton(contactBtn);
    loadContacto();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;

}

function setActiveButton(button) {
  document.querySelectorAll(".nav__btn").forEach(btn => {
    btn.classList.remove("active");
  });
  
  button.classList.add("active");
}

function createMain(){
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const copyright = document.createElement("p");
  copyright.textContent = `Copyright ©️ ${new Date().getFullYear()} Julian Lobon`

  const github = document.createElement("a");
  github.href = "https://github.com/Lobonjulian";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  github.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(github);

  return footer
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".nav__btn"));
  loadHome();
}

export default initializeWebsite;