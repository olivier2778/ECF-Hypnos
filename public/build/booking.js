(self["webpackChunk"] = self["webpackChunk"] || []).push([["booking"],{

/***/ "./assets/js/booking.js":
/*!******************************!*\
  !*** ./assets/js/booking.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");

document.getElementById("bookingButton").onclick = messageConfirmationBooking; // message de modale de traitement  apres validation du formulaire

function messageConfirmationBooking() {
  var bookingModal = new bootstrap.Modal(document.getElementById("bookingModal"));
  bookingModal.show();
}

window.onload = function () {
  var BookingForm = document.querySelector("#form_valid"); // On boucle sur les input

  document.querySelectorAll("#form_valid input").forEach(function (input) {
    input.addEventListener("change", function () {
      // On récupére les données du formulaire , sans validation
      var Form = new FormData(BookingForm); // on récupére les 2 dates

      var DateCheckIn = Form.get("reservation[checkIn]");
      var DateCheckOut = Form.get("reservation[checkOut]");

      if (DateCheckIn !== '' && DateCheckOut !== '') {
        var date1 = new Date(DateCheckIn);
        date1.setUTCHours(0, 0, 0, 0);
        var date2 = new Date(DateCheckOut);
        date2.setUTCHours(0, 0, 0, 0);
        var temp = date2 - date1; // on converti l'écart en nombre de jours

        var NumberDays = temp / (1000 * 3600 * 24);
        var currentDate = new Date();
        currentDate.setUTCHours(0, 0, 0, 0); //  on affiche non conforme si la date de checkIn est inférieure à la date du jour ou le nombre de nuitée inférieur à 1             

        if (date1.valueOf() < currentDate.valueOf() || NumberDays < 1) {
          document.getElementById("days").textContent = 'Dates indiquées non conformes, veuillez vérifier SVP';
        } else if (NumberDays === 1) {
          document.getElementById("days").textContent = '1 Nuitée';
        } else {
          document.getElementById("days").textContent = NumberDays + ' Nuitées';
        }
      }
    });
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var un$DateToString = uncurryThis(DatePrototype[TO_STRING]);
var getTime = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? un$DateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-iteration_js-node_modules_core-js_internals_dom--711a0d"], () => (__webpack_exec__("./assets/js/booking.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLGdEQUFnRCxXQUFXO0FBQzNELEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQTZEO0FBQ2pFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNURCxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLDJFQUF1Qjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7QUNqQkEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDdkQsNEJBQTRCLG1CQUFPLENBQUMsMkdBQXVDO0FBQzNFLGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib29raW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29raW5nQnV0dG9uXCIpLm9uY2xpY2sgPSBtZXNzYWdlQ29uZmlybWF0aW9uQm9va2luZ1xuLy8gbWVzc2FnZSBkZSBtb2RhbGUgZGUgdHJhaXRlbWVudCAgYXByZXMgdmFsaWRhdGlvbiBkdSBmb3JtdWxhaXJlXG5mdW5jdGlvbiBtZXNzYWdlQ29uZmlybWF0aW9uQm9va2luZygpIHtcbiAgICBsZXQgYm9va2luZ01vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvb2tpbmdNb2RhbFwiKSlcbiAgICBib29raW5nTW9kYWwuc2hvdygpXG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgQm9va2luZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1fdmFsaWRcIikgICAgXG4gICAgLy8gT24gYm91Y2xlIHN1ciBsZXMgaW5wdXRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2Zvcm1fdmFsaWQgaW5wdXRcIikuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gT24gcsOpY3Vww6lyZSBsZXMgZG9ubsOpZXMgZHUgZm9ybXVsYWlyZSAsIHNhbnMgdmFsaWRhdGlvblxuICAgICAgICAgICAgbGV0IEZvcm0gPSBuZXcgRm9ybURhdGEoQm9va2luZ0Zvcm0pICAgICAgIFxuICAgICAgICAgICAgLy8gb24gcsOpY3Vww6lyZSBsZXMgMiBkYXRlc1xuICAgICAgICAgICAgbGV0IERhdGVDaGVja0luID0gRm9ybS5nZXQoXCJyZXNlcnZhdGlvbltjaGVja0luXVwiKVxuICAgICAgICAgICAgbGV0IERhdGVDaGVja091dCA9IEZvcm0uZ2V0KFwicmVzZXJ2YXRpb25bY2hlY2tPdXRdXCIpICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChEYXRlQ2hlY2tJbiAhPT0gJycgJiYgRGF0ZUNoZWNrT3V0ICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlMSA9IG5ldyBEYXRlKERhdGVDaGVja0luKVxuICAgICAgICAgICAgICAgIGRhdGUxLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBkYXRlMiA9IG5ldyBEYXRlKERhdGVDaGVja091dClcbiAgICAgICAgICAgICAgICBkYXRlMi5zZXRVVENIb3VycygwLCAwLCAwLCAwKVxuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZGF0ZTIgLSBkYXRlMVxuICAgICAgICAgICAgICAgIC8vIG9uIGNvbnZlcnRpIGwnw6ljYXJ0IGVuIG5vbWJyZSBkZSBqb3Vyc1xuICAgICAgICAgICAgICAgIGxldCBOdW1iZXJEYXlzID0gdGVtcCAvICgxMDAwICogMzYwMCAqIDI0KVxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKVxuICAgICAgICAgICAgICAgLy8gIG9uIGFmZmljaGUgbm9uIGNvbmZvcm1lIHNpIGxhIGRhdGUgZGUgY2hlY2tJbiBlc3QgaW5mw6lyaWV1cmUgw6AgbGEgZGF0ZSBkdSBqb3VyIG91IGxlIG5vbWJyZSBkZSBudWl0w6llIGluZsOpcmlldXIgw6AgMSAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZTEudmFsdWVPZigpIDwgY3VycmVudERhdGUudmFsdWVPZigpIHx8IE51bWJlckRheXMgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5c1wiKS50ZXh0Q29udGVudCA9ICdEYXRlcyBpbmRpcXXDqWVzIG5vbiBjb25mb3JtZXMsIHZldWlsbGV6IHbDqXJpZmllciBTVlAnXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggTnVtYmVyRGF5cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRheXNcIikudGV4dENvbnRlbnQgPSAnMSBOdWl0w6llJ1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5c1wiKS50ZXh0Q29udGVudCA9IE51bWJlckRheXMgKyAnIE51aXTDqWVzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG52YXIgRGF0ZVByb3RvdHlwZSA9IERhdGUucHJvdG90eXBlO1xudmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgdW4kRGF0ZVRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZVtUT19TVFJJTkddKTtcbnZhciBnZXRUaW1lID0gdW5jdXJyeVRoaXMoRGF0ZVByb3RvdHlwZS5nZXRUaW1lKTtcblxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChTdHJpbmcobmV3IERhdGUoTmFOKSkgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlZGVmaW5lKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZSh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB1biREYXRlVG9TdHJpbmcodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmNsaWNrIiwibWVzc2FnZUNvbmZpcm1hdGlvbkJvb2tpbmciLCJib29raW5nTW9kYWwiLCJib290c3RyYXAiLCJNb2RhbCIsInNob3ciLCJ3aW5kb3ciLCJvbmxvYWQiLCJCb29raW5nRm9ybSIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkZvcm0iLCJGb3JtRGF0YSIsIkRhdGVDaGVja0luIiwiZ2V0IiwiRGF0ZUNoZWNrT3V0IiwiZGF0ZTEiLCJEYXRlIiwic2V0VVRDSG91cnMiLCJkYXRlMiIsInRlbXAiLCJOdW1iZXJEYXlzIiwiY3VycmVudERhdGUiLCJ2YWx1ZU9mIiwidGV4dENvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9