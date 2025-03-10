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
                table.parentElement.classList.remove('_result');
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
              var isFirstVisible = scrollLeft < firstColumn.clientWidth / 2 + 20;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZm9ybWF0RGF0ZVN0cmluZyIsImdldEN1cnJlbnRSYWNlIiwibWFza1VzZXJJZCIsImFuaW1hdGVPblNjcm9sbCIsInJlcXVlc3QiLCJnZXRBbGxVc2VycyIsImdldFNlYXNvbmFsU3RhbmRpbmdzIiwicmVnaXN0ZXJVc2VyIiwiZ2V0UHJlZGljdGlvblR5cGUiLCJjaGVja1VzZXJBdXRoIiwiY2hlY2tVc2VyUmVnIiwiaW5pdFJlZ2lzdHJhdGlvbiIsImxvYWRQcmVkaWN0aW9uVHlwZSIsInJlbmRlclByZWRpY3Rpb25UYWJsZSIsInJlbmRlclNlYXNvbmFsU3RhbmRpbmdzIiwicmVuZGVyVXNlcnNQbGFjZSIsImluaXRQYWdlIiwiaW5pdCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ0cmFuc2xhdGVLZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImxvY2FsZSIsImtleSIsImkxOG5EYXRhIiwiZWxlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZWxlbSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsIm1haW5QYWdlIiwiZmV0Y2giLCJBUEkiLCJFTkRQT0lOVCIsInJlc3BvbnNlIiwianNvbiIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNvbnNvbGUiLCJlcnJvciIsIndpbmRvdyIsInN0b3JlIiwibG9nIiwidXNlcklkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiTnVtYmVyIiwiYyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnX3VzZXJfaWQiLCJjbGVhckludGVydmFsIiwidXNlcnMiLCJzdGFuZGluZ3MiLCJleGlzdGluZ1VzZXIiLCJyZXN1bHRzQmxvY2siLCJiZXRDb25maXJtZWQiLCJjb25maXJtQmxvY2siLCJBcnJheSIsImlzQXJyYXkiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwidXNlcmlkIiwicGFyc2VJbnQiLCJ5b3VyU2Vhc29uUmVzRWwiLCJwbGFjZUVsIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicG9zaXRpb24iLCJ1c2VySWRFbCIsInBvaW50c1dyYXBwZXIiLCJwb2ludHNWYWx1ZUVsIiwiY29ycmVjdFByZWRpY3Rpb25zIiwidXNlcnNXaXRoUG9pbnRzIiwiZmlsdGVyIiwidG9wVGhyZWUiLCJzbGljZSIsImNvbnRhaW5lckNsYXNzIiwiY29udGFpbmVyIiwicG9pbnRzRWwiLCJwb2ludHNUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInByZWRpY3Rpb25UeXBlIiwiYmV0Q29udGFpbmVyIiwiY3VycmVudFJhY2VOdW1iZXIiLCJwcmVkaWN0aW9uRGF0YSIsInlvdUFyZUluQnRuc0VsIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Y2Nlc3MiLCJwcmVkaWN0aW9uQnRuRWwiLCJkaXNhYmxlZCIsInlvdXJTZWFzb25CZXRzRWwiLCJhdXRoQnRuc0VsIiwiYmV0Q29sdW1uc0J0bnNFbCIsImJ1dHRvbiIsInlvdXJCZXRJbmZvRWwiLCJpdGVtIiwidG9DdXJyZW50UmFjZUJ0bnMiLCJ1c2VySWRlbnRpZmllciIsInJhY2VOdW1iZXIiLCJkYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImFuaW1hdGlvbkNsYXNzIiwiZGVsYXkiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwidXNlcklkVG9NYXNrIiwidG9TdHJpbmciLCJyYWNlSW5mbyIsIlJBQ0VTIiwiciIsImN1cnJlbnREYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm51bWJlciIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJyYWNlc0J5SWQiLCJzbGlkZXMiLCJzbGlkZU1vdmVMZWZ0Iiwic2xpZGVNb3ZlUmlnaHQiLCJzbGlkZUNvdW50ZXIiLCJiZXRUYWJsZXMiLCJiZXRXcmFwQ29sdW1ucyIsInJlc3VsdHNGaXJzdCIsInJlc3VsdHNTZWNvbmQiLCJyZXN1bHRzVGhpcmQiLCJjdXJyZW50UmFjZSIsInNsaWRlIiwiaSIsImN1cnJlbnRTbGlkZSIsInVwZGF0ZVNsaWRlciIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImNvbHVtbiIsInNjcm9sbExlZnQiLCJpbmRleCIsInRhYmxlIiwicGFyZW50RWxlbWVudCIsIm1vdmVTbGlkZSIsImRpcmVjdGlvbiIsImN1cnJlbnRCb2xpZCIsIm5leHRTbGlkZSIsIm5leHRCb2xpZCIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInN0YXJ0Q291bnRkb3duIiwiZW5kVGltZSIsImRheXNFbHMiLCJob3Vyc0VscyIsIm1pbnV0ZXNFbHMiLCJ0aW1lckludGVydmFsIiwidXBkYXRlVGltZXIiLCJub3ciLCJnZXRUaW1lIiwidGltZUxlZnQiLCJ1cGRhdGVEaWdpdHMiLCJkYXlzIiwiTWF0aCIsImZsb29yIiwiU3RyaW5nIiwiZWxlbWVudHMiLCJ2YWx1ZSIsImVuZE9mTW9udGgiLCJzdGFydFNtb2tlIiwiY2FyU2VsZWN0b3IiLCJzbW9rZUNsYXNzIiwibWF4Q291bnQiLCJmYWRlVGltZSIsInJlbW92ZURlbGF5IiwiZXh0cmFDbGFzcyIsImFjdGl2ZUNsYXNzIiwiY2FycyIsImNhciIsImNyZWF0ZVNtb2tlIiwicGFyZW50IiwiY29udGFpbnMiLCJleHRyYUNsYXNzTmFtZSIsInNtb2tlIiwiY3JlYXRlRWxlbWVudCIsInNldFBvcHVwcyIsInRyaWdnZXJCdXR0b24iLCJwb3B1cENsYXNzIiwicG9wdXBzQ29udGFpbmVyIiwicG9wdXAiLCJvdmVyZmxvdyIsImNsb3NlQnV0dG9uIiwiZSIsImNsb3NlUG9wdXAiLCJiZXRQb3B1cHNCdG5zIiwid3JhcCIsIm5hdkl0ZW1zIiwic2Nyb2xsQ291bnQiLCJmaXJzdENvbHVtbiIsInVwZGF0ZVNjcm9sbFN0YXR1cyIsImlzRmlyc3RWaXNpYmxlIiwiY2xpZW50V2lkdGgiLCJ0b2dnbGUiLCJ1a0xhbmciLCJlbkxhbmciLCJhdXRoQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsImJ0bkNvbmZpcm0iLCJidG5QYXJ0aWNpcGFudGUiLCJsbmdCdG4iLCJyYWNlckJ0biIsImxhcEJ0biIsInRlYW1CdG4iLCJwcmV2ZW50RGVmYXVsdCIsImoiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsMkRBQUM7RUFBQTtFQUFBLDZQQW1KWUEsZ0JBQWdCLEVBWWhCQyxjQUFjLEVBT2RDLFVBQVUsRUFJVkMsZUFBZSxFQXNCZkMsT0FBTyxFQVdEQyxXQUFXLGdCQUtYQyxvQkFBb0IseUJBS3BCQyxZQUFZLGlCQVVaQyxpQkFBaUIsc0JBd0J2QkMsYUFBYSxFQXlEYkMsWUFBWSxFQVdOQyxnQkFBZ0IscUJBY2hCQyxrQkFBa0IsdUJBVXhCQyxxQkFBcUIsRUFvQnJCQyx1QkFBdUIsRUE2RXZCQyxnQkFBZ0IsRUF5Q1ZDLFFBQVEsYUFt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LENBQUMsTUFBTSxDQUFDO1VBQ25CNUMscUJBQXFCLENBQUMsVUFBVSxDQUFDO1FBQ3JDLENBQUMsQ0FBQztRQUVGQSxxQkFBcUIsRUFBRTtRQUd2Qm1CLFFBQVEsQ0FBQ2tELGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQ3VCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFLO1VBQy9EekUsUUFBUSxDQUFDa0QsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDekQsU0FBUyxDQUFDK04sTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNuRSxDQUFDLENBQUM7UUFFRnpJLGdCQUFnQixDQUFDNUUsT0FBTyxDQUFDLFVBQUNxRSxHQUFHLEVBQUV1RSxDQUFDLEVBQUk7VUFDaEN2RSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDcUksQ0FBQyxFQUFJO1lBQ2hDQSxDQUFDLENBQUN3QixjQUFjLEVBQUU7WUFDbEJ0TyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUNFLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUVtTyxDQUFDLEVBQUk7Y0FDL0RuTyxJQUFJLENBQUNYLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztjQUM1QixJQUFHcUosQ0FBQyxLQUFLd0YsQ0FBQyxFQUFDO2dCQUNQbk8sSUFBSSxDQUFDWCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxLQUFLLENBQUM7Y0FDN0I7WUFDSixDQUFDLENBQUM7VUFDTixDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFBQTtNQUFBO1FBQUE7SUFBQTtFQUFBO0FBQUEsQ0FFTCxJQUFHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vMTg5MDg0NjVcbiAgICBjb25zdCBBUEkgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20nO1xuICAgIGNvbnN0IEVORFBPSU5UID0gJ2FwaV9mb3JtdWxhMV8yNSc7XG4gICAgY29uc3QgUkFDRVMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMTJUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTAzLTE2VDAyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMTdUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTAzLTIzVDA1OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMjRUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA0LTA2VDA0OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMDdUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA0LTEzVDE0OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMTRUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA0LTIwVDE2OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMjFUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA1LTA0VDE5OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogNyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMDVUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA1LTE4VDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogOCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMTlUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA1LTI1VDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogOSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMjZUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTAxVDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTAsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTAyVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0xNVQxNzozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDExLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0xNlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMjlUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxMixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMzBUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA3LTA2VDEzOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTMsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA3LTA3VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNy0yN1QxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE0LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNy0yOFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDgtMDNUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxNSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDgtMDRUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA4LTMxVDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTYsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA5LTAxVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOS0wN1QxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE3LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOS0wOFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDktMjFUMTA6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxOCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDktMjJUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTA1VDExOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTksXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTA2VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0xOVQxODozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIwLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0yMFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMjZUMTg6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyMSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMjdUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTExLTA5VDE1OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMjIsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTExLTEwVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMS0yMlQwMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIzLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMS0yM1QwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTEtMzBUMTQ6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyNCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTItMDFUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTEyLTA3VDExOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgcmFjZXNCeUlkID0gW107XG4gICAgUkFDRVMuZm9yRWFjaCgocikgPT4gKHJhY2VzQnlJZFtyLm51bWJlcl0gPSByKSk7XG4gICAgLy8gY29uc29sZS5sb2coJyByYWNlc0J5SWQ6JywgcmFjZXNCeUlkKTtcbiAgICBsZXQgdXNlcklkO1xuICAgIGxldCB1c2VycyA9IFtdO1xuICAgIC8vIGxldCBleGlzdGluZ1VzZXIgPSB0cnVlO1xuICAgIGxldCBleGlzdGluZ1VzZXIgPSAgISFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdVc2VyXCIpXG4gICAgY29uc3QgYXV0aEJ0bnNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyk7XG4gICAgY29uc3QgeW91QXJlSW5CdG5zRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKTtcbiAgICBjb25zdCBwcmVkaWN0aW9uQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9vay1wYXJ0Jyk7XG4gICAgY29uc3QgYmV0Q29sdW1uc0J0bnNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXRfX2NvbHVtbi1idG4nKTtcbiAgICBjb25zdCB5b3VyQmV0SW5mb0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJldF9feW91ci1jb250YWluZXInKTtcbiAgICBjb25zdCB5b3VyU2Vhc29uUmVzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19feW91Jyk7XG4gICAgY29uc3QgeW91clNlYXNvbkJldHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wLl9iZXRzJyk7XG4gICAgY29uc3QgdG9DdXJyZW50UmFjZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1cnJlbnQtcmFjZVwiKTtcbiAgICBjb25zdCBjb25maXJtQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmZpcm1cIik7XG4gICAgY29uc3QgcmVzdWx0c0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRzXCIpO1xuXG4gICAgbGV0IGJldENvbmZpcm1lZCA9ICEhc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImJldENvbmZpcm1lZFwiKVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcblxuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gICAgICAgIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn0gLyAke2hvdXJzfToke21pbnV0ZXN9YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50UmFjZSgpIHtcbiAgICAgICAgY29uc3QgcmFjZUluZm8gPSBSQUNFUy5maW5kKFxuICAgICAgICAgICAgKHIpID0+IGN1cnJlbnREYXRlID49IHIuc3RhcnREYXRlICYmIGN1cnJlbnREYXRlIDwgci5lbmREYXRlXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByYWNlSW5mbyAmJiByYWNlSW5mby5udW1iZXI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWRUb01hc2spIHtcbiAgICAgICAgcmV0dXJuICcqKicgKyB1c2VySWRUb01hc2sudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlT25TY3JvbGwoZWxlbWVudCwgYW5pbWF0aW9uQ2xhc3MsIGRlbGF5KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0KGxpbmssIGV4dHJhT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGxpbms6JywgYCR7QVBJfS8ke0VORFBPSU5UfSR7bGlua31gKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0FQSX0vJHtFTkRQT0lOVH0ke2xpbmt9YCwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uZXh0cmFPcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBbGxVc2VycygpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KCcvdXNlcnMnKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRTZWFzb25hbFN0YW5kaW5ncygpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KCcvc2Vhc29uYWwtc3RhbmRpbmdzJyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QoJy91c2VyJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJlZGljdGlvblR5cGUodXNlcklkZW50aWZpZXIsIHJhY2VOdW1iZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdChcbiAgICAgICAgICAgICAgICBgL3ByZWRpY3Rpb24tdHlwZS8ke3VzZXJJZGVudGlmaWVyfS8ke3JhY2VOdW1iZXJ9YFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmVkaWN0aW9uIHR5cGUgcmVzcG9uc2U6JywgZGF0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBwcmVkaWN0aW9uIHR5cGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoge1xuICAgICAgICBcInByZWRpY3Rpb25UeXBlXCI6IFwiZmFzdGVzdExhcFwiLFxuICAgICAgICBcImlzRXhpc3RpbmdcIjogZmFsc2VcbiAgICB9IFxuICAgIFxuICAgIGNvbnN0IHByZWRpY3Rpb25UeXBlcyA9IFsnd2lubmVyJywgJ2Zhc3Rlc3RMYXAnLCAnYmVzdFRlYW0nXTtcbiAgICBcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrVXNlckF1dGgnLCB1c2VySWQpO1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcHJlZGljdGlvbkJ0bkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHlvdXJTZWFzb25SZXNFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHlvdXJTZWFzb25CZXRzRWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBhdXRoQnRuc0VsLmZvckVhY2goYnRuID0+e1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmV0Q29sdW1uc0J0bnNFbC5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgeW91ckJldEluZm9FbC5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0b0N1cnJlbnRSYWNlQnRucy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXN1bHRzQmxvY2suY2xhc3NMaXN0LmFkZChcImF1dGhcIilcblxuXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklkICYmICFleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgIHlvdXJTZWFzb25SZXNFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHlvdXJCZXRJbmZvRWwuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmV0Q29sdW1uc0J0bnNFbC5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgeW91QXJlSW5CdG5zRWwuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdXRoQnRuc0VsLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9DdXJyZW50UmFjZUJ0bnMuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmVzdWx0c0Jsb2NrLmNsYXNzTGlzdC5hZGQoXCJhdXRoXCIpXG4gICAgICAgIH0gZWxzZSBpZiAodXNlcklkICYmIGV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgeW91QXJlSW5CdG5zRWwuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5b3VyQmV0SW5mb0VsLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGF1dGhCdG5zRWwuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b0N1cnJlbnRSYWNlQnRucy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwcmVkaWN0aW9uQnRuRWwuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snKTtcbiAgICAgICAgICAgIHJlc3VsdHNCbG9jay5jbGFzc0xpc3QucmVtb3ZlKFwiYXV0aFwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyUmVnKCkge1xuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlci51c2VyaWQgPT09IHVzZXJJZCkge1xuICAgICAgICAgICAgICAgIC8vIGV4aXN0aW5nVXNlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmVuZGVyVXNlcnModXNlcnMpO1xuICAgICAgICAvLyB0cmFuc2xhdGUoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0UmVnaXN0cmF0aW9uKCkge1xuICAgICAgICB5b3VBcmVJbkJ0bnNFbC5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlZ2lzdGVyVXNlcigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyUmVnKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGxvYWRQcmVkaWN0aW9uVHlwZSgpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRQcmVkaWN0aW9uVHlwZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFJhY2VOdW1iZXIgPSBnZXRDdXJyZW50UmFjZSgpO1xuICAgICAgICBjb25zdCBwcmVkaWN0aW9uRGF0YSA9IGF3YWl0IGdldFByZWRpY3Rpb25UeXBlKFxuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgY3VycmVudFJhY2VOdW1iZXJcbiAgICAgICAgKTtcblxuICAgICAgICByZW5kZXJQcmVkaWN0aW9uVGFibGUocHJlZGljdGlvbkRhdGEucHJlZGljdGlvblR5cGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclByZWRpY3Rpb25UYWJsZShwcmVkaWN0aW9uVHlwZSkge1xuICAgICAgICAvL2ZvciB0ZXN0XG4gICAgICAgIC8vIHByZWRpY3Rpb25UeXBlID0gJ2Jlc3RUZWFtJztcbiAgICAgICAgY29uc3QgYmV0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJldC5fY29udGFpbmVyJyk7XG4gICAgICAgIGJldENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiX3JhY2VyXCIsIFwiX2xhcFwiLCBcIl90ZWFtXCIpXG4gICAgICAgIHN3aXRjaCAocHJlZGljdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3dpbm5lcic6XG4gICAgICAgICAgICAgICAgYmV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ19yYWNlcicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZmFzdGVzdExhcCc6XG4gICAgICAgICAgICAgICAgYmV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ19sYXAnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jlc3RUZWFtJzpcbiAgICAgICAgICAgICAgICBiZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX3RlYW0nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYmV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ19yYWNlcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2Vhc29uYWxTdGFuZGluZ3Moc3RhbmRpbmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFuZGluZ3M6Jywgc3RhbmRpbmdzKTtcblxuICAgICAgICBpZiAoIXN0YW5kaW5ncyB8fCAhQXJyYXkuaXNBcnJheShzdGFuZGluZ3MpIHx8IHN0YW5kaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXJzV2l0aFBvaW50cyA9IHN0YW5kaW5ncy5maWx0ZXIoXG4gICAgICAgICAgICAodXNlcikgPT4gdXNlci5jb3JyZWN0UHJlZGljdGlvbnMgPiAwXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHVzZXJzV2l0aFBvaW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyB1c2VycyB3aXRoIGNvcnJlY3QgcHJlZGljdGlvbnMgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvcFRocmVlID0gdXNlcnNXaXRoUG9pbnRzLnNsaWNlKDAsIDMpO1xuXG4gICAgICAgIHRvcFRocmVlLmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdXNlci5wb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBjb250YWluZXJDbGFzcyA9ICcnO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzcyA9ICcucmVzdWx0c19fZmlyc3QnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzID0gJy5yZXN1bHRzX19zZWNvbmQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzID0gJy5yZXN1bHRzX190aGlyZCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJDbGFzcyk7XG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAodXNlci5jb3JyZWN0UHJlZGljdGlvbnMgPiAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC1kZWNvcicpLFxuICAgICAgICAgICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLXdyYXAnKSxcbiAgICAgICAgICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgICAgICAgICAgNDAwXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlRWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC1wbGFjZScpO1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZUVsKSBwbGFjZUVsLnRleHRDb250ZW50ID0gcG9zaXRpb247XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySWRFbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnLnJlc3VsdHNfX3RvcC1pbmZvLWlkJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZEVsKVxuICAgICAgICAgICAgICAgICAgICB1c2VySWRFbC50ZXh0Q29udGVudCA9IGBVU0VSICR7bWFza1VzZXJJZCh1c2VyLnVzZXJpZCl9YDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50c0VsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICcucmVzdWx0c19fdG9wLWluZm8tcG9pbnRzJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50c0VsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50c1RleHQgPSBwb2ludHNFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1tkYXRhLXRyYW5zbGF0ZT1cInBvaW50c1wiXSdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2ludHNUZXh0KSBwb2ludHNFbC5hcHBlbmRDaGlsZChwb2ludHNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzRWwuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgICR7dXNlci5jb3JyZWN0UHJlZGljdGlvbnN9YClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzUGxhY2Uoc3RhbmRpbmdzKSB7XG4gICAgICAgIGlmICghdXNlcklkIHx8ICFzdGFuZGluZ3MgfHwgIUFycmF5LmlzQXJyYXkoc3RhbmRpbmdzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBzdGFuZGluZ3MuZmluZChcbiAgICAgICAgICAgICh1c2VyKSA9PiB1c2VyLnVzZXJpZCA9PT0gcGFyc2VJbnQodXNlcklkKVxuICAgICAgICApO1xuICAgICAgICAvLyBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgIC8vICAgICB5b3VyU2Vhc29uUmVzRWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKCF1c2VySWQgJiYgIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgeW91clNlYXNvblJlc0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgeW91clNlYXNvblJlc0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBjb25zdCBwbGFjZUVsID0geW91clNlYXNvblJlc0VsLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX195b3UtcGxhY2UnKTtcbiAgICAgICAgaWYgKHBsYWNlRWwpIHtcbiAgICAgICAgICAgIHBsYWNlRWwudGV4dENvbnRlbnQgPSBjdXJyZW50VXNlci5wb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXJJZEVsID0geW91clNlYXNvblJlc0VsLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX195b3UtaW5mby1pZCcpO1xuICAgICAgICBpZiAodXNlcklkRWwpIHtcbiAgICAgICAgICAgIHVzZXJJZEVsLnRleHRDb250ZW50ID0gbWFza1VzZXJJZCh1c2VySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG9pbnRzV3JhcHBlciA9IHlvdXJTZWFzb25SZXNFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5yZXN1bHRzX195b3UtaW5mby1wb2ludHMnXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHBvaW50c1dyYXBwZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvaW50c1ZhbHVlRWwgPVxuICAgICAgICAgICAgICAgIHBvaW50c1dyYXBwZXIucXVlcnlTZWxlY3Rvcignc3BhbjpsYXN0LWNoaWxkJyk7XG4gICAgICAgICAgICBpZiAocG9pbnRzVmFsdWVFbCkge1xuICAgICAgICAgICAgICAgIHBvaW50c1ZhbHVlRWwudGV4dENvbnRlbnQgPSBgOiAke2N1cnJlbnRVc2VyLmNvcnJlY3RQcmVkaWN0aW9uc31gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgICAgIC8vIGNoZWNrVXNlckF1dGgoKTtcbiAgICAgICAgdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycygpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWxsIFVTRVJTJywgdXNlcnMpO1xuICAgICAgICBjb25zdCBzdGFuZGluZ3MgPSBhd2FpdCBnZXRTZWFzb25hbFN0YW5kaW5ncygpO1xuICAgICAgICByZW5kZXJTZWFzb25hbFN0YW5kaW5ncyhzdGFuZGluZ3MpO1xuICAgICAgICBjaGVja1VzZXJSZWcoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2V4aXN0aW5nVXNlcjonLCBleGlzdGluZ1VzZXIpO1xuICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgYXdhaXQgaW5pdFJlZ2lzdHJhdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyVXNlcnNQbGFjZShzdGFuZGluZ3MpO1xuICAgICAgICAgICAgcmVzdWx0c0Jsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJhdXRoXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYoYmV0Q29uZmlybWVkKXtcbiAgICAgICAgICAgIGNvbmZpcm1CbG9jay5jbGFzc0xpc3QuYWRkKFwiX2JldENvbmZpcm1lZFwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3aW5kb3cgc3RvcmUnKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAvLyB1c2VySWQgPSAoc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCkgfHwgJyc7XG4gICAgICAgICAgICAvLyB1c2VySWQgPSAxODkwODQ2NTtcbiAgICAgICAgICAgIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikgPyBOdW1iZXIoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSkgOiBudWxsXG4gICAgICAgICAgICBhd2FpdCBpbml0UGFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHdpbmRvdyBzdG9yZScpO1xuICAgICAgICAgICAgYXdhaXQgaW5pdFBhZ2UoKTtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjIDwgNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGluaXRQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGMrKztcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhY2VfX2l0ZW0nKTtcbiAgICAgICAgY29uc3Qgc2xpZGVNb3ZlTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYtbGVmdCcpO1xuICAgICAgICBjb25zdCBzbGlkZU1vdmVSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYtcmlnaHQnKTtcbiAgICAgICAgY29uc3Qgc2xpZGVDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdi1jb3VudGVyJyk7XG4gICAgICAgIGNvbnN0IGJldFRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXRfX2l0ZW0nKTtcbiAgICAgICAgY29uc3QgYmV0V3JhcENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmV0X193cmFwJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHNGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX19maXJzdCcpO1xuICAgICAgICBjb25zdCByZXN1bHRzU2Vjb25kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3NlY29uZCcpO1xuICAgICAgICBjb25zdCByZXN1bHRzVGhpcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdGhpcmQnKTtcblxuICAgICAgICAvLyBsZXQgY3VycmVudFJhY2UgPSBnZXRDdXJyZW50UmFjZSgpID8gZ2V0Q3VycmVudFJhY2UoKSA6IDE7XG4gICAgICAgIGxldCBjdXJyZW50UmFjZSA9IDI7XG5cbiAgICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA8IGN1cnJlbnRSYWNlIC0gMSkge1xuICAgICAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaSA+IGN1cnJlbnRSYWNlIC0gMSkge1xuICAgICAgICAgICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ19sb2NrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjdXJyZW50U2xpZGUgPSBjdXJyZW50UmFjZSAtIDE7XG5cbiAgICAgICAgdG9DdXJyZW50UmFjZUJ0bnMuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICAgICAgICAgIGN1cnJlbnRSYWNlID0gMjtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSBjdXJyZW50UmFjZSAtIDE7XG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRTbGlkZSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZWRpY3RcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCA7XG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBiZXRXcmFwQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBjb2x1bW4uc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcihpbmRleCkge1xuICAgICAgICAgICAgYmV0V3JhcENvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJykpO1xuICAgICAgICAgICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XG4gICAgICAgICAgICBzbGlkZUNvdW50ZXIudGV4dENvbnRlbnQgPSBgJHtpbmRleCArIDF9LyR7c2xpZGVzLmxlbmd0aH1gO1xuICAgICAgICAgICAgYmV0VGFibGVzLmZvckVhY2goKHRhYmxlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snLCAnX2RvbmUnKTtcbiAgICAgICAgICAgICAgICB0YWJsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19yZXN1bHQnKTsgLy8g0YLRg9GCXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+IGN1cnJlbnRSYWNlIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgY3VycmVudFJhY2UgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ19kb25lJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX3Jlc3VsdCcpOyAvLyDRgtGD0YJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gY3VycmVudFJhY2UgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ19sb2NrJywgJ19kb25lJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX3Jlc3VsdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbW92ZVNsaWRlKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJvbGlkID1cbiAgICAgICAgICAgICAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5xdWVyeVNlbGVjdG9yKCcucmFjZV9fYm9saWQnKTtcbiAgICAgICAgICAgIGN1cnJlbnRCb2xpZC5jbGFzc0xpc3QuYWRkKCdfbW92ZScpO1xuICAgICAgICAgICAgbGV0IG5leHRTbGlkZSA9XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnbmV4dCcgPyBjdXJyZW50U2xpZGUgKyAxIDogY3VycmVudFNsaWRlIC0gMTtcbiAgICAgICAgICAgIGlmIChuZXh0U2xpZGUgPCAwKSBuZXh0U2xpZGUgPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmIChuZXh0U2xpZGUgPj0gc2xpZGVzLmxlbmd0aCkgbmV4dFNsaWRlID0gMDtcblxuICAgICAgICAgICAgY29uc3QgbmV4dEJvbGlkID0gc2xpZGVzW25leHRTbGlkZV0ucXVlcnlTZWxlY3RvcignLnJhY2VfX2JvbGlkJyk7XG4gICAgICAgICAgICBuZXh0Qm9saWQuY2xhc3NMaXN0LmFkZCgnX2Fycml2ZScpO1xuXG4gICAgICAgICAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKCdfb3BhY2l0eScpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Qm9saWQuY2xhc3NMaXN0LnJlbW92ZSgnX21vdmUnKTtcbiAgICAgICAgICAgICAgICBuZXh0Qm9saWQuY2xhc3NMaXN0LnJlbW92ZSgnX2Fycml2ZScpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IG5leHRTbGlkZTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlcihjdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdfb3BhY2l0eScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBzbGlkZU1vdmVMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW92ZVNsaWRlKCdwcmV2Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYnKS5zdHlsZS5wb2ludGVyRXZlbnRzID1cbiAgICAgICAgICAgICAgICAgICAgJ2luaXRpYWwnO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzbGlkZU1vdmVSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vdmVTbGlkZSgnbmV4dCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdicpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9XG4gICAgICAgICAgICAgICAgICAgICdpbml0aWFsJztcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudFNsaWRlKTtcblxuICAgICAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bihlbmRUaW1lKSB7XG4gICAgICAgICAgICBjb25zdCBkYXlzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVyX19kYXlzLWl0ZW0nKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVyX19ob3Vycy1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBtaW51dGVzRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgICAnLnRpbWVyX19taW51dGVzLWl0ZW0nXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgdGltZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcigpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lTGVmdCA9IGVuZFRpbWUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBpZiAodGltZUxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoZGF5c0VscywgJzAwJyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhob3Vyc0VscywgJzAwJyk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCAnMDAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCAqIDYwKSkgJSAyNCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRpbWVMZWZ0IC8gKDEwMDAgKiA2MCkpICUgNjApO1xuXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGRheXNFbHMsIFN0cmluZyhkYXlzKS5wYWRTdGFydCgyLCAnMCcpKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoaG91cnNFbHMsIFN0cmluZyhob3VycykucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKG1pbnV0ZXNFbHMsIFN0cmluZyhtaW51dGVzKS5wYWRTdGFydCgyLCAnMCcpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGlnaXRzKGVsZW1lbnRzLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzWzBdLnRleHRDb250ZW50ID0gdmFsdWVbMF07XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbMV0udGV4dENvbnRlbnQgPSB2YWx1ZVsxXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBkYXRlVGltZXIoKTtcbiAgICAgICAgICAgIHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lciwgNjAwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZW5kT2ZNb250aCA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgbm93LmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBub3cuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMjMsXG4gICAgICAgICAgICA1OVxuICAgICAgICApLmdldFRpbWUoKTtcblxuICAgICAgICBzdGFydENvdW50ZG93bihlbmRPZk1vbnRoKTtcblxuICAgICAgICBmdW5jdGlvbiBzdGFydFNtb2tlKFxuICAgICAgICAgICAgY2FyU2VsZWN0b3IsXG4gICAgICAgICAgICBzbW9rZUNsYXNzLFxuICAgICAgICAgICAgbWF4Q291bnQsXG4gICAgICAgICAgICBpbnRlcnZhbCxcbiAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgZmFkZVRpbWUsXG4gICAgICAgICAgICByZW1vdmVEZWxheSxcbiAgICAgICAgICAgIGV4dHJhQ2xhc3MgPSAnJyxcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzID0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBjYXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjYXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIGNhcnMuZm9yRWFjaCgoY2FyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjYXIpIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNtb2tlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGNhci5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnQgfHwgIXBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ19hY3RpdmUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRyYUNsYXNzTmFtZSA9IGV4dHJhQ2xhc3MgPyBgLiR7ZXh0cmFDbGFzc31gIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhci5xdWVyeVNlbGVjdG9yQWxsKGAuJHtzbW9rZUNsYXNzfSR7ZXh0cmFDbGFzc05hbWV9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoIDwgbWF4Q291bnRcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzbW9rZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc21va2UuY2xhc3NMaXN0LmFkZChzbW9rZUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRyYUNsYXNzKSBzbW9rZS5jbGFzc0xpc3QuYWRkKGV4dHJhQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FyLmFwcGVuZENoaWxkKHNtb2tlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gc21va2UucmVtb3ZlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFkZVRpbWUgKyByZW1vdmVEZWxheVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTbW9rZSgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbChjcmVhdGVTbW9rZSwgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnRTbW9rZShcbiAgICAgICAgICAgICcucmFjZV9fYm9saWQtY2FyJyxcbiAgICAgICAgICAgICdyYWNlX19ib2xpZC1zbW9rZS1mcm9udCcsXG4gICAgICAgICAgICA0LFxuICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgNTAwLFxuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBzdGFydFNtb2tlKFxuICAgICAgICAgICAgJy5yYWNlX19ib2xpZC1jYXInLFxuICAgICAgICAgICAgJ3JhY2VfX2JvbGlkLXNtb2tlLWJhY2snLFxuICAgICAgICAgICAgOCxcbiAgICAgICAgICAgIDkwMCxcbiAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDE2MDAsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgc3RhcnRTbW9rZShcbiAgICAgICAgICAgICcucmFjZV9fYm9saWQtY2FyJyxcbiAgICAgICAgICAgICdyYWNlX19ib2xpZC1zbW9rZS1iYWNrJyxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICA5MDAsXG4gICAgICAgICAgICA1MDAsXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxNjAwLFxuICAgICAgICAgICAgJ19sYXJnZScsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHN0YXJ0U21va2UoXG4gICAgICAgICAgICAnLndlbGNvbWVfX3BlcnMtc21va2UtZnJvbnQnLFxuICAgICAgICAgICAgJ2Zyb250LWJlZm9yZScsXG4gICAgICAgICAgICA0LFxuICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgNTAwLFxuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgICAgc3RhcnRTbW9rZShcbiAgICAgICAgICAgICcud2VsY29tZV9fcGVycy1zbW9rZS1iYWNrJyxcbiAgICAgICAgICAgICdmcm9udC1iZWZvcmUnLFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIDkwMCxcbiAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDE2MDAsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0UG9wdXBzKHRyaWdnZXJCdXR0b24sIHBvcHVwQ2xhc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cHMnKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwc19faXRlbS4ke3BvcHVwQ2xhc3N9YCk7XG5cbiAgICAgICAgICAgIGlmICghdHJpZ2dlckJ1dHRvbiB8fCAhcG9wdXAgfHwgIXBvcHVwc0NvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgICAgICAgICB0cmlnZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdfb3BhY2l0eScpO1xuICAgICAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHBvcHVwQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzX19pdGVtLWNsb3NlJyk7XG5cbiAgICAgICAgICAgIHBvcHVwc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cHNDb250YWluZXIgfHwgZS50YXJnZXQgPT09IGNsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY2xvc2VQb3B1cCgpIHtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShwb3B1cENsYXNzKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJldF9fYnRuLWl0ZW0nKSwgJ19iZXRQb3B1cCcpO1xuICAgICAgICBjb25zdCBiZXRQb3B1cHNCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iZXRfX2J0blwiKVxuXG4gICAgICAgIGJldFBvcHVwc0J0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGJ0bi5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJfcmFjZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXBzKGJ0biwgXCJfYmV0UG9wdXBSYWNlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX2xhcFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRQb3B1cHMoYnRuLCBcIl9iZXRQb3B1cExhcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3RlYW1cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXBzKGJ0biwgXCJfYmV0UG9wdXBUZWFtXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFBvcHVwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybV9fdXBkLWJ0bi5fYmV0Q29uZmlybWVkJyksICdfY29uZmlybVBvcHVwJyk7XG4gICAgICAgIHNldFBvcHVwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybV9fdXBkLWJ0bi5fYmV0Tm90Q29uZmlybWVkJyksICdfbm90Q29uZmlybVBvcHVwJyk7XG4gICAgICAgIHNldFBvcHVwcyhcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX19wb3B1cCcpLFxuICAgICAgICAgICAgJ19yZXN1bHRzUG9wdXAnXG4gICAgICAgICk7XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZU9uU2Nyb2xsKGVsZW1lbnQsIGFuaW1hdGlvbkNsYXNzLCBkZWxheSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHgnLFxuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNGaXJzdC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLWRlY29yJyksXG4gICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICByZXN1bHRzU2Vjb25kLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3AtZGVjb3InKSxcbiAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICA0MDBcbiAgICAgICAgKTtcbiAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgcmVzdWx0c1RoaXJkLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3AtZGVjb3InKSxcbiAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICA4MDBcbiAgICAgICAgKTtcbiAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgcmVzdWx0c0ZpcnN0LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3Atd3JhcCcpLFxuICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgcmVzdWx0c1NlY29uZC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLXdyYXAnKSxcbiAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICA0MDBcbiAgICAgICAgKTtcbiAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgcmVzdWx0c1RoaXJkLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3Atd3JhcCcpLFxuICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgIDgwMFxuICAgICAgICApO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXRfX2l0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3cmFwID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYmV0X193cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBuYXZJdGVtcyA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmJldF9fc2Nyb2xsLW5hdi1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxDb3VudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmJldF9fc2Nyb2xsLWNvdW50Jyk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdENvbHVtbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmJldF9fY29sdW1uJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVNjcm9sbFN0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd3JhcC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzRmlyc3RWaXNpYmxlID0gc2Nyb2xsTGVmdCA8IGZpcnN0Q29sdW1uLmNsaWVudFdpZHRoIC8gMiArIDIwO1xuXG4gICAgICAgICAgICAgICAgbmF2SXRlbXNbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnX2FjdGl2ZScsIGlzRmlyc3RWaXNpYmxlKTtcbiAgICAgICAgICAgICAgICBuYXZJdGVtc1sxXS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgIWlzRmlyc3RWaXNpYmxlKTtcblxuICAgICAgICAgICAgICAgIHNjcm9sbENvdW50LnRleHRDb250ZW50ID0gaXNGaXJzdFZpc2libGUgPyAnMS8yJyA6ICcyLzInO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd3JhcC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVTY3JvbGxTdGF0dXMpO1xuICAgICAgICAgICAgdXBkYXRlU2Nyb2xsU3RhdHVzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuXG4gICAgLy8gI3JlZ2lvbiBUcmFuc2xhdGlvblxuICAgIGNvbnN0IHVrTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xhbmcnKTtcbiAgICBjb25zdCBlbkxhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MYW5nJyk7XG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKTtcbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICAvLyBsZXQgbG9jYWxlID0gJ3VrJztcbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/PyBcInVrXCJcbiAgICBpZiAodWtMYW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxhbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBgJHtBUEl9LyR7RU5EUE9JTlR9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBpMThuRGF0YSA9IGpzb247XG4gICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtdWxhMV8yNScpLCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdHJhbnNsYXRpb25zOicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJyk7XG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsZW1zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IHRyYW5zbGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9jYWxlID09PSAnZW4nKSB7XG4gICAgICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50LCBiYXNlQ3NzQ2xhc3MpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGJhc2VDc3NDbGFzcyArIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChiYXNlQ3NzQ2xhc3MgKyBsb2NhbGUpO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGxvYWRUcmFuc2xhdGlvbnMoKTtcbiAgICAgICAgYXdhaXQgaW5pdCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBpbml0aWFsaXphdGlvbjonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gZm9yIHRlc3RcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG5cbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsICcxODkwODQ2NScpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0bkNvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWNvbmZpcm0nKTtcblxuICAgIGJ0bkNvbmZpcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0Q29uZmlybWVkXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYmV0Q29uZmlybWVkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImJldENvbmZpcm1lZFwiLCBcInRydWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5QYXJ0aWNpcGFudGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXBhcnRpY2lwYW50ZScpO1xuXG4gICAgYnRuUGFydGljaXBhbnRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImV4aXN0aW5nVXNlclwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImV4aXN0aW5nVXNlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJleGlzdGluZ1VzZXJcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmFjZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhY2VyLWJ0blwiKVxuICAgIGNvbnN0IGxhcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGFwLWJ0blwiKVxuICAgIGNvbnN0IHRlYW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlYW0tYnRuXCIpXG5cbiAgICByYWNlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwid2luZXJcIilcbiAgICAgICAgcmVuZGVyUHJlZGljdGlvblRhYmxlKFwid2lubmVyXCIpXG4gICAgfSlcblxuICAgIGxhcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGFwXCIpXG4gICAgICAgIHJlbmRlclByZWRpY3Rpb25UYWJsZShcImZhc3Rlc3RMYXBcIilcbiAgICB9KVxuXG4gICAgdGVhbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVhbVwiKVxuICAgICAgICByZW5kZXJQcmVkaWN0aW9uVGFibGUoXCJiZXN0VGVhbVwiKVxuICAgIH0pXG5cbiAgICByZW5kZXJQcmVkaWN0aW9uVGFibGUoKVxuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxuICAgIH0pXG5cbiAgICBiZXRDb2x1bW5zQnRuc0VsLmZvckVhY2goKGJ0biwgaSkgPT57XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJldF9fY29sdW1uLWl0ZW1cIikuZm9yRWFjaCgoZWxlbSwgaikgPT57XG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwieW91XCIpXG4gICAgICAgICAgICAgICAgaWYoaSA9PT0gail7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcInlvdVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcblxufSkoKTtcbiJdfQ==
