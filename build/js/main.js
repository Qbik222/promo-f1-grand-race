"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
  var _sessionStorage$getIt;
  var API, ENDPOINT, RACES, currentDate, racesById, userId, users, existingUser, authBtnsEl, youAreInBtnsEl, predictionBtnEl, betColumnsBtnsEl, yourBetInfoEl, yourSeasonResEl, yourSeasonBetsEl, toCurrentRaceBtns, confirmBlock, resultsBlock, betConfirmed, formatDateString, getCurrentRace, maskUserId, animateOnScroll, request, getAllUsers, _getAllUsers, getSeasonalStandings, _getSeasonalStandings, registerUser, _registerUser, getPredictionType, _getPredictionType, checkUserAuth, checkUserReg, initRegistration, _initRegistration, loadPredictionType, _loadPredictionType, renderPredictionTable, renderSeasonalStandings, renderUsersPlace, initPage, _initPage, init, _init, ukLang, enLang, mainPage, i18nData, locale, loadTranslations, _loadTranslations, translate, translateKey, refreshLocalizedClass, authBtn, btnConfirm, btnParticipante, lngBtn, racerBtn, lapBtn, teamBtn;
  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
    while (1) switch (_context12.prev = _context12.next) {
      case 0:
        refreshLocalizedClass = function _refreshLocalizedClas(element, baseCssClass) {
          if (!element) {
            return;
          }
          for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
            var lang = _arr[_i];
            element.classList.remove(baseCssClass + lang);
          }
          element.classList.add(baseCssClass + locale);
        };
        translateKey = function _translateKey(key) {
          if (!key) {
            return;
          }
          return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
        };
        translate = function _translate() {
          var elems = document.querySelectorAll('[data-translate]');
          if (elems && elems.length) {
            elems.forEach(function (elem) {
              var key = elem.getAttribute('data-translate');
              elem.innerHTML = translateKey(key);
              elem.removeAttribute('data-translate');
            });
          }
          if (locale === 'en') {
            mainPage.classList.add('en');
          }
          refreshLocalizedClass();
        };
        _loadTranslations = function _loadTranslations3() {
          _loadTranslations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var response, json, mutationObserver;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.prev = 0;
                  _context11.next = 3;
                  return fetch("".concat(API, "/").concat(ENDPOINT, "/translates/").concat(locale));
                case 3:
                  response = _context11.sent;
                  _context11.next = 6;
                  return response.json();
                case 6:
                  json = _context11.sent;
                  i18nData = json;
                  translate();
                  mutationObserver = new MutationObserver(function (mutations) {
                    translate();
                  });
                  mutationObserver.observe(document.getElementById('formula1_25'), {
                    childList: true,
                    subtree: true
                  });
                  _context11.next = 16;
                  break;
                case 13:
                  _context11.prev = 13;
                  _context11.t0 = _context11["catch"](0);
                  console.error('Error loading translations:', _context11.t0);
                case 16:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, null, [[0, 13]]);
          }));
          return _loadTranslations.apply(this, arguments);
        };
        loadTranslations = function _loadTranslations2() {
          return _loadTranslations.apply(this, arguments);
        };
        _init = function _init3() {
          _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var c, interval;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  if (window.store) {
                    _context10.next = 7;
                    break;
                  }
                  console.log('window store');
                  // const state = window.store.getState();
                  // userId = (state.auth.isAuthorized && state.auth.id) || '';
                  // userId = 18908465;
                  userId = sessionStorage.getItem("userId") ? Number(sessionStorage.getItem("userId")) : null;
                  _context10.next = 5;
                  return initPage();
                case 5:
                  _context10.next = 12;
                  break;
                case 7:
                  console.log('no window store');
                  _context10.next = 10;
                  return initPage();
                case 10:
                  c = 0;
                  interval = setInterval(function () {
                    if (c < 50) {
                      if (window.g_user_id) {
                        userId = window.g_user_id;
                        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                            while (1) switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.next = 2;
                                return initPage();
                              case 2:
                                checkUserAuth();
                              case 3:
                              case "end":
                                return _context9.stop();
                            }
                          }, _callee9);
                        }))();
                        clearInterval(interval);
                      }
                    } else {
                      clearInterval(interval);
                      c++;
                      console.log(c);
                    }
                  }, 200);
                case 12:
                  checkUserAuth();
                case 13:
                case "end":
                  return _context10.stop();
              }
            }, _callee10);
          }));
          return _init.apply(this, arguments);
        };
        init = function _init2() {
          return _init.apply(this, arguments);
        };
        _initPage = function _initPage3() {
          _initPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var standings;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return getAllUsers();
                case 2:
                  users = _context8.sent;
                  console.log('all USERS', users);
                  _context8.next = 6;
                  return getSeasonalStandings();
                case 6:
                  standings = _context8.sent;
                  renderSeasonalStandings(standings);
                  checkUserReg();
                  console.log('existingUser:', existingUser);
                  if (existingUser) {
                    _context8.next = 15;
                    break;
                  }
                  _context8.next = 13;
                  return initRegistration();
                case 13:
                  _context8.next = 17;
                  break;
                case 15:
                  renderUsersPlace(standings);
                  resultsBlock.classList.remove("auth");
                case 17:
                  if (betConfirmed) {
                    confirmBlock.classList.add("_betConfirmed");
                  }
                case 18:
                case "end":
                  return _context8.stop();
              }
            }, _callee8);
          }));
          return _initPage.apply(this, arguments);
        };
        initPage = function _initPage2() {
          return _initPage.apply(this, arguments);
        };
        renderUsersPlace = function _renderUsersPlace(standings) {
          if (!userId || !standings || !Array.isArray(standings)) {
            return;
          }
          var currentUser = standings.find(function (user) {
            return user.userid === parseInt(userId);
          });
          // if (!currentUser) {
          //     yourSeasonResEl.classList.add('hidden');
          //     return;
          // }
          if (!userId && !existingUser) {
            yourSeasonResEl.classList.add('hidden');
            return;
          }
          yourSeasonResEl.classList.remove('hidden');
          var placeEl = yourSeasonResEl.querySelector('.results__you-place');
          if (placeEl) {
            placeEl.textContent = currentUser.position;
          }
          var userIdEl = yourSeasonResEl.querySelector('.results__you-info-id');
          if (userIdEl) {
            userIdEl.textContent = maskUserId(userId);
          }
          var pointsWrapper = yourSeasonResEl.querySelector('.results__you-info-points');
          if (pointsWrapper) {
            var pointsValueEl = pointsWrapper.querySelector('span:last-child');
            if (pointsValueEl) {
              pointsValueEl.textContent = ": ".concat(currentUser.correctPredictions);
            }
          }
        };
        renderSeasonalStandings = function _renderSeasonalStandi(standings) {
          console.log('standings:', standings);
          if (!standings || !Array.isArray(standings) || standings.length === 0) {
            return;
          }
          var usersWithPoints = standings.filter(function (user) {
            return user.correctPredictions > 0;
          });
          if (usersWithPoints.length === 0) {
            console.log('No users with correct predictions found');
            return;
          }
          var topThree = usersWithPoints.slice(0, 3);
          topThree.forEach(function (user) {
            var position = user.position;
            var containerClass = '';
            switch (position) {
              case 1:
                containerClass = '.results__first';
                break;
              case 2:
                containerClass = '.results__second';
                break;
              case 3:
                containerClass = '.results__third';
                break;
              default:
                return;
            }
            var container = document.querySelector(containerClass);
            if (!container) return;
            if (user.correctPredictions > 0) {
              animateOnScroll(container.querySelector('.results__top-decor'), '_show', 0);
              animateOnScroll(container.querySelector('.results__top-wrap'), '_show', 400);
              var placeEl = container.querySelector('.results__top-place');
              if (placeEl) placeEl.textContent = position;
              var userIdEl = container.querySelector('.results__top-info-id');
              if (userIdEl) userIdEl.textContent = "USER ".concat(maskUserId(user.userid));
              var pointsEl = container.querySelector('.results__top-info-points');
              if (pointsEl) {
                var pointsText = pointsEl.querySelector('[data-translate="points"]');
                pointsEl.innerHTML = '';
                if (pointsText) pointsEl.appendChild(pointsText);
                pointsEl.appendChild(document.createTextNode(" ".concat(user.correctPredictions)));
              }
            }
          });
        };
        renderPredictionTable = function _renderPredictionTabl(predictionType) {
          //for test
          // predictionType = 'bestTeam';
          var betContainer = document.querySelector('.bet._container');
          betContainer.classList.remove("_racer", "_lap", "_team");
          switch (predictionType) {
            case 'winner':
              betContainer.classList.add('_racer');
              break;
            case 'fastestLap':
              betContainer.classList.add('_lap');
              break;
            case 'bestTeam':
              betContainer.classList.add('_team');
              break;
            default:
              betContainer.classList.add('_racer');
          }
        };
        _loadPredictionType = function _loadPredictionType3() {
          _loadPredictionType = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var currentRaceNumber, predictionData;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  currentRaceNumber = getCurrentRace();
                  _context7.next = 3;
                  return getPredictionType(userId, currentRaceNumber);
                case 3:
                  predictionData = _context7.sent;
                  renderPredictionTable(predictionData.predictionType);
                case 5:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
          return _loadPredictionType.apply(this, arguments);
        };
        loadPredictionType = function _loadPredictionType2() {
          return _loadPredictionType.apply(this, arguments);
        };
        _initRegistration = function _initRegistration3() {
          _initRegistration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  youAreInBtnsEl.forEach(function (btn) {
                    btn.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                      var response;
                      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                        while (1) switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return registerUser();
                          case 2:
                            response = _context5.sent;
                            if (!response.success) {
                              _context5.next = 7;
                              break;
                            }
                            checkUserReg();
                            _context5.next = 7;
                            return loadPredictionType();
                          case 7:
                          case "end":
                            return _context5.stop();
                        }
                      }, _callee5);
                    })));
                  });
                case 1:
                case "end":
                  return _context6.stop();
              }
            }, _callee6);
          }));
          return _initRegistration.apply(this, arguments);
        };
        initRegistration = function _initRegistration2() {
          return _initRegistration.apply(this, arguments);
        };
        checkUserReg = function _checkUserReg() {
          users.forEach(function (user) {
            if (user.userid === userId) {
              // existingUser = true;
              checkUserAuth();
            }
          });
          // renderUsers(users);
          // translate();
        };
        checkUserAuth = function _checkUserAuth() {
          console.log('checkUserAuth', userId);
          if (!userId) {
            predictionBtnEl.disabled = true;
            yourSeasonResEl.classList.add('hidden');
            yourSeasonBetsEl.classList.add('hidden');
            authBtnsEl.forEach(function (btn) {
              btn.classList.remove("hidden");
            });
            betColumnsBtnsEl.forEach(function (button) {
              button.classList.add('_lock');
            });
            yourBetInfoEl.forEach(function (item) {
              item.classList.add('hidden');
            });
            toCurrentRaceBtns.forEach(function (item) {
              item.classList.add('hidden');
            });
            resultsBlock.classList.add("auth");
          } else if (userId && !existingUser) {
            yourSeasonResEl.classList.add('hidden');
            yourBetInfoEl.forEach(function (item) {
              item.classList.add('hidden');
            });
            betColumnsBtnsEl.forEach(function (button) {
              button.classList.add('_lock');
            });
            youAreInBtnsEl.forEach(function (btn) {
              btn.classList.remove('hidden');
            });
            authBtnsEl.forEach(function (btn) {
              btn.classList.add('hidden');
            });
            toCurrentRaceBtns.forEach(function (item) {
              item.classList.add('hidden');
            });
            resultsBlock.classList.add("auth");
          } else if (userId && existingUser) {
            youAreInBtnsEl.forEach(function (btn) {
              btn.classList.add('hidden');
            });
            yourBetInfoEl.forEach(function (item) {
              item.classList.remove('hidden');
            });
            authBtnsEl.forEach(function (btn) {
              btn.classList.add('hidden');
            });
            toCurrentRaceBtns.forEach(function (item) {
              item.classList.remove('hidden');
            });
            predictionBtnEl.classList.remove('_lock');
            resultsBlock.classList.remove("auth");
          }
        };
        _getPredictionType = function _getPredictionType3() {
          _getPredictionType = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userIdentifier, raceNumber) {
            var response, data;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return request("/prediction-type/".concat(userIdentifier, "/").concat(raceNumber));
                case 3:
                  response = _context4.sent;
                  _context4.next = 6;
                  return response.json();
                case 6:
                  data = _context4.sent;
                  console.log('Prediction type response:', data);
                  return _context4.abrupt("return", data);
                case 11:
                  _context4.prev = 11;
                  _context4.t0 = _context4["catch"](0);
                  console.error('Error getting prediction type:', _context4.t0);
                  return _context4.abrupt("return", null);
                case 15:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, null, [[0, 11]]);
          }));
          return _getPredictionType.apply(this, arguments);
        };
        getPredictionType = function _getPredictionType2(_x, _x2) {
          return _getPredictionType.apply(this, arguments);
        };
        _registerUser = function _registerUser3() {
          _registerUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var response;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return request('/user', {
                    method: 'POST',
                    body: JSON.stringify({
                      userid: userId
                    })
                  });
                case 2:
                  response = _context3.sent;
                  return _context3.abrupt("return", response.json());
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return _registerUser.apply(this, arguments);
        };
        registerUser = function _registerUser2() {
          return _registerUser.apply(this, arguments);
        };
        _getSeasonalStandings = function _getSeasonalStandings3() {
          _getSeasonalStandings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var response;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return request('/seasonal-standings');
                case 2:
                  response = _context2.sent;
                  return _context2.abrupt("return", response.json());
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return _getSeasonalStandings.apply(this, arguments);
        };
        getSeasonalStandings = function _getSeasonalStandings2() {
          return _getSeasonalStandings.apply(this, arguments);
        };
        _getAllUsers = function _getAllUsers3() {
          _getAllUsers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var response;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return request('/users');
                case 2:
                  response = _context.sent;
                  return _context.abrupt("return", response.json());
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return _getAllUsers.apply(this, arguments);
        };
        getAllUsers = function _getAllUsers2() {
          return _getAllUsers.apply(this, arguments);
        };
        request = function _request(link) {
          var extraOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          console.log('request link:', "".concat(API, "/").concat(ENDPOINT).concat(link));
          return fetch("".concat(API, "/").concat(ENDPOINT).concat(link), _objectSpread({
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          }, extraOptions));
        };
        animateOnScroll = function _animateOnScroll(element, animationClass, delay) {
          var options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
          };
          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                setTimeout(function () {
                  entry.target.classList.add(animationClass);
                }, delay);
              } else {
                entry.target.classList.remove(animationClass);
              }
            });
          }, options);
          observer.observe(element);
        };
        maskUserId = function _maskUserId(userIdToMask) {
          return '**' + userIdToMask.toString().slice(2);
        };
        getCurrentRace = function _getCurrentRace() {
          var raceInfo = RACES.find(function (r) {
            return currentDate >= r.startDate && currentDate < r.endDate;
          });
          return raceInfo && raceInfo.number;
        };
        formatDateString = function _formatDateString(dateString) {
          var date = new Date(dateString);
          var day = date.getDate().toString().padStart(2, '0');
          var month = (date.getMonth() + 1).toString().padStart(2, '0');
          var year = date.getFullYear();
          var hours = date.getHours().toString().padStart(2, '0');
          var minutes = date.getMinutes().toString().padStart(2, '0');
          return "".concat(day, ".").concat(month, ".").concat(year, " / ").concat(hours, ":").concat(minutes);
        };
        //18908465
        API = 'https://fav-prom.com';
        ENDPOINT = 'api_formula1_25';
        RACES = [{
          number: 1,
          startDate: new Date('2025-03-12T09:00:00'),
          endDate: new Date('2025-03-16T02:30:00')
        }, {
          number: 2,
          startDate: new Date('2025-03-17T09:00:00'),
          endDate: new Date('2025-03-23T05:30:00')
        }, {
          number: 3,
          startDate: new Date('2025-03-24T09:00:00'),
          endDate: new Date('2025-04-06T04:30:00')
        }, {
          number: 4,
          startDate: new Date('2025-04-07T09:00:00'),
          endDate: new Date('2025-04-13T14:30:00')
        }, {
          number: 5,
          startDate: new Date('2025-04-14T09:00:00'),
          endDate: new Date('2025-04-20T16:30:00')
        }, {
          number: 6,
          startDate: new Date('2025-04-21T09:00:00'),
          endDate: new Date('2025-05-04T19:30:00')
        }, {
          number: 7,
          startDate: new Date('2025-05-05T09:00:00'),
          endDate: new Date('2025-05-18T12:30:00')
        }, {
          number: 8,
          startDate: new Date('2025-05-19T09:00:00'),
          endDate: new Date('2025-05-25T12:30:00')
        }, {
          number: 9,
          startDate: new Date('2025-05-26T09:00:00'),
          endDate: new Date('2025-06-01T12:30:00')
        }, {
          number: 10,
          startDate: new Date('2025-06-02T09:00:00'),
          endDate: new Date('2025-06-15T17:30:00')
        }, {
          number: 11,
          startDate: new Date('2025-06-16T09:00:00'),
          endDate: new Date('2025-06-29T12:30:00')
        }, {
          number: 12,
          startDate: new Date('2025-06-30T09:00:00'),
          endDate: new Date('2025-07-06T13:30:00')
        }, {
          number: 13,
          startDate: new Date('2025-07-07T09:00:00'),
          endDate: new Date('2025-07-27T12:30:00')
        }, {
          number: 14,
          startDate: new Date('2025-07-28T09:00:00'),
          endDate: new Date('2025-08-03T12:30:00')
        }, {
          number: 15,
          startDate: new Date('2025-08-04T09:00:00'),
          endDate: new Date('2025-08-31T12:30:00')
        }, {
          number: 16,
          startDate: new Date('2025-09-01T09:00:00'),
          endDate: new Date('2025-09-07T12:30:00')
        }, {
          number: 17,
          startDate: new Date('2025-09-08T09:00:00'),
          endDate: new Date('2025-09-21T10:30:00')
        }, {
          number: 18,
          startDate: new Date('2025-09-22T09:00:00'),
          endDate: new Date('2025-10-05T11:30:00')
        }, {
          number: 19,
          startDate: new Date('2025-10-06T09:00:00'),
          endDate: new Date('2025-10-19T18:30:00')
        }, {
          number: 20,
          startDate: new Date('2025-10-20T09:00:00'),
          endDate: new Date('2025-10-26T18:30:00')
        }, {
          number: 21,
          startDate: new Date('2025-10-27T09:00:00'),
          endDate: new Date('2025-11-09T15:30:00')
        }, {
          number: 22,
          startDate: new Date('2025-11-10T09:00:00'),
          endDate: new Date('2025-11-22T02:30:00')
        }, {
          number: 23,
          startDate: new Date('2025-11-23T09:00:00'),
          endDate: new Date('2025-11-30T14:30:00')
        }, {
          number: 24,
          startDate: new Date('2025-12-01T09:00:00'),
          endDate: new Date('2025-12-07T11:30:00')
        }];
        currentDate = new Date();
        racesById = [];
        RACES.forEach(function (r) {
          return racesById[r.number] = r;
        });
        // console.log(' racesById:', racesById);
        users = []; // let existingUser = true;
        existingUser = !!sessionStorage.getItem("existingUser");
        authBtnsEl = document.querySelectorAll('.unauth-msg');
        youAreInBtnsEl = document.querySelectorAll('.btn-join');
        predictionBtnEl = document.querySelector('.took-part');
        betColumnsBtnsEl = document.querySelectorAll('.bet__column-btn');
        yourBetInfoEl = document.querySelectorAll('.bet__your-container');
        yourSeasonResEl = document.querySelector('.results__you');
        yourSeasonBetsEl = document.querySelector('.drop._bets');
        toCurrentRaceBtns = document.querySelectorAll(".current-race");
        confirmBlock = document.querySelector(".confirm");
        resultsBlock = document.querySelector(".results");
        betConfirmed = !!sessionStorage.getItem("betConfirmed");
        document.addEventListener('DOMContentLoaded', function () {
          var slides = document.querySelectorAll('.race__item');
          var slideMoveLeft = document.querySelector('.race__nav-left');
          var slideMoveRight = document.querySelector('.race__nav-right');
          var slideCounter = document.querySelector('.race__nav-counter');
          var betTables = document.querySelectorAll('.bet__item');
          var betWrapColumns = document.querySelectorAll('.bet__wrap');
          var resultsFirst = document.querySelector('.results__first');
          var resultsSecond = document.querySelector('.results__second');
          var resultsThird = document.querySelector('.results__third');

          // let currentRace = getCurrentRace() ? getCurrentRace() : 1;
          var currentRace = 2;
          slides.forEach(function (slide, i) {
            if (i < currentRace - 1) {
              slide.classList.add('_done');
            }
            if (i > currentRace - 1) {
              slide.classList.add('_lock');
            }
          });
          var currentSlide = currentRace - 1;
          toCurrentRaceBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
              currentRace = 2;
              currentSlide = currentRace - 1;
              updateSlider(currentSlide);
              var targetElement = document.getElementById("predict");
              var targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
              });
            });
          });
          betWrapColumns.forEach(function (column) {
            column.scrollLeft = 0;
          });
          function updateSlider(index) {
            betWrapColumns.forEach(function (column) {
              column.scrollLeft = 0;
            });
            slides.forEach(function (slide) {
              return slide.classList.remove('_active');
            });
            slides[index].classList.add('_active');
            slideCounter.textContent = "".concat(index + 1, "/").concat(slides.length);
            betTables.forEach(function (table) {
              table.classList.remove('_lock', '_done');
              table.parentElement.classList.remove('_result'); // тут
              if (currentSlide > currentRace - 1) {
                table.classList.add('_lock');
              }
              if (currentSlide < currentRace - 1) {
                table.classList.add('_done');
                table.parentElement.classList.add('_result'); // тут
              }

              if (currentSlide === currentRace - 1) {
                table.classList.remove('_lock', '_done');
                table.parentElement.classList.remove('_result'); // тут
              }
            });
          }

          function moveSlide(direction) {
            var currentBolid = slides[currentSlide].querySelector('.race__bolid');
            currentBolid.classList.add('_move');
            var nextSlide = direction === 'next' ? currentSlide + 1 : currentSlide - 1;
            if (nextSlide < 0) nextSlide = slides.length - 1;
            if (nextSlide >= slides.length) nextSlide = 0;
            var nextBolid = slides[nextSlide].querySelector('.race__bolid');
            nextBolid.classList.add('_arrive');
            slides[currentSlide].classList.add('_opacity');
            setTimeout(function () {
              currentBolid.classList.remove('_move');
              nextBolid.classList.remove('_arrive');
              currentSlide = nextSlide;
              updateSlider(currentSlide);
              slides.forEach(function (slide) {
                slide.classList.remove('_opacity');
              });
            }, 1500);
          }
          slideMoveLeft.addEventListener('click', function () {
            moveSlide('prev');
            document.querySelector('.race__nav').style.pointerEvents = 'none';
            setTimeout(function () {
              document.querySelector('.race__nav').style.pointerEvents = 'initial';
            }, 2000);
          });
          slideMoveRight.addEventListener('click', function () {
            moveSlide('next');
            document.querySelector('.race__nav').style.pointerEvents = 'none';
            setTimeout(function () {
              document.querySelector('.race__nav').style.pointerEvents = 'initial';
            }, 2000);
          });
          updateSlider(currentSlide);
          function startCountdown(endTime) {
            var daysEls = document.querySelectorAll('.timer__days-item');
            var hoursEls = document.querySelectorAll('.timer__hours-item');
            var minutesEls = document.querySelectorAll('.timer__minutes-item');
            var timerInterval = null;
            function updateTimer() {
              var now = new Date().getTime();
              var timeLeft = endTime - now;
              if (timeLeft <= 0) {
                clearInterval(timerInterval);
                updateDigits(daysEls, '00');
                updateDigits(hoursEls, '00');
                updateDigits(minutesEls, '00');
                return;
              }
              var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
              var hours = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
              var minutes = Math.floor(timeLeft / (1000 * 60) % 60);
              updateDigits(daysEls, String(days).padStart(2, '0'));
              updateDigits(hoursEls, String(hours).padStart(2, '0'));
              updateDigits(minutesEls, String(minutes).padStart(2, '0'));
            }
            function updateDigits(elements, value) {
              elements[0].textContent = value[0];
              elements[1].textContent = value[1];
            }
            updateTimer();
            timerInterval = setInterval(updateTimer, 60000);
          }
          var now = new Date();
          var endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59).getTime();
          startCountdown(endOfMonth);
          function startSmoke(carSelector, smokeClass, maxCount, interval, delay, fadeTime, removeDelay) {
            var extraClass = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : '';
            var activeClass = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
            var cars = document.querySelectorAll(carSelector);
            cars.forEach(function (car) {
              if (!car) return;
              function createSmoke() {
                if (activeClass) {
                  var _car$parentElement;
                  var parent = (_car$parentElement = car.parentElement) === null || _car$parentElement === void 0 ? void 0 : _car$parentElement.parentElement;
                  if (!parent || !parent.classList.contains('_active')) return;
                }
                var extraClassName = extraClass ? ".".concat(extraClass) : '';
                if (car.querySelectorAll(".".concat(smokeClass).concat(extraClassName)).length < maxCount) {
                  var smoke = document.createElement('div');
                  smoke.classList.add(smokeClass);
                  if (extraClass) smoke.classList.add(extraClass);
                  car.appendChild(smoke);
                  setTimeout(function () {
                    return smoke.remove();
                  }, fadeTime + removeDelay);
                }
              }
              setTimeout(function () {
                createSmoke();
                setInterval(createSmoke, interval);
              }, delay);
            });
          }
          startSmoke('.race__bolid-car', 'race__bolid-smoke-front', 4, 900, 500, 200, 1600, '', true);
          startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 8, 900, 500, 200, 1600, '', true);
          startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 4, 900, 500, 200, 1600, '_large', true);
          startSmoke('.welcome__pers-smoke-front', 'front-before', 4, 900, 500, 200, 1600, '', false);
          startSmoke('.welcome__pers-smoke-back', 'front-before', 4, 900, 500, 200, 1600, '', false);
          function setPopups(triggerButton, popupClass) {
            var popupsContainer = document.querySelector('.popups');
            var popup = document.querySelector(".popups__item.".concat(popupClass));
            if (!triggerButton || !popup || !popupsContainer) return;
            triggerButton.addEventListener('click', function () {
              popupsContainer.classList.remove('_opacity');
              popupsContainer.classList.add(popupClass);
              document.body.style.overflow = 'hidden';
            });
            var closeButton = popup.querySelector('.popups__item-close');
            popupsContainer.addEventListener('click', function (e) {
              if (e.target === popupsContainer || e.target === closeButton) {
                closePopup();
              }
            });
            function closePopup() {
              popupsContainer.classList.add('_opacity');
              popupsContainer.classList.remove(popupClass);
              document.body.style.overflow = '';
            }
          }

          // setPopups(document.querySelector('.bet__btn-item'), '_betPopup');
          var betPopupsBtns = document.querySelectorAll(".bet__btn");
          betPopupsBtns.forEach(function (btn) {
            var parent = btn.parentElement;
            while (parent) {
              if (parent.classList.contains("_racer")) {
                setPopups(btn, "_betPopupRacer");
                break;
              }
              if (parent.classList.contains("_lap")) {
                setPopups(btn, "_betPopupLap");
                break;
              }
              if (parent.classList.contains("_team")) {
                setPopups(btn, "_betPopupTeam");
                break;
              }
              parent = parent.parentElement;
            }
          });
          setPopups(document.querySelector('.confirm__upd-btn._betConfirmed'), '_confirmPopup');
          setPopups(document.querySelector('.confirm__upd-btn._betNotConfirmed'), '_notConfirmPopup');
          setPopups(document.querySelector('.results__popup'), '_resultsPopup');
          function animateOnScroll(element, animationClass, delay) {
            var options = {
              root: null,
              rootMargin: '0px',
              threshold: 0.2
            };
            var observer = new IntersectionObserver(function (entries) {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  setTimeout(function () {
                    entry.target.classList.add(animationClass);
                  }, delay);
                } else {
                  entry.target.classList.remove(animationClass);
                }
              });
            }, options);
            observer.observe(element);
          }
          animateOnScroll(resultsFirst.querySelector('.results__top-decor'), '_show', 0);
          animateOnScroll(resultsSecond.querySelector('.results__top-decor'), '_show', 400);
          animateOnScroll(resultsThird.querySelector('.results__top-decor'), '_show', 800);
          animateOnScroll(resultsFirst.querySelector('.results__top-wrap'), '_show', 0);
          animateOnScroll(resultsSecond.querySelector('.results__top-wrap'), '_show', 400);
          animateOnScroll(resultsThird.querySelector('.results__top-wrap'), '_show', 800);
          document.querySelectorAll('.bet__item').forEach(function (item) {
            var wrap = item.querySelector('.bet__wrap');
            var navItems = item.querySelectorAll('.bet__scroll-nav-item');
            var scrollCount = item.querySelector('.bet__scroll-count');
            var firstColumn = item.querySelector('.bet__column');
            var updateScrollStatus = function updateScrollStatus() {
              var scrollLeft = wrap.scrollLeft;
              var isFirstVisible = scrollLeft < firstColumn.clientWidth / 2;
              navItems[0].classList.toggle('_active', isFirstVisible);
              navItems[1].classList.toggle('_active', !isFirstVisible);
              scrollCount.textContent = isFirstVisible ? '1/2' : '2/2';
            };
            wrap.addEventListener('scroll', updateScrollStatus);
            updateScrollStatus();
          });
        });
        document.querySelector('.dark-btn').addEventListener('click', function () {
          document.body.classList.toggle('dark');
        });

        // #region Translation
        ukLang = document.querySelector('#ukLang');
        enLang = document.querySelector('#enLang');
        mainPage = document.querySelector('.fav-page');
        i18nData = {}; // let locale = 'uk';
        locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "uk";
        if (ukLang) locale = 'uk';
        if (enLang) locale = 'en';
        _context12.prev = 59;
        _context12.next = 62;
        return loadTranslations();
      case 62:
        _context12.next = 64;
        return init();
      case 64:
        _context12.next = 69;
        break;
      case 66:
        _context12.prev = 66;
        _context12.t0 = _context12["catch"](59);
        console.error('Error during initialization:', _context12.t0);
      case 69:
        // for test
        authBtn = document.querySelector(".auth-btn");
        authBtn.addEventListener("click", function () {
          if (userId) {
            sessionStorage.removeItem("userId");
          } else {
            sessionStorage.setItem("userId", '18908465');
          }
          window.location.reload();
        });
        btnConfirm = document.querySelector('.btn-confirm');
        btnConfirm.addEventListener('click', function () {
          if (sessionStorage.getItem("betConfirmed")) {
            sessionStorage.removeItem("betConfirmed");
          } else {
            sessionStorage.setItem("betConfirmed", "true");
          }
          window.location.reload();
        });
        btnParticipante = document.querySelector('.btn-participante');
        btnParticipante.addEventListener('click', function () {
          if (sessionStorage.getItem("existingUser")) {
            sessionStorage.removeItem("existingUser");
          } else {
            sessionStorage.setItem("existingUser", "true");
          }
          window.location.reload();
        });
        lngBtn = document.querySelector(".lng-btn");
        lngBtn.addEventListener("click", function () {
          if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
          } else {
            sessionStorage.setItem("locale", "en");
          }
          window.location.reload();
        });
        racerBtn = document.querySelector(".racer-btn");
        lapBtn = document.querySelector(".lap-btn");
        teamBtn = document.querySelector(".team-btn");
        racerBtn.addEventListener("click", function () {
          console.log("winer");
          renderPredictionTable("winner");
        });
        lapBtn.addEventListener("click", function () {
          console.log("lap");
          renderPredictionTable("fastestLap");
        });
        teamBtn.addEventListener("click", function () {
          console.log("team");
          renderPredictionTable("bestTeam");
        });
        renderPredictionTable();
        document.querySelector(".menu-btn").addEventListener("click", function () {
          document.querySelector(".menu-test").classList.toggle("hidden");
        });
        betColumnsBtnsEl.forEach(function (btn, i) {
          btn.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelectorAll(".bet__column-item").forEach(function (elem, j) {
              elem.classList.remove("you");
              if (i === j) {
                elem.classList.add("you");
              }
            });
          });
        });
      case 86:
      case "end":
        return _context12.stop();
    }
  }, _callee12, null, [[59, 66]]);
}))();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZm9ybWF0RGF0ZVN0cmluZyIsImdldEN1cnJlbnRSYWNlIiwibWFza1VzZXJJZCIsImFuaW1hdGVPblNjcm9sbCIsInJlcXVlc3QiLCJnZXRBbGxVc2VycyIsImdldFNlYXNvbmFsU3RhbmRpbmdzIiwicmVnaXN0ZXJVc2VyIiwiZ2V0UHJlZGljdGlvblR5cGUiLCJjaGVja1VzZXJBdXRoIiwiY2hlY2tVc2VyUmVnIiwiaW5pdFJlZ2lzdHJhdGlvbiIsImxvYWRQcmVkaWN0aW9uVHlwZSIsInJlbmRlclByZWRpY3Rpb25UYWJsZSIsInJlbmRlclNlYXNvbmFsU3RhbmRpbmdzIiwicmVuZGVyVXNlcnNQbGFjZSIsImluaXRQYWdlIiwiaW5pdCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ0cmFuc2xhdGVLZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImxvY2FsZSIsImtleSIsImkxOG5EYXRhIiwiZWxlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZWxlbSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsIm1haW5QYWdlIiwiZmV0Y2giLCJBUEkiLCJFTkRQT0lOVCIsInJlc3BvbnNlIiwianNvbiIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNvbnNvbGUiLCJlcnJvciIsIndpbmRvdyIsInN0b3JlIiwibG9nIiwidXNlcklkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiTnVtYmVyIiwiYyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnX3VzZXJfaWQiLCJjbGVhckludGVydmFsIiwidXNlcnMiLCJzdGFuZGluZ3MiLCJleGlzdGluZ1VzZXIiLCJyZXN1bHRzQmxvY2siLCJiZXRDb25maXJtZWQiLCJjb25maXJtQmxvY2siLCJBcnJheSIsImlzQXJyYXkiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwidXNlcmlkIiwicGFyc2VJbnQiLCJ5b3VyU2Vhc29uUmVzRWwiLCJwbGFjZUVsIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicG9zaXRpb24iLCJ1c2VySWRFbCIsInBvaW50c1dyYXBwZXIiLCJwb2ludHNWYWx1ZUVsIiwiY29ycmVjdFByZWRpY3Rpb25zIiwidXNlcnNXaXRoUG9pbnRzIiwiZmlsdGVyIiwidG9wVGhyZWUiLCJzbGljZSIsImNvbnRhaW5lckNsYXNzIiwiY29udGFpbmVyIiwicG9pbnRzRWwiLCJwb2ludHNUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInByZWRpY3Rpb25UeXBlIiwiYmV0Q29udGFpbmVyIiwiY3VycmVudFJhY2VOdW1iZXIiLCJwcmVkaWN0aW9uRGF0YSIsInlvdUFyZUluQnRuc0VsIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Y2Nlc3MiLCJwcmVkaWN0aW9uQnRuRWwiLCJkaXNhYmxlZCIsInlvdXJTZWFzb25CZXRzRWwiLCJhdXRoQnRuc0VsIiwiYmV0Q29sdW1uc0J0bnNFbCIsImJ1dHRvbiIsInlvdXJCZXRJbmZvRWwiLCJpdGVtIiwidG9DdXJyZW50UmFjZUJ0bnMiLCJ1c2VySWRlbnRpZmllciIsInJhY2VOdW1iZXIiLCJkYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImFuaW1hdGlvbkNsYXNzIiwiZGVsYXkiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwidXNlcklkVG9NYXNrIiwidG9TdHJpbmciLCJyYWNlSW5mbyIsIlJBQ0VTIiwiciIsImN1cnJlbnREYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm51bWJlciIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJyYWNlc0J5SWQiLCJzbGlkZXMiLCJzbGlkZU1vdmVMZWZ0Iiwic2xpZGVNb3ZlUmlnaHQiLCJzbGlkZUNvdW50ZXIiLCJiZXRUYWJsZXMiLCJiZXRXcmFwQ29sdW1ucyIsInJlc3VsdHNGaXJzdCIsInJlc3VsdHNTZWNvbmQiLCJyZXN1bHRzVGhpcmQiLCJjdXJyZW50UmFjZSIsInNsaWRlIiwiaSIsImN1cnJlbnRTbGlkZSIsInVwZGF0ZVNsaWRlciIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImNvbHVtbiIsInNjcm9sbExlZnQiLCJpbmRleCIsInRhYmxlIiwicGFyZW50RWxlbWVudCIsIm1vdmVTbGlkZSIsImRpcmVjdGlvbiIsImN1cnJlbnRCb2xpZCIsIm5leHRTbGlkZSIsIm5leHRCb2xpZCIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInN0YXJ0Q291bnRkb3duIiwiZW5kVGltZSIsImRheXNFbHMiLCJob3Vyc0VscyIsIm1pbnV0ZXNFbHMiLCJ0aW1lckludGVydmFsIiwidXBkYXRlVGltZXIiLCJub3ciLCJnZXRUaW1lIiwidGltZUxlZnQiLCJ1cGRhdGVEaWdpdHMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiU3RyaW5nIiwiZWxlbWVudHMiLCJ2YWx1ZSIsImVuZE9mTW9udGgiLCJzdGFydFNtb2tlIiwiY2FyU2VsZWN0b3IiLCJzbW9rZUNsYXNzIiwibWF4Q291bnQiLCJmYWRlVGltZSIsInJlbW92ZURlbGF5IiwiZXh0cmFDbGFzcyIsImFjdGl2ZUNsYXNzIiwiY2FycyIsImNhciIsImNyZWF0ZVNtb2tlIiwicGFyZW50IiwiY29udGFpbnMiLCJleHRyYUNsYXNzTmFtZSIsInNtb2tlIiwiY3JlYXRlRWxlbWVudCIsInNldFBvcHVwcyIsInRyaWdnZXJCdXR0b24iLCJwb3B1cENsYXNzIiwicG9wdXBzQ29udGFpbmVyIiwicG9wdXAiLCJvdmVyZmxvdyIsImNsb3NlQnV0dG9uIiwiZSIsImNsb3NlUG9wdXAiLCJiZXRQb3B1cHNCdG5zIiwid3JhcCIsIm5hdkl0ZW1zIiwic2Nyb2xsQ291bnQiLCJmaXJzdENvbHVtbiIsInVwZGF0ZVNjcm9sbFN0YXR1cyIsImlzRmlyc3RWaXNpYmxlIiwiY2xpZW50V2lkdGgiLCJ0b2dnbGUiLCJ1a0xhbmciLCJlbkxhbmciLCJhdXRoQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsImJ0bkNvbmZpcm0iLCJidG5QYXJ0aWNpcGFudGUiLCJsbmdCdG4iLCJyYWNlckJ0biIsImxhcEJ0biIsInRlYW1CdG4iLCJwcmV2ZW50RGVmYXVsdCIsImoiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsMkRBQUM7RUFBQTtFQUFBLDZQQW1KWUEsZ0JBQWdCLEVBWWhCQyxjQUFjLEVBT2RDLFVBQVUsRUFJVkMsZUFBZSxFQXNCZkMsT0FBTyxFQVdEQyxXQUFXLGdCQUtYQyxvQkFBb0IseUJBS3BCQyxZQUFZLGlCQVVaQyxpQkFBaUIsc0JBd0J2QkMsYUFBYSxFQXlEYkMsWUFBWSxFQVdOQyxnQkFBZ0IscUJBY2hCQyxrQkFBa0IsdUJBVXhCQyxxQkFBcUIsRUFvQnJCQyx1QkFBdUIsRUE2RXZCQyxnQkFBZ0IsRUF5Q1ZDLFFBQVEsYUFtQlJDLElBQUkscURBdWJKQyxnQkFBZ0IscUJBcUJ0QkMsU0FBUyxFQWlCVEMsWUFBWSxFQVNaQyxxQkFBcUI7RUFBQTtJQUFBO01BQUE7UUFBckJBLHFCQUFxQixrQ0FBQ0MsT0FBTyxFQUFFQyxZQUFZLEVBQUU7VUFDbEQsSUFBSSxDQUFDRCxPQUFPLEVBQUU7WUFDVjtVQUNKO1VBQ0Esd0JBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQywwQkFBRTtZQUE1QixJQUFNRSxJQUFJO1lBQ1hGLE9BQU8sQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLENBQUNILFlBQVksR0FBR0MsSUFBSSxDQUFDO1VBQ2pEO1VBQ0FGLE9BQU8sQ0FBQ0csU0FBUyxDQUFDRSxHQUFHLENBQUNKLFlBQVksR0FBR0ssTUFBTSxDQUFDO1FBQ2hELENBQUM7UUFqQlFSLFlBQVksMEJBQUNTLEdBQUcsRUFBRTtVQUN2QixJQUFJLENBQUNBLEdBQUcsRUFBRTtZQUNOO1VBQ0o7VUFDQSxPQUNJQyxRQUFRLENBQUNELEdBQUcsQ0FBQyxJQUFJLDBDQUEwQyxHQUFHQSxHQUFHO1FBRXpFLENBQUM7UUF4QlFWLFNBQVMseUJBQUc7VUFDakIsSUFBTVksS0FBSyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO1VBQzNELElBQUlGLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxNQUFNLEVBQUU7WUFDdkJILEtBQUssQ0FBQ0ksT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSztjQUNwQixJQUFNUCxHQUFHLEdBQUdPLElBQUksQ0FBQ0MsWUFBWSxDQUFDLGdCQUFnQixDQUFDO2NBQy9DRCxJQUFJLENBQUNFLFNBQVMsR0FBR2xCLFlBQVksQ0FBQ1MsR0FBRyxDQUFDO2NBQ2xDTyxJQUFJLENBQUNHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMxQyxDQUFDLENBQUM7VUFDTjtVQUVBLElBQUlYLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDakJZLFFBQVEsQ0FBQ2YsU0FBUyxDQUFDRSxHQUFHLENBQUMsSUFBSSxDQUFDO1VBQ2hDO1VBRUFOLHFCQUFxQixFQUFFO1FBQzNCLENBQUM7UUFBQTtVQUFBLCtFQXBDRDtZQUFBO1lBQUE7Y0FBQTtnQkFBQTtrQkFBQTtrQkFBQTtrQkFBQSxPQUUrQm9CLEtBQUssV0FDckJDLEdBQUcsY0FBSUMsUUFBUSx5QkFBZWYsTUFBTSxFQUMxQztnQkFBQTtrQkFGS2dCLFFBQVE7a0JBQUE7a0JBQUEsT0FHS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7Z0JBQUE7a0JBQTVCQSxJQUFJO2tCQUNWZixRQUFRLEdBQUdlLElBQUk7a0JBQ2YxQixTQUFTLEVBQUU7a0JBRUwyQixnQkFBZ0IsR0FBRyxJQUFJQyxnQkFBZ0IsQ0FBQyxVQUFVQyxTQUFTLEVBQUU7b0JBQy9EN0IsU0FBUyxFQUFFO2tCQUNmLENBQUMsQ0FBQztrQkFDRjJCLGdCQUFnQixDQUFDRyxPQUFPLENBQUNqQixRQUFRLENBQUNrQixjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzdEQyxTQUFTLEVBQUUsSUFBSTtvQkFDZkMsT0FBTyxFQUFFO2tCQUNiLENBQUMsQ0FBQztrQkFBQztrQkFBQTtnQkFBQTtrQkFBQTtrQkFBQTtrQkFFSEMsT0FBTyxDQUFDQyxLQUFLLENBQUMsNkJBQTZCLGdCQUFRO2dCQUFDO2dCQUFBO2tCQUFBO2NBQUE7WUFBQTtVQUFBLENBRTNEO1VBQUE7UUFBQTtRQW5CY3BDLGdCQUFnQjtVQUFBO1FBQUE7UUFBQTtVQUFBLG1FQXZiL0I7WUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQUEsSUFDU3FDLE1BQU0sQ0FBQ0MsS0FBSztvQkFBQTtvQkFBQTtrQkFBQTtrQkFDYkgsT0FBTyxDQUFDSSxHQUFHLENBQUMsY0FBYyxDQUFDO2tCQUMzQjtrQkFDQTtrQkFDQTtrQkFDQUMsTUFBTSxHQUFHQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBR0MsTUFBTSxDQUFDRixjQUFjLENBQUNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUk7a0JBQUE7a0JBQUEsT0FDckY1QyxRQUFRLEVBQUU7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7a0JBRWhCcUMsT0FBTyxDQUFDSSxHQUFHLENBQUMsaUJBQWlCLENBQUM7a0JBQUM7a0JBQUEsT0FDekJ6QyxRQUFRLEVBQUU7Z0JBQUE7a0JBQ1o4QyxDQUFDLEdBQUcsQ0FBQztrQkFDSEMsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBWTtvQkFDckMsSUFBSUYsQ0FBQyxHQUFHLEVBQUUsRUFBRTtzQkFDUixJQUFJUCxNQUFNLENBQUNVLFNBQVMsRUFBRTt3QkFDbEJQLE1BQU0sR0FBR0gsTUFBTSxDQUFDVSxTQUFTO3dCQUN6QiwyREFBQzswQkFBQTs0QkFBQTs4QkFBQTtnQ0FBQTtnQ0FBQSxPQUNTakQsUUFBUSxFQUFFOzhCQUFBO2dDQUNoQlAsYUFBYSxFQUFFOzhCQUFDOzhCQUFBO2dDQUFBOzRCQUFBOzBCQUFBO3dCQUFBLENBQ25CLElBQUc7d0JBQ0p5RCxhQUFhLENBQUNILFFBQVEsQ0FBQztzQkFDM0I7b0JBQ0osQ0FBQyxNQUFNO3NCQUNIRyxhQUFhLENBQUNILFFBQVEsQ0FBQztzQkFDdkJELENBQUMsRUFBRTtzQkFDSFQsT0FBTyxDQUFDSSxHQUFHLENBQUNLLENBQUMsQ0FBQztvQkFDbEI7a0JBQ0osQ0FBQyxFQUFFLEdBQUcsQ0FBQztnQkFBQTtrQkFFWHJELGFBQWEsRUFBRTtnQkFBQztnQkFBQTtrQkFBQTtjQUFBO1lBQUE7VUFBQSxDQUNuQjtVQUFBO1FBQUE7UUE5QmNRLElBQUk7VUFBQTtRQUFBO1FBQUE7VUFBQSx1RUFuQm5CO1lBQUE7WUFBQTtjQUFBO2dCQUFBO2tCQUFBO2tCQUFBLE9BRWtCWixXQUFXLEVBQUU7Z0JBQUE7a0JBQTNCOEQsS0FBSztrQkFDTGQsT0FBTyxDQUFDSSxHQUFHLENBQUMsV0FBVyxFQUFFVSxLQUFLLENBQUM7a0JBQUM7a0JBQUEsT0FDUjdELG9CQUFvQixFQUFFO2dCQUFBO2tCQUF4QzhELFNBQVM7a0JBQ2Z0RCx1QkFBdUIsQ0FBQ3NELFNBQVMsQ0FBQztrQkFDbEMxRCxZQUFZLEVBQUU7a0JBQ2QyQyxPQUFPLENBQUNJLEdBQUcsQ0FBQyxlQUFlLEVBQUVZLFlBQVksQ0FBQztrQkFBQyxJQUN0Q0EsWUFBWTtvQkFBQTtvQkFBQTtrQkFBQTtrQkFBQTtrQkFBQSxPQUNQMUQsZ0JBQWdCLEVBQUU7Z0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUE7a0JBRXhCSSxnQkFBZ0IsQ0FBQ3FELFNBQVMsQ0FBQztrQkFDM0JFLFlBQVksQ0FBQzdDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFBQTtrQkFFekMsSUFBRzZDLFlBQVksRUFBQztvQkFDWkMsWUFBWSxDQUFDL0MsU0FBUyxDQUFDRSxHQUFHLENBQUMsZUFBZSxDQUFDO2tCQUMvQztnQkFBQztnQkFBQTtrQkFBQTtjQUFBO1lBQUE7VUFBQSxDQUNKO1VBQUE7UUFBQTtRQWpCY1gsUUFBUTtVQUFBO1FBQUE7UUF6Q2RELGdCQUFnQiw4QkFBQ3FELFNBQVMsRUFBRTtVQUNqQyxJQUFJLENBQUNWLE1BQU0sSUFBSSxDQUFDVSxTQUFTLElBQUksQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLENBQUNOLFNBQVMsQ0FBQyxFQUFFO1lBQ3BEO1VBQ0o7VUFFQSxJQUFNTyxXQUFXLEdBQUdQLFNBQVMsQ0FBQ1EsSUFBSSxDQUM5QixVQUFDQyxJQUFJO1lBQUEsT0FBS0EsSUFBSSxDQUFDQyxNQUFNLEtBQUtDLFFBQVEsQ0FBQ3JCLE1BQU0sQ0FBQztVQUFBLEVBQzdDO1VBQ0Q7VUFDQTtVQUNBO1VBQ0E7VUFDQSxJQUFJLENBQUNBLE1BQU0sSUFBSSxDQUFDVyxZQUFZLEVBQUU7WUFDMUJXLGVBQWUsQ0FBQ3ZELFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN2QztVQUNKO1VBRUFxRCxlQUFlLENBQUN2RCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7VUFDMUMsSUFBTXVELE9BQU8sR0FBR0QsZUFBZSxDQUFDRSxhQUFhLENBQUMscUJBQXFCLENBQUM7VUFDcEUsSUFBSUQsT0FBTyxFQUFFO1lBQ1RBLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHUixXQUFXLENBQUNTLFFBQVE7VUFDOUM7VUFFQSxJQUFNQyxRQUFRLEdBQUdMLGVBQWUsQ0FBQ0UsYUFBYSxDQUFDLHVCQUF1QixDQUFDO1VBQ3ZFLElBQUlHLFFBQVEsRUFBRTtZQUNWQSxRQUFRLENBQUNGLFdBQVcsR0FBR2pGLFVBQVUsQ0FBQ3dELE1BQU0sQ0FBQztVQUM3QztVQUVBLElBQU00QixhQUFhLEdBQUdOLGVBQWUsQ0FBQ0UsYUFBYSxDQUMvQywyQkFBMkIsQ0FDOUI7VUFFRCxJQUFJSSxhQUFhLEVBQUU7WUFDZixJQUFNQyxhQUFhLEdBQ2ZELGFBQWEsQ0FBQ0osYUFBYSxDQUFDLGlCQUFpQixDQUFDO1lBQ2xELElBQUlLLGFBQWEsRUFBRTtjQUNmQSxhQUFhLENBQUNKLFdBQVcsZUFBUVIsV0FBVyxDQUFDYSxrQkFBa0IsQ0FBRTtZQUNyRTtVQUNKO1FBQ0osQ0FBQztRQXBIUTFFLHVCQUF1QixrQ0FBQ3NELFNBQVMsRUFBRTtVQUN4Q2YsT0FBTyxDQUFDSSxHQUFHLENBQUMsWUFBWSxFQUFFVyxTQUFTLENBQUM7VUFFcEMsSUFBSSxDQUFDQSxTQUFTLElBQUksQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLENBQUNOLFNBQVMsQ0FBQyxJQUFJQSxTQUFTLENBQUNsQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25FO1VBQ0o7VUFFQSxJQUFNdUQsZUFBZSxHQUFHckIsU0FBUyxDQUFDc0IsTUFBTSxDQUNwQyxVQUFDYixJQUFJO1lBQUEsT0FBS0EsSUFBSSxDQUFDVyxrQkFBa0IsR0FBRyxDQUFDO1VBQUEsRUFDeEM7VUFFRCxJQUFJQyxlQUFlLENBQUN2RCxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCbUIsT0FBTyxDQUFDSSxHQUFHLENBQUMseUNBQXlDLENBQUM7WUFDdEQ7VUFDSjtVQUVBLElBQU1rQyxRQUFRLEdBQUdGLGVBQWUsQ0FBQ0csS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7VUFFNUNELFFBQVEsQ0FBQ3hELE9BQU8sQ0FBQyxVQUFDMEMsSUFBSSxFQUFLO1lBQ3ZCLElBQU1PLFFBQVEsR0FBR1AsSUFBSSxDQUFDTyxRQUFRO1lBQzlCLElBQUlTLGNBQWMsR0FBRyxFQUFFO1lBRXZCLFFBQVFULFFBQVE7Y0FDWixLQUFLLENBQUM7Z0JBQ0ZTLGNBQWMsR0FBRyxpQkFBaUI7Z0JBQ2xDO2NBQ0osS0FBSyxDQUFDO2dCQUNGQSxjQUFjLEdBQUcsa0JBQWtCO2dCQUNuQztjQUNKLEtBQUssQ0FBQztnQkFDRkEsY0FBYyxHQUFHLGlCQUFpQjtnQkFDbEM7Y0FDSjtnQkFDSTtZQUFPO1lBR2YsSUFBTUMsU0FBUyxHQUFHOUQsUUFBUSxDQUFDa0QsYUFBYSxDQUFDVyxjQUFjLENBQUM7WUFDeEQsSUFBSSxDQUFDQyxTQUFTLEVBQUU7WUFFaEIsSUFBSWpCLElBQUksQ0FBQ1csa0JBQWtCLEdBQUcsQ0FBQyxFQUFFO2NBQzdCckYsZUFBZSxDQUNYMkYsU0FBUyxDQUFDWixhQUFhLENBQUMscUJBQXFCLENBQUMsRUFDOUMsT0FBTyxFQUNQLENBQUMsQ0FDSjtjQUNEL0UsZUFBZSxDQUNYMkYsU0FBUyxDQUFDWixhQUFhLENBQUMsb0JBQW9CLENBQUMsRUFDN0MsT0FBTyxFQUNQLEdBQUcsQ0FDTjtjQUVELElBQU1ELE9BQU8sR0FBR2EsU0FBUyxDQUFDWixhQUFhLENBQUMscUJBQXFCLENBQUM7Y0FDOUQsSUFBSUQsT0FBTyxFQUFFQSxPQUFPLENBQUNFLFdBQVcsR0FBR0MsUUFBUTtjQUUzQyxJQUFNQyxRQUFRLEdBQUdTLFNBQVMsQ0FBQ1osYUFBYSxDQUNwQyx1QkFBdUIsQ0FDMUI7Y0FDRCxJQUFJRyxRQUFRLEVBQ1JBLFFBQVEsQ0FBQ0YsV0FBVyxrQkFBV2pGLFVBQVUsQ0FBQzJFLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUU7Y0FFNUQsSUFBTWlCLFFBQVEsR0FBR0QsU0FBUyxDQUFDWixhQUFhLENBQ3BDLDJCQUEyQixDQUM5QjtjQUNELElBQUlhLFFBQVEsRUFBRTtnQkFDVixJQUFNQyxVQUFVLEdBQUdELFFBQVEsQ0FBQ2IsYUFBYSxDQUNyQywyQkFBMkIsQ0FDOUI7Z0JBQ0RhLFFBQVEsQ0FBQ3pELFNBQVMsR0FBRyxFQUFFO2dCQUN2QixJQUFJMEQsVUFBVSxFQUFFRCxRQUFRLENBQUNFLFdBQVcsQ0FBQ0QsVUFBVSxDQUFDO2dCQUNoREQsUUFBUSxDQUFDRSxXQUFXLENBQ2hCakUsUUFBUSxDQUFDa0UsY0FBYyxZQUFLckIsSUFBSSxDQUFDVyxrQkFBa0IsRUFBRyxDQUN6RDtjQUNMO1lBQ0o7VUFDSixDQUFDLENBQUM7UUFDTixDQUFDO1FBL0ZRM0UscUJBQXFCLGtDQUFDc0YsY0FBYyxFQUFFO1VBQzNDO1VBQ0E7VUFDQSxJQUFNQyxZQUFZLEdBQUdwRSxRQUFRLENBQUNrRCxhQUFhLENBQUMsaUJBQWlCLENBQUM7VUFDOURrQixZQUFZLENBQUMzRSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztVQUN4RCxRQUFReUUsY0FBYztZQUNsQixLQUFLLFFBQVE7Y0FDVEMsWUFBWSxDQUFDM0UsU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDO2NBQ3BDO1lBQ0osS0FBSyxZQUFZO2NBQ2J5RSxZQUFZLENBQUMzRSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxNQUFNLENBQUM7Y0FDbEM7WUFDSixLQUFLLFVBQVU7Y0FDWHlFLFlBQVksQ0FBQzNFLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sQ0FBQztjQUNuQztZQUNKO2NBQ0l5RSxZQUFZLENBQUMzRSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7VUFBQztRQUVqRCxDQUFDO1FBQUE7VUFBQSxpRkE1QkQ7WUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQ1UwRSxpQkFBaUIsR0FBR3BHLGNBQWMsRUFBRTtrQkFBQTtrQkFBQSxPQUNiTyxpQkFBaUIsQ0FDMUNrRCxNQUFNLEVBQ04yQyxpQkFBaUIsQ0FDcEI7Z0JBQUE7a0JBSEtDLGNBQWM7a0JBS3BCekYscUJBQXFCLENBQUN5RixjQUFjLENBQUNILGNBQWMsQ0FBQztnQkFBQztnQkFBQTtrQkFBQTtjQUFBO1lBQUE7VUFBQSxDQUN4RDtVQUFBO1FBQUE7UUFSY3ZGLGtCQUFrQjtVQUFBO1FBQUE7UUFBQTtVQUFBLCtFQWRqQztZQUFBO2NBQUE7Z0JBQUE7a0JBQ0kyRixjQUFjLENBQUNwRSxPQUFPLENBQUMsVUFBQ3FFLEdBQUcsRUFBSztvQkFDNUJBLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTywwRUFBRTtzQkFBQTtzQkFBQTt3QkFBQTswQkFBQTs0QkFBQTs0QkFBQSxPQUNIbEcsWUFBWSxFQUFFOzBCQUFBOzRCQUEvQnFDLFFBQVE7NEJBQUEsS0FFVkEsUUFBUSxDQUFDOEQsT0FBTzs4QkFBQTs4QkFBQTs0QkFBQTs0QkFDaEJoRyxZQUFZLEVBQUU7NEJBQUM7NEJBQUEsT0FDVEUsa0JBQWtCLEVBQUU7MEJBQUE7MEJBQUE7NEJBQUE7d0JBQUE7c0JBQUE7b0JBQUEsQ0FHakMsR0FBQztrQkFDTixDQUFDLENBQUM7Z0JBQUM7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUEsQ0FDTjtVQUFBO1FBQUE7UUFaY0QsZ0JBQWdCO1VBQUE7UUFBQTtRQVh0QkQsWUFBWSw0QkFBRztVQUNwQnlELEtBQUssQ0FBQ2hDLE9BQU8sQ0FBQyxVQUFDMEMsSUFBSSxFQUFLO1lBQ3BCLElBQUlBLElBQUksQ0FBQ0MsTUFBTSxLQUFLcEIsTUFBTSxFQUFFO2NBQ3hCO2NBQ0FqRCxhQUFhLEVBQUU7WUFDbkI7VUFDSixDQUFDLENBQUM7VUFDRjtVQUNBO1FBQ0osQ0FBQztRQWxFUUEsYUFBYSw2QkFBRztVQUNyQjRDLE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLGVBQWUsRUFBRUMsTUFBTSxDQUFDO1VBQ3BDLElBQUksQ0FBQ0EsTUFBTSxFQUFFO1lBQ1RpRCxlQUFlLENBQUNDLFFBQVEsR0FBRyxJQUFJO1lBQy9CNUIsZUFBZSxDQUFDdkQsU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ3ZDa0YsZ0JBQWdCLENBQUNwRixTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDeENtRixVQUFVLENBQUMzRSxPQUFPLENBQUMsVUFBQXFFLEdBQUcsRUFBRztjQUNyQkEsR0FBRyxDQUFDL0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGcUYsZ0JBQWdCLENBQUM1RSxPQUFPLENBQUMsVUFBQzZFLE1BQU0sRUFBSztjQUNqQ0EsTUFBTSxDQUFDdkYsU0FBUyxDQUFDRSxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ2pDLENBQUMsQ0FBQztZQUNGc0YsYUFBYSxDQUFDOUUsT0FBTyxDQUFDLFVBQUErRSxJQUFJLEVBQUc7Y0FDekJBLElBQUksQ0FBQ3pGLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxDQUFDLENBQUM7WUFDRndGLGlCQUFpQixDQUFDaEYsT0FBTyxDQUFDLFVBQUErRSxJQUFJLEVBQUc7Y0FDN0JBLElBQUksQ0FBQ3pGLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxDQUFDLENBQUM7WUFDRjJDLFlBQVksQ0FBQzdDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLE1BQU0sQ0FBQztVQUd0QyxDQUFDLE1BQU0sSUFBSStCLE1BQU0sSUFBSSxDQUFDVyxZQUFZLEVBQUU7WUFDaENXLGVBQWUsQ0FBQ3ZELFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUN2Q3NGLGFBQWEsQ0FBQzlFLE9BQU8sQ0FBQyxVQUFBK0UsSUFBSSxFQUFHO2NBQ3pCQSxJQUFJLENBQUN6RixTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDaEMsQ0FBQyxDQUFDO1lBQ0ZvRixnQkFBZ0IsQ0FBQzVFLE9BQU8sQ0FBQyxVQUFDNkUsTUFBTSxFQUFLO2NBQ2pDQSxNQUFNLENBQUN2RixTQUFTLENBQUNFLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDakMsQ0FBQyxDQUFDO1lBQ0Y0RSxjQUFjLENBQUNwRSxPQUFPLENBQUMsVUFBQ3FFLEdBQUcsRUFBSztjQUM1QkEsR0FBRyxDQUFDL0UsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ2xDLENBQUMsQ0FBQztZQUNGb0YsVUFBVSxDQUFDM0UsT0FBTyxDQUFDLFVBQUNxRSxHQUFHLEVBQUs7Y0FDeEJBLEdBQUcsQ0FBQy9FLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMvQixDQUFDLENBQUM7WUFDRndGLGlCQUFpQixDQUFDaEYsT0FBTyxDQUFDLFVBQUErRSxJQUFJLEVBQUc7Y0FDN0JBLElBQUksQ0FBQ3pGLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNoQyxDQUFDLENBQUM7WUFDRjJDLFlBQVksQ0FBQzdDLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLE1BQU0sQ0FBQztVQUN0QyxDQUFDLE1BQU0sSUFBSStCLE1BQU0sSUFBSVcsWUFBWSxFQUFFO1lBQy9Ca0MsY0FBYyxDQUFDcEUsT0FBTyxDQUFDLFVBQUNxRSxHQUFHLEVBQUs7Y0FDNUJBLEdBQUcsQ0FBQy9FLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMvQixDQUFDLENBQUM7WUFDRnNGLGFBQWEsQ0FBQzlFLE9BQU8sQ0FBQyxVQUFBK0UsSUFBSSxFQUFHO2NBQ3pCQSxJQUFJLENBQUN6RixTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbkMsQ0FBQyxDQUFDO1lBQ0ZvRixVQUFVLENBQUMzRSxPQUFPLENBQUMsVUFBQ3FFLEdBQUcsRUFBSztjQUN4QkEsR0FBRyxDQUFDL0UsU0FBUyxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQy9CLENBQUMsQ0FBQztZQUNGd0YsaUJBQWlCLENBQUNoRixPQUFPLENBQUMsVUFBQStFLElBQUksRUFBRztjQUM3QkEsSUFBSSxDQUFDekYsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25DLENBQUMsQ0FBQztZQUNGaUYsZUFBZSxDQUFDbEYsU0FBUyxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3pDNEMsWUFBWSxDQUFDN0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO1VBQ3pDO1FBQ0osQ0FBQztRQUFBO1VBQUEsZ0ZBL0VELGtCQUFpQzBGLGNBQWMsRUFBRUMsVUFBVTtZQUFBO1lBQUE7Y0FBQTtnQkFBQTtrQkFBQTtrQkFBQTtrQkFBQSxPQUU1QmpILE9BQU8sNEJBQ05nSCxjQUFjLGNBQUlDLFVBQVUsRUFDbkQ7Z0JBQUE7a0JBRkt6RSxRQUFRO2tCQUFBO2tCQUFBLE9BSUtBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO2dCQUFBO2tCQUE1QnlFLElBQUk7a0JBQ1ZqRSxPQUFPLENBQUNJLEdBQUcsQ0FBQywyQkFBMkIsRUFBRTZELElBQUksQ0FBQztrQkFBQyxrQ0FFeENBLElBQUk7Z0JBQUE7a0JBQUE7a0JBQUE7a0JBRVhqRSxPQUFPLENBQUNDLEtBQUssQ0FBQyxnQ0FBZ0MsZUFBUTtrQkFBQyxrQ0FDaEQsSUFBSTtnQkFBQTtnQkFBQTtrQkFBQTtjQUFBO1lBQUE7VUFBQSxDQUVsQjtVQUFBO1FBQUE7UUFkYzlDLGlCQUFpQjtVQUFBO1FBQUE7UUFBQTtVQUFBLDJFQVZoQztZQUFBO1lBQUE7Y0FBQTtnQkFBQTtrQkFBQTtrQkFBQSxPQUMyQkosT0FBTyxDQUFDLE9BQU8sRUFBRTtvQkFDcENtSCxNQUFNLEVBQUUsTUFBTTtvQkFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztzQkFDakI1QyxNQUFNLEVBQUVwQjtvQkFDWixDQUFDO2tCQUNMLENBQUMsQ0FBQztnQkFBQTtrQkFMSWQsUUFBUTtrQkFBQSxrQ0FNUEEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7Z0JBQUE7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUEsQ0FDekI7VUFBQTtRQUFBO1FBUmN0QyxZQUFZO1VBQUE7UUFBQTtRQUFBO1VBQUEsbUZBTDNCO1lBQUE7WUFBQTtjQUFBO2dCQUFBO2tCQUFBO2tCQUFBLE9BQzJCSCxPQUFPLENBQUMscUJBQXFCLENBQUM7Z0JBQUE7a0JBQS9Dd0MsUUFBUTtrQkFBQSxrQ0FDUEEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7Z0JBQUE7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUEsQ0FDekI7VUFBQTtRQUFBO1FBSGN2QyxvQkFBb0I7VUFBQTtRQUFBO1FBQUE7VUFBQSwwRUFMbkM7WUFBQTtZQUFBO2NBQUE7Z0JBQUE7a0JBQUE7a0JBQUEsT0FDMkJGLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQUE7a0JBQWxDd0MsUUFBUTtrQkFBQSxpQ0FDUEEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7Z0JBQUE7Z0JBQUE7a0JBQUE7Y0FBQTtZQUFBO1VBQUEsQ0FDekI7VUFBQTtRQUFBO1FBSGN4QyxXQUFXO1VBQUE7UUFBQTtRQVhqQkQsT0FBTyxxQkFBQ3VILElBQUksRUFBcUI7VUFBQSxJQUFuQkMsWUFBWSx1RUFBRyxDQUFDLENBQUM7VUFDcEN2RSxPQUFPLENBQUNJLEdBQUcsQ0FBQyxlQUFlLFlBQUtmLEdBQUcsY0FBSUMsUUFBUSxTQUFHZ0YsSUFBSSxFQUFHO1VBQ3pELE9BQU9sRixLQUFLLFdBQUlDLEdBQUcsY0FBSUMsUUFBUSxTQUFHZ0YsSUFBSTtZQUNsQ0UsT0FBTyxFQUFFO2NBQ0xDLE1BQU0sRUFBRSxrQkFBa0I7Y0FDMUIsY0FBYyxFQUFFO1lBQ3BCO1VBQUMsR0FDRUYsWUFBWSxFQUNqQjtRQUNOLENBQUM7UUEvQlF6SCxlQUFlLDZCQUFDbUIsT0FBTyxFQUFFeUcsY0FBYyxFQUFFQyxLQUFLLEVBQUU7VUFDckQsSUFBTUMsT0FBTyxHQUFHO1lBQ1pDLElBQUksRUFBRSxJQUFJO1lBQ1ZDLFVBQVUsRUFBRSxLQUFLO1lBQ2pCQyxTQUFTLEVBQUU7VUFDZixDQUFDO1VBRUQsSUFBTUMsUUFBUSxHQUFHLElBQUlDLG9CQUFvQixDQUFDLFVBQUNDLE9BQU8sRUFBSztZQUNuREEsT0FBTyxDQUFDcEcsT0FBTyxDQUFDLFVBQUNxRyxLQUFLLEVBQUs7Y0FDdkIsSUFBSUEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7Z0JBQ3RCQyxVQUFVLENBQUMsWUFBTTtrQkFDYkYsS0FBSyxDQUFDRyxNQUFNLENBQUNsSCxTQUFTLENBQUNFLEdBQUcsQ0FBQ29HLGNBQWMsQ0FBQztnQkFDOUMsQ0FBQyxFQUFFQyxLQUFLLENBQUM7Y0FDYixDQUFDLE1BQU07Z0JBQ0hRLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEgsU0FBUyxDQUFDQyxNQUFNLENBQUNxRyxjQUFjLENBQUM7Y0FDakQ7WUFDSixDQUFDLENBQUM7VUFDTixDQUFDLEVBQUVFLE9BQU8sQ0FBQztVQUVYSSxRQUFRLENBQUNwRixPQUFPLENBQUMzQixPQUFPLENBQUM7UUFDN0IsQ0FBQztRQXhCUXBCLFVBQVUsd0JBQUMwSSxZQUFZLEVBQUU7VUFDOUIsT0FBTyxJQUFJLEdBQUdBLFlBQVksQ0FBQ0MsUUFBUSxFQUFFLENBQUNqRCxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFUUTNGLGNBQWMsOEJBQUc7VUFDdEIsSUFBTTZJLFFBQVEsR0FBR0MsS0FBSyxDQUFDbkUsSUFBSSxDQUN2QixVQUFDb0UsQ0FBQztZQUFBLE9BQUtDLFdBQVcsSUFBSUQsQ0FBQyxDQUFDRSxTQUFTLElBQUlELFdBQVcsR0FBR0QsQ0FBQyxDQUFDRyxPQUFPO1VBQUEsRUFDL0Q7VUFDRCxPQUFPTCxRQUFRLElBQUlBLFFBQVEsQ0FBQ00sTUFBTTtRQUN0QyxDQUFDO1FBakJRcEosZ0JBQWdCLDhCQUFDcUosVUFBVSxFQUFFO1VBQ2xDLElBQU1DLElBQUksR0FBRyxJQUFJQyxJQUFJLENBQUNGLFVBQVUsQ0FBQztVQUVqQyxJQUFNRyxHQUFHLEdBQUdGLElBQUksQ0FBQ0csT0FBTyxFQUFFLENBQUNaLFFBQVEsRUFBRSxDQUFDYSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUN0RCxJQUFNQyxLQUFLLEdBQUcsQ0FBQ0wsSUFBSSxDQUFDTSxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUVmLFFBQVEsRUFBRSxDQUFDYSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUMvRCxJQUFNRyxJQUFJLEdBQUdQLElBQUksQ0FBQ1EsV0FBVyxFQUFFO1VBQy9CLElBQU1DLEtBQUssR0FBR1QsSUFBSSxDQUFDVSxRQUFRLEVBQUUsQ0FBQ25CLFFBQVEsRUFBRSxDQUFDYSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztVQUN6RCxJQUFNTyxPQUFPLEdBQUdYLElBQUksQ0FBQ1ksVUFBVSxFQUFFLENBQUNyQixRQUFRLEVBQUUsQ0FBQ2EsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7VUFFN0QsaUJBQVVGLEdBQUcsY0FBSUcsS0FBSyxjQUFJRSxJQUFJLGdCQUFNRSxLQUFLLGNBQUlFLE9BQU87UUFDeEQsQ0FBQztRQTVKRDtRQUNNdkgsR0FBRyxHQUFHLHNCQUFzQjtRQUM1QkMsUUFBUSxHQUFHLGlCQUFpQjtRQUM1Qm9HLEtBQUssR0FBRyxDQUNWO1VBQ0lLLE1BQU0sRUFBRSxDQUFDO1VBQ1RGLFNBQVMsRUFBRSxJQUFJSyxJQUFJLENBQUMscUJBQXFCLENBQUM7VUFDMUNKLE9BQU8sRUFBRSxJQUFJSSxJQUFJLENBQUMscUJBQXFCO1FBQzNDLENBQUMsRUFDRDtVQUNJSCxNQUFNLEVBQUUsQ0FBQztVQUNURixTQUFTLEVBQUUsSUFBSUssSUFBSSxDQUFDLHFCQUFxQixDQUFDO1VBQzFDSixPQUFPLEVBQUUsSUFBSUksSUFBSSxDQUFDLHFCQUFxQjtRQUMzQyxDQUFDLEVBQ0Q7VUFDSUgsTUFBTSxFQUFFLENBQUM7VUFDVEYsU0FBUyxFQUFFLElBQUlLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztVQUMxQ0osT0FBTyxFQUFFLElBQUlJLElBQUksQ0FBQyxxQkFBcUI7UUFDM0MsQ0FBQyxFQUNEO1VBQ0lILE1BQU0sRUFBRSxDQUFDO1VBQ1RGLFNBQVMsRUFBRSxJQUFJSyxJQUFJLENBQUMscUJBQXFCLENBQUM7VUFDMUNKLE9BQU8sRUFBRSxJQUFJSSxJQUFJLENBQUMscUJBQXFCO1FBQzNDLENBQUMsRUFDRDtVQUNJSCxNQUFNLEVBQUUsQ0FBQztVQUNURixTQUFTLEVBQUUsSUFBSUssSUFBSSxDQUFDLHFCQUFxQixDQUFDO1VBQzFDSixPQUFPLEVBQUUsSUFBSUksSUFBSSxDQUFDLHFCQUFxQjtRQUMzQyxDQUFDLEVBQ0Q7VUFDSUgsTUFBTSxFQUFFLENBQUM7VUFDVEYsU0FBUyxFQUFFLElBQUlLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztVQUMxQ0osT0FBTyxFQUFFLElBQUlJLElBQUksQ0FBQyxxQkFBcUI7UUFDM0MsQ0FBQyxFQUNEO1VBQ0lILE1BQU0sRUFBRSxDQUFDO1VBQ1RGLFNBQVMsRUFBRSxJQUFJSyxJQUFJLENBQUMscUJBQXFCLENBQUM7VUFDMUNKLE9BQU8sRUFBRSxJQUFJSSxJQUFJLENBQUMscUJBQXFCO1FBQzNDLENBQUMsRUFDRDtVQUNJSCxNQUFNLEVBQUUsQ0FBQztVQUNURixTQUFTLEVBQUUsSUFBSUssSUFBSSxDQUFDLHFCQUFxQixDQUFDO1VBQzFDSixPQUFPLEVBQUUsSUFBSUksSUFBSSxDQUFDLHFCQUFxQjtRQUMzQyxDQUFDLEVBQ0Q7VUFDSUgsTUFBTSxFQUFFLENBQUM7VUFDVEYsU0FBUyxFQUFFLElBQUlLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztVQUMxQ0osT0FBTyxFQUFFLElBQUlJLElBQUksQ0FBQyxxQkFBcUI7UUFDM0MsQ0FBQyxFQUNEO1VBQ0lILE1BQU0sRUFBRSxFQUFFO1VBQ1ZGLFNBQVMsRUFBRSxJQUFJSyxJQUFJLENBQUMscUJBQXFCLENBQUM7VUFDMUNKLE9BQU8sRUFBRSxJQUFJSSxJQUFJLENBQUMscUJBQXFCO1FBQzNDLENBQUMsRUFDRDtVQUNJSCxNQUFNLEVBQUUsRUFBRTtVQUNWRixTQUFTLEVBQUUsSUFBSUssSUFBSSxDQUFDLHFCQUFxQixDQUFDO1VBQzFDSixPQUFPLEVBQUUsSUFBSUksSUFBSSxDQUFDLHFCQUFxQjtRQUMzQyxDQUFDLEVBQ0Q7VUFDSUgsTUFBTSxFQUFFLEVBQUU7VUFDVkYsU0FBUyxFQUFFLElBQUlLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztVQUMxQ0osT0FBTyxFQUFFLElBQUlJLElBQUksQ0FBQyxxQkFBcUI7UUFDM0MsQ0FBQyxFQUNEO1VBQ0lILE1BQU0sRUFBRSxFQUFFO1VBQ1ZGLFNBQVMsRUFBRSxJQUFJSyxJQUFJLENBQUMscUJBQXFCLENBQUM7VUFDMUNKLE9BQU8sRUFBRSxJQUFJSSxJQUFJLENBQUMscUJBQXFCO1FBQzNDLENBQUMsRUFDRDtVQUNJSCxNQUFNLEVBQUUsRUFBRTtVQUNWRixTQUFTLEVBQUUsSUFBSUssSUFBSSxDQUFDLHFCQUFxQixDQUFDO1VBQzFDSixPQUFPLEVBQUUsSUFBSUksSUFBSSxDQUFDLHFCQUFxQjtRQUMzQyxDQUFDLEVBQ0Q7VUFDSUgsTUFBTSxFQUFFLEVBQUU7VUFDVkYsU0FBUyxFQUFFLElBQUlLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztVQUMxQ0osT0FBTyxFQUFFLElBQUlJLElBQUksQ0FBQyxxQkFBcUI7UUFDM0MsQ0FBQyxFQUNEO1VBQ0lILE1BQU0sRUFBRSxFQUFFO1VBQ1ZGLFNBQVMsRUFBRSxJQUFJSyxJQUFJLENBQUMscUJBQXFCLENBQUM7VUFDMUNKLE9BQU8sRUFBRSxJQUFJSSxJQUFJLENBQUMscUJBQXFCO1FBQzNDLENBQUMsRUFDRDtVQUNJSCxNQUFNLEVBQUUsRUFBRTtVQUNWRixTQUFTLEVBQUUsSUFBSUssSUFBSSxDQUFDLHFCQUFxQixDQUFDO1VBQzFDSixPQUFPLEVBQUUsSUFBSUksSUFBSSxDQUFDLHFCQUFxQjtRQUMzQyxDQUFDLEVBQ0Q7VUFDSUgsTUFBTSxFQUFFLEVBQUU7VUFDVkYsU0FBUyxFQUFFLElBQUlLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztVQUMxQ0osT0FBTyxFQUFFLElBQUlJLElBQUksQ0FBQyxxQkFBcUI7UUFDM0MsQ0FBQyxFQUNEO1VBQ0lILE1BQU0sRUFBRSxFQUFFO1VBQ1ZGLFNBQVMsRUFBRSxJQUFJSyxJQUFJLENBQUMscUJBQXFCLENBQUM7VUFDMUNKLE9BQU8sRUFBRSxJQUFJSSxJQUFJLENBQUMscUJBQXFCO1FBQzNDLENBQUMsRUFDRDtVQUNJSCxNQUFNLEVBQUUsRUFBRTtVQUNWRixTQUFTLEVBQUUsSUFBSUssSUFBSSxDQUFDLHFCQUFxQixDQUFDO1VBQzFDSixPQUFPLEVBQUUsSUFBSUksSUFBSSxDQUFDLHFCQUFxQjtRQUMzQyxDQUFDLEVBQ0Q7VUFDSUgsTUFBTSxFQUFFLEVBQUU7VUFDVkYsU0FBUyxFQUFFLElBQUlLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztVQUMxQ0osT0FBTyxFQUFFLElBQUlJLElBQUksQ0FBQyxxQkFBcUI7UUFDM0MsQ0FBQyxFQUNEO1VBQ0lILE1BQU0sRUFBRSxFQUFFO1VBQ1ZGLFNBQVMsRUFBRSxJQUFJSyxJQUFJLENBQUMscUJBQXFCLENBQUM7VUFDMUNKLE9BQU8sRUFBRSxJQUFJSSxJQUFJLENBQUMscUJBQXFCO1FBQzNDLENBQUMsRUFDRDtVQUNJSCxNQUFNLEVBQUUsRUFBRTtVQUNWRixTQUFTLEVBQUUsSUFBSUssSUFBSSxDQUFDLHFCQUFxQixDQUFDO1VBQzFDSixPQUFPLEVBQUUsSUFBSUksSUFBSSxDQUFDLHFCQUFxQjtRQUMzQyxDQUFDLEVBQ0Q7VUFDSUgsTUFBTSxFQUFFLEVBQUU7VUFDVkYsU0FBUyxFQUFFLElBQUlLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztVQUMxQ0osT0FBTyxFQUFFLElBQUlJLElBQUksQ0FBQyxxQkFBcUI7UUFDM0MsQ0FBQyxDQUNKO1FBQ0tOLFdBQVcsR0FBRyxJQUFJTSxJQUFJLEVBQUU7UUFDeEJZLFNBQVMsR0FBRyxFQUFFO1FBQ3BCcEIsS0FBSyxDQUFDNUcsT0FBTyxDQUFDLFVBQUM2RyxDQUFDO1VBQUEsT0FBTW1CLFNBQVMsQ0FBQ25CLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLEdBQUdKLENBQUM7UUFBQSxDQUFDLENBQUM7UUFDL0M7UUFFSTdFLEtBQUssR0FBRyxFQUFFLEVBQ2Q7UUFDSUUsWUFBWSxHQUFJLENBQUMsQ0FBQ1YsY0FBYyxDQUFDQyxPQUFPLENBQUMsY0FBYyxDQUFDO1FBQ3REa0QsVUFBVSxHQUFHOUUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDckRzRSxjQUFjLEdBQUd2RSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUN2RDBFLGVBQWUsR0FBRzNFLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDdEQ2QixnQkFBZ0IsR0FBRy9FLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7UUFDaEVnRixhQUFhLEdBQUdqRixRQUFRLENBQUNDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO1FBQ2pFK0MsZUFBZSxHQUFHaEQsUUFBUSxDQUFDa0QsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUN6RDJCLGdCQUFnQixHQUFHN0UsUUFBUSxDQUFDa0QsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUN4RGlDLGlCQUFpQixHQUFHbkYsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDOUR1QyxZQUFZLEdBQUd4QyxRQUFRLENBQUNrRCxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ2pEWixZQUFZLEdBQUd0QyxRQUFRLENBQUNrRCxhQUFhLENBQUMsVUFBVSxDQUFDO1FBRW5EWCxZQUFZLEdBQUcsQ0FBQyxDQUFDWixjQUFjLENBQUNDLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUErWDNENUIsUUFBUSxDQUFDeUUsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtVQUNoRCxJQUFNMkQsTUFBTSxHQUFHcEksUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7VUFDdkQsSUFBTW9JLGFBQWEsR0FBR3JJLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztVQUMvRCxJQUFNb0YsY0FBYyxHQUFHdEksUUFBUSxDQUFDa0QsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1VBQ2pFLElBQU1xRixZQUFZLEdBQUd2SSxRQUFRLENBQUNrRCxhQUFhLENBQUMsb0JBQW9CLENBQUM7VUFDakUsSUFBTXNGLFNBQVMsR0FBR3hJLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1VBQ3pELElBQU13SSxjQUFjLEdBQUd6SSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztVQUM5RCxJQUFNeUksWUFBWSxHQUFHMUksUUFBUSxDQUFDa0QsYUFBYSxDQUFDLGlCQUFpQixDQUFDO1VBQzlELElBQU15RixhQUFhLEdBQUczSSxRQUFRLENBQUNrRCxhQUFhLENBQUMsa0JBQWtCLENBQUM7VUFDaEUsSUFBTTBGLFlBQVksR0FBRzVJLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQzs7VUFFOUQ7VUFDQSxJQUFJMkYsV0FBVyxHQUFHLENBQUM7VUFFbkJULE1BQU0sQ0FBQ2pJLE9BQU8sQ0FBQyxVQUFDMkksS0FBSyxFQUFFQyxDQUFDLEVBQUs7WUFDekIsSUFBSUEsQ0FBQyxHQUFHRixXQUFXLEdBQUcsQ0FBQyxFQUFFO2NBQ3JCQyxLQUFLLENBQUNySixTQUFTLENBQUNFLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDaEM7WUFDQSxJQUFJb0osQ0FBQyxHQUFHRixXQUFXLEdBQUcsQ0FBQyxFQUFFO2NBQ3JCQyxLQUFLLENBQUNySixTQUFTLENBQUNFLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDaEM7VUFDSixDQUFDLENBQUM7VUFFRixJQUFJcUosWUFBWSxHQUFHSCxXQUFXLEdBQUcsQ0FBQztVQUVsQzFELGlCQUFpQixDQUFDaEYsT0FBTyxDQUFDLFVBQUFxRSxHQUFHLEVBQUc7WUFDNUJBLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7Y0FDL0JvRSxXQUFXLEdBQUcsQ0FBQztjQUNmRyxZQUFZLEdBQUdILFdBQVcsR0FBRyxDQUFDO2NBQzlCSSxZQUFZLENBQUNELFlBQVksQ0FBQztjQUUxQixJQUFNRSxhQUFhLEdBQUdsSixRQUFRLENBQUNrQixjQUFjLENBQUMsU0FBUyxDQUFDO2NBQ3hELElBQU1pSSxjQUFjLEdBQUdELGFBQWEsQ0FBQ0UscUJBQXFCLEVBQUUsQ0FBQ0MsR0FBRyxHQUFHOUgsTUFBTSxDQUFDK0gsV0FBVztjQUNyRi9ILE1BQU0sQ0FBQ2dJLFFBQVEsQ0FBQztnQkFDWkYsR0FBRyxFQUFFRixjQUFjO2dCQUNuQkssUUFBUSxFQUFFO2NBQ2QsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1VBQ0ZmLGNBQWMsQ0FBQ3RJLE9BQU8sQ0FBQyxVQUFBc0osTUFBTSxFQUFJO1lBQzdCQSxNQUFNLENBQUNDLFVBQVUsR0FBRyxDQUFDO1VBQ3pCLENBQUMsQ0FBQztVQUVGLFNBQVNULFlBQVksQ0FBQ1UsS0FBSyxFQUFFO1lBQ3pCbEIsY0FBYyxDQUFDdEksT0FBTyxDQUFDLFVBQUFzSixNQUFNLEVBQUk7Y0FDN0JBLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLENBQUM7WUFDekIsQ0FBQyxDQUFDO1lBQ0Z0QixNQUFNLENBQUNqSSxPQUFPLENBQUMsVUFBQzJJLEtBQUs7Y0FBQSxPQUFLQSxLQUFLLENBQUNySixTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFBQSxFQUFDO1lBQzVEMEksTUFBTSxDQUFDdUIsS0FBSyxDQUFDLENBQUNsSyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDdEM0SSxZQUFZLENBQUNwRixXQUFXLGFBQU13RyxLQUFLLEdBQUcsQ0FBQyxjQUFJdkIsTUFBTSxDQUFDbEksTUFBTSxDQUFFO1lBQzFEc0ksU0FBUyxDQUFDckksT0FBTyxDQUFDLFVBQUN5SixLQUFLLEVBQUs7Y0FDekJBLEtBQUssQ0FBQ25LLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7Y0FDeENrSyxLQUFLLENBQUNDLGFBQWEsQ0FBQ3BLLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Y0FDakQsSUFBSXNKLFlBQVksR0FBR0gsV0FBVyxHQUFHLENBQUMsRUFBRTtnQkFDaENlLEtBQUssQ0FBQ25LLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sQ0FBQztjQUNoQztjQUNBLElBQUlxSixZQUFZLEdBQUdILFdBQVcsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDZSxLQUFLLENBQUNuSyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQzVCaUssS0FBSyxDQUFDQyxhQUFhLENBQUNwSyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2NBQ2xEOztjQUNBLElBQUlxSixZQUFZLEtBQUtILFdBQVcsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDZSxLQUFLLENBQUNuSyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO2dCQUN4Q2tLLEtBQUssQ0FBQ0MsYUFBYSxDQUFDcEssU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztjQUNyRDtZQUNKLENBQUMsQ0FBQztVQUNOOztVQUVBLFNBQVNvSyxTQUFTLENBQUNDLFNBQVMsRUFBRTtZQUMxQixJQUFNQyxZQUFZLEdBQ2Q1QixNQUFNLENBQUNZLFlBQVksQ0FBQyxDQUFDOUYsYUFBYSxDQUFDLGNBQWMsQ0FBQztZQUN0RDhHLFlBQVksQ0FBQ3ZLLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNuQyxJQUFJc0ssU0FBUyxHQUNURixTQUFTLEtBQUssTUFBTSxHQUFHZixZQUFZLEdBQUcsQ0FBQyxHQUFHQSxZQUFZLEdBQUcsQ0FBQztZQUM5RCxJQUFJaUIsU0FBUyxHQUFHLENBQUMsRUFBRUEsU0FBUyxHQUFHN0IsTUFBTSxDQUFDbEksTUFBTSxHQUFHLENBQUM7WUFDaEQsSUFBSStKLFNBQVMsSUFBSTdCLE1BQU0sQ0FBQ2xJLE1BQU0sRUFBRStKLFNBQVMsR0FBRyxDQUFDO1lBRTdDLElBQU1DLFNBQVMsR0FBRzlCLE1BQU0sQ0FBQzZCLFNBQVMsQ0FBQyxDQUFDL0csYUFBYSxDQUFDLGNBQWMsQ0FBQztZQUNqRWdILFNBQVMsQ0FBQ3pLLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUVsQ3lJLE1BQU0sQ0FBQ1ksWUFBWSxDQUFDLENBQUN2SixTQUFTLENBQUNFLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFFOUMrRyxVQUFVLENBQUMsWUFBTTtjQUNic0QsWUFBWSxDQUFDdkssU0FBUyxDQUFDQyxNQUFNLENBQUMsT0FBTyxDQUFDO2NBQ3RDd0ssU0FBUyxDQUFDekssU0FBUyxDQUFDQyxNQUFNLENBQUMsU0FBUyxDQUFDO2NBQ3JDc0osWUFBWSxHQUFHaUIsU0FBUztjQUV4QmhCLFlBQVksQ0FBQ0QsWUFBWSxDQUFDO2NBQzFCWixNQUFNLENBQUNqSSxPQUFPLENBQUMsVUFBQzJJLEtBQUssRUFBSztnQkFDdEJBLEtBQUssQ0FBQ3JKLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztjQUN0QyxDQUFDLENBQUM7WUFDTixDQUFDLEVBQUUsSUFBSSxDQUFDO1VBQ1o7VUFFQTJJLGFBQWEsQ0FBQzVELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1lBQzFDcUYsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNqQjlKLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ2lILEtBQUssQ0FBQ0MsYUFBYSxHQUFHLE1BQU07WUFDakUxRCxVQUFVLENBQUMsWUFBTTtjQUNiMUcsUUFBUSxDQUFDa0QsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDaUgsS0FBSyxDQUFDQyxhQUFhLEdBQ3BELFNBQVM7WUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQztVQUNaLENBQUMsQ0FBQztVQUNGOUIsY0FBYyxDQUFDN0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07WUFDM0NxRixTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ2pCOUosUUFBUSxDQUFDa0QsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDaUgsS0FBSyxDQUFDQyxhQUFhLEdBQUcsTUFBTTtZQUNqRTFELFVBQVUsQ0FBQyxZQUFNO2NBQ2IxRyxRQUFRLENBQUNrRCxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNpSCxLQUFLLENBQUNDLGFBQWEsR0FDcEQsU0FBUztZQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDO1VBQ1osQ0FBQyxDQUFDO1VBRUZuQixZQUFZLENBQUNELFlBQVksQ0FBQztVQUUxQixTQUFTcUIsY0FBYyxDQUFDQyxPQUFPLEVBQUU7WUFDN0IsSUFBTUMsT0FBTyxHQUFHdkssUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztZQUM5RCxJQUFNdUssUUFBUSxHQUFHeEssUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztZQUNoRSxJQUFNd0ssVUFBVSxHQUFHekssUUFBUSxDQUFDQyxnQkFBZ0IsQ0FDeEMsc0JBQXNCLENBQ3pCO1lBRUQsSUFBSXlLLGFBQWEsR0FBRyxJQUFJO1lBQ3hCLFNBQVNDLFdBQVcsR0FBRztjQUNuQixJQUFNQyxHQUFHLEdBQUcsSUFBSXJELElBQUksRUFBRSxDQUFDc0QsT0FBTyxFQUFFO2NBQ2hDLElBQU1DLFFBQVEsR0FBR1IsT0FBTyxHQUFHTSxHQUFHO2NBRTlCLElBQUlFLFFBQVEsSUFBSSxDQUFDLEVBQUU7Z0JBQ2Y1SSxhQUFhLENBQUN3SSxhQUFhLENBQUM7Z0JBQzVCSyxZQUFZLENBQUNSLE9BQU8sRUFBRSxJQUFJLENBQUM7Z0JBQzNCUSxZQUFZLENBQUNQLFFBQVEsRUFBRSxJQUFJLENBQUM7Z0JBQzVCTyxZQUFZLENBQUNOLFVBQVUsRUFBRSxJQUFJLENBQUM7Z0JBQzlCO2NBQ0o7Y0FFQSxJQUFNTyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Y0FDekQsSUFBTS9DLEtBQUssR0FBR2tELElBQUksQ0FBQ0MsS0FBSyxDQUFFSixRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBSSxFQUFFLENBQUM7Y0FDNUQsSUFBTTdDLE9BQU8sR0FBR2dELElBQUksQ0FBQ0MsS0FBSyxDQUFFSixRQUFRLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFJLEVBQUUsQ0FBQztjQUV6REMsWUFBWSxDQUFDUixPQUFPLEVBQUVZLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUN0RCxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2NBQ3BEcUQsWUFBWSxDQUFDUCxRQUFRLEVBQUVXLE1BQU0sQ0FBQ3BELEtBQUssQ0FBQyxDQUFDTCxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2NBQ3REcUQsWUFBWSxDQUFDTixVQUFVLEVBQUVVLE1BQU0sQ0FBQ2xELE9BQU8sQ0FBQyxDQUFDUCxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlEO1lBRUEsU0FBU3FELFlBQVksQ0FBQ0ssUUFBUSxFQUFFQyxLQUFLLEVBQUU7Y0FDbkNELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2pJLFdBQVcsR0FBR2tJLEtBQUssQ0FBQyxDQUFDLENBQUM7Y0FDbENELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ2pJLFdBQVcsR0FBR2tJLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEM7WUFFQVYsV0FBVyxFQUFFO1lBQ2JELGFBQWEsR0FBRzFJLFdBQVcsQ0FBQzJJLFdBQVcsRUFBRSxLQUFLLENBQUM7VUFDbkQ7VUFFQSxJQUFNQyxHQUFHLEdBQUcsSUFBSXJELElBQUksRUFBRTtVQUN0QixJQUFNK0QsVUFBVSxHQUFHLElBQUkvRCxJQUFJLENBQ3ZCcUQsR0FBRyxDQUFDOUMsV0FBVyxFQUFFLEVBQ2pCOEMsR0FBRyxDQUFDaEQsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUNsQixDQUFDLEVBQ0QsRUFBRSxFQUNGLEVBQUUsQ0FDTCxDQUFDaUQsT0FBTyxFQUFFO1VBRVhSLGNBQWMsQ0FBQ2lCLFVBQVUsQ0FBQztVQUUxQixTQUFTQyxVQUFVLENBQ2ZDLFdBQVcsRUFDWEMsVUFBVSxFQUNWQyxRQUFRLEVBQ1IzSixRQUFRLEVBQ1JpRSxLQUFLLEVBQ0wyRixRQUFRLEVBQ1JDLFdBQVcsRUFHYjtZQUFBLElBRkVDLFVBQVUsdUVBQUcsRUFBRTtZQUFBLElBQ2ZDLFdBQVcsdUVBQUcsS0FBSztZQUVuQixJQUFNQyxJQUFJLEdBQUcvTCxRQUFRLENBQUNDLGdCQUFnQixDQUFDdUwsV0FBVyxDQUFDO1lBRW5ETyxJQUFJLENBQUM1TCxPQUFPLENBQUMsVUFBQzZMLEdBQUcsRUFBSztjQUNsQixJQUFJLENBQUNBLEdBQUcsRUFBRTtjQUVWLFNBQVNDLFdBQVcsR0FBRztnQkFDbkIsSUFBSUgsV0FBVyxFQUFFO2tCQUFBO2tCQUNiLElBQU1JLE1BQU0seUJBQUdGLEdBQUcsQ0FBQ25DLGFBQWEsdURBQWpCLG1CQUFtQkEsYUFBYTtrQkFDL0MsSUFBSSxDQUFDcUMsTUFBTSxJQUFJLENBQUNBLE1BQU0sQ0FBQ3pNLFNBQVMsQ0FBQzBNLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDaEQ7Z0JBQ1I7Z0JBRUEsSUFBTUMsY0FBYyxHQUFHUCxVQUFVLGNBQU9BLFVBQVUsSUFBSyxFQUFFO2dCQUN6RCxJQUNJRyxHQUFHLENBQUMvTCxnQkFBZ0IsWUFBS3dMLFVBQVUsU0FBR1csY0FBYyxFQUFHLENBQ2xEbE0sTUFBTSxHQUFHd0wsUUFBUSxFQUN4QjtrQkFDRSxJQUFNVyxLQUFLLEdBQUdyTSxRQUFRLENBQUNzTSxhQUFhLENBQUMsS0FBSyxDQUFDO2tCQUMzQ0QsS0FBSyxDQUFDNU0sU0FBUyxDQUFDRSxHQUFHLENBQUM4TCxVQUFVLENBQUM7a0JBQy9CLElBQUlJLFVBQVUsRUFBRVEsS0FBSyxDQUFDNU0sU0FBUyxDQUFDRSxHQUFHLENBQUNrTSxVQUFVLENBQUM7a0JBQy9DRyxHQUFHLENBQUMvSCxXQUFXLENBQUNvSSxLQUFLLENBQUM7a0JBQ3RCM0YsVUFBVSxDQUNOO29CQUFBLE9BQU0yRixLQUFLLENBQUMzTSxNQUFNLEVBQUU7a0JBQUEsR0FDcEJpTSxRQUFRLEdBQUdDLFdBQVcsQ0FDekI7Z0JBQ0w7Y0FDSjtjQUVBbEYsVUFBVSxDQUFDLFlBQU07Z0JBQ2J1RixXQUFXLEVBQUU7Z0JBQ2JqSyxXQUFXLENBQUNpSyxXQUFXLEVBQUVsSyxRQUFRLENBQUM7Y0FDdEMsQ0FBQyxFQUFFaUUsS0FBSyxDQUFDO1lBQ2IsQ0FBQyxDQUFDO1VBQ047VUFFQXVGLFVBQVUsQ0FDTixrQkFBa0IsRUFDbEIseUJBQXlCLEVBQ3pCLENBQUMsRUFDRCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxJQUFJLEVBQ0osRUFBRSxFQUNGLElBQUksQ0FDUDtVQUNEQSxVQUFVLENBQ04sa0JBQWtCLEVBQ2xCLHdCQUF3QixFQUN4QixDQUFDLEVBQ0QsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLEVBQUUsRUFDRixJQUFJLENBQ1A7VUFDREEsVUFBVSxDQUNOLGtCQUFrQixFQUNsQix3QkFBd0IsRUFDeEIsQ0FBQyxFQUNELEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsSUFBSSxDQUNQO1VBQ0RBLFVBQVUsQ0FDTiw0QkFBNEIsRUFDNUIsY0FBYyxFQUNkLENBQUMsRUFDRCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxJQUFJLEVBQ0osRUFBRSxFQUNGLEtBQUssQ0FDUjtVQUNEQSxVQUFVLENBQ04sMkJBQTJCLEVBQzNCLGNBQWMsRUFDZCxDQUFDLEVBQ0QsR0FBRyxFQUNILEdBQUcsRUFDSCxHQUFHLEVBQ0gsSUFBSSxFQUNKLEVBQUUsRUFDRixLQUFLLENBQ1I7VUFFRCxTQUFTZ0IsU0FBUyxDQUFDQyxhQUFhLEVBQUVDLFVBQVUsRUFBRTtZQUMxQyxJQUFNQyxlQUFlLEdBQUcxTSxRQUFRLENBQUNrRCxhQUFhLENBQUMsU0FBUyxDQUFDO1lBQ3pELElBQU15SixLQUFLLEdBQUczTSxRQUFRLENBQUNrRCxhQUFhLHlCQUFrQnVKLFVBQVUsRUFBRztZQUVuRSxJQUFJLENBQUNELGFBQWEsSUFBSSxDQUFDRyxLQUFLLElBQUksQ0FBQ0QsZUFBZSxFQUFFO1lBRWxERixhQUFhLENBQUMvSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtjQUMxQ2lJLGVBQWUsQ0FBQ2pOLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsQ0FBQztjQUM1Q2dOLGVBQWUsQ0FBQ2pOLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDOE0sVUFBVSxDQUFDO2NBQ3pDek0sUUFBUSxDQUFDd0YsSUFBSSxDQUFDMkUsS0FBSyxDQUFDeUMsUUFBUSxHQUFHLFFBQVE7WUFDM0MsQ0FBQyxDQUFDO1lBQ0YsSUFBTUMsV0FBVyxHQUFHRixLQUFLLENBQUN6SixhQUFhLENBQUMscUJBQXFCLENBQUM7WUFFOUR3SixlQUFlLENBQUNqSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ3FJLENBQUMsRUFBSztjQUM3QyxJQUFJQSxDQUFDLENBQUNuRyxNQUFNLEtBQUsrRixlQUFlLElBQUlJLENBQUMsQ0FBQ25HLE1BQU0sS0FBS2tHLFdBQVcsRUFBRTtnQkFDMURFLFVBQVUsRUFBRTtjQUNoQjtZQUNKLENBQUMsQ0FBQztZQUVGLFNBQVNBLFVBQVUsR0FBRztjQUNsQkwsZUFBZSxDQUFDak4sU0FBUyxDQUFDRSxHQUFHLENBQUMsVUFBVSxDQUFDO2NBQ3pDK00sZUFBZSxDQUFDak4sU0FBUyxDQUFDQyxNQUFNLENBQUMrTSxVQUFVLENBQUM7Y0FDNUN6TSxRQUFRLENBQUN3RixJQUFJLENBQUMyRSxLQUFLLENBQUN5QyxRQUFRLEdBQUcsRUFBRTtZQUNyQztVQUNKOztVQUVBO1VBQ0EsSUFBTUksYUFBYSxHQUFHaE4sUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7VUFFNUQrTSxhQUFhLENBQUM3TSxPQUFPLENBQUMsVUFBQXFFLEdBQUcsRUFBSTtZQUN6QixJQUFJMEgsTUFBTSxHQUFHMUgsR0FBRyxDQUFDcUYsYUFBYTtZQUU5QixPQUFPcUMsTUFBTSxFQUFFO2NBQ1gsSUFBSUEsTUFBTSxDQUFDek0sU0FBUyxDQUFDME0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNyQ0ksU0FBUyxDQUFDL0gsR0FBRyxFQUFFLGdCQUFnQixDQUFDO2dCQUNoQztjQUNKO2NBQ0EsSUFBSTBILE1BQU0sQ0FBQ3pNLFNBQVMsQ0FBQzBNLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbkNJLFNBQVMsQ0FBQy9ILEdBQUcsRUFBRSxjQUFjLENBQUM7Z0JBQzlCO2NBQ0o7Y0FDQSxJQUFJMEgsTUFBTSxDQUFDek0sU0FBUyxDQUFDME0sUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNwQ0ksU0FBUyxDQUFDL0gsR0FBRyxFQUFFLGVBQWUsQ0FBQztnQkFDL0I7Y0FDSjtjQUNBMEgsTUFBTSxHQUFHQSxNQUFNLENBQUNyQyxhQUFhO1lBQ2pDO1VBQ0osQ0FBQyxDQUFDO1VBRUYwQyxTQUFTLENBQUN2TSxRQUFRLENBQUNrRCxhQUFhLENBQUMsaUNBQWlDLENBQUMsRUFBRSxlQUFlLENBQUM7VUFDckZxSixTQUFTLENBQUN2TSxRQUFRLENBQUNrRCxhQUFhLENBQUMsb0NBQW9DLENBQUMsRUFBRSxrQkFBa0IsQ0FBQztVQUMzRnFKLFNBQVMsQ0FDTHZNLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxFQUN6QyxlQUFlLENBQ2xCO1VBRUQsU0FBUy9FLGVBQWUsQ0FBQ21CLE9BQU8sRUFBRXlHLGNBQWMsRUFBRUMsS0FBSyxFQUFFO1lBQ3JELElBQU1DLE9BQU8sR0FBRztjQUNaQyxJQUFJLEVBQUUsSUFBSTtjQUNWQyxVQUFVLEVBQUUsS0FBSztjQUNqQkMsU0FBUyxFQUFFO1lBQ2YsQ0FBQztZQUVELElBQU1DLFFBQVEsR0FBRyxJQUFJQyxvQkFBb0IsQ0FBQyxVQUFDQyxPQUFPLEVBQUs7Y0FDbkRBLE9BQU8sQ0FBQ3BHLE9BQU8sQ0FBQyxVQUFDcUcsS0FBSyxFQUFLO2dCQUN2QixJQUFJQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtrQkFDdEJDLFVBQVUsQ0FBQyxZQUFNO29CQUNiRixLQUFLLENBQUNHLE1BQU0sQ0FBQ2xILFNBQVMsQ0FBQ0UsR0FBRyxDQUFDb0csY0FBYyxDQUFDO2tCQUM5QyxDQUFDLEVBQUVDLEtBQUssQ0FBQztnQkFDYixDQUFDLE1BQU07a0JBQ0hRLEtBQUssQ0FBQ0csTUFBTSxDQUFDbEgsU0FBUyxDQUFDQyxNQUFNLENBQUNxRyxjQUFjLENBQUM7Z0JBQ2pEO2NBQ0osQ0FBQyxDQUFDO1lBQ04sQ0FBQyxFQUFFRSxPQUFPLENBQUM7WUFFWEksUUFBUSxDQUFDcEYsT0FBTyxDQUFDM0IsT0FBTyxDQUFDO1VBQzdCO1VBRUFuQixlQUFlLENBQ1h1SyxZQUFZLENBQUN4RixhQUFhLENBQUMscUJBQXFCLENBQUMsRUFDakQsT0FBTyxFQUNQLENBQUMsQ0FDSjtVQUNEL0UsZUFBZSxDQUNYd0ssYUFBYSxDQUFDekYsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEVBQ2xELE9BQU8sRUFDUCxHQUFHLENBQ047VUFDRC9FLGVBQWUsQ0FDWHlLLFlBQVksQ0FBQzFGLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUNqRCxPQUFPLEVBQ1AsR0FBRyxDQUNOO1VBQ0QvRSxlQUFlLENBQ1h1SyxZQUFZLENBQUN4RixhQUFhLENBQUMsb0JBQW9CLENBQUMsRUFDaEQsT0FBTyxFQUNQLENBQUMsQ0FDSjtVQUNEL0UsZUFBZSxDQUNYd0ssYUFBYSxDQUFDekYsYUFBYSxDQUFDLG9CQUFvQixDQUFDLEVBQ2pELE9BQU8sRUFDUCxHQUFHLENBQ047VUFDRC9FLGVBQWUsQ0FDWHlLLFlBQVksQ0FBQzFGLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxFQUNoRCxPQUFPLEVBQ1AsR0FBRyxDQUNOO1VBRURsRCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDRSxPQUFPLENBQUMsVUFBQytFLElBQUksRUFBSztZQUN0RCxJQUFNK0gsSUFBSSxHQUFHL0gsSUFBSSxDQUFDaEMsYUFBYSxDQUFDLFlBQVksQ0FBQztZQUM3QyxJQUFNZ0ssUUFBUSxHQUFHaEksSUFBSSxDQUFDakYsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7WUFDL0QsSUFBTWtOLFdBQVcsR0FBR2pJLElBQUksQ0FBQ2hDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztZQUM1RCxJQUFNa0ssV0FBVyxHQUFHbEksSUFBSSxDQUFDaEMsYUFBYSxDQUFDLGNBQWMsQ0FBQztZQUV0RCxJQUFNbUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQixHQUFTO2NBQzdCLElBQU0zRCxVQUFVLEdBQUd1RCxJQUFJLENBQUN2RCxVQUFVO2NBQ2xDLElBQU00RCxjQUFjLEdBQUc1RCxVQUFVLEdBQUcwRCxXQUFXLENBQUNHLFdBQVcsR0FBRyxDQUFDO2NBRS9ETCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUN6TixTQUFTLENBQUMrTixNQUFNLENBQUMsU0FBUyxFQUFFRixjQUFjLENBQUM7Y0FDdkRKLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ3pOLFNBQVMsQ0FBQytOLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQ0YsY0FBYyxDQUFDO2NBRXhESCxXQUFXLENBQUNoSyxXQUFXLEdBQUdtSyxjQUFjLEdBQUcsS0FBSyxHQUFHLEtBQUs7WUFDNUQsQ0FBQztZQUVETCxJQUFJLENBQUN4SSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU0SSxrQkFBa0IsQ0FBQztZQUNuREEsa0JBQWtCLEVBQUU7VUFDeEIsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBRUZyTixRQUFRLENBQUNrRCxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUN1QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtVQUNoRXpFLFFBQVEsQ0FBQ3dGLElBQUksQ0FBQy9GLFNBQVMsQ0FBQytOLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUMsQ0FBQyxDQUFDOztRQUVGO1FBQ01DLE1BQU0sR0FBR3pOLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDMUN3SyxNQUFNLEdBQUcxTixRQUFRLENBQUNrRCxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQzFDMUMsUUFBUSxHQUFHUixRQUFRLENBQUNrRCxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQ2hEcEQsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUNqQjtRQUNJRixNQUFNLDRCQUFHK0IsY0FBYyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlFQUFJLElBQUk7UUFDckQsSUFBSTZMLE1BQU0sRUFBRTdOLE1BQU0sR0FBRyxJQUFJO1FBQ3pCLElBQUk4TixNQUFNLEVBQUU5TixNQUFNLEdBQUcsSUFBSTtRQUFDO1FBQUE7UUFBQSxPQThEaEJWLGdCQUFnQixFQUFFO01BQUE7UUFBQTtRQUFBLE9BQ2xCRCxJQUFJLEVBQUU7TUFBQTtRQUFBO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFFWm9DLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLDhCQUE4QixnQkFBUTtNQUFDO1FBR3pEO1FBRU1xTSxPQUFPLEdBQUczTixRQUFRLENBQUNrRCxhQUFhLENBQUMsV0FBVyxDQUFDO1FBRW5EeUssT0FBTyxDQUFDbEosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7VUFDbkMsSUFBRy9DLE1BQU0sRUFBQztZQUNOQyxjQUFjLENBQUNpTSxVQUFVLENBQUMsUUFBUSxDQUFDO1VBQ3ZDLENBQUMsTUFBSTtZQUNEak0sY0FBYyxDQUFDa00sT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUM7VUFDaEQ7VUFDQXRNLE1BQU0sQ0FBQ3VNLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO1FBQzVCLENBQUMsQ0FBQztRQUVJQyxVQUFVLEdBQUdoTyxRQUFRLENBQUNrRCxhQUFhLENBQUMsY0FBYyxDQUFDO1FBRXpEOEssVUFBVSxDQUFDdkosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07VUFDdkMsSUFBSTlDLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3hDRCxjQUFjLENBQUNpTSxVQUFVLENBQUMsY0FBYyxDQUFDO1VBQzdDLENBQUMsTUFBTTtZQUNIak0sY0FBYyxDQUFDa00sT0FBTyxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUM7VUFDbEQ7VUFDQXRNLE1BQU0sQ0FBQ3VNLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO1FBQzVCLENBQUMsQ0FBQztRQUVJRSxlQUFlLEdBQUdqTyxRQUFRLENBQUNrRCxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFFbkUrSyxlQUFlLENBQUN4SixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtVQUM1QyxJQUFJOUMsY0FBYyxDQUFDQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDeENELGNBQWMsQ0FBQ2lNLFVBQVUsQ0FBQyxjQUFjLENBQUM7VUFDN0MsQ0FBQyxNQUFNO1lBQ0hqTSxjQUFjLENBQUNrTSxPQUFPLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQztVQUNsRDtVQUNBdE0sTUFBTSxDQUFDdU0sUUFBUSxDQUFDQyxNQUFNLEVBQUU7UUFDNUIsQ0FBQyxDQUFDO1FBRUlHLE1BQU0sR0FBR2xPLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFFakRnTCxNQUFNLENBQUN6SixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtVQUNuQyxJQUFJOUMsY0FBYyxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbENELGNBQWMsQ0FBQ2lNLFVBQVUsQ0FBQyxRQUFRLENBQUM7VUFDdkMsQ0FBQyxNQUFNO1lBQ0hqTSxjQUFjLENBQUNrTSxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztVQUMxQztVQUNBdE0sTUFBTSxDQUFDdU0sUUFBUSxDQUFDQyxNQUFNLEVBQUU7UUFDNUIsQ0FBQyxDQUFDO1FBRUlJLFFBQVEsR0FBR25PLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDL0NrTCxNQUFNLEdBQUdwTyxRQUFRLENBQUNrRCxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQzNDbUwsT0FBTyxHQUFHck8sUUFBUSxDQUFDa0QsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUVuRGlMLFFBQVEsQ0FBQzFKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO1VBQ3BDcEQsT0FBTyxDQUFDSSxHQUFHLENBQUMsT0FBTyxDQUFDO1VBQ3BCNUMscUJBQXFCLENBQUMsUUFBUSxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUVGdVAsTUFBTSxDQUFDM0osZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7VUFDbENwRCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxLQUFLLENBQUM7VUFDbEI1QyxxQkFBcUIsQ0FBQyxZQUFZLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBRUZ3UCxPQUFPLENBQUM1SixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztVQUNuQ3BELE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLE1BQU0sQ0FBQztVQUNuQjVDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFFRkEscUJBQXFCLEVBQUU7UUFHdkJtQixRQUFRLENBQUNrRCxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUN1QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztVQUMvRHpFLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQ3pELFNBQVMsQ0FBQytOLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbkUsQ0FBQyxDQUFDO1FBRUZ6SSxnQkFBZ0IsQ0FBQzVFLE9BQU8sQ0FBQyxVQUFDcUUsR0FBRyxFQUFFdUUsQ0FBQyxFQUFJO1VBQ2hDdkUsR0FBRyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ3FJLENBQUMsRUFBSTtZQUNoQ0EsQ0FBQyxDQUFDd0IsY0FBYyxFQUFFO1lBQ2xCdE8sUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDRSxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFFbU8sQ0FBQyxFQUFJO2NBQy9Ebk8sSUFBSSxDQUFDWCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Y0FDNUIsSUFBR3FKLENBQUMsS0FBS3dGLENBQUMsRUFBQztnQkFDUG5PLElBQUksQ0FBQ1gsU0FBUyxDQUFDRSxHQUFHLENBQUMsS0FBSyxDQUFDO2NBQzdCO1lBQ0osQ0FBQyxDQUFDO1VBQ04sQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO01BQUE7TUFBQTtRQUFBO0lBQUE7RUFBQTtBQUFBLENBRUwsSUFBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAvLzE4OTA4NDY1XG4gICAgY29uc3QgQVBJID0gJ2h0dHBzOi8vZmF2LXByb20uY29tJztcbiAgICBjb25zdCBFTkRQT0lOVCA9ICdhcGlfZm9ybXVsYTFfMjUnO1xuICAgIGNvbnN0IFJBQ0VTID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDEsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTAzLTEyVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wMy0xNlQwMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTAzLTE3VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wMy0yM1QwNTozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDMsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTAzLTI0VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNC0wNlQwNDozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDQsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA0LTA3VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNC0xM1QxNDozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDUsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA0LTE0VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNC0yMFQxNjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDYsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA0LTIxVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNS0wNFQxOTozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDcsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA1LTA1VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNS0xOFQxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDgsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA1LTE5VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNS0yNVQxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDksXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA1LTI2VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0wMVQxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDEwLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0wMlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMTVUMTc6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxMSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMTZUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTI5VDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTIsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTMwVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNy0wNlQxMzozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDEzLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNy0wN1QwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDctMjdUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxNCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDctMjhUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA4LTAzVDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTUsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA4LTA0VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOC0zMVQxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE2LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOS0wMVQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDktMDdUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxNyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDktMDhUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA5LTIxVDEwOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTgsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA5LTIyVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0wNVQxMTozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE5LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0wNlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMTlUMTg6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyMCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMjBUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTI2VDE4OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMjEsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTI3VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMS0wOVQxNTozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIyLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMS0xMFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTEtMjJUMDI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyMyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTEtMjNUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTExLTMwVDE0OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMjQsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTEyLTAxVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMi0wN1QxMTozMDowMCcpLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHJhY2VzQnlJZCA9IFtdO1xuICAgIFJBQ0VTLmZvckVhY2goKHIpID0+IChyYWNlc0J5SWRbci5udW1iZXJdID0gcikpO1xuICAgIC8vIGNvbnNvbGUubG9nKCcgcmFjZXNCeUlkOicsIHJhY2VzQnlJZCk7XG4gICAgbGV0IHVzZXJJZDtcbiAgICBsZXQgdXNlcnMgPSBbXTtcbiAgICAvLyBsZXQgZXhpc3RpbmdVc2VyID0gdHJ1ZTtcbiAgICBsZXQgZXhpc3RpbmdVc2VyID0gICEhc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nVXNlclwiKVxuICAgIGNvbnN0IGF1dGhCdG5zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpO1xuICAgIGNvbnN0IHlvdUFyZUluQnRuc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyk7XG4gICAgY29uc3QgcHJlZGljdGlvbkJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvb2stcGFydCcpO1xuICAgIGNvbnN0IGJldENvbHVtbnNCdG5zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmV0X19jb2x1bW4tYnRuJyk7XG4gICAgY29uc3QgeW91ckJldEluZm9FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXRfX3lvdXItY29udGFpbmVyJyk7XG4gICAgY29uc3QgeW91clNlYXNvblJlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3lvdScpO1xuICAgIGNvbnN0IHlvdXJTZWFzb25CZXRzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcC5fYmV0cycpO1xuICAgIGNvbnN0IHRvQ3VycmVudFJhY2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jdXJyZW50LXJhY2VcIik7XG4gICAgY29uc3QgY29uZmlybUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25maXJtXCIpO1xuICAgIGNvbnN0IHJlc3VsdHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0c1wiKTtcblxuICAgIGxldCBiZXRDb25maXJtZWQgPSAhIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRDb25maXJtZWRcIilcblxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcblxuICAgICAgICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9IC8gJHtob3Vyc306JHttaW51dGVzfWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFJhY2UoKSB7XG4gICAgICAgIGNvbnN0IHJhY2VJbmZvID0gUkFDRVMuZmluZChcbiAgICAgICAgICAgIChyKSA9PiBjdXJyZW50RGF0ZSA+PSByLnN0YXJ0RGF0ZSAmJiBjdXJyZW50RGF0ZSA8IHIuZW5kRGF0ZVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmFjZUluZm8gJiYgcmFjZUluZm8ubnVtYmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkVG9NYXNrKSB7XG4gICAgICAgIHJldHVybiAnKionICsgdXNlcklkVG9NYXNrLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU9uU2Nyb2xsKGVsZW1lbnQsIGFuaW1hdGlvbkNsYXNzLCBkZWxheSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwLjIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChhbmltYXRpb25DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25DbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdChsaW5rLCBleHRyYU9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBsaW5rOicsIGAke0FQSX0vJHtFTkRQT0lOVH0ke2xpbmt9YCk7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHtBUEl9LyR7RU5EUE9JTlR9JHtsaW5rfWAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLmV4dHJhT3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdCgnL3VzZXJzJyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vhc29uYWxTdGFuZGluZ3MoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdCgnL3NlYXNvbmFsLXN0YW5kaW5ncycpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcigpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KCcvdXNlcicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByZWRpY3Rpb25UeXBlKHVzZXJJZGVudGlmaWVyLCByYWNlTnVtYmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QoXG4gICAgICAgICAgICAgICAgYC9wcmVkaWN0aW9uLXR5cGUvJHt1c2VySWRlbnRpZmllcn0vJHtyYWNlTnVtYmVyfWBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJlZGljdGlvbiB0eXBlIHJlc3BvbnNlOicsIGRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgcHJlZGljdGlvbiB0eXBlOicsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qIHtcbiAgICAgICAgXCJwcmVkaWN0aW9uVHlwZVwiOiBcImZhc3Rlc3RMYXBcIixcbiAgICAgICAgXCJpc0V4aXN0aW5nXCI6IGZhbHNlXG4gICAgfSBcbiAgICBcbiAgICBjb25zdCBwcmVkaWN0aW9uVHlwZXMgPSBbJ3dpbm5lcicsICdmYXN0ZXN0TGFwJywgJ2Jlc3RUZWFtJ107XG4gICAgXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja1VzZXJBdXRoJywgdXNlcklkKTtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHByZWRpY3Rpb25CdG5FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB5b3VyU2Vhc29uUmVzRWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB5b3VyU2Vhc29uQmV0c0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgYXV0aEJ0bnNFbC5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJldENvbHVtbnNCdG5zRWwuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlvdXJCZXRJbmZvRWwuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdG9DdXJyZW50UmFjZUJ0bnMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzdWx0c0Jsb2NrLmNsYXNzTGlzdC5hZGQoXCJhdXRoXCIpXG5cblxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJZCAmJiAhZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICB5b3VyU2Vhc29uUmVzRWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB5b3VyQmV0SW5mb0VsLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGJldENvbHVtbnNCdG5zRWwuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlvdUFyZUluQnRuc0VsLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXV0aEJ0bnNFbC5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvQ3VycmVudFJhY2VCdG5zLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlc3VsdHNCbG9jay5jbGFzc0xpc3QuYWRkKFwiYXV0aFwiKVxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJJZCAmJiBleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgIHlvdUFyZUluQnRuc0VsLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgeW91ckJldEluZm9FbC5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhdXRoQnRuc0VsLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9DdXJyZW50UmFjZUJ0bnMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcHJlZGljdGlvbkJ0bkVsLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJyk7XG4gICAgICAgICAgICByZXN1bHRzQmxvY2suY2xhc3NMaXN0LnJlbW92ZShcImF1dGhcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlclJlZygpIHtcbiAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIudXNlcmlkID09PSB1c2VySWQpIHtcbiAgICAgICAgICAgICAgICAvLyBleGlzdGluZ1VzZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJlbmRlclVzZXJzKHVzZXJzKTtcbiAgICAgICAgLy8gdHJhbnNsYXRlKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFJlZ2lzdHJhdGlvbigpIHtcbiAgICAgICAgeW91QXJlSW5CdG5zRWwuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWdpc3RlclVzZXIoKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlclJlZygpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBsb2FkUHJlZGljdGlvblR5cGUoKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkUHJlZGljdGlvblR5cGUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRSYWNlTnVtYmVyID0gZ2V0Q3VycmVudFJhY2UoKTtcbiAgICAgICAgY29uc3QgcHJlZGljdGlvbkRhdGEgPSBhd2FpdCBnZXRQcmVkaWN0aW9uVHlwZShcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgIGN1cnJlbnRSYWNlTnVtYmVyXG4gICAgICAgICk7XG5cbiAgICAgICAgcmVuZGVyUHJlZGljdGlvblRhYmxlKHByZWRpY3Rpb25EYXRhLnByZWRpY3Rpb25UeXBlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcmVkaWN0aW9uVGFibGUocHJlZGljdGlvblR5cGUpIHtcbiAgICAgICAgLy9mb3IgdGVzdFxuICAgICAgICAvLyBwcmVkaWN0aW9uVHlwZSA9ICdiZXN0VGVhbSc7XG4gICAgICAgIGNvbnN0IGJldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXQuX2NvbnRhaW5lcicpO1xuICAgICAgICBiZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIl9yYWNlclwiLCBcIl9sYXBcIiwgXCJfdGVhbVwiKVxuICAgICAgICBzd2l0Y2ggKHByZWRpY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICd3aW5uZXInOlxuICAgICAgICAgICAgICAgIGJldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdfcmFjZXInKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Zhc3Rlc3RMYXAnOlxuICAgICAgICAgICAgICAgIGJldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdfbGFwJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdiZXN0VGVhbSc6XG4gICAgICAgICAgICAgICAgYmV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ190ZWFtJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdfcmFjZXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclNlYXNvbmFsU3RhbmRpbmdzKHN0YW5kaW5ncykge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhbmRpbmdzOicsIHN0YW5kaW5ncyk7XG5cbiAgICAgICAgaWYgKCFzdGFuZGluZ3MgfHwgIUFycmF5LmlzQXJyYXkoc3RhbmRpbmdzKSB8fCBzdGFuZGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2Vyc1dpdGhQb2ludHMgPSBzdGFuZGluZ3MuZmlsdGVyKFxuICAgICAgICAgICAgKHVzZXIpID0+IHVzZXIuY29ycmVjdFByZWRpY3Rpb25zID4gMFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh1c2Vyc1dpdGhQb2ludHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gdXNlcnMgd2l0aCBjb3JyZWN0IHByZWRpY3Rpb25zIGZvdW5kJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0b3BUaHJlZSA9IHVzZXJzV2l0aFBvaW50cy5zbGljZSgwLCAzKTtcblxuICAgICAgICB0b3BUaHJlZS5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHVzZXIucG9zaXRpb247XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyQ2xhc3MgPSAnJztcblxuICAgICAgICAgICAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3MgPSAnLnJlc3VsdHNfX2ZpcnN0JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzcyA9ICcucmVzdWx0c19fc2Vjb25kJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzcyA9ICcucmVzdWx0c19fdGhpcmQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyQ2xhc3MpO1xuICAgICAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHVzZXIuY29ycmVjdFByZWRpY3Rpb25zID4gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3AtZGVjb3InKSxcbiAgICAgICAgICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC13cmFwJyksXG4gICAgICAgICAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICAgICAgICAgIDQwMFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwbGFjZUVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3AtcGxhY2UnKTtcbiAgICAgICAgICAgICAgICBpZiAocGxhY2VFbCkgcGxhY2VFbC50ZXh0Q29udGVudCA9IHBvc2l0aW9uO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcklkRWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJy5yZXN1bHRzX190b3AtaW5mby1pZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWRFbClcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkRWwudGV4dENvbnRlbnQgPSBgVVNFUiAke21hc2tVc2VySWQodXNlci51c2VyaWQpfWA7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludHNFbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnLnJlc3VsdHNfX3RvcC1pbmZvLXBvaW50cydcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludHNFbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb2ludHNUZXh0ID0gcG9pbnRzRWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICdbZGF0YS10cmFuc2xhdGU9XCJwb2ludHNcIl0nXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50c0VsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRzVGV4dCkgcG9pbnRzRWwuYXBwZW5kQ2hpbGQocG9pbnRzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50c0VsLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCAke3VzZXIuY29ycmVjdFByZWRpY3Rpb25zfWApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2Vyc1BsYWNlKHN0YW5kaW5ncykge1xuICAgICAgICBpZiAoIXVzZXJJZCB8fCAhc3RhbmRpbmdzIHx8ICFBcnJheS5pc0FycmF5KHN0YW5kaW5ncykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gc3RhbmRpbmdzLmZpbmQoXG4gICAgICAgICAgICAodXNlcikgPT4gdXNlci51c2VyaWQgPT09IHBhcnNlSW50KHVzZXJJZClcbiAgICAgICAgKTtcbiAgICAgICAgLy8gaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgICAvLyAgICAgeW91clNlYXNvblJlc0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICghdXNlcklkICYmICFleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgIHlvdXJTZWFzb25SZXNFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHlvdXJTZWFzb25SZXNFbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgY29uc3QgcGxhY2VFbCA9IHlvdXJTZWFzb25SZXNFbC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19feW91LXBsYWNlJyk7XG4gICAgICAgIGlmIChwbGFjZUVsKSB7XG4gICAgICAgICAgICBwbGFjZUVsLnRleHRDb250ZW50ID0gY3VycmVudFVzZXIucG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VySWRFbCA9IHlvdXJTZWFzb25SZXNFbC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19feW91LWluZm8taWQnKTtcbiAgICAgICAgaWYgKHVzZXJJZEVsKSB7XG4gICAgICAgICAgICB1c2VySWRFbC50ZXh0Q29udGVudCA9IG1hc2tVc2VySWQodXNlcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBvaW50c1dyYXBwZXIgPSB5b3VyU2Vhc29uUmVzRWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcucmVzdWx0c19feW91LWluZm8tcG9pbnRzJ1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChwb2ludHNXcmFwcGVyKSB7XG4gICAgICAgICAgICBjb25zdCBwb2ludHNWYWx1ZUVsID1cbiAgICAgICAgICAgICAgICBwb2ludHNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bGFzdC1jaGlsZCcpO1xuICAgICAgICAgICAgaWYgKHBvaW50c1ZhbHVlRWwpIHtcbiAgICAgICAgICAgICAgICBwb2ludHNWYWx1ZUVsLnRleHRDb250ZW50ID0gYDogJHtjdXJyZW50VXNlci5jb3JyZWN0UHJlZGljdGlvbnN9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRQYWdlKCkge1xuICAgICAgICAvLyBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgIHVzZXJzID0gYXdhaXQgZ2V0QWxsVXNlcnMoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbCBVU0VSUycsIHVzZXJzKTtcbiAgICAgICAgY29uc3Qgc3RhbmRpbmdzID0gYXdhaXQgZ2V0U2Vhc29uYWxTdGFuZGluZ3MoKTtcbiAgICAgICAgcmVuZGVyU2Vhc29uYWxTdGFuZGluZ3Moc3RhbmRpbmdzKTtcbiAgICAgICAgY2hlY2tVc2VyUmVnKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGlzdGluZ1VzZXI6JywgZXhpc3RpbmdVc2VyKTtcbiAgICAgICAgaWYgKCFleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgIGF3YWl0IGluaXRSZWdpc3RyYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclVzZXJzUGxhY2Uoc3RhbmRpbmdzKTtcbiAgICAgICAgICAgIHJlc3VsdHNCbG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0aFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmKGJldENvbmZpcm1lZCl7XG4gICAgICAgICAgICBjb25maXJtQmxvY2suY2xhc3NMaXN0LmFkZChcIl9iZXRDb25maXJtZWRcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGlmICghd2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd2luZG93IHN0b3JlJyk7XG4gICAgICAgICAgICAvLyBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgLy8gdXNlcklkID0gKHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQpIHx8ICcnO1xuICAgICAgICAgICAgLy8gdXNlcklkID0gMTg5MDg0NjU7XG4gICAgICAgICAgICB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpID8gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpIDogbnVsbFxuICAgICAgICAgICAgYXdhaXQgaW5pdFBhZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyB3aW5kb3cgc3RvcmUnKTtcbiAgICAgICAgICAgIGF3YWl0IGluaXRQYWdlKCk7XG4gICAgICAgICAgICBsZXQgYyA9IDA7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA8IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBpbml0UGFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICBjKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWNlX19pdGVtJyk7XG4gICAgICAgIGNvbnN0IHNsaWRlTW92ZUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2LWxlZnQnKTtcbiAgICAgICAgY29uc3Qgc2xpZGVNb3ZlUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2LXJpZ2h0Jyk7XG4gICAgICAgIGNvbnN0IHNsaWRlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYtY291bnRlcicpO1xuICAgICAgICBjb25zdCBiZXRUYWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmV0X19pdGVtJyk7XG4gICAgICAgIGNvbnN0IGJldFdyYXBDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJldF9fd3JhcCcpO1xuICAgICAgICBjb25zdCByZXN1bHRzRmlyc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fZmlyc3QnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0c1NlY29uZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX19zZWNvbmQnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0c1RoaXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RoaXJkJyk7XG5cbiAgICAgICAgLy8gbGV0IGN1cnJlbnRSYWNlID0gZ2V0Q3VycmVudFJhY2UoKSA/IGdldEN1cnJlbnRSYWNlKCkgOiAxO1xuICAgICAgICBsZXQgY3VycmVudFJhY2UgPSAyO1xuXG4gICAgICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPCBjdXJyZW50UmFjZSAtIDEpIHtcbiAgICAgICAgICAgICAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPiBjdXJyZW50UmFjZSAtIDEpIHtcbiAgICAgICAgICAgICAgICBzbGlkZS5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgY3VycmVudFNsaWRlID0gY3VycmVudFJhY2UgLSAxO1xuXG4gICAgICAgIHRvQ3VycmVudFJhY2VCdG5zLmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgICAgICAgICBjdXJyZW50UmFjZSA9IDI7XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gY3VycmVudFJhY2UgLSAxO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50U2xpZGUpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVkaWN0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgYmV0V3JhcENvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgY29sdW1uLnNjcm9sbExlZnQgPSAwO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoaW5kZXgpIHtcbiAgICAgICAgICAgIGJldFdyYXBDb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICAgICAgICBjb2x1bW4uc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgc2xpZGVDb3VudGVyLnRleHRDb250ZW50ID0gYCR7aW5kZXggKyAxfS8ke3NsaWRlcy5sZW5ndGh9YDtcbiAgICAgICAgICAgIGJldFRhYmxlcy5mb3JFYWNoKCh0YWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJywgJ19kb25lJyk7XG4gICAgICAgICAgICAgICAgdGFibGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfcmVzdWx0Jyk7IC8vINGC0YPRglxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPiBjdXJyZW50UmFjZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA8IGN1cnJlbnRSYWNlIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ19yZXN1bHQnKTsgLy8g0YLRg9GCXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPT09IGN1cnJlbnRSYWNlIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycsICdfZG9uZScpO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19yZXN1bHQnKTsgLy8g0YLRg9GCXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3ZlU2xpZGUoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Qm9saWQgPVxuICAgICAgICAgICAgICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19ib2xpZCcpO1xuICAgICAgICAgICAgY3VycmVudEJvbGlkLmNsYXNzTGlzdC5hZGQoJ19tb3ZlJyk7XG4gICAgICAgICAgICBsZXQgbmV4dFNsaWRlID1cbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09ICduZXh0JyA/IGN1cnJlbnRTbGlkZSArIDEgOiBjdXJyZW50U2xpZGUgLSAxO1xuICAgICAgICAgICAgaWYgKG5leHRTbGlkZSA8IDApIG5leHRTbGlkZSA9IHNsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKG5leHRTbGlkZSA+PSBzbGlkZXMubGVuZ3RoKSBuZXh0U2xpZGUgPSAwO1xuXG4gICAgICAgICAgICBjb25zdCBuZXh0Qm9saWQgPSBzbGlkZXNbbmV4dFNsaWRlXS5xdWVyeVNlbGVjdG9yKCcucmFjZV9fYm9saWQnKTtcbiAgICAgICAgICAgIG5leHRCb2xpZC5jbGFzc0xpc3QuYWRkKCdfYXJyaXZlJyk7XG5cbiAgICAgICAgICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoJ19vcGFjaXR5Jyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRCb2xpZC5jbGFzc0xpc3QucmVtb3ZlKCdfbW92ZScpO1xuICAgICAgICAgICAgICAgIG5leHRCb2xpZC5jbGFzc0xpc3QucmVtb3ZlKCdfYXJyaXZlJyk7XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gbmV4dFNsaWRlO1xuXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGFjaXR5Jyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlTW92ZUxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlU2xpZGUoJ3ByZXYnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYnKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdicpLnN0eWxlLnBvaW50ZXJFdmVudHMgPVxuICAgICAgICAgICAgICAgICAgICAnaW5pdGlhbCc7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNsaWRlTW92ZVJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW92ZVNsaWRlKCduZXh0Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYnKS5zdHlsZS5wb2ludGVyRXZlbnRzID1cbiAgICAgICAgICAgICAgICAgICAgJ2luaXRpYWwnO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKGVuZFRpbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRheXNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGltZXJfX2RheXMtaXRlbScpO1xuICAgICAgICAgICAgY29uc3QgaG91cnNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGltZXJfX2hvdXJzLWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICAgICcudGltZXJfX21pbnV0ZXMtaXRlbSdcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCB0aW1lckludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gZW5kVGltZSAtIG5vdztcblxuICAgICAgICAgICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhkYXlzRWxzLCAnMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCAnMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKG1pbnV0ZXNFbHMsICcwMCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAoMTAwMCAqIDYwICogNjApKSAlIDI0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZUxlZnQgLyAoMTAwMCAqIDYwKSkgJSA2MCk7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoZGF5c0VscywgU3RyaW5nKGRheXMpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhob3Vyc0VscywgU3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCAnMCcpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEaWdpdHMoZWxlbWVudHMsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbMF0udGV4dENvbnRlbnQgPSB2YWx1ZVswXTtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1sxXS50ZXh0Q29udGVudCA9IHZhbHVlWzFdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cGRhdGVUaW1lcigpO1xuICAgICAgICAgICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVyLCA2MDAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBlbmRPZk1vbnRoID0gbmV3IERhdGUoXG4gICAgICAgICAgICBub3cuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIG5vdy5nZXRNb250aCgpICsgMSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyMyxcbiAgICAgICAgICAgIDU5XG4gICAgICAgICkuZ2V0VGltZSgpO1xuXG4gICAgICAgIHN0YXJ0Q291bnRkb3duKGVuZE9mTW9udGgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0U21va2UoXG4gICAgICAgICAgICBjYXJTZWxlY3RvcixcbiAgICAgICAgICAgIHNtb2tlQ2xhc3MsXG4gICAgICAgICAgICBtYXhDb3VudCxcbiAgICAgICAgICAgIGludGVydmFsLFxuICAgICAgICAgICAgZGVsYXksXG4gICAgICAgICAgICBmYWRlVGltZSxcbiAgICAgICAgICAgIHJlbW92ZURlbGF5LFxuICAgICAgICAgICAgZXh0cmFDbGFzcyA9ICcnLFxuICAgICAgICAgICAgYWN0aXZlQ2xhc3MgPSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGNhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNhclNlbGVjdG9yKTtcblxuICAgICAgICAgICAgY2Fycy5mb3JFYWNoKChjYXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWNhcikgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU21va2UoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gY2FyLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudCB8fCAhcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnX2FjdGl2ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhQ2xhc3NOYW1lID0gZXh0cmFDbGFzcyA/IGAuJHtleHRyYUNsYXNzfWAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3Ntb2tlQ2xhc3N9JHtleHRyYUNsYXNzTmFtZX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZW5ndGggPCBtYXhDb3VudFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNtb2tlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbW9rZS5jbGFzc0xpc3QuYWRkKHNtb2tlQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4dHJhQ2xhc3MpIHNtb2tlLmNsYXNzTGlzdC5hZGQoZXh0cmFDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXIuYXBwZW5kQ2hpbGQoc21va2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBzbW9rZS5yZW1vdmUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWRlVGltZSArIHJlbW92ZURlbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZVNtb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKGNyZWF0ZVNtb2tlLCBpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGFydFNtb2tlKFxuICAgICAgICAgICAgJy5yYWNlX19ib2xpZC1jYXInLFxuICAgICAgICAgICAgJ3JhY2VfX2JvbGlkLXNtb2tlLWZyb250JyxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICA5MDAsXG4gICAgICAgICAgICA1MDAsXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxNjAwLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHN0YXJ0U21va2UoXG4gICAgICAgICAgICAnLnJhY2VfX2JvbGlkLWNhcicsXG4gICAgICAgICAgICAncmFjZV9fYm9saWQtc21va2UtYmFjaycsXG4gICAgICAgICAgICA4LFxuICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgNTAwLFxuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBzdGFydFNtb2tlKFxuICAgICAgICAgICAgJy5yYWNlX19ib2xpZC1jYXInLFxuICAgICAgICAgICAgJ3JhY2VfX2JvbGlkLXNtb2tlLWJhY2snLFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIDkwMCxcbiAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDE2MDAsXG4gICAgICAgICAgICAnX2xhcmdlJyxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgc3RhcnRTbW9rZShcbiAgICAgICAgICAgICcud2VsY29tZV9fcGVycy1zbW9rZS1mcm9udCcsXG4gICAgICAgICAgICAnZnJvbnQtYmVmb3JlJyxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICA5MDAsXG4gICAgICAgICAgICA1MDAsXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxNjAwLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgICBzdGFydFNtb2tlKFxuICAgICAgICAgICAgJy53ZWxjb21lX19wZXJzLXNtb2tlLWJhY2snLFxuICAgICAgICAgICAgJ2Zyb250LWJlZm9yZScsXG4gICAgICAgICAgICA0LFxuICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgNTAwLFxuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICBmdW5jdGlvbiBzZXRQb3B1cHModHJpZ2dlckJ1dHRvbiwgcG9wdXBDbGFzcykge1xuICAgICAgICAgICAgY29uc3QgcG9wdXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwcycpO1xuICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBzX19pdGVtLiR7cG9wdXBDbGFzc31gKTtcblxuICAgICAgICAgICAgaWYgKCF0cmlnZ2VyQnV0dG9uIHx8ICFwb3B1cCB8fCAhcG9wdXBzQ29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgICAgICAgIHRyaWdnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ19vcGFjaXR5Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQocG9wdXBDbGFzcyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHNfX2l0ZW0tY2xvc2UnKTtcblxuICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwc0NvbnRhaW5lciB8fCBlLnRhcmdldCA9PT0gY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjbG9zZVBvcHVwKCkge1xuICAgICAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdfb3BhY2l0eScpO1xuICAgICAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHBvcHVwQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldFBvcHVwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmV0X19idG4taXRlbScpLCAnX2JldFBvcHVwJyk7XG4gICAgICAgIGNvbnN0IGJldFBvcHVwc0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJldF9fYnRuXCIpXG5cbiAgICAgICAgYmV0UG9wdXBzQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gYnRuLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcIl9yYWNlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3B1cHMoYnRuLCBcIl9iZXRQb3B1cFJhY2VyXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJfbGFwXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvcHVwcyhidG4sIFwiX2JldFBvcHVwTGFwXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJfdGVhbVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3B1cHMoYnRuLCBcIl9iZXRQb3B1cFRlYW1cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0UG9wdXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtX191cGQtYnRuLl9iZXRDb25maXJtZWQnKSwgJ19jb25maXJtUG9wdXAnKTtcbiAgICAgICAgc2V0UG9wdXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtX191cGQtYnRuLl9iZXROb3RDb25maXJtZWQnKSwgJ19ub3RDb25maXJtUG9wdXAnKTtcbiAgICAgICAgc2V0UG9wdXBzKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3BvcHVwJyksXG4gICAgICAgICAgICAnX3Jlc3VsdHNQb3B1cCdcbiAgICAgICAgKTtcblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlT25TY3JvbGwoZWxlbWVudCwgYW5pbWF0aW9uQ2xhc3MsIGRlbGF5KSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLjIsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChhbmltYXRpb25DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRpb25DbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgcmVzdWx0c0ZpcnN0LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3AtZGVjb3InKSxcbiAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNTZWNvbmQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC1kZWNvcicpLFxuICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgIDQwMFxuICAgICAgICApO1xuICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICByZXN1bHRzVGhpcmQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC1kZWNvcicpLFxuICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgIDgwMFxuICAgICAgICApO1xuICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICByZXN1bHRzRmlyc3QucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC13cmFwJyksXG4gICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICByZXN1bHRzU2Vjb25kLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3Atd3JhcCcpLFxuICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgIDQwMFxuICAgICAgICApO1xuICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICByZXN1bHRzVGhpcmQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC13cmFwJyksXG4gICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgODAwXG4gICAgICAgICk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJldF9faXRlbScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXAgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5iZXRfX3dyYXAnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hdkl0ZW1zID0gaXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuYmV0X19zY3JvbGwtbmF2LWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbENvdW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYmV0X19zY3JvbGwtY291bnQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Q29sdW1uID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYmV0X19jb2x1bW4nKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlU2Nyb2xsU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSB3cmFwLnNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNGaXJzdFZpc2libGUgPSBzY3JvbGxMZWZ0IDwgZmlyc3RDb2x1bW4uY2xpZW50V2lkdGggLyAyO1xuXG4gICAgICAgICAgICAgICAgbmF2SXRlbXNbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGlzRmlyc3RWaXNpYmxlKTtcbiAgICAgICAgICAgICAgICBuYXZJdGVtc1sxXS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgIWlzRmlyc3RWaXNpYmxlKTtcblxuICAgICAgICAgICAgICAgIHNjcm9sbENvdW50LnRleHRDb250ZW50ID0gaXNGaXJzdFZpc2libGUgPyAnMS8yJyA6ICcyLzInO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVTY3JvbGxTdGF0dXMpO1xuICAgICAgICAgICAgdXBkYXRlU2Nyb2xsU3RhdHVzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgLy8gI3JlZ2lvbiBUcmFuc2xhdGlvblxuICAgIGNvbnN0IHVrTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xhbmcnKTtcbiAgICBjb25zdCBlbkxhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MYW5nJyk7XG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKTtcbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICAvLyBsZXQgbG9jYWxlID0gJ3VrJztcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/PyBcInVrXCJcbiAgICBpZiAodWtMYW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxhbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBgJHtBUEl9LyR7RU5EUE9JTlR9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtdWxhMV8yNScpLCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdHJhbnNsYXRpb25zOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJyk7XG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IHRyYW5zbGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGxvYWRUcmFuc2xhdGlvbnMoKTtcbiAgICAgICAgYXdhaXQgaW5pdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBpbml0aWFsaXphdGlvbjonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gZm9yIHRlc3RcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsICcxODkwODQ2NScpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkNvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNvbmZpcm0nKTtcblxuICAgIGJ0bkNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0Q29uZmlybWVkXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmV0Q29uZmlybWVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJldENvbmZpcm1lZFwiLCBcInRydWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5QYXJ0aWNpcGFudGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhcnRpY2lwYW50ZScpO1xuXG4gICAgYnRuUGFydGljaXBhbnRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nVXNlclwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImV4aXN0aW5nVXNlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1VzZXJcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmFjZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhY2VyLWJ0blwiKVxuICAgIGNvbnN0IGxhcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFwLWJ0blwiKVxuICAgIGNvbnN0IHRlYW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlYW0tYnRuXCIpXG5cbiAgICByYWNlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2luZXJcIilcbiAgICAgICAgcmVuZGVyUHJlZGljdGlvblRhYmxlKFwid2lubmVyXCIpXG4gICAgfSlcblxuICAgIGxhcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGFwXCIpXG4gICAgICAgIHJlbmRlclByZWRpY3Rpb25UYWJsZShcImZhc3Rlc3RMYXBcIilcbiAgICB9KVxuXG4gICAgdGVhbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVhbVwiKVxuICAgICAgICByZW5kZXJQcmVkaWN0aW9uVGFibGUoXCJiZXN0VGVhbVwiKVxuICAgIH0pXG5cbiAgICByZW5kZXJQcmVkaWN0aW9uVGFibGUoKVxuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuICAgIH0pXG5cbiAgICBiZXRDb2x1bW5zQnRuc0VsLmZvckVhY2goKGJ0biwgaSkgPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJldF9fY29sdW1uLWl0ZW1cIikuZm9yRWFjaCgoZWxlbSwgaikgPT57XG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwieW91XCIpXG4gICAgICAgICAgICAgICAgaWYoaSA9PT0gail7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcInlvdVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxufSkoKTtcbiJdfQ==
