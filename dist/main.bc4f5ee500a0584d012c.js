/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("const images = [\r\n    {\r\n        type: 'image',\r\n        src: './media&images/1.jpg',\r\n        title: 'Мельница'\r\n    },\r\n    {\r\n        type: 'image',\r\n        src: './media&images/2.jpg',\r\n        title: 'Горы'\r\n    },\r\n    {\r\n        type: 'image',\r\n        src: './media&images/3.jpg',\r\n        title: 'Домики'\r\n    },\r\n    {\r\n        type: 'image',\r\n        src: './media&images/4.gif',\r\n        title: 'ГифМастер'\r\n    },\r\n    {\r\n        type: 'audio',\r\n        src: './media&images/1.mp3',\r\n        title: 'Звуки природы'\r\n    },\r\n    {\r\n        type: 'audio',\r\n        src: './media&images/2.mp3',\r\n        title: 'Звуки природы'\r\n    },\r\n    {\r\n        type: 'audio',\r\n        src: './media&images/3.mp3',\r\n        title: 'Звуки природы'\r\n    },\r\n    {\r\n        type: 'video',\r\n        src: './media&images/1.mp4',\r\n        title: 'Видосик'\r\n    },\r\n    {\r\n        type: 'video',\r\n        src: './media&images/2.mp4',\r\n        title: 'Видосик'\r\n    },\r\n];\r\n\r\nlet renderProduct = product => {\r\n    if(product.type == 'image')\r\n       {return `<div class = 'card'>\r\n                    <div class = 'item'>\r\n                    <img src=\"${product.src}\">\r\n                    </div>\r\n                    <p>${product.title}</p>\r\n       \r\n               </div>`} else if(product.type == 'audio') {\r\n                return `<div class = 'card'>\r\n                            <div class = 'item'>\r\n                                <audio controls src=\"${product.src}\"></audio>\r\n                            </div>\r\n                            <p>${product.title}</p>\r\n                        </div>`\r\n               } else if(product.type == 'video') {\r\n                return  `<div class = 'card'>\r\n                            <div class = 'item'>\r\n                                <video height=\"150px\" width=\"200px\" controls src=\"${product.src}\"  ></video>\r\n                            </div>\r\n                            <p>${product.title}</p>\r\n                        </div>`\r\n               }\r\n}\r\n\r\nlet renderPage = list => {\r\n    document.querySelector('.cards').innerHTML = list.map(item => renderProduct(item)).join('');\r\n}\r\n\r\nrenderPage(images);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;