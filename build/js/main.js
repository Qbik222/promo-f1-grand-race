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
              item.classList.add('hidden');
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
          var resultsFirst = document.querySelector('.results__first');
          var resultsSecond = document.querySelector('.results__second');
          var resultsThird = document.querySelector('.results__third');
          var currentRace = getCurrentRace() ? getCurrentRace() : 3;
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
              currentRace = getCurrentRace() ? getCurrentRace() : 1;
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
          function updateSlider(index) {
            slides.forEach(function (slide) {
              return slide.classList.remove('_active');
            });
            slides[index].classList.add('_active');
            slideCounter.textContent = "".concat(index + 1, "/").concat(slides.length);
            betTables.forEach(function (table) {
              if (currentSlide > currentRace - 1) {
                table.classList.add('_lock');
              }
              if (currentSlide < currentRace - 1) {
                table.classList.add('_done');
              }
              if (currentSlide === currentRace - 1) {
                table.classList.remove('_lock', '_done');
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
        mainPage = document.querySelector('.fav__page');
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
      case 84:
      case "end":
        return _context12.stop();
    }
  }, _callee12, null, [[59, 66]]);
}))();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZm9ybWF0RGF0ZVN0cmluZyIsImdldEN1cnJlbnRSYWNlIiwibWFza1VzZXJJZCIsImFuaW1hdGVPblNjcm9sbCIsInJlcXVlc3QiLCJnZXRBbGxVc2VycyIsImdldFNlYXNvbmFsU3RhbmRpbmdzIiwicmVnaXN0ZXJVc2VyIiwiZ2V0UHJlZGljdGlvblR5cGUiLCJjaGVja1VzZXJBdXRoIiwiY2hlY2tVc2VyUmVnIiwiaW5pdFJlZ2lzdHJhdGlvbiIsImxvYWRQcmVkaWN0aW9uVHlwZSIsInJlbmRlclByZWRpY3Rpb25UYWJsZSIsInJlbmRlclNlYXNvbmFsU3RhbmRpbmdzIiwicmVuZGVyVXNlcnNQbGFjZSIsImluaXRQYWdlIiwiaW5pdCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ0cmFuc2xhdGVLZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImxvY2FsZSIsImtleSIsImkxOG5EYXRhIiwiZWxlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZWxlbSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsIm1haW5QYWdlIiwiZmV0Y2giLCJBUEkiLCJFTkRQT0lOVCIsInJlc3BvbnNlIiwianNvbiIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNvbnNvbGUiLCJlcnJvciIsIndpbmRvdyIsInN0b3JlIiwibG9nIiwidXNlcklkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiTnVtYmVyIiwiYyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnX3VzZXJfaWQiLCJjbGVhckludGVydmFsIiwidXNlcnMiLCJzdGFuZGluZ3MiLCJleGlzdGluZ1VzZXIiLCJyZXN1bHRzQmxvY2siLCJiZXRDb25maXJtZWQiLCJjb25maXJtQmxvY2siLCJBcnJheSIsImlzQXJyYXkiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwidXNlcmlkIiwicGFyc2VJbnQiLCJ5b3VyU2Vhc29uUmVzRWwiLCJwbGFjZUVsIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicG9zaXRpb24iLCJ1c2VySWRFbCIsInBvaW50c1dyYXBwZXIiLCJwb2ludHNWYWx1ZUVsIiwiY29ycmVjdFByZWRpY3Rpb25zIiwidXNlcnNXaXRoUG9pbnRzIiwiZmlsdGVyIiwidG9wVGhyZWUiLCJzbGljZSIsImNvbnRhaW5lckNsYXNzIiwiY29udGFpbmVyIiwicG9pbnRzRWwiLCJwb2ludHNUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInByZWRpY3Rpb25UeXBlIiwiYmV0Q29udGFpbmVyIiwiY3VycmVudFJhY2VOdW1iZXIiLCJwcmVkaWN0aW9uRGF0YSIsInlvdUFyZUluQnRuc0VsIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Y2Nlc3MiLCJwcmVkaWN0aW9uQnRuRWwiLCJkaXNhYmxlZCIsInlvdXJTZWFzb25CZXRzRWwiLCJhdXRoQnRuc0VsIiwiYmV0Q29sdW1uc0J0bnNFbCIsImJ1dHRvbiIsInlvdXJCZXRJbmZvRWwiLCJpdGVtIiwidG9DdXJyZW50UmFjZUJ0bnMiLCJ1c2VySWRlbnRpZmllciIsInJhY2VOdW1iZXIiLCJkYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImFuaW1hdGlvbkNsYXNzIiwiZGVsYXkiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwidXNlcklkVG9NYXNrIiwidG9TdHJpbmciLCJyYWNlSW5mbyIsIlJBQ0VTIiwiciIsImN1cnJlbnREYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm51bWJlciIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJyYWNlc0J5SWQiLCJzbGlkZXMiLCJzbGlkZU1vdmVMZWZ0Iiwic2xpZGVNb3ZlUmlnaHQiLCJzbGlkZUNvdW50ZXIiLCJiZXRUYWJsZXMiLCJyZXN1bHRzRmlyc3QiLCJyZXN1bHRzU2Vjb25kIiwicmVzdWx0c1RoaXJkIiwiY3VycmVudFJhY2UiLCJzbGlkZSIsImkiLCJjdXJyZW50U2xpZGUiLCJ1cGRhdGVTbGlkZXIiLCJ0YXJnZXRFbGVtZW50IiwidGFyZ2V0UG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJpbmRleCIsInRhYmxlIiwibW92ZVNsaWRlIiwiZGlyZWN0aW9uIiwiY3VycmVudEJvbGlkIiwibmV4dFNsaWRlIiwibmV4dEJvbGlkIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwic3RhcnRDb3VudGRvd24iLCJlbmRUaW1lIiwiZGF5c0VscyIsImhvdXJzRWxzIiwibWludXRlc0VscyIsInRpbWVySW50ZXJ2YWwiLCJ1cGRhdGVUaW1lciIsIm5vdyIsImdldFRpbWUiLCJ0aW1lTGVmdCIsInVwZGF0ZURpZ2l0cyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJTdHJpbmciLCJlbGVtZW50cyIsInZhbHVlIiwiZW5kT2ZNb250aCIsInN0YXJ0U21va2UiLCJjYXJTZWxlY3RvciIsInNtb2tlQ2xhc3MiLCJtYXhDb3VudCIsImZhZGVUaW1lIiwicmVtb3ZlRGVsYXkiLCJleHRyYUNsYXNzIiwiYWN0aXZlQ2xhc3MiLCJjYXJzIiwiY2FyIiwiY3JlYXRlU21va2UiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJleHRyYUNsYXNzTmFtZSIsInNtb2tlIiwiY3JlYXRlRWxlbWVudCIsInNldFBvcHVwcyIsInRyaWdnZXJCdXR0b24iLCJwb3B1cENsYXNzIiwicG9wdXBzQ29udGFpbmVyIiwicG9wdXAiLCJvdmVyZmxvdyIsImNsb3NlQnV0dG9uIiwiZSIsImNsb3NlUG9wdXAiLCJiZXRQb3B1cHNCdG5zIiwid3JhcCIsIm5hdkl0ZW1zIiwic2Nyb2xsQ291bnQiLCJmaXJzdENvbHVtbiIsInVwZGF0ZVNjcm9sbFN0YXR1cyIsInNjcm9sbExlZnQiLCJpc0ZpcnN0VmlzaWJsZSIsImNsaWVudFdpZHRoIiwidG9nZ2xlIiwidWtMYW5nIiwiZW5MYW5nIiwiYXV0aEJ0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJidG5Db25maXJtIiwiYnRuUGFydGljaXBhbnRlIiwibG5nQnRuIiwicmFjZXJCdG4iLCJsYXBCdG4iLCJ0ZWFtQnRuIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLDJEQUFDO0VBQUE7RUFBQSw2UEFtSllBLGdCQUFnQixFQVloQkMsY0FBYyxFQU9kQyxVQUFVLEVBSVZDLGVBQWUsRUFzQmZDLE9BQU8sRUFXREMsV0FBVyxnQkFLWEMsb0JBQW9CLHlCQUtwQkMsWUFBWSxpQkFVWkMsaUJBQWlCLHNCQXdCdkJDLGFBQWEsRUF5RGJDLFlBQVksRUFXTkMsZ0JBQWdCLHFCQWNoQkMsa0JBQWtCLHVCQVV4QkMscUJBQXFCLEVBb0JyQkMsdUJBQXVCLEVBNkV2QkMsZ0JBQWdCLEVBeUNWQyxRQUFRLGFBbUJSQyxJQUFJLHFEQTJhSkMsZ0JBQWdCLHFCQXFCdEJDLFNBQVMsRUFpQlRDLFlB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QUFPLEdBQUduTyxRQUFRLENBQUNrRCxhQUFhLENBQUMsV0FBVyxDQUFDO1FBRW5EK0ssUUFBUSxDQUFDeEosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUs7VUFDcENwRCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxPQUFPLENBQUM7VUFDcEI1QyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBRUZxUCxNQUFNLENBQUN6SixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSztVQUNsQ3BELE9BQU8sQ0FBQ0ksR0FBRyxDQUFDLEtBQUssQ0FBQztVQUNsQjVDLHFCQUFxQixDQUFDLFlBQVksQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFFRnNQLE9BQU8sQ0FBQzFKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO1VBQ25DcEQsT0FBTyxDQUFDSSxHQUFHLENBQUMsTUFBTSxDQUFDO1VBQ25CNUMscUJBQXFCLENBQUMsVUFBVSxDQUFDO1FBQ3JDLENBQUMsQ0FBQztRQUVGQSxxQkFBcUIsRUFBRTtNQUFBO01BQUE7UUFBQTtJQUFBO0VBQUE7QUFBQSxDQUcxQixJQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vMTg5MDg0NjVcbiAgICBjb25zdCBBUEkgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20nO1xuICAgIGNvbnN0IEVORFBPSU5UID0gJ2FwaV9mb3JtdWxhMV8yNSc7XG4gICAgY29uc3QgUkFDRVMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMTJUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTAzLTE2VDAyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMTdUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTAzLTIzVDA1OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMjRUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA0LTA2VDA0OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMDdUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA0LTEzVDE0OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMTRUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA0LTIwVDE2OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMjFUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA1LTA0VDE5OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMDVUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA1LTE4VDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogOCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMTlUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA1LTI1VDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogOSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMjZUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTAxVDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTAsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTAyVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0xNVQxNzozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDExLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0xNlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMjlUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxMixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMzBUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA3LTA2VDEzOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTMsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA3LTA3VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNy0yN1QxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE0LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNy0yOFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDgtMDNUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxNSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDgtMDRUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA4LTMxVDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTYsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA5LTAxVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOS0wN1QxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE3LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOS0wOFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDktMjFUMTA6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxOCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDktMjJUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTA1VDExOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTksXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTA2VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0xOVQxODozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIwLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0yMFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMjZUMTg6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyMSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMjdUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTExLTA5VDE1OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMjIsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTExLTEwVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMS0yMlQwMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIzLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMS0yM1QwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTEtMzBUMTQ6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyNCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTItMDFUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTEyLTA3VDExOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgcmFjZXNCeUlkID0gW107XG4gICAgUkFDRVMuZm9yRWFjaCgocikgPT4gKHJhY2VzQnlJZFtyLm51bWJlcl0gPSByKSk7XG4gICAgLy8gY29uc29sZS5sb2coJyByYWNlc0J5SWQ6JywgcmFjZXNCeUlkKTtcbiAgICBsZXQgdXNlcklkO1xuICAgIGxldCB1c2VycyA9IFtdO1xuICAgIC8vIGxldCBleGlzdGluZ1VzZXIgPSB0cnVlO1xuICAgIGxldCBleGlzdGluZ1VzZXIgPSAgISFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdVc2VyXCIpXG4gICAgY29uc3QgYXV0aEJ0bnNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyk7XG4gICAgY29uc3QgeW91QXJlSW5CdG5zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKTtcbiAgICBjb25zdCBwcmVkaWN0aW9uQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9vay1wYXJ0Jyk7XG4gICAgY29uc3QgYmV0Q29sdW1uc0J0bnNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXRfX2NvbHVtbi1idG4nKTtcbiAgICBjb25zdCB5b3VyQmV0SW5mb0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJldF9feW91ci1jb250YWluZXInKTtcbiAgICBjb25zdCB5b3VyU2Vhc29uUmVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19feW91Jyk7XG4gICAgY29uc3QgeW91clNlYXNvbkJldHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wLl9iZXRzJyk7XG4gICAgY29uc3QgdG9DdXJyZW50UmFjZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1cnJlbnQtcmFjZVwiKTtcbiAgICBjb25zdCBjb25maXJtQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgY29uc3QgcmVzdWx0c0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzXCIpO1xuXG4gICAgbGV0IGJldENvbmZpcm1lZCA9ICEhc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldENvbmZpcm1lZFwiKVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcblxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0gLyAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50UmFjZSgpIHtcbiAgICAgICAgY29uc3QgcmFjZUluZm8gPSBSQUNFUy5maW5kKFxuICAgICAgICAgICAgKHIpID0+IGN1cnJlbnREYXRlID49IHIuc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgci5lbmREYXRlXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByYWNlSW5mbyAmJiByYWNlSW5mby5udW1iZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWRUb01hc2spIHtcbiAgICAgICAgcmV0dXJuICcqKicgKyB1c2VySWRUb01hc2sudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlT25TY3JvbGwoZWxlbWVudCwgYW5pbWF0aW9uQ2xhc3MsIGRlbGF5KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0KGxpbmssIGV4dHJhT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGxpbms6JywgYCR7QVBJfS8ke0VORFBPSU5UfSR7bGlua31gKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX0vJHtFTkRQT0lOVH0ke2xpbmt9YCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uZXh0cmFPcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KCcvdXNlcnMnKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTZWFzb25hbFN0YW5kaW5ncygpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KCcvc2Vhc29uYWwtc3RhbmRpbmdzJyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJlZGljdGlvblR5cGUodXNlcklkZW50aWZpZXIsIHJhY2VOdW1iZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdChcbiAgICAgICAgICAgICAgICBgL3ByZWRpY3Rpb24tdHlwZS8ke3VzZXJJZGVudGlmaWVyfS8ke3JhY2VOdW1iZXJ9YFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmVkaWN0aW9uIHR5cGUgcmVzcG9uc2U6JywgZGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBwcmVkaWN0aW9uIHR5cGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoge1xuICAgICAgICBcInByZWRpY3Rpb25UeXBlXCI6IFwiZmFzdGVzdExhcFwiLFxuICAgICAgICBcImlzRXhpc3RpbmdcIjogZmFsc2VcbiAgICB9IFxuICAgIFxuICAgIGNvbnN0IHByZWRpY3Rpb25UeXBlcyA9IFsnd2lubmVyJywgJ2Zhc3Rlc3RMYXAnLCAnYmVzdFRlYW0nXTtcbiAgICBcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrVXNlckF1dGgnLCB1c2VySWQpO1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcHJlZGljdGlvbkJ0bkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHlvdXJTZWFzb25SZXNFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHlvdXJTZWFzb25CZXRzRWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBhdXRoQnRuc0VsLmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmV0Q29sdW1uc0J0bnNFbC5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgeW91ckJldEluZm9FbC5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0b0N1cnJlbnRSYWNlQnRucy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXN1bHRzQmxvY2suY2xhc3NMaXN0LmFkZChcImF1dGhcIilcblxuXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklkICYmICFleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgIHlvdXJTZWFzb25SZXNFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHlvdXJCZXRJbmZvRWwuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmV0Q29sdW1uc0J0bnNFbC5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgeW91QXJlSW5CdG5zRWwuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdXRoQnRuc0VsLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9DdXJyZW50UmFjZUJ0bnMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzdWx0c0Jsb2NrLmNsYXNzTGlzdC5hZGQoXCJhdXRoXCIpXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklkICYmIGV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgeW91QXJlSW5CdG5zRWwuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5b3VyQmV0SW5mb0VsLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGF1dGhCdG5zRWwuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b0N1cnJlbnRSYWNlQnRucy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwcmVkaWN0aW9uQnRuRWwuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgIHJlc3VsdHNCbG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0aFwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyUmVnKCkge1xuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlci51c2VyaWQgPT09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgIC8vIGV4aXN0aW5nVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmVuZGVyVXNlcnModXNlcnMpO1xuICAgICAgICAvLyB0cmFuc2xhdGUoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0UmVnaXN0cmF0aW9uKCkge1xuICAgICAgICB5b3VBcmVJbkJ0bnNFbC5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlZ2lzdGVyVXNlcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyUmVnKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGxvYWRQcmVkaWN0aW9uVHlwZSgpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRQcmVkaWN0aW9uVHlwZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFJhY2VOdW1iZXIgPSBnZXRDdXJyZW50UmFjZSgpO1xuICAgICAgICBjb25zdCBwcmVkaWN0aW9uRGF0YSA9IGF3YWl0IGdldFByZWRpY3Rpb25UeXBlKFxuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgY3VycmVudFJhY2VOdW1iZXJcbiAgICAgICAgKTtcblxuICAgICAgICByZW5kZXJQcmVkaWN0aW9uVGFibGUocHJlZGljdGlvbkRhdGEucHJlZGljdGlvblR5cGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclByZWRpY3Rpb25UYWJsZShwcmVkaWN0aW9uVHlwZSkge1xuICAgICAgICAvL2ZvciB0ZXN0XG4gICAgICAgIC8vIHByZWRpY3Rpb25UeXBlID0gJ2Jlc3RUZWFtJztcbiAgICAgICAgY29uc3QgYmV0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJldC5fY29udGFpbmVyJyk7XG4gICAgICAgIGJldENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiX3JhY2VyXCIsIFwiX2xhcFwiLCBcIl90ZWFtXCIpXG4gICAgICAgIHN3aXRjaCAocHJlZGljdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3dpbm5lcic6XG4gICAgICAgICAgICAgICAgYmV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ19yYWNlcicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZmFzdGVzdExhcCc6XG4gICAgICAgICAgICAgICAgYmV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ19sYXAnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jlc3RUZWFtJzpcbiAgICAgICAgICAgICAgICBiZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX3RlYW0nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYmV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ19yYWNlcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2Vhc29uYWxTdGFuZGluZ3Moc3RhbmRpbmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFuZGluZ3M6Jywgc3RhbmRpbmdzKTtcblxuICAgICAgICBpZiAoIXN0YW5kaW5ncyB8fCAhQXJyYXkuaXNBcnJheShzdGFuZGluZ3MpIHx8IHN0YW5kaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXJzV2l0aFBvaW50cyA9IHN0YW5kaW5ncy5maWx0ZXIoXG4gICAgICAgICAgICAodXNlcikgPT4gdXNlci5jb3JyZWN0UHJlZGljdGlvbnMgPiAwXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHVzZXJzV2l0aFBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyB1c2VycyB3aXRoIGNvcnJlY3QgcHJlZGljdGlvbnMgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvcFRocmVlID0gdXNlcnNXaXRoUG9pbnRzLnNsaWNlKDAsIDMpO1xuXG4gICAgICAgIHRvcFRocmVlLmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdXNlci5wb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBjb250YWluZXJDbGFzcyA9ICcnO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzcyA9ICcucmVzdWx0c19fZmlyc3QnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzID0gJy5yZXN1bHRzX19zZWNvbmQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzID0gJy5yZXN1bHRzX190aGlyZCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJDbGFzcyk7XG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAodXNlci5jb3JyZWN0UHJlZGljdGlvbnMgPiAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC1kZWNvcicpLFxuICAgICAgICAgICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLXdyYXAnKSxcbiAgICAgICAgICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgICAgICAgICAgNDAwXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlRWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC1wbGFjZScpO1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZUVsKSBwbGFjZUVsLnRleHRDb250ZW50ID0gcG9zaXRpb247XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySWRFbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnLnJlc3VsdHNfX3RvcC1pbmZvLWlkJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZEVsKVxuICAgICAgICAgICAgICAgICAgICB1c2VySWRFbC50ZXh0Q29udGVudCA9IGBVU0VSICR7bWFza1VzZXJJZCh1c2VyLnVzZXJpZCl9YDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50c0VsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICcucmVzdWx0c19fdG9wLWluZm8tcG9pbnRzJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50c0VsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50c1RleHQgPSBwb2ludHNFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1tkYXRhLXRyYW5zbGF0ZT1cInBvaW50c1wiXSdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludHNUZXh0KSBwb2ludHNFbC5hcHBlbmRDaGlsZChwb2ludHNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzRWwuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgICR7dXNlci5jb3JyZWN0UHJlZGljdGlvbnN9YClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzUGxhY2Uoc3RhbmRpbmdzKSB7XG4gICAgICAgIGlmICghdXNlcklkIHx8ICFzdGFuZGluZ3MgfHwgIUFycmF5LmlzQXJyYXkoc3RhbmRpbmdzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBzdGFuZGluZ3MuZmluZChcbiAgICAgICAgICAgICh1c2VyKSA9PiB1c2VyLnVzZXJpZCA9PT0gcGFyc2VJbnQodXNlcklkKVxuICAgICAgICApO1xuICAgICAgICAvLyBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgIC8vICAgICB5b3VyU2Vhc29uUmVzRWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKCF1c2VySWQgJiYgIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgeW91clNlYXNvblJlc0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgeW91clNlYXNvblJlc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBjb25zdCBwbGFjZUVsID0geW91clNlYXNvblJlc0VsLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX195b3UtcGxhY2UnKTtcbiAgICAgICAgaWYgKHBsYWNlRWwpIHtcbiAgICAgICAgICAgIHBsYWNlRWwudGV4dENvbnRlbnQgPSBjdXJyZW50VXNlci5wb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXJJZEVsID0geW91clNlYXNvblJlc0VsLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX195b3UtaW5mby1pZCcpO1xuICAgICAgICBpZiAodXNlcklkRWwpIHtcbiAgICAgICAgICAgIHVzZXJJZEVsLnRleHRDb250ZW50ID0gbWFza1VzZXJJZCh1c2VySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9pbnRzV3JhcHBlciA9IHlvdXJTZWFzb25SZXNFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5yZXN1bHRzX195b3UtaW5mby1wb2ludHMnXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHBvaW50c1dyYXBwZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50c1ZhbHVlRWwgPVxuICAgICAgICAgICAgICAgIHBvaW50c1dyYXBwZXIucXVlcnlTZWxlY3Rvcignc3BhbjpsYXN0LWNoaWxkJyk7XG4gICAgICAgICAgICBpZiAocG9pbnRzVmFsdWVFbCkge1xuICAgICAgICAgICAgICAgIHBvaW50c1ZhbHVlRWwudGV4dENvbnRlbnQgPSBgOiAke2N1cnJlbnRVc2VyLmNvcnJlY3RQcmVkaWN0aW9uc31gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgICAgIC8vIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycygpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWxsIFVTRVJTJywgdXNlcnMpO1xuICAgICAgICBjb25zdCBzdGFuZGluZ3MgPSBhd2FpdCBnZXRTZWFzb25hbFN0YW5kaW5ncygpO1xuICAgICAgICByZW5kZXJTZWFzb25hbFN0YW5kaW5ncyhzdGFuZGluZ3MpO1xuICAgICAgICBjaGVja1VzZXJSZWcoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2V4aXN0aW5nVXNlcjonLCBleGlzdGluZ1VzZXIpO1xuICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgYXdhaXQgaW5pdFJlZ2lzdHJhdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyVXNlcnNQbGFjZShzdGFuZGluZ3MpO1xuICAgICAgICAgICAgcmVzdWx0c0Jsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJhdXRoXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYoYmV0Q29uZmlybWVkKXtcbiAgICAgICAgICAgIGNvbmZpcm1CbG9jay5jbGFzc0xpc3QuYWRkKFwiX2JldENvbmZpcm1lZFwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3cgc3RvcmUnKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAvLyB1c2VySWQgPSAoc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCkgfHwgJyc7XG4gICAgICAgICAgICAvLyB1c2VySWQgPSAxODkwODQ2NTtcbiAgICAgICAgICAgIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgOiBudWxsXG4gICAgICAgICAgICBhd2FpdCBpbml0UGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHdpbmRvdyBzdG9yZScpO1xuICAgICAgICAgICAgYXdhaXQgaW5pdFBhZ2UoKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGluaXRQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGMrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhY2VfX2l0ZW0nKTtcbiAgICAgICAgY29uc3Qgc2xpZGVNb3ZlTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYtbGVmdCcpO1xuICAgICAgICBjb25zdCBzbGlkZU1vdmVSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYtcmlnaHQnKTtcbiAgICAgICAgY29uc3Qgc2xpZGVDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdi1jb3VudGVyJyk7XG4gICAgICAgIGNvbnN0IGJldFRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXRfX2l0ZW0nKTtcbiAgICAgICAgY29uc3QgcmVzdWx0c0ZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX2ZpcnN0Jyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHNTZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fc2Vjb25kJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHNUaGlyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190aGlyZCcpO1xuXG4gICAgICAgIGxldCBjdXJyZW50UmFjZSA9IGdldEN1cnJlbnRSYWNlKCkgPyBnZXRDdXJyZW50UmFjZSgpIDogMztcblxuICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpIDwgY3VycmVudFJhY2UgLSAxKSB7XG4gICAgICAgICAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgnX2RvbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpID4gY3VycmVudFJhY2UgLSAxKSB7XG4gICAgICAgICAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRTbGlkZSA9IGN1cnJlbnRSYWNlIC0gMTtcblxuICAgICAgICB0b0N1cnJlbnRSYWNlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgY3VycmVudFJhY2UgPSBnZXRDdXJyZW50UmFjZSgpID8gZ2V0Q3VycmVudFJhY2UoKSA6IDE7XG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gY3VycmVudFJhY2UgLSAxO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50U2xpZGUpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVkaWN0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQgO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoaW5kZXgpIHtcbiAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4gc2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpKTtcbiAgICAgICAgICAgIHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xuICAgICAgICAgICAgc2xpZGVDb3VudGVyLnRleHRDb250ZW50ID0gYCR7aW5kZXggKyAxfS8ke3NsaWRlcy5sZW5ndGh9YDtcbiAgICAgICAgICAgIGJldFRhYmxlcy5mb3JFYWNoKCh0YWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPiBjdXJyZW50UmFjZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA8IGN1cnJlbnRSYWNlIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlID09PSBjdXJyZW50UmFjZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snLCAnX2RvbmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTbGlkZShkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCb2xpZCA9XG4gICAgICAgICAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0ucXVlcnlTZWxlY3RvcignLnJhY2VfX2JvbGlkJyk7XG4gICAgICAgICAgICBjdXJyZW50Qm9saWQuY2xhc3NMaXN0LmFkZCgnX21vdmUnKTtcbiAgICAgICAgICAgIGxldCBuZXh0U2xpZGUgPVxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ25leHQnID8gY3VycmVudFNsaWRlICsgMSA6IGN1cnJlbnRTbGlkZSAtIDE7XG4gICAgICAgICAgICBpZiAobmV4dFNsaWRlIDwgMCkgbmV4dFNsaWRlID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAobmV4dFNsaWRlID49IHNsaWRlcy5sZW5ndGgpIG5leHRTbGlkZSA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRCb2xpZCA9IHNsaWRlc1tuZXh0U2xpZGVdLnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19ib2xpZCcpO1xuICAgICAgICAgICAgbmV4dEJvbGlkLmNsYXNzTGlzdC5hZGQoJ19hcnJpdmUnKTtcblxuICAgICAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJvbGlkLmNsYXNzTGlzdC5yZW1vdmUoJ19tb3ZlJyk7XG4gICAgICAgICAgICAgICAgbmV4dEJvbGlkLmNsYXNzTGlzdC5yZW1vdmUoJ19hcnJpdmUnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSBuZXh0U2xpZGU7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnX29wYWNpdHknKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2xpZGVNb3ZlTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vdmVTbGlkZSgncHJldicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdicpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9XG4gICAgICAgICAgICAgICAgICAgICdpbml0aWFsJztcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVNb3ZlUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlU2xpZGUoJ25leHQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYnKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdicpLnN0eWxlLnBvaW50ZXJFdmVudHMgPVxuICAgICAgICAgICAgICAgICAgICAnaW5pdGlhbCc7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oZW5kVGltZSkge1xuICAgICAgICAgICAgY29uc3QgZGF5c0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lcl9fZGF5cy1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBob3Vyc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lcl9faG91cnMtaXRlbScpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJy50aW1lcl9fbWludXRlcy1pdGVtJ1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGltZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSBlbmRUaW1lIC0gbm93O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGRheXNFbHMsICcwMCcpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoaG91cnNFbHMsICcwMCcpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgJzAwJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjApKSAlIDYwKTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhkYXlzRWxzLCBTdHJpbmcoZGF5cykucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpZ2l0cyhlbGVtZW50cywgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1swXS50ZXh0Q29udGVudCA9IHZhbHVlWzBdO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzWzFdLnRleHRDb250ZW50ID0gdmFsdWVbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDYwMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGVuZE9mTW9udGggPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgbm93LmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDIzLFxuICAgICAgICAgICAgNTlcbiAgICAgICAgKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgc3RhcnRDb3VudGRvd24oZW5kT2ZNb250aCk7XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRTbW9rZShcbiAgICAgICAgICAgIGNhclNlbGVjdG9yLFxuICAgICAgICAgICAgc21va2VDbGFzcyxcbiAgICAgICAgICAgIG1heENvdW50LFxuICAgICAgICAgICAgaW50ZXJ2YWwsXG4gICAgICAgICAgICBkZWxheSxcbiAgICAgICAgICAgIGZhZGVUaW1lLFxuICAgICAgICAgICAgcmVtb3ZlRGVsYXksXG4gICAgICAgICAgICBleHRyYUNsYXNzID0gJycsXG4gICAgICAgICAgICBhY3RpdmVDbGFzcyA9IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgY2FycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FyU2VsZWN0b3IpO1xuXG4gICAgICAgICAgICBjYXJzLmZvckVhY2goKGNhcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY2FyKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTbW9rZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBjYXIucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0cmFDbGFzc05hbWUgPSBleHRyYUNsYXNzID8gYC4ke2V4dHJhQ2xhc3N9YCA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXIucXVlcnlTZWxlY3RvckFsbChgLiR7c21va2VDbGFzc30ke2V4dHJhQ2xhc3NOYW1lfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA8IG1heENvdW50XG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc21va2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtb2tlLmNsYXNzTGlzdC5hZGQoc21va2VDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFDbGFzcykgc21va2UuY2xhc3NMaXN0LmFkZChleHRyYUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhci5hcHBlbmRDaGlsZChzbW9rZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHNtb2tlLnJlbW92ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhZGVUaW1lICsgcmVtb3ZlRGVsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU21va2UoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoY3JlYXRlU21va2UsIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0U21va2UoXG4gICAgICAgICAgICAnLnJhY2VfX2JvbGlkLWNhcicsXG4gICAgICAgICAgICAncmFjZV9fYm9saWQtc21va2UtZnJvbnQnLFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIDkwMCxcbiAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDE2MDAsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgc3RhcnRTbW9rZShcbiAgICAgICAgICAgICcucmFjZV9fYm9saWQtY2FyJyxcbiAgICAgICAgICAgICdyYWNlX19ib2xpZC1zbW9rZS1iYWNrJyxcbiAgICAgICAgICAgIDgsXG4gICAgICAgICAgICA5MDAsXG4gICAgICAgICAgICA1MDAsXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxNjAwLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHN0YXJ0U21va2UoXG4gICAgICAgICAgICAnLnJhY2VfX2JvbGlkLWNhcicsXG4gICAgICAgICAgICAncmFjZV9fYm9saWQtc21va2UtYmFjaycsXG4gICAgICAgICAgICA0LFxuICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgNTAwLFxuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICdfbGFyZ2UnLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBzdGFydFNtb2tlKFxuICAgICAgICAgICAgJy53ZWxjb21lX19wZXJzLXNtb2tlLWZyb250JyxcbiAgICAgICAgICAgICdmcm9udC1iZWZvcmUnLFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIDkwMCxcbiAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDE2MDAsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIHN0YXJ0U21va2UoXG4gICAgICAgICAgICAnLndlbGNvbWVfX3BlcnMtc21va2UtYmFjaycsXG4gICAgICAgICAgICAnZnJvbnQtYmVmb3JlJyxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICA5MDAsXG4gICAgICAgICAgICA1MDAsXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxNjAwLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldFBvcHVwcyh0cmlnZ2VyQnV0dG9uLCBwb3B1cENsYXNzKSB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJyk7XG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cHNfX2l0ZW0uJHtwb3B1cENsYXNzfWApO1xuXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJCdXR0b24gfHwgIXBvcHVwIHx8ICFwb3B1cHNDb250YWluZXIpIHJldHVybjtcblxuICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnX29wYWNpdHknKTtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChwb3B1cENsYXNzKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwc19faXRlbS1jbG9zZScpO1xuXG4gICAgICAgICAgICBwb3B1cHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXBzQ29udGFpbmVyIHx8IGUudGFyZ2V0ID09PSBjbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKSB7XG4gICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ19vcGFjaXR5Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUocG9wdXBDbGFzcyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0UG9wdXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXRfX2J0bi1pdGVtJyksICdfYmV0UG9wdXAnKTtcbiAgICAgICAgY29uc3QgYmV0UG9wdXBzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmV0X19idG5cIilcblxuICAgICAgICBiZXRQb3B1cHNCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBidG4ucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3JhY2VyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvcHVwcyhidG4sIFwiX2JldFBvcHVwUmFjZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcIl9sYXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXBzKGJ0biwgXCJfYmV0UG9wdXBMYXBcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcIl90ZWFtXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvcHVwcyhidG4sIFwiX2JldFBvcHVwVGVhbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1fX3VwZC1idG4uX2JldENvbmZpcm1lZCcpLCAnX2NvbmZpcm1Qb3B1cCcpO1xuICAgICAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1fX3VwZC1idG4uX2JldE5vdENvbmZpcm1lZCcpLCAnX25vdENvbmZpcm1Qb3B1cCcpO1xuICAgICAgICBzZXRQb3B1cHMoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fcG9wdXAnKSxcbiAgICAgICAgICAgICdfcmVzdWx0c1BvcHVwJ1xuICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVPblNjcm9sbChlbGVtZW50LCBhbmltYXRpb25DbGFzcywgZGVsYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgICAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMixcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICByZXN1bHRzRmlyc3QucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC1kZWNvcicpLFxuICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgcmVzdWx0c1NlY29uZC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLWRlY29yJyksXG4gICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgNDAwXG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNUaGlyZC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLWRlY29yJyksXG4gICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgODAwXG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNGaXJzdC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLXdyYXAnKSxcbiAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNTZWNvbmQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC13cmFwJyksXG4gICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgNDAwXG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNUaGlyZC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLXdyYXAnKSxcbiAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICA4MDBcbiAgICAgICAgKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmV0X19pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmJldF9fd3JhcCcpO1xuICAgICAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXRfX3Njcm9sbC1uYXYtaXRlbScpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQ291bnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5iZXRfX3Njcm9sbC1jb3VudCcpO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RDb2x1bW4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5iZXRfX2NvbHVtbicpO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVTY3JvbGxTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdyYXAuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0ZpcnN0VmlzaWJsZSA9IHNjcm9sbExlZnQgPCBmaXJzdENvbHVtbi5jbGllbnRXaWR0aCAvIDI7XG5cbiAgICAgICAgICAgICAgICBuYXZJdGVtc1swXS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgaXNGaXJzdFZpc2libGUpO1xuICAgICAgICAgICAgICAgIG5hdkl0ZW1zWzFdLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnLCAhaXNGaXJzdFZpc2libGUpO1xuXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ291bnQudGV4dENvbnRlbnQgPSBpc0ZpcnN0VmlzaWJsZSA/ICcxLzInIDogJzIvMic7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVNjcm9sbFN0YXR1cyk7XG4gICAgICAgICAgICB1cGRhdGVTY3JvbGxTdGF0dXMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICAvLyAjcmVnaW9uIFRyYW5zbGF0aW9uXG4gICAgY29uc3QgdWtMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGFuZycpO1xuICAgIGNvbnN0IGVuTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxhbmcnKTtcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZfX3BhZ2UnKTtcbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICAvLyBsZXQgbG9jYWxlID0gJ3VrJztcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/PyBcInVrXCJcbiAgICBpZiAodWtMYW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxhbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBgJHtBUEl9LyR7RU5EUE9JTlR9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtdWxhMV8yNScpLCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdHJhbnNsYXRpb25zOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJyk7XG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IHRyYW5zbGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGxvYWRUcmFuc2xhdGlvbnMoKTtcbiAgICAgICAgYXdhaXQgaW5pdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBpbml0aWFsaXphdGlvbjonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gZm9yIHRlc3RcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsICcxODkwODQ2NScpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkNvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNvbmZpcm0nKTtcblxuICAgIGJ0bkNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0Q29uZmlybWVkXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmV0Q29uZmlybWVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJldENvbmZpcm1lZFwiLCBcInRydWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5QYXJ0aWNpcGFudGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhcnRpY2lwYW50ZScpO1xuXG4gICAgYnRuUGFydGljaXBhbnRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nVXNlclwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImV4aXN0aW5nVXNlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1VzZXJcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmFjZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhY2VyLWJ0blwiKVxuICAgIGNvbnN0IGxhcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFwLWJ0blwiKVxuICAgIGNvbnN0IHRlYW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlYW0tYnRuXCIpXG5cbiAgICByYWNlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2luZXJcIilcbiAgICAgICAgcmVuZGVyUHJlZGljdGlvblRhYmxlKFwid2lubmVyXCIpXG4gICAgfSlcblxuICAgIGxhcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGFwXCIpXG4gICAgICAgIHJlbmRlclByZWRpY3Rpb25UYWJsZShcImZhc3Rlc3RMYXBcIilcbiAgICB9KVxuXG4gICAgdGVhbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVhbVwiKVxuICAgICAgICByZW5kZXJQcmVkaWN0aW9uVGFibGUoXCJiZXN0VGVhbVwiKVxuICAgIH0pXG5cbiAgICByZW5kZXJQcmVkaWN0aW9uVGFibGUoKVxuXG5cbn0pKCk7XG4iXX0=
