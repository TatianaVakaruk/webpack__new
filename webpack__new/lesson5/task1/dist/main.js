/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _profile_gateway_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/gateway.js */ \"./src/profile/gateway.js\");\n/* harmony import */ var _profile_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/index.js */ \"./src/profile/index.js\");\n\r\n\r\n\r\n(0,_profile_gateway_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('github').then(userData =>\r\n  (0,_profile_index_js__WEBPACK_IMPORTED_MODULE_1__.printProfile)({\r\n    name: userData.name,\r\n    company: userData.location,\r\n  }),\r\n);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTZDO0FBQ0s7QUFDbEQ7QUFDQSwrREFBUztBQUNULEVBQUUsK0RBQVk7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzazEvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hVc2VyIGZyb20gJy4vcHJvZmlsZS9nYXRld2F5LmpzJztcclxuaW1wb3J0IHsgcHJpbnRQcm9maWxlIH0gZnJvbSAnLi9wcm9maWxlL2luZGV4LmpzJztcclxuXHJcbmZldGNoVXNlcignZ2l0aHViJykudGhlbih1c2VyRGF0YSA9PlxyXG4gIHByaW50UHJvZmlsZSh7XHJcbiAgICBuYW1lOiB1c2VyRGF0YS5uYW1lLFxyXG4gICAgY29tcGFueTogdXNlckRhdGEubG9jYXRpb24sXHJcbiAgfSksXHJcbik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/profile/gateway.js":
/*!********************************!*\
  !*** ./src/profile/gateway.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchUser)\n/* harmony export */ });\nasync function fetchUser(userId) {\r\n  try {\r\n    const response = await fetch(`https://api.github.com/users/${userId}`);\r\n    return await response.json();\r\n  } catch (error) {\r\n    throw new Error('Failed to get user data');\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0EsaUVBQWlFLE9BQU87QUFDeEU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFzazEvLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzP2MyMzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyKHVzZXJJZCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcklkfWApO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IHVzZXIgZGF0YScpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/gateway.js\n\n}");

/***/ }),

/***/ "./src/profile/index.js":
/*!******************************!*\
  !*** ./src/profile/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   printProfile: () => (/* binding */ printProfile)\n/* harmony export */ });\nconst printProfile = profileData => {\r\n  const { name, company } = profileData;\r\n  console.log(`${name} from ${company}`);\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCxVQUFVLGdCQUFnQjtBQUMxQixpQkFBaUIsTUFBTSxPQUFPLFFBQVE7QUFDdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMS8uL3NyYy9wcm9maWxlL2luZGV4LmpzP2E2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByaW50UHJvZmlsZSA9IHByb2ZpbGVEYXRhID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGNvbXBhbnkgfSA9IHByb2ZpbGVEYXRhO1xyXG4gIGNvbnNvbGUubG9nKGAke25hbWV9IGZyb20gJHtjb21wYW55fWApO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/index.js\n\n}");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;