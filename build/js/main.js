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
              // currentRace = getCurrentRace() ? getCurrentRace() : 1;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZm9ybWF0RGF0ZVN0cmluZyIsImdldEN1cnJlbnRSYWNlIiwibWFza1VzZXJJZCIsImFuaW1hdGVPblNjcm9sbCIsInJlcXVlc3QiLCJnZXRBbGxVc2VycyIsImdldFNlYXNvbmFsU3RhbmRpbmdzIiwicmVnaXN0ZXJVc2VyIiwiZ2V0UHJlZGljdGlvblR5cGUiLCJjaGVja1VzZXJBdXRoIiwiY2hlY2tVc2VyUmVnIiwiaW5pdFJlZ2lzdHJhdGlvbiIsImxvYWRQcmVkaWN0aW9uVHlwZSIsInJlbmRlclByZWRpY3Rpb25UYWJsZSIsInJlbmRlclNlYXNvbmFsU3RhbmRpbmdzIiwicmVuZGVyVXNlcnNQbGFjZSIsImluaXRQYWdlIiwiaW5pdCIsImxvYWRUcmFuc2xhdGlvbnMiLCJ0cmFuc2xhdGUiLCJ0cmFuc2xhdGVLZXkiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImxvY2FsZSIsImtleSIsImkxOG5EYXRhIiwiZWxlbXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZWxlbSIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsInJlbW92ZUF0dHJpYnV0ZSIsIm1haW5QYWdlIiwiZmV0Y2giLCJBUEkiLCJFTkRQT0lOVCIsInJlc3BvbnNlIiwianNvbiIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNvbnNvbGUiLCJlcnJvciIsIndpbmRvdyIsInN0b3JlIiwibG9nIiwidXNlcklkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiTnVtYmVyIiwiYyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnX3VzZXJfaWQiLCJjbGVhckludGVydmFsIiwidXNlcnMiLCJzdGFuZGluZ3MiLCJleGlzdGluZ1VzZXIiLCJyZXN1bHRzQmxvY2siLCJiZXRDb25maXJtZWQiLCJjb25maXJtQmxvY2siLCJBcnJheSIsImlzQXJyYXkiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwidXNlcmlkIiwicGFyc2VJbnQiLCJ5b3VyU2Vhc29uUmVzRWwiLCJwbGFjZUVsIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwicG9zaXRpb24iLCJ1c2VySWRFbCIsInBvaW50c1dyYXBwZXIiLCJwb2ludHNWYWx1ZUVsIiwiY29ycmVjdFByZWRpY3Rpb25zIiwidXNlcnNXaXRoUG9pbnRzIiwiZmlsdGVyIiwidG9wVGhyZWUiLCJzbGljZSIsImNvbnRhaW5lckNsYXNzIiwiY29udGFpbmVyIiwicG9pbnRzRWwiLCJwb2ludHNUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInByZWRpY3Rpb25UeXBlIiwiYmV0Q29udGFpbmVyIiwiY3VycmVudFJhY2VOdW1iZXIiLCJwcmVkaWN0aW9uRGF0YSIsInlvdUFyZUluQnRuc0VsIiwiYnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Y2Nlc3MiLCJwcmVkaWN0aW9uQnRuRWwiLCJkaXNhYmxlZCIsInlvdXJTZWFzb25CZXRzRWwiLCJhdXRoQnRuc0VsIiwiYmV0Q29sdW1uc0J0bnNFbCIsImJ1dHRvbiIsInlvdXJCZXRJbmZvRWwiLCJpdGVtIiwidG9DdXJyZW50UmFjZUJ0bnMiLCJ1c2VySWRlbnRpZmllciIsInJhY2VOdW1iZXIiLCJkYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaW5rIiwiZXh0cmFPcHRpb25zIiwiaGVhZGVycyIsIkFjY2VwdCIsImFuaW1hdGlvbkNsYXNzIiwiZGVsYXkiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwidXNlcklkVG9NYXNrIiwidG9TdHJpbmciLCJyYWNlSW5mbyIsIlJBQ0VTIiwiciIsImN1cnJlbnREYXRlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm51bWJlciIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJyYWNlc0J5SWQiLCJzbGlkZXMiLCJzbGlkZU1vdmVMZWZ0Iiwic2xpZGVNb3ZlUmlnaHQiLCJzbGlkZUNvdW50ZXIiLCJiZXRUYWJsZXMiLCJiZXRXcmFwQ29sdW1ucyIsInJlc3VsdHNGaXJzdCIsInJlc3VsdHNTZWNvbmQiLCJyZXN1bHRzVGhpcmQiLCJjdXJyZW50UmFjZSIsInNsaWRlIiwiaSIsImN1cnJlbnRTbGlkZSIsInVwZGF0ZVNsaWRlciIsInRhcmdldEVsZW1lbnQiLCJ0YXJnZXRQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImNvbHVtbiIsInNjcm9sbExlZnQiLCJpbmRleCIsInRhYmxlIiwibW92ZVNsaWRlIiwiZGlyZWN0aW9uIiwiY3VycmVudEJvbGlkIiwibmV4dFNsaWRlIiwibmV4dEJvbGlkIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwic3RhcnRDb3VudGRvd24iLCJlbmRUaW1lIiwiZGF5c0VscyIsImhvdXJzRWxzIiwibWludXRlc0VscyIsInRpbWVySW50ZXJ2YWwiLCJ1cGRhdGVUaW1lciIsIm5vdyIsImdldFRpbWUiLCJ0aW1lTGVmdCIsInVwZGF0ZURpZ2l0cyIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJTdHJpbmciLCJlbGVtZW50cyIsInZhbHVlIiwiZW5kT2ZNb250aCIsInN0YXJ0U21va2UiLCJjYXJTZWxlY3RvciIsInNtb2tlQ2xhc3MiLCJtYXhDb3VudCIsImZhZGVUaW1lIiwicmVtb3ZlRGVsYXkiLCJleHRyYUNsYXNzIiwiYWN0aXZlQ2xhc3MiLCJjYXJzIiwiY2FyIiwiY3JlYXRlU21va2UiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJleHRyYUNsYXNzTmFtZSIsInNtb2tlIiwiY3JlYXRlRWxlbWVudCIsInNldFBvcHVwcyIsInRyaWdnZXJCdXR0b24iLCJwb3B1cENsYXNzIiwicG9wdXBzQ29udGFpbmVyIiwicG9wdXAiLCJvdmVyZmxvdyIsImNsb3NlQnV0dG9uIiwiZSIsImNsb3NlUG9wdXAiLCJiZXRQb3B1cHNCdG5zIiwid3JhcCIsIm5hdkl0ZW1zIiwic2Nyb2xsQ291bnQiLCJmaXJzdENvbHVtbiIsInVwZGF0ZVNjcm9sbFN0YXR1cyIsImlzRmlyc3RWaXNpYmxlIiwiY2xpZW50V2lkdGgiLCJ0b2dnbGUiLCJ1a0xhbmciLCJlbkxhbmciLCJhdXRoQnRuIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJsb2NhdGlvbiIsInJlbG9hZCIsImJ0bkNvbmZpcm0iLCJidG5QYXJ0aWNpcGFudGUiLCJsbmdCdG4iLCJyYWNlckJ0biIsImxhcEJ0biIsInRlYW1CdG4iLCJwcmV2ZW50RGVmYXVsdCIsImoiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsMkRBQUM7RUFBQTtFQUFBLDZQQW1KWUEsZ0JBQWdCLEVBWWhCQyxjQUFjLEVBT2RDLFVBQVUsRUFJVkMsZUFBZSxFQXNCZkMsT0FBTyxFQVdEQyxXQUFXLGdCQUtYQyxvQkFBb0IseUJBS3BCQyxZQUFZLGlCQVVaQyxpQkFBaUIsc0JBd0J2QkMsYUFBYSxFQXlEYkMsWUFBWSxFQVdOQyxnQkFBZ0IscUJBY2hCQyxrQkFBa0IsdUJBVXhCQyxxQkFBcUIsRUFvQnJCQyx1QkFBdUIsRUE2RXZCQyxnQkFBZ0IsRUF5Q1ZDLFFBQVEsYUFt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QUMsUUFBUSxDQUFDO1FBQ25FLENBQUMsQ0FBQztRQUVGekksZ0JBQWdCLENBQUM1RSxPQUFPLENBQUMsVUFBQ3FFLEdBQUcsRUFBRXVFLENBQUMsRUFBSTtVQUNoQ3ZFLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNxSSxDQUFDLEVBQUk7WUFDaENBLENBQUMsQ0FBQ3dCLGNBQWMsRUFBRTtZQUNsQnRPLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRW1PLENBQUMsRUFBSTtjQUMvRG5PLElBQUksQ0FBQ1gsU0FBUyxDQUFDQyxNQUFNLENBQUMsS0FBSyxDQUFDO2NBQzVCLElBQUdxSixDQUFDLEtBQUt3RixDQUFDLEVBQUM7Z0JBQ1BuTyxJQUFJLENBQUNYLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLEtBQUssQ0FBQztjQUM3QjtZQUNKLENBQUMsQ0FBQztVQUNOLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztNQUFBO01BQUE7UUFBQTtJQUFBO0VBQUE7QUFBQSxDQUVMLElBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8xODkwODQ2NVxuICAgIGNvbnN0IEFQSSA9ICdodHRwczovL2Zhdi1wcm9tLmNvbSc7XG4gICAgY29uc3QgRU5EUE9JTlQgPSAnYXBpX2Zvcm11bGExXzI1JztcbiAgICBjb25zdCBSQUNFUyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wMy0xMlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMTZUMDI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wMy0xN1QwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDMtMjNUMDU6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAzLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wMy0yNFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMDZUMDQ6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA0LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNC0wN1QwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMTNUMTQ6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA1LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNC0xNFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDQtMjBUMTY6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA2LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNC0yMVQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMDRUMTk6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA3LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNS0wNVQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMThUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA4LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNS0xOVQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDUtMjVUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiA5LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNS0yNlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMDFUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxMCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDYtMDJUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTE1VDE3OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTEsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA2LTE2VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0yOVQxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDEyLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wNi0zMFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDctMDZUMTM6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxMyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDctMDdUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA3LTI3VDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTQsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA3LTI4VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOC0wM1QxMjozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE1LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOC0wNFQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMDgtMzFUMTI6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxNixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMDktMDFUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTA5LTA3VDEyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMTcsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTA5LTA4VDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOS0yMVQxMDozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDE4LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0wOS0yMlQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMDVUMTE6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAxOSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTAtMDZUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTE5VDE4OjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMjAsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTEwLTIwVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0yNlQxODozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDIxLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMC0yN1QwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTEtMDlUMTU6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAyMixcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoJzIwMjUtMTEtMTBUMDk6MDA6MDAnKSxcbiAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCcyMDI1LTExLTIyVDAyOjMwOjAwJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogMjMsXG4gICAgICAgICAgICBzdGFydERhdGU6IG5ldyBEYXRlKCcyMDI1LTExLTIzVDA5OjAwOjAwJyksXG4gICAgICAgICAgICBlbmREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMS0zMFQxNDozMDowMCcpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6IDI0LFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgnMjAyNS0xMi0wMVQwOTowMDowMCcpLFxuICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoJzIwMjUtMTItMDdUMTE6MzA6MDAnKSxcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCByYWNlc0J5SWQgPSBbXTtcbiAgICBSQUNFUy5mb3JFYWNoKChyKSA9PiAocmFjZXNCeUlkW3IubnVtYmVyXSA9IHIpKTtcbiAgICAvLyBjb25zb2xlLmxvZygnIHJhY2VzQnlJZDonLCByYWNlc0J5SWQpO1xuICAgIGxldCB1c2VySWQ7XG4gICAgbGV0IHVzZXJzID0gW107XG4gICAgLy8gbGV0IGV4aXN0aW5nVXNlciA9IHRydWU7XG4gICAgbGV0IGV4aXN0aW5nVXNlciA9ICAhIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJleGlzdGluZ1VzZXJcIilcbiAgICBjb25zdCBhdXRoQnRuc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKTtcbiAgICBjb25zdCB5b3VBcmVJbkJ0bnNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpO1xuICAgIGNvbnN0IHByZWRpY3Rpb25CdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b29rLXBhcnQnKTtcbiAgICBjb25zdCBiZXRDb2x1bW5zQnRuc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJldF9fY29sdW1uLWJ0bicpO1xuICAgIGNvbnN0IHlvdXJCZXRJbmZvRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmV0X195b3VyLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHlvdXJTZWFzb25SZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX195b3UnKTtcbiAgICBjb25zdCB5b3VyU2Vhc29uQmV0c0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3AuX2JldHMnKTtcbiAgICBjb25zdCB0b0N1cnJlbnRSYWNlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3VycmVudC1yYWNlXCIpO1xuICAgIGNvbnN0IGNvbmZpcm1CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZmlybVwiKTtcbiAgICBjb25zdCByZXN1bHRzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdHNcIik7XG5cbiAgICBsZXQgYmV0Q29uZmlybWVkID0gISFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYmV0Q29uZmlybWVkXCIpXG5cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke2RheX0uJHttb250aH0uJHt5ZWFyfSAvICR7aG91cnN9OiR7bWludXRlc31gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRSYWNlKCkge1xuICAgICAgICBjb25zdCByYWNlSW5mbyA9IFJBQ0VTLmZpbmQoXG4gICAgICAgICAgICAocikgPT4gY3VycmVudERhdGUgPj0gci5zdGFydERhdGUgJiYgY3VycmVudERhdGUgPCByLmVuZERhdGVcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJhY2VJbmZvICYmIHJhY2VJbmZvLm51bWJlcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZFRvTWFzaykge1xuICAgICAgICByZXR1cm4gJyoqJyArIHVzZXJJZFRvTWFzay50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVPblNjcm9sbChlbGVtZW50LCBhbmltYXRpb25DbGFzcywgZGVsYXkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoYW5pbWF0aW9uQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3QobGluaywgZXh0cmFPcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgbGluazonLCBgJHtBUEl9LyR7RU5EUE9JTlR9JHtsaW5rfWApO1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS8ke0VORFBPSU5UfSR7bGlua31gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi5leHRyYU9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QoJy91c2VycycpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNlYXNvbmFsU3RhbmRpbmdzKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QoJy9zZWFzb25hbC1zdGFuZGluZ3MnKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZWdpc3RlclVzZXIoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdCgnL3VzZXInLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQcmVkaWN0aW9uVHlwZSh1c2VySWRlbnRpZmllciwgcmFjZU51bWJlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0KFxuICAgICAgICAgICAgICAgIGAvcHJlZGljdGlvbi10eXBlLyR7dXNlcklkZW50aWZpZXJ9LyR7cmFjZU51bWJlcn1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1ByZWRpY3Rpb24gdHlwZSByZXNwb25zZTonLCBkYXRhKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIHByZWRpY3Rpb24gdHlwZTonLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiB7XG4gICAgICAgIFwicHJlZGljdGlvblR5cGVcIjogXCJmYXN0ZXN0TGFwXCIsXG4gICAgICAgIFwiaXNFeGlzdGluZ1wiOiBmYWxzZVxuICAgIH0gXG4gICAgXG4gICAgY29uc3QgcHJlZGljdGlvblR5cGVzID0gWyd3aW5uZXInLCAnZmFzdGVzdExhcCcsICdiZXN0VGVhbSddO1xuICAgIFxuICAgICovXG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tVc2VyQXV0aCcsIHVzZXJJZCk7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICBwcmVkaWN0aW9uQnRuRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgeW91clNlYXNvblJlc0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgeW91clNlYXNvbkJldHNFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGF1dGhCdG5zRWwuZm9yRWFjaChidG4gPT57XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBiZXRDb2x1bW5zQnRuc0VsLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5b3VyQmV0SW5mb0VsLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRvQ3VycmVudFJhY2VCdG5zLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlc3VsdHNCbG9jay5jbGFzc0xpc3QuYWRkKFwiYXV0aFwiKVxuXG5cbiAgICAgICAgfSBlbHNlIGlmICh1c2VySWQgJiYgIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgeW91clNlYXNvblJlc0VsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgeW91ckJldEluZm9FbC5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBiZXRDb2x1bW5zQnRuc0VsLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdfbG9jaycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB5b3VBcmVJbkJ0bnNFbC5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF1dGhCdG5zRWwuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b0N1cnJlbnRSYWNlQnRucy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXN1bHRzQmxvY2suY2xhc3NMaXN0LmFkZChcImF1dGhcIilcbiAgICAgICAgfSBlbHNlIGlmICh1c2VySWQgJiYgZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICB5b3VBcmVJbkJ0bnNFbC5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHlvdXJCZXRJbmZvRWwuZm9yRWFjaChpdGVtID0+e1xuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYXV0aEJ0bnNFbC5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvQ3VycmVudFJhY2VCdG5zLmZvckVhY2goaXRlbSA9PntcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHByZWRpY3Rpb25CdG5FbC5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycpO1xuICAgICAgICAgICAgcmVzdWx0c0Jsb2NrLmNsYXNzTGlzdC5yZW1vdmUoXCJhdXRoXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJSZWcoKSB7XG4gICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyLnVzZXJpZCA9PT0gdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgLy8gZXhpc3RpbmdVc2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyByZW5kZXJVc2Vycyh1c2Vycyk7XG4gICAgICAgIC8vIHRyYW5zbGF0ZSgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRSZWdpc3RyYXRpb24oKSB7XG4gICAgICAgIHlvdUFyZUluQnRuc0VsLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVnaXN0ZXJVc2VyKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJSZWcoKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbG9hZFByZWRpY3Rpb25UeXBlKCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFByZWRpY3Rpb25UeXBlKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50UmFjZU51bWJlciA9IGdldEN1cnJlbnRSYWNlKCk7XG4gICAgICAgIGNvbnN0IHByZWRpY3Rpb25EYXRhID0gYXdhaXQgZ2V0UHJlZGljdGlvblR5cGUoXG4gICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICBjdXJyZW50UmFjZU51bWJlclxuICAgICAgICApO1xuXG4gICAgICAgIHJlbmRlclByZWRpY3Rpb25UYWJsZShwcmVkaWN0aW9uRGF0YS5wcmVkaWN0aW9uVHlwZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJlZGljdGlvblRhYmxlKHByZWRpY3Rpb25UeXBlKSB7XG4gICAgICAgIC8vZm9yIHRlc3RcbiAgICAgICAgLy8gcHJlZGljdGlvblR5cGUgPSAnYmVzdFRlYW0nO1xuICAgICAgICBjb25zdCBiZXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmV0Ll9jb250YWluZXInKTtcbiAgICAgICAgYmV0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJfcmFjZXJcIiwgXCJfbGFwXCIsIFwiX3RlYW1cIilcbiAgICAgICAgc3dpdGNoIChwcmVkaWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnd2lubmVyJzpcbiAgICAgICAgICAgICAgICBiZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX3JhY2VyJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdmYXN0ZXN0TGFwJzpcbiAgICAgICAgICAgICAgICBiZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX2xhcCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYmVzdFRlYW0nOlxuICAgICAgICAgICAgICAgIGJldENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdfdGVhbScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBiZXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnX3JhY2VyJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTZWFzb25hbFN0YW5kaW5ncyhzdGFuZGluZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YW5kaW5nczonLCBzdGFuZGluZ3MpO1xuXG4gICAgICAgIGlmICghc3RhbmRpbmdzIHx8ICFBcnJheS5pc0FycmF5KHN0YW5kaW5ncykgfHwgc3RhbmRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlcnNXaXRoUG9pbnRzID0gc3RhbmRpbmdzLmZpbHRlcihcbiAgICAgICAgICAgICh1c2VyKSA9PiB1c2VyLmNvcnJlY3RQcmVkaWN0aW9ucyA+IDBcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodXNlcnNXaXRoUG9pbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHVzZXJzIHdpdGggY29ycmVjdCBwcmVkaWN0aW9ucyBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdG9wVGhyZWUgPSB1c2Vyc1dpdGhQb2ludHMuc2xpY2UoMCwgMyk7XG5cbiAgICAgICAgdG9wVGhyZWUuZm9yRWFjaCgodXNlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB1c2VyLnBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lckNsYXNzID0gJyc7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzID0gJy5yZXN1bHRzX19maXJzdCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3MgPSAnLnJlc3VsdHNfX3NlY29uZCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3MgPSAnLnJlc3VsdHNfX3RoaXJkJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lckNsYXNzKTtcbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh1c2VyLmNvcnJlY3RQcmVkaWN0aW9ucyA+IDApIHtcbiAgICAgICAgICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLWRlY29yJyksXG4gICAgICAgICAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190b3Atd3JhcCcpLFxuICAgICAgICAgICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgICAgICAgICA0MDBcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2VFbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLXBsYWNlJyk7XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlRWwpIHBsYWNlRWwudGV4dENvbnRlbnQgPSBwb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJZEVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICcucmVzdWx0c19fdG9wLWluZm8taWQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkRWwpXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZEVsLnRleHRDb250ZW50ID0gYFVTRVIgJHttYXNrVXNlcklkKHVzZXIudXNlcmlkKX1gO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnRzRWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgJy5yZXN1bHRzX190b3AtaW5mby1wb2ludHMnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRzRWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9pbnRzVGV4dCA9IHBvaW50c0VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnW2RhdGEtdHJhbnNsYXRlPVwicG9pbnRzXCJdJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBwb2ludHNFbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50c1RleHQpIHBvaW50c0VsLmFwcGVuZENoaWxkKHBvaW50c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICBwb2ludHNFbC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAgJHt1c2VyLmNvcnJlY3RQcmVkaWN0aW9uc31gKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnNQbGFjZShzdGFuZGluZ3MpIHtcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIXN0YW5kaW5ncyB8fCAhQXJyYXkuaXNBcnJheShzdGFuZGluZ3MpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHN0YW5kaW5ncy5maW5kKFxuICAgICAgICAgICAgKHVzZXIpID0+IHVzZXIudXNlcmlkID09PSBwYXJzZUludCh1c2VySWQpXG4gICAgICAgICk7XG4gICAgICAgIC8vIGlmICghY3VycmVudFVzZXIpIHtcbiAgICAgICAgLy8gICAgIHlvdXJTZWFzb25SZXNFbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAoIXVzZXJJZCAmJiAhZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICB5b3VyU2Vhc29uUmVzRWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB5b3VyU2Vhc29uUmVzRWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGNvbnN0IHBsYWNlRWwgPSB5b3VyU2Vhc29uUmVzRWwucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3lvdS1wbGFjZScpO1xuICAgICAgICBpZiAocGxhY2VFbCkge1xuICAgICAgICAgICAgcGxhY2VFbC50ZXh0Q29udGVudCA9IGN1cnJlbnRVc2VyLnBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlcklkRWwgPSB5b3VyU2Vhc29uUmVzRWwucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3lvdS1pbmZvLWlkJyk7XG4gICAgICAgIGlmICh1c2VySWRFbCkge1xuICAgICAgICAgICAgdXNlcklkRWwudGV4dENvbnRlbnQgPSBtYXNrVXNlcklkKHVzZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb2ludHNXcmFwcGVyID0geW91clNlYXNvblJlc0VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnLnJlc3VsdHNfX3lvdS1pbmZvLXBvaW50cydcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAocG9pbnRzV3JhcHBlcikge1xuICAgICAgICAgICAgY29uc3QgcG9pbnRzVmFsdWVFbCA9XG4gICAgICAgICAgICAgICAgcG9pbnRzV3JhcHBlci5xdWVyeVNlbGVjdG9yKCdzcGFuOmxhc3QtY2hpbGQnKTtcbiAgICAgICAgICAgIGlmIChwb2ludHNWYWx1ZUVsKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzVmFsdWVFbC50ZXh0Q29udGVudCA9IGA6ICR7Y3VycmVudFVzZXIuY29ycmVjdFByZWRpY3Rpb25zfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0UGFnZSgpIHtcbiAgICAgICAgLy8gY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICB1c2VycyA9IGF3YWl0IGdldEFsbFVzZXJzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGwgVVNFUlMnLCB1c2Vycyk7XG4gICAgICAgIGNvbnN0IHN0YW5kaW5ncyA9IGF3YWl0IGdldFNlYXNvbmFsU3RhbmRpbmdzKCk7XG4gICAgICAgIHJlbmRlclNlYXNvbmFsU3RhbmRpbmdzKHN0YW5kaW5ncyk7XG4gICAgICAgIGNoZWNrVXNlclJlZygpO1xuICAgICAgICBjb25zb2xlLmxvZygnZXhpc3RpbmdVc2VyOicsIGV4aXN0aW5nVXNlcik7XG4gICAgICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgICBhd2FpdCBpbml0UmVnaXN0cmF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJVc2Vyc1BsYWNlKHN0YW5kaW5ncyk7XG4gICAgICAgICAgICByZXN1bHRzQmxvY2suY2xhc3NMaXN0LnJlbW92ZShcImF1dGhcIilcbiAgICAgICAgfVxuICAgICAgICBpZihiZXRDb25maXJtZWQpe1xuICAgICAgICAgICAgY29uZmlybUJsb2NrLmNsYXNzTGlzdC5hZGQoXCJfYmV0Q29uZmlybWVkXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dpbmRvdyBzdG9yZScpO1xuICAgICAgICAgICAgLy8gY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIC8vIHVzZXJJZCA9IChzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkKSB8fCAnJztcbiAgICAgICAgICAgIC8vIHVzZXJJZCA9IDE4OTA4NDY1O1xuICAgICAgICAgICAgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSA/IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA6IG51bGxcbiAgICAgICAgICAgIGF3YWl0IGluaXRQYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gd2luZG93IHN0b3JlJyk7XG4gICAgICAgICAgICBhd2FpdCBpbml0UGFnZSgpO1xuICAgICAgICAgICAgbGV0IGMgPSAwO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPCA1MCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW5pdFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgYysrO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrVXNlckF1dGgoKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFjZV9faXRlbScpO1xuICAgICAgICBjb25zdCBzbGlkZU1vdmVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdi1sZWZ0Jyk7XG4gICAgICAgIGNvbnN0IHNsaWRlTW92ZVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdi1yaWdodCcpO1xuICAgICAgICBjb25zdCBzbGlkZUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2LWNvdW50ZXInKTtcbiAgICAgICAgY29uc3QgYmV0VGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJldF9faXRlbScpO1xuICAgICAgICBjb25zdCBiZXRXcmFwQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXRfX3dyYXAnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0c0ZpcnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX2ZpcnN0Jyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHNTZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fc2Vjb25kJyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdHNUaGlyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzX190aGlyZCcpO1xuXG4gICAgICAgIC8vIGxldCBjdXJyZW50UmFjZSA9IGdldEN1cnJlbnRSYWNlKCkgPyBnZXRDdXJyZW50UmFjZSgpIDogMTtcbiAgICAgICAgbGV0IGN1cnJlbnRSYWNlID0gMjtcblxuICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpIDwgY3VycmVudFJhY2UgLSAxKSB7XG4gICAgICAgICAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgnX2RvbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpID4gY3VycmVudFJhY2UgLSAxKSB7XG4gICAgICAgICAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGN1cnJlbnRTbGlkZSA9IGN1cnJlbnRSYWNlIC0gMTtcblxuICAgICAgICB0b0N1cnJlbnRSYWNlQnRucy5mb3JFYWNoKGJ0biA9PntcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgICAgICAgICAgLy8gY3VycmVudFJhY2UgPSBnZXRDdXJyZW50UmFjZSgpID8gZ2V0Q3VycmVudFJhY2UoKSA6IDE7XG4gICAgICAgICAgICAgICAgY3VycmVudFJhY2UgPSAyO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IGN1cnJlbnRSYWNlIC0gMTtcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudFNsaWRlKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlZGljdFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0IDtcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGJldFdyYXBDb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICAgIGNvbHVtbi5zY3JvbGxMZWZ0ID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKGluZGV4KSB7XG4gICAgICAgICAgICBiZXRXcmFwQ29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICAgICAgY29sdW1uLnNjcm9sbExlZnQgPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKSk7XG4gICAgICAgICAgICBzbGlkZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcbiAgICAgICAgICAgIHNsaWRlQ291bnRlci50ZXh0Q29udGVudCA9IGAke2luZGV4ICsgMX0vJHtzbGlkZXMubGVuZ3RofWA7XG4gICAgICAgICAgICBiZXRUYWJsZXMuZm9yRWFjaCgodGFibGUpID0+IHtcbiAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdfbG9jaycsICdfZG9uZScpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xpZGUgPiBjdXJyZW50UmFjZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCgnX2xvY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA8IGN1cnJlbnRSYWNlIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCdfZG9uZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlID09PSBjdXJyZW50UmFjZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuY2xhc3NMaXN0LnJlbW92ZSgnX2xvY2snLCAnX2RvbmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vdmVTbGlkZShkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCb2xpZCA9XG4gICAgICAgICAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0ucXVlcnlTZWxlY3RvcignLnJhY2VfX2JvbGlkJyk7XG4gICAgICAgICAgICBjdXJyZW50Qm9saWQuY2xhc3NMaXN0LmFkZCgnX21vdmUnKTtcbiAgICAgICAgICAgIGxldCBuZXh0U2xpZGUgPVxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ25leHQnID8gY3VycmVudFNsaWRlICsgMSA6IGN1cnJlbnRTbGlkZSAtIDE7XG4gICAgICAgICAgICBpZiAobmV4dFNsaWRlIDwgMCkgbmV4dFNsaWRlID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBpZiAobmV4dFNsaWRlID49IHNsaWRlcy5sZW5ndGgpIG5leHRTbGlkZSA9IDA7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRCb2xpZCA9IHNsaWRlc1tuZXh0U2xpZGVdLnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19ib2xpZCcpO1xuICAgICAgICAgICAgbmV4dEJvbGlkLmNsYXNzTGlzdC5hZGQoJ19hcnJpdmUnKTtcblxuICAgICAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZCgnX29wYWNpdHknKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY3VycmVudEJvbGlkLmNsYXNzTGlzdC5yZW1vdmUoJ19tb3ZlJyk7XG4gICAgICAgICAgICAgICAgbmV4dEJvbGlkLmNsYXNzTGlzdC5yZW1vdmUoJ19hcnJpdmUnKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSBuZXh0U2xpZGU7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXIoY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgICAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnX29wYWNpdHknKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgc2xpZGVNb3ZlTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vdmVTbGlkZSgncHJldicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdicpLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFjZV9fbmF2Jykuc3R5bGUucG9pbnRlckV2ZW50cyA9XG4gICAgICAgICAgICAgICAgICAgICdpbml0aWFsJztcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgc2xpZGVNb3ZlUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb3ZlU2xpZGUoJ25leHQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYWNlX19uYXYnKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhY2VfX25hdicpLnN0eWxlLnBvaW50ZXJFdmVudHMgPVxuICAgICAgICAgICAgICAgICAgICAnaW5pdGlhbCc7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlU2xpZGVyKGN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oZW5kVGltZSkge1xuICAgICAgICAgICAgY29uc3QgZGF5c0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lcl9fZGF5cy1pdGVtJyk7XG4gICAgICAgICAgICBjb25zdCBob3Vyc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lcl9faG91cnMtaXRlbScpO1xuICAgICAgICAgICAgY29uc3QgbWludXRlc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgICAgJy50aW1lcl9fbWludXRlcy1pdGVtJ1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGltZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZUxlZnQgPSBlbmRUaW1lIC0gbm93O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVMZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGRheXNFbHMsICcwMCcpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMoaG91cnNFbHMsICcwMCcpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEaWdpdHMobWludXRlc0VscywgJzAwJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjAgKiA2MCkpICUgMjQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0aW1lTGVmdCAvICgxMDAwICogNjApKSAlIDYwKTtcblxuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhkYXlzRWxzLCBTdHJpbmcoZGF5cykucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGlnaXRzKGhvdXJzRWxzLCBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsICcwJykpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpZ2l0cyhtaW51dGVzRWxzLCBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURpZ2l0cyhlbGVtZW50cywgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1swXS50ZXh0Q29udGVudCA9IHZhbHVlWzBdO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzWzFdLnRleHRDb250ZW50ID0gdmFsdWVbMV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVwZGF0ZVRpbWVyKCk7XG4gICAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlVGltZXIsIDYwMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IGVuZE9mTW9udGggPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgbm93LmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDIzLFxuICAgICAgICAgICAgNTlcbiAgICAgICAgKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgc3RhcnRDb3VudGRvd24oZW5kT2ZNb250aCk7XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnRTbW9rZShcbiAgICAgICAgICAgIGNhclNlbGVjdG9yLFxuICAgICAgICAgICAgc21va2VDbGFzcyxcbiAgICAgICAgICAgIG1heENvdW50LFxuICAgICAgICAgICAgaW50ZXJ2YWwsXG4gICAgICAgICAgICBkZWxheSxcbiAgICAgICAgICAgIGZhZGVUaW1lLFxuICAgICAgICAgICAgcmVtb3ZlRGVsYXksXG4gICAgICAgICAgICBleHRyYUNsYXNzID0gJycsXG4gICAgICAgICAgICBhY3RpdmVDbGFzcyA9IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgY2FycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2FyU2VsZWN0b3IpO1xuXG4gICAgICAgICAgICBjYXJzLmZvckVhY2goKGNhcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY2FyKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTbW9rZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBjYXIucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0cmFDbGFzc05hbWUgPSBleHRyYUNsYXNzID8gYC4ke2V4dHJhQ2xhc3N9YCA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXIucXVlcnlTZWxlY3RvckFsbChgLiR7c21va2VDbGFzc30ke2V4dHJhQ2xhc3NOYW1lfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxlbmd0aCA8IG1heENvdW50XG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc21va2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtb2tlLmNsYXNzTGlzdC5hZGQoc21va2VDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0cmFDbGFzcykgc21va2UuY2xhc3NMaXN0LmFkZChleHRyYUNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhci5hcHBlbmRDaGlsZChzbW9rZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHNtb2tlLnJlbW92ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhZGVUaW1lICsgcmVtb3ZlRGVsYXlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU21va2UoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoY3JlYXRlU21va2UsIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0U21va2UoXG4gICAgICAgICAgICAnLnJhY2VfX2JvbGlkLWNhcicsXG4gICAgICAgICAgICAncmFjZV9fYm9saWQtc21va2UtZnJvbnQnLFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIDkwMCxcbiAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDE2MDAsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgc3RhcnRTbW9rZShcbiAgICAgICAgICAgICcucmFjZV9fYm9saWQtY2FyJyxcbiAgICAgICAgICAgICdyYWNlX19ib2xpZC1zbW9rZS1iYWNrJyxcbiAgICAgICAgICAgIDgsXG4gICAgICAgICAgICA5MDAsXG4gICAgICAgICAgICA1MDAsXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxNjAwLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHN0YXJ0U21va2UoXG4gICAgICAgICAgICAnLnJhY2VfX2JvbGlkLWNhcicsXG4gICAgICAgICAgICAncmFjZV9fYm9saWQtc21va2UtYmFjaycsXG4gICAgICAgICAgICA0LFxuICAgICAgICAgICAgOTAwLFxuICAgICAgICAgICAgNTAwLFxuICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgMTYwMCxcbiAgICAgICAgICAgICdfbGFyZ2UnLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICBzdGFydFNtb2tlKFxuICAgICAgICAgICAgJy53ZWxjb21lX19wZXJzLXNtb2tlLWZyb250JyxcbiAgICAgICAgICAgICdmcm9udC1iZWZvcmUnLFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIDkwMCxcbiAgICAgICAgICAgIDUwMCxcbiAgICAgICAgICAgIDIwMCxcbiAgICAgICAgICAgIDE2MDAsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIHN0YXJ0U21va2UoXG4gICAgICAgICAgICAnLndlbGNvbWVfX3BlcnMtc21va2UtYmFjaycsXG4gICAgICAgICAgICAnZnJvbnQtYmVmb3JlJyxcbiAgICAgICAgICAgIDQsXG4gICAgICAgICAgICA5MDAsXG4gICAgICAgICAgICA1MDAsXG4gICAgICAgICAgICAyMDAsXG4gICAgICAgICAgICAxNjAwLFxuICAgICAgICAgICAgJycsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNldFBvcHVwcyh0cmlnZ2VyQnV0dG9uLCBwb3B1cENsYXNzKSB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBzJyk7XG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cHNfX2l0ZW0uJHtwb3B1cENsYXNzfWApO1xuXG4gICAgICAgICAgICBpZiAoIXRyaWdnZXJCdXR0b24gfHwgIXBvcHVwIHx8ICFwb3B1cHNDb250YWluZXIpIHJldHVybjtcblxuICAgICAgICAgICAgdHJpZ2dlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnX29wYWNpdHknKTtcbiAgICAgICAgICAgICAgICBwb3B1cHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChwb3B1cENsYXNzKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwc19faXRlbS1jbG9zZScpO1xuXG4gICAgICAgICAgICBwb3B1cHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXBzQ29udGFpbmVyIHx8IGUudGFyZ2V0ID09PSBjbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKSB7XG4gICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ19vcGFjaXR5Jyk7XG4gICAgICAgICAgICAgICAgcG9wdXBzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUocG9wdXBDbGFzcyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0UG9wdXBzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZXRfX2J0bi1pdGVtJyksICdfYmV0UG9wdXAnKTtcbiAgICAgICAgY29uc3QgYmV0UG9wdXBzQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmV0X19idG5cIilcblxuICAgICAgICBiZXRQb3B1cHNCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBidG4ucGFyZW50RWxlbWVudDtcblxuICAgICAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiX3JhY2VyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvcHVwcyhidG4sIFwiX2JldFBvcHVwUmFjZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcIl9sYXBcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UG9wdXBzKGJ0biwgXCJfYmV0UG9wdXBMYXBcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcIl90ZWFtXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBvcHVwcyhidG4sIFwiX2JldFBvcHVwVGVhbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1fX3VwZC1idG4uX2JldENvbmZpcm1lZCcpLCAnX2NvbmZpcm1Qb3B1cCcpO1xuICAgICAgICBzZXRQb3B1cHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmZpcm1fX3VwZC1idG4uX2JldE5vdENvbmZpcm1lZCcpLCAnX25vdENvbmZpcm1Qb3B1cCcpO1xuICAgICAgICBzZXRQb3B1cHMoXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fcG9wdXAnKSxcbiAgICAgICAgICAgICdfcmVzdWx0c1BvcHVwJ1xuICAgICAgICApO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVPblNjcm9sbChlbGVtZW50LCBhbmltYXRpb25DbGFzcywgZGVsYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgICAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMixcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGFuaW1hdGlvbkNsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlT25TY3JvbGwoXG4gICAgICAgICAgICByZXN1bHRzRmlyc3QucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC1kZWNvcicpLFxuICAgICAgICAgICAgJ19zaG93JyxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICAgICAgYW5pbWF0ZU9uU2Nyb2xsKFxuICAgICAgICAgICAgcmVzdWx0c1NlY29uZC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLWRlY29yJyksXG4gICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgNDAwXG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNUaGlyZC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLWRlY29yJyksXG4gICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgODAwXG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNGaXJzdC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLXdyYXAnKSxcbiAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNTZWNvbmQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNfX3RvcC13cmFwJyksXG4gICAgICAgICAgICAnX3Nob3cnLFxuICAgICAgICAgICAgNDAwXG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGVPblNjcm9sbChcbiAgICAgICAgICAgIHJlc3VsdHNUaGlyZC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0c19fdG9wLXdyYXAnKSxcbiAgICAgICAgICAgICdfc2hvdycsXG4gICAgICAgICAgICA4MDBcbiAgICAgICAgKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmV0X19pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd3JhcCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmJldF9fd3JhcCcpO1xuICAgICAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iZXRfX3Njcm9sbC1uYXYtaXRlbScpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQ291bnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5iZXRfX3Njcm9sbC1jb3VudCcpO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RDb2x1bW4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5iZXRfX2NvbHVtbicpO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVTY3JvbGxTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdyYXAuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBjb25zdCBpc0ZpcnN0VmlzaWJsZSA9IHNjcm9sbExlZnQgPCBmaXJzdENvbHVtbi5jbGllbnRXaWR0aCAvIDI7XG5cbiAgICAgICAgICAgICAgICBuYXZJdGVtc1swXS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJywgaXNGaXJzdFZpc2libGUpO1xuICAgICAgICAgICAgICAgIG5hdkl0ZW1zWzFdLmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnLCAhaXNGaXJzdFZpc2libGUpO1xuXG4gICAgICAgICAgICAgICAgc2Nyb2xsQ291bnQudGV4dENvbnRlbnQgPSBpc0ZpcnN0VmlzaWJsZSA/ICcxLzInIDogJzIvMic7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZVNjcm9sbFN0YXR1cyk7XG4gICAgICAgICAgICB1cGRhdGVTY3JvbGxTdGF0dXMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG5cbiAgICAvLyAjcmVnaW9uIFRyYW5zbGF0aW9uXG4gICAgY29uc3QgdWtMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VrTGFuZycpO1xuICAgIGNvbnN0IGVuTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxhbmcnKTtcbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpO1xuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIC8vIGxldCBsb2NhbGUgPSAndWsnO1xuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwidWtcIlxuICAgIGlmICh1a0xhbmcpIGxvY2FsZSA9ICd1ayc7XG4gICAgaWYgKGVuTGFuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgIGAke0FQSX0vJHtFTkRQT0lOVH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm11bGExXzI1JyksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0cmFuc2xhdGlvbnM6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKTtcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgZWxlbXMuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gdHJhbnNsYXRlS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgbG9hZFRyYW5zbGF0aW9ucygpO1xuICAgICAgICBhd2FpdCBpbml0KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGluaXRpYWxpemF0aW9uOicsIGVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBmb3IgdGVzdFxuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcblxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgJzE4OTA4NDY1JylcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KVxuXG4gICAgY29uc3QgYnRuQ29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY29uZmlybScpO1xuXG4gICAgYnRuQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJiZXRDb25maXJtZWRcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJiZXRDb25maXJtZWRcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiYmV0Q29uZmlybWVkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuICAgIGNvbnN0IGJ0blBhcnRpY2lwYW50ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGFydGljaXBhbnRlJyk7XG5cbiAgICBidG5QYXJ0aWNpcGFudGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiZXhpc3RpbmdVc2VyXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiZXhpc3RpbmdVc2VyXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImV4aXN0aW5nVXNlclwiLCBcInRydWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByYWNlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFjZXItYnRuXCIpXG4gICAgY29uc3QgbGFwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXAtYnRuXCIpXG4gICAgY29uc3QgdGVhbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVhbS1idG5cIilcblxuICAgIHJhY2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aW5lclwiKVxuICAgICAgICByZW5kZXJQcmVkaWN0aW9uVGFibGUoXCJ3aW5uZXJcIilcbiAgICB9KVxuXG4gICAgbGFwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJsYXBcIilcbiAgICAgICAgcmVuZGVyUHJlZGljdGlvblRhYmxlKFwiZmFzdGVzdExhcFwiKVxuICAgIH0pXG5cbiAgICB0ZWFtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZWFtXCIpXG4gICAgICAgIHJlbmRlclByZWRpY3Rpb25UYWJsZShcImJlc3RUZWFtXCIpXG4gICAgfSlcblxuICAgIHJlbmRlclByZWRpY3Rpb25UYWJsZSgpXG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXG4gICAgfSlcblxuICAgIGJldENvbHVtbnNCdG5zRWwuZm9yRWFjaCgoYnRuLCBpKSA9PntcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT57XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmV0X19jb2x1bW4taXRlbVwiKS5mb3JFYWNoKChlbGVtLCBqKSA9PntcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJ5b3VcIilcbiAgICAgICAgICAgICAgICBpZihpID09PSBqKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwieW91XCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxuXG59KSgpO1xuIl19
