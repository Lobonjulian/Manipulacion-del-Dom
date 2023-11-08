/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContacto(){\r\n  \r\n  const contact = document.createElement('div');\r\n  contact.classList.add('contact');\r\n\r\n  const numeroTelefono = document.createElement('p');\r\n  numeroTelefono.textContent = 'Número de teléfono: 123-456-7890';\r\n\r\n  const direccion = document.createElement('p');\r\n  direccion.textContent = '🏘️ Dirección: Calle 35 # 1-45';\r\n\r\n  const LocalizacionRestaurante = document.createElement('img')\r\n  LocalizacionRestaurante.src = '../dist/img/LocalizacionRestaurante.png'\r\n  LocalizacionRestaurante.alt = 'LocalizacionRestaurante'\r\n\r\n  contact.appendChild(numeroTelefono)\r\n  contact.appendChild(direccion)\r\n  contact.appendChild(LocalizacionRestaurante)\r\n\r\n  return contact\r\n}\r\n\r\nfunction loadContacto(){\r\n  const main = document.getElementById('main');\r\n  main.textContent = '';\r\n  main.appendChild(createContacto());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContacto); \n\n//# sourceURL=webpack://restaurante/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\r\n  const home = document.createElement(\"div\");\r\n  home.classList.add(\"home\");\r\n\r\n  const imagenBar = document.createElement(\"img\");\r\n  imagenBar.src = \"../dist/img/bannerPrincipal.jpg\";\r\n  imagenBar.alt = \"bar\"\r\n\r\n  home.appendChild(createParrafo('Bienvenido a RestauranteBar'))\r\n  home.appendChild(createParrafo('Disfruta de la mejor comida y Bebidas'))\r\n  home.appendChild(imagenBar);\r\n  home.appendChild(createParrafo('Ordena en Linea o visitanos para tener el placer de atenderte'))\r\n\r\n  return home;\r\n}\r\n\r\nfunction createParrafo(texto) {\r\n  const parrafo = document.createElement(\"p\");\r\n  parrafo.textContent = texto;\r\n  return parrafo;\r\n}\r\n\r\nfunction loadHome() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurante/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurante/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n  const menu = document.createElement(\"div\");\r\n  menu.classList.add(\"menu\");\r\n\r\n  menu.appendChild(createMenuItem(\r\n    \"Hamburguesa\",\r\n    \"Hamburguesa con queso, lechuga, doble carne, cebolla y salsas de la casa\",\r\n    \"cerveza de limón o Jugo al gusto\"\r\n  ));\r\n\r\n  menu.appendChild(createMenuItem(\r\n    \"Hot Dog\",\r\n    \"pan de la casa, Salchicha rancheras, cebolla y tomate con salsas de la casa\",\r\n    \"Jugo al gusto o Gaseosa 0.5L\"\r\n  ));\r\n\r\n  menu.appendChild(createMenuItem(\r\n    \"Ensalada\",\r\n    \"Lechuga, tomate, pimiento y queso\",\r\n    \"Jugo al gusto o Gaseosa 0.5L\"\r\n  ));\r\n\r\n  menu.appendChild(createMenuItem(\r\n    \"Carne de Bufalo\",\r\n    \"Carne de bufalo cortada en tiras, ensalada, salsa de la casa y papas fritas\",\r\n    \"cerveza al gusto y limonada de coco \"\r\n  ));\r\n\r\n  return menu;\r\n}\r\n\r\nfunction createMenuItem(name, description, bebida) {\r\n  const menuItem = document.createElement(\"div\");\r\n  menuItem.classList.add(\"menu-item\");\r\n\r\n  const nombreComida = document.createElement(\"h3\");\r\n  nombreComida.textContent = name;\r\n\r\n  const descripComida = document.createElement(\"p\");\r\n  descripComida.textContent = description;\r\n\r\n  const bebidaComida = document.createElement(\"p\");\r\n  bebidaComida.textContent = bebida;\r\n\r\n  const imagenComida = document.createElement(\"img\");\r\n  imagenComida.src = `../dist/img/${name}.jpg`;\r\n  imagenComida.alt = `${name}`;\r\n\r\n  menuItem.appendChild(imagenComida);\r\n  menuItem.appendChild(nombreComida);\r\n  menuItem.appendChild(descripComida);\r\n  menuItem.appendChild(bebidaComida);\r\n\r\n  return menuItem;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurante/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement(\"header\");\r\n  header.classList.add(\"header\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.classList.add(\"header--title\"); \r\n  title.textContent = \"JulitoMuxik-RestauranteBar\";\r\n\r\n  header.appendChild(title);\r\n  header.appendChild(createNav());\r\n\r\n  return header\r\n}\r\n\r\nfunction createNav() {\r\n  const nav = document.createElement(\"nav\");\r\n\r\n  const homeBtn = document.createElement(\"button\");\r\n  homeBtn.classList.add(\"nav__btn\");\r\n  homeBtn.textContent = \"Home\";\r\n  homeBtn.addEventListener(\"click\", (e) => {\r\n    if(e.target.classList.contains(\"active\"))\r\n    return;\r\n    setActiveButton(homeBtn);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  const menuBtn = document.createElement(\"button\");\r\n  menuBtn.classList.add(\"nav__btn\");\r\n  menuBtn.textContent = \"Menu\";\r\n  menuBtn.addEventListener(\"click\", (e) => {\r\n    if(e.target.classList.contains(\"active\"))\r\n    return;\r\n    setActiveButton(menuBtn);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  })\r\n\r\n  const contactBtn = document.createElement(\"button\");\r\n  contactBtn.classList.add(\"nav__btn\");\r\n  contactBtn.textContent = \"Contact\";\r\n  contactBtn.addEventListener(\"click\", (e) => {\r\n    if(e.target.classList.contains(\"active\"))\r\n    return;\r\n    setActiveButton(contactBtn);\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  nav.appendChild(homeBtn);\r\n  nav.appendChild(menuBtn);\r\n  nav.appendChild(contactBtn);\r\n\r\n  return nav;\r\n\r\n}\r\n\r\nfunction setActiveButton(button) {\r\n  document.querySelectorAll(\".nav__btn\").forEach(btn => {\r\n    btn.classList.remove(\"active\");\r\n  });\r\n  \r\n  button.classList.add(\"active\");\r\n}\r\n\r\nfunction createMain(){\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"main\");\r\n  main.setAttribute(\"id\", \"main\");\r\n  return main;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement(\"footer\");\r\n  footer.classList.add(\"footer\");\r\n\r\n  const copyright = document.createElement(\"p\");\r\n  copyright.textContent = `Copyright ©️ ${new Date().getFullYear()} Julian Lobon`\r\n\r\n  const github = document.createElement(\"a\");\r\n  github.href = \"https://github.com/Lobonjulian\";\r\n\r\n  const githubIcon = document.createElement(\"i\");\r\n  githubIcon.classList.add(\"fab\");\r\n  githubIcon.classList.add(\"fa-github\");\r\n\r\n  github.appendChild(githubIcon);\r\n  footer.appendChild(copyright);\r\n  footer.appendChild(github);\r\n\r\n  return footer\r\n}\r\n\r\nfunction initializeWebsite() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  content.appendChild(createHeader());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  setActiveButton(document.querySelector(\".nav__btn\"));\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurante/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;