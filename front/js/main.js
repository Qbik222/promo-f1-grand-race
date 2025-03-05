(async function () {
    //18908465
    const API = 'https://fav-prom.com';
    const ENDPOINT = 'api_formula1_25';
    const RACES = [
        {
            number: 1,
            startDate: new Date('2025-03-12T09:00:00'),
            endDate: new Date('2025-03-16T02:30:00'),
        },
        {
            number: 2,
            startDate: new Date('2025-03-17T09:00:00'),
            endDate: new Date('2025-03-23T05:30:00'),
        },
        {
            number: 3,
            startDate: new Date('2025-03-24T09:00:00'),
            endDate: new Date('2025-04-06T04:30:00'),
        },
        {
            number: 4,
            startDate: new Date('2025-04-07T09:00:00'),
            endDate: new Date('2025-04-13T14:30:00'),
        },
        {
            number: 5,
            startDate: new Date('2025-04-14T09:00:00'),
            endDate: new Date('2025-04-20T16:30:00'),
        },
        {
            number: 6,
            startDate: new Date('2025-04-21T09:00:00'),
            endDate: new Date('2025-05-04T19:30:00'),
        },
        {
            number: 7,
            startDate: new Date('2025-05-05T09:00:00'),
            endDate: new Date('2025-05-18T12:30:00'),
        },
        {
            number: 8,
            startDate: new Date('2025-05-19T09:00:00'),
            endDate: new Date('2025-05-25T12:30:00'),
        },
        {
            number: 9,
            startDate: new Date('2025-05-26T09:00:00'),
            endDate: new Date('2025-06-01T12:30:00'),
        },
        {
            number: 10,
            startDate: new Date('2025-06-02T09:00:00'),
            endDate: new Date('2025-06-15T17:30:00'),
        },
        {
            number: 11,
            startDate: new Date('2025-06-16T09:00:00'),
            endDate: new Date('2025-06-29T12:30:00'),
        },
        {
            number: 12,
            startDate: new Date('2025-06-30T09:00:00'),
            endDate: new Date('2025-07-06T13:30:00'),
        },
        {
            number: 13,
            startDate: new Date('2025-07-07T09:00:00'),
            endDate: new Date('2025-07-27T12:30:00'),
        },
        {
            number: 14,
            startDate: new Date('2025-07-28T09:00:00'),
            endDate: new Date('2025-08-03T12:30:00'),
        },
        {
            number: 15,
            startDate: new Date('2025-08-04T09:00:00'),
            endDate: new Date('2025-08-31T12:30:00'),
        },
        {
            number: 16,
            startDate: new Date('2025-09-01T09:00:00'),
            endDate: new Date('2025-09-07T12:30:00'),
        },
        {
            number: 17,
            startDate: new Date('2025-09-08T09:00:00'),
            endDate: new Date('2025-09-21T10:30:00'),
        },
        {
            number: 18,
            startDate: new Date('2025-09-22T09:00:00'),
            endDate: new Date('2025-10-05T11:30:00'),
        },
        {
            number: 19,
            startDate: new Date('2025-10-06T09:00:00'),
            endDate: new Date('2025-10-19T18:30:00'),
        },
        {
            number: 20,
            startDate: new Date('2025-10-20T09:00:00'),
            endDate: new Date('2025-10-26T18:30:00'),
        },
        {
            number: 21,
            startDate: new Date('2025-10-27T09:00:00'),
            endDate: new Date('2025-11-09T15:30:00'),
        },
        {
            number: 22,
            startDate: new Date('2025-11-10T09:00:00'),
            endDate: new Date('2025-11-22T02:30:00'),
        },
        {
            number: 23,
            startDate: new Date('2025-11-23T09:00:00'),
            endDate: new Date('2025-11-30T14:30:00'),
        },
        {
            number: 24,
            startDate: new Date('2025-12-01T09:00:00'),
            endDate: new Date('2025-12-07T11:30:00'),
        },
    ];
    const currentDate = new Date();
    const racesById = [];
    RACES.forEach((r) => (racesById[r.number] = r));
    // console.log(' racesById:', racesById);
    let userId = null;
    let users = [];
    let existingUser = false;
    const authBtnsEl = document.querySelectorAll('.unauth-msg');
    const youAreInBtnsEl = document.querySelectorAll('.btn-join');
    const predictionBtnEl = document.querySelector('.took-part');
    const betColumnsBtnsEl = document.querySelectorAll('.bet__column-btn');
    const yourBetInfoEl = document.querySelector('.bet__your');
    const yourSeasonResEl = document.querySelector('.results__you');
    const yourSeasonBetsEl = document.querySelector('.drop._bets');

    function formatDateString(dateString) {
        const date = new Date(dateString);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}.${month}.${year} / ${hours}:${minutes}`;
    }

    function getCurrentRace() {
        const raceInfo = RACES.find(
            (r) => currentDate >= r.startDate && currentDate < r.endDate
        );
        return raceInfo && raceInfo.number;
    }

    function maskUserId(userIdToMask) {
        return '**' + userIdToMask.toString().slice(2);
    }

    function animateOnScroll(element, animationClass, delay) {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add(animationClass);
                    }, delay);
                } else {
                    entry.target.classList.remove(animationClass);
                }
            });
        }, options);

        observer.observe(element);
    }

    function request(link, extraOptions = {}) {
        console.log('request link:', `${API}/${ENDPOINT}${link}`);
        return fetch(`${API}/${ENDPOINT}${link}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            ...extraOptions,
        });
    }

    async function getAllUsers() {
        const response = await request('/users');
        return response.json();
    }

    async function getSeasonalStandings() {
        const response = await request('/seasonal-standings');
        return response.json();
    }

    async function registerUser() {
        const response = await request('/user', {
            method: 'POST',
            body: JSON.stringify({
                userid: userId,
            }),
        });
        return response.json();
    }

    async function getPredictionType(userIdentifier, raceNumber) {
        try {
            const response = await request(
                `/prediction-type/${userIdentifier}/${raceNumber}`
            );

            const data = await response.json();
            console.log('Prediction type response:', data);

            return data;
        } catch (error) {
            console.error('Error getting prediction type:', error);
            return null;
        }
    }
    /* {
        "predictionType": "fastestLap",
        "isExisting": false
    } 
    
    const predictionTypes = ['winner', 'fastestLap', 'bestTeam'];
    
    */

    function checkUserAuth() {
        console.log('checkUserAuth', userId);
        if (!userId) {
            predictionBtnEl.disabled = true;
            yourSeasonResEl.classList.add('hidden');
            yourSeasonBetsEl.classList.add('hidden');
            betColumnsBtnsEl.forEach((button) => {
                button.classList.add('_lock');
            });
            yourBetInfoEl.classList.add('hidden');
        } else if (userId && !existingUser) {
            yourSeasonResEl.classList.add('hidden');
            yourBetInfoEl.classList.add('hidden');
            betColumnsBtnsEl.forEach((button) => {
                button.classList.add('_lock');
            });
            youAreInBtnsEl.forEach((btn) => {
                btn.classList.remove('hidden');
            });
            authBtnsEl.forEach((btn) => {
                btn.classList.add('hidden');
            });
        } else if (userId && existingUser) {
            youAreInBtnsEl.forEach((btn) => {
                btn.classList.remove('hidden');
            });
            yourBetInfoEl.classList.add('hidden');
            authBtnsEl.forEach((btn) => {
                btn.classList.add('hidden');
            });
            predictionBtnEl.classList.remove('_lock');
        }
    }

    function checkUserReg() {
        users.forEach((user) => {
            if (user.userid === userId) {
                existingUser = true;
                checkUserAuth();
            }
        });
        // renderUsers(users);
        // translate();
    }

    async function initRegistration() {
        youAreInBtnsEl.forEach((btn) => {
            btn.addEventListener('click', async function () {
                const response = await registerUser();

                if (response.success) {
                    checkUserReg();
                    await loadPredictionType();

                }
            });
        });
    }

    async function loadPredictionType() {
        const currentRaceNumber = getCurrentRace();
        const predictionData = await getPredictionType(
            userId,
            currentRaceNumber
        );

        renderPredictionTable(predictionData.predictionType);
    }

    function renderPredictionTable(predictionType) {
        //for test
        predictionType = 'fastestLap';
        const betContainer = document.querySelector('.bet._container');

        switch (predictionType) {
            case 'winner':
                betContainer.classList.add('_winner');
                break;
            case 'fastestLap':
                betContainer.classList.add('_fastestLap');
                break;
            case 'bestTeam':
                betContainer.classList.add('_bestTeam');
                break;
            default:
                betContainer.classList.add('_winner');
        }
    }

    function renderSeasonalStandings(standings) {
        console.log('standings:', standings);

        if (!standings || !Array.isArray(standings) || standings.length === 0) {
            return;
        }

        const usersWithPoints = standings.filter(
            (user) => user.correctPredictions > 0
        );

        if (usersWithPoints.length === 0) {
            console.log('No users with correct predictions found');
            return;
        }

        const topThree = usersWithPoints.slice(0, 3);

        topThree.forEach((user) => {
            const position = user.position;
            let containerClass = '';

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

            const container = document.querySelector(containerClass);
            if (!container) return;

            if (user.correctPredictions > 0) {
                animateOnScroll(
                    container.querySelector('.results__top-decor'),
                    '_show',
                    0
                );
                animateOnScroll(
                    container.querySelector('.results__top-wrap'),
                    '_show',
                    400
                );

                const placeEl = container.querySelector('.results__top-place');
                if (placeEl) placeEl.textContent = position;

                const userIdEl = container.querySelector(
                    '.results__top-info-id'
                );
                if (userIdEl)
                    userIdEl.textContent = `USER ${maskUserId(user.userid)}`;

                const pointsEl = container.querySelector(
                    '.results__top-info-points'
                );
                if (pointsEl) {
                    const pointsText = pointsEl.querySelector(
                        '[data-translate="points"]'
                    );
                    pointsEl.innerHTML = '';
                    if (pointsText) pointsEl.appendChild(pointsText);
                    pointsEl.appendChild(
                        document.createTextNode(` ${user.correctPredictions}`)
                    );
                }
            }
        });
    }

    function renderUsersPlace(standings) {
        if (!userId || !standings || !Array.isArray(standings)) {
            return;
        }

        const currentUser = standings.find(
            (user) => user.userid === parseInt(userId)
        );
        if (!currentUser) {
            yourSeasonResEl.classList.add('hidden');
            return;
        }

        yourSeasonResEl.classList.remove('hidden');
        const placeEl = yourSeasonResEl.querySelector('.results__you-place');
        if (placeEl) {
            placeEl.textContent = currentUser.position;
        }

        const userIdEl = yourSeasonResEl.querySelector('.results__you-info-id');
        if (userIdEl) {
            userIdEl.textContent = maskUserId(userId);
        }

        const pointsWrapper = yourSeasonResEl.querySelector(
            '.results__you-info-points'
        );

        if (pointsWrapper) {
            const pointsValueEl =
                pointsWrapper.querySelector('span:last-child');
            if (pointsValueEl) {
                pointsValueEl.textContent = `: ${currentUser.correctPredictions}`;
            }
        }
    }

    async function initPage() {
        // checkUserAuth();
        users = await getAllUsers();
        console.log('all USERS', users);
        const standings = await getSeasonalStandings();
        renderSeasonalStandings(standings);
        checkUserReg();
        console.log('existingUser:', existingUser);
        if (!existingUser) {
            await initRegistration();
        } else {
            renderUsersPlace(standings);
        }
    }

    async function init() {
        if (!window.store) {
            console.log('window store');
            // const state = window.store.getState();
            // userId = (state.auth.isAuthorized && state.auth.id) || '';
            userId = 18908465;
            await initPage();
        } else {
            console.log('no window store');
            await initPage();
            let c = 0;
            const interval = setInterval(function () {
                if (c < 50) {
                    if (window.g_user_id) {
                        userId = window.g_user_id;
                        (async () => {
                            await initPage();
                            checkUserAuth();
                        })();
                        clearInterval(interval);
                    }
                } else {
                    clearInterval(interval);
                    c++;
                    console.log(c);
                }
            }, 200);
        }
        checkUserAuth();
    }

    document.addEventListener('DOMContentLoaded', () => {
        const slides = document.querySelectorAll('.race__item');
        const slideMoveLeft = document.querySelector('.race__nav-left');
        const slideMoveRight = document.querySelector('.race__nav-right');
        const slideCounter = document.querySelector('.race__nav-counter');
        const betTables = document.querySelectorAll('.bet__item');
        const resultsFirst = document.querySelector('.results__first');
        const resultsSecond = document.querySelector('.results__second');
        const resultsThird = document.querySelector('.results__third');

        const currentRace = 3;

        slides.forEach((slide, i) => {
            if (i < currentRace) {
                slide.classList.add('_done');
            }
            if (i > currentRace) {
                slide.classList.add('_lock');
            }
        });

        let currentSlide = currentRace;

        function updateSlider(index) {
            slides.forEach((slide) => slide.classList.remove('_active'));
            slides[index].classList.add('_active');
            slideCounter.textContent = `${index + 1}/${slides.length}`;
            betTables.forEach((table) => {
                if (currentSlide > currentRace) {
                    table.classList.add('_lock');
                }
                if (currentSlide < currentRace) {
                    table.classList.add('_done');
                }
                if (currentSlide === currentRace) {
                    table.classList.remove('_lock', '_done');
                }
            });
        }

        function moveSlide(direction) {
            const currentBolid =
                slides[currentSlide].querySelector('.race__bolid');
            currentBolid.classList.add('_move');
            let nextSlide =
                direction === 'next' ? currentSlide + 1 : currentSlide - 1;
            if (nextSlide < 0) nextSlide = slides.length - 1;
            if (nextSlide >= slides.length) nextSlide = 0;

            const nextBolid = slides[nextSlide].querySelector('.race__bolid');
            nextBolid.classList.add('_arrive');

            slides[currentSlide].classList.add('_opacity');

            setTimeout(() => {
                currentBolid.classList.remove('_move');
                nextBolid.classList.remove('_arrive');
                currentSlide = nextSlide;

                updateSlider(currentSlide);
                slides.forEach((slide) => {
                    slide.classList.remove('_opacity');
                });
            }, 1500);
        }

        slideMoveLeft.addEventListener('click', () => {
            moveSlide('prev');
            document.querySelector('.race__nav').style.pointerEvents = 'none';
            setTimeout(() => {
                document.querySelector('.race__nav').style.pointerEvents =
                    'initial';
            }, 2000);
        });
        slideMoveRight.addEventListener('click', () => {
            moveSlide('next');
            document.querySelector('.race__nav').style.pointerEvents = 'none';
            setTimeout(() => {
                document.querySelector('.race__nav').style.pointerEvents =
                    'initial';
            }, 2000);
        });

        updateSlider(currentSlide);

        function startCountdown(endTime) {
            const daysEls = document.querySelectorAll('.timer__days-item');
            const hoursEls = document.querySelectorAll('.timer__hours-item');
            const minutesEls = document.querySelectorAll(
                '.timer__minutes-item'
            );

            let timerInterval = null;
            function updateTimer() {
                const now = new Date().getTime();
                const timeLeft = endTime - now;

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    updateDigits(daysEls, '00');
                    updateDigits(hoursEls, '00');
                    updateDigits(minutesEls, '00');
                    return;
                }

                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);

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

        const now = new Date();
        const endOfMonth = new Date(
            now.getFullYear(),
            now.getMonth() + 1,
            0,
            23,
            59
        ).getTime();

        startCountdown(endOfMonth);

        function startSmoke(
            carSelector,
            smokeClass,
            maxCount,
            interval,
            delay,
            fadeTime,
            removeDelay,
            extraClass = '',
            activeClass = false
        ) {
            const cars = document.querySelectorAll(carSelector);

            cars.forEach((car) => {
                if (!car) return;

                function createSmoke() {
                    if (activeClass) {
                        const parent = car.parentElement?.parentElement;
                        if (!parent || !parent.classList.contains('_active'))
                            return;
                    }

                    const extraClassName = extraClass ? `.${extraClass}` : '';
                    if (
                        car.querySelectorAll(`.${smokeClass}${extraClassName}`)
                            .length < maxCount
                    ) {
                        const smoke = document.createElement('div');
                        smoke.classList.add(smokeClass);
                        if (extraClass) smoke.classList.add(extraClass);
                        car.appendChild(smoke);
                        setTimeout(
                            () => smoke.remove(),
                            fadeTime + removeDelay
                        );
                    }
                }

                setTimeout(() => {
                    createSmoke();
                    setInterval(createSmoke, interval);
                }, delay);
            });
        }

        startSmoke(
            '.race__bolid-car',
            'race__bolid-smoke-front',
            4,
            900,
            500,
            200,
            1600,
            '',
            true
        );
        startSmoke(
            '.race__bolid-car',
            'race__bolid-smoke-back',
            8,
            900,
            500,
            200,
            1600,
            '',
            true
        );
        startSmoke(
            '.race__bolid-car',
            'race__bolid-smoke-back',
            4,
            900,
            500,
            200,
            1600,
            '_large',
            true
        );
        startSmoke(
            '.welcome__pers-smoke-front',
            'front-before',
            4,
            900,
            500,
            200,
            1600,
            '',
            false
        );
        startSmoke(
            '.welcome__pers-smoke-back',
            'front-before',
            4,
            900,
            500,
            200,
            1600,
            '',
            false
        );

        function setPopups(triggerButton, popupClass) {
            const popupsContainer = document.querySelector('.popups');
            const popup = document.querySelector(`.popups__item.${popupClass}`);

            if (!triggerButton || !popup || !popupsContainer) return;

            triggerButton.addEventListener('click', () => {
                popupsContainer.classList.remove('_opacity');
                popupsContainer.classList.add(popupClass);
                document.body.style.overflow = 'hidden';
            });
            const closeButton = popup.querySelector('.popups__item-close');

            popupsContainer.addEventListener('click', (e) => {
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

        setPopups(document.querySelector('.bet__btn-item'), '_betPopup');
        setPopups(document.querySelector('.confirm__upd-btn'), '_confirmPopup');
        setPopups(
            document.querySelector('.results__popup-btn'),
            '_resultsPopup'
        );

        // function animateOnScroll(element, animationClass, delay) {
        //     const options = {
        //         root: null,
        //         rootMargin: '0px',
        //         threshold: 0.2,
        //     };

        //     const observer = new IntersectionObserver((entries) => {
        //         entries.forEach((entry) => {
        //             if (entry.isIntersecting) {
        //                 setTimeout(() => {
        //                     entry.target.classList.add(animationClass);
        //                 }, delay);
        //             } else {
        //                 entry.target.classList.remove(animationClass);
        //             }
        //         });
        //     }, options);

        //     observer.observe(element);
        // }

        // animateOnScroll(
        //     resultsFirst.querySelector('.results__top-decor'),
        //     '_show',
        //     0
        // );
        // animateOnScroll(
        //     resultsSecond.querySelector('.results__top-decor'),
        //     '_show',
        //     400
        // );
        // animateOnScroll(
        //     resultsThird.querySelector('.results__top-decor'),
        //     '_show',
        //     800
        // );
        // animateOnScroll(
        //     resultsFirst.querySelector('.results__top-wrap'),
        //     '_show',
        //     0
        // );
        // animateOnScroll(
        //     resultsSecond.querySelector('.results__top-wrap'),
        //     '_show',
        //     400
        // );
        // animateOnScroll(
        //     resultsThird.querySelector('.results__top-wrap'),
        //     '_show',
        //     800
        // );

        document.querySelectorAll('.bet__item').forEach((item) => {
            const wrap = item.querySelector('.bet__wrap');
            const navItems = item.querySelectorAll('.bet__scroll-nav-item');
            const scrollCount = item.querySelector('.bet__scroll-count');
            const firstColumn = item.querySelector('.bet__column');

            const updateScrollStatus = () => {
                const scrollLeft = wrap.scrollLeft;
                const isFirstVisible = scrollLeft < firstColumn.clientWidth / 2;

                navItems[0].classList.toggle('_active', isFirstVisible);
                navItems[1].classList.toggle('_active', !isFirstVisible);

                scrollCount.textContent = isFirstVisible ? '1/2' : '2/2';
            };

            wrap.addEventListener('scroll', updateScrollStatus);
            updateScrollStatus();
        });
    });

    document.querySelector('.dark-btn').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    // #region Translation
    const ukLang = document.querySelector('#ukLang');
    const enLang = document.querySelector('#enLang');
    const mainPage = document.querySelector('.fav__page');
    let i18nData = {};
    let locale = 'uk';
    if (ukLang) locale = 'uk';
    if (enLang) locale = 'en';

    async function loadTranslations() {
        try {
            const response = await fetch(
                `${API}/${ENDPOINT}/translates/${locale}`
            );
            const json = await response.json();
            i18nData = json;
            translate();

            const mutationObserver = new MutationObserver(function (mutations) {
                translate();
            });
            mutationObserver.observe(document.getElementById('formula1_25'), {
                childList: true,
                subtree: true,
            });
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]');
        if (elems && elems.length) {
            elems.forEach((elem) => {
                const key = elem.getAttribute('data-translate');
                elem.innerHTML = translateKey(key);
                elem.removeAttribute('data-translate');
            });
        }

        if (locale === 'en') {
            mainPage.classList.add('en');
        }

        refreshLocalizedClass();
    }

    function translateKey(key) {
        if (!key) {
            return;
        }
        return (
            i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key
        );
    }

    function refreshLocalizedClass(element, baseCssClass) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }

    // #endregion

    try {
        await loadTranslations();
        await init();
    } catch (error) {
        console.error('Error during initialization:', error);
    }
})();
