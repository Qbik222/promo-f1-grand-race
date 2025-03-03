(function (){
    document.addEventListener("DOMContentLoaded", () =>{
        const slides = document.querySelectorAll(".race__item")
        const slideMoveLeft = document.querySelector(".race__nav-left")
        const slideMoveRight = document.querySelector(".race__nav-right")
        const slideCounter = document.querySelector(".race__nav-counter")
        const betTables = document.querySelectorAll(".bet__item")
        const resultsFirst = document.querySelector(".results__first")
        const resultsSecond = document.querySelector(".results__second")
        const resultsThird = document.querySelector(".results__third")

        let currentRace = 3;

        slides.forEach((slide, i) =>{
            if(i < currentRace){
                slide.classList.add("_done")
            }
            if(i > currentRace){
                slide.classList.add("_lock")
            }
        })


        let currentSlide = currentRace



        function updateSlider(index) {
            slides.forEach(slide => slide.classList.remove("_active"));
            slides[index].classList.add("_active");
            slideCounter.textContent = `${index + 1}/${slides.length}`;
            betTables.forEach(table =>{
                if(currentSlide > currentRace){
                    table.classList.add("_lock")
                }
                if(currentSlide < currentRace){
                    table.classList.add("_done")
                }
                if(currentSlide === currentRace){
                    table.classList.remove("_lock", "_done")
                }
            })
        }

        function moveSlide(direction) {
            const currentBolid = slides[currentSlide].querySelector(".race__bolid");
            currentBolid.classList.add("_move");
            let nextSlide = direction === "next" ? currentSlide + 1 : currentSlide - 1;
            if (nextSlide < 0) nextSlide = slides.length - 1;
            if (nextSlide >= slides.length) nextSlide = 0;

            const nextBolid = slides[nextSlide].querySelector(".race__bolid");
            nextBolid.classList.add("_arrive");


            slides[currentSlide].classList.add("_opacity")

            setTimeout(() => {
                currentBolid.classList.remove("_move");
                nextBolid.classList.remove("_arrive");
                currentSlide = nextSlide;

                updateSlider(currentSlide);
                slides.forEach(slide =>{
                    slide.classList.remove("_opacity")
                })
            }, 1500);
        }

        slideMoveLeft.addEventListener("click", () => {
            moveSlide("prev")
            document.querySelector(".race__nav").style.pointerEvents = "none"
            setTimeout(()=>{
                document.querySelector(".race__nav").style.pointerEvents = "initial"
            }, 2000)
        });
        slideMoveRight.addEventListener("click", () => {
            moveSlide("next")
            document.querySelector(".race__nav").style.pointerEvents = "none"
            setTimeout(()=>{
                document.querySelector(".race__nav").style.pointerEvents = "initial"
            }, 2000)
        });

        updateSlider(currentSlide);




        function startCountdown(endTime) {
            const daysEls = document.querySelectorAll(".timer__days-item");
            const hoursEls = document.querySelectorAll(".timer__hours-item");
            const minutesEls = document.querySelectorAll(".timer__minutes-item");

            function updateTimer() {
                const now = new Date().getTime();
                const timeLeft = endTime - now;

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    updateDigits(daysEls, "00");
                    updateDigits(hoursEls, "00");
                    updateDigits(minutesEls, "00");
                    return;
                }

                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);

                updateDigits(daysEls, String(days).padStart(2, "0"));
                updateDigits(hoursEls, String(hours).padStart(2, "0"));
                updateDigits(minutesEls, String(minutes).padStart(2, "0"));
            }

            function updateDigits(elements, value) {
                elements[0].textContent = value[0];
                elements[1].textContent = value[1];
            }

            updateTimer();
            const timerInterval = setInterval(updateTimer, 60000);
        }

        const now = new Date();
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59).getTime();

        startCountdown(endOfMonth);


        function startSmoke(carSelector, smokeClass, maxCount, interval, delay, fadeTime, removeDelay, extraClass = '', activeClass = false) {
            const cars = document.querySelectorAll(carSelector);

            cars.forEach(car => {
                if (!car) return;

                function createSmoke() {
                    if (activeClass) {
                        if (!car.parentElement || !car.parentElement.parentElement || !car.parentElement.parentElement.classList.contains("_active")) return;
                    }

                    const extraClassName = extraClass ? `.${extraClass}` : '';
                    if (car.querySelectorAll(`.${smokeClass}${extraClassName}`).length < maxCount) {
                        const smoke = document.createElement('div');
                        smoke.classList.add(smokeClass);
                        if (extraClass) smoke.classList.add(extraClass);
                        car.appendChild(smoke);

                        requestAnimationFrame(() => {
                            setTimeout(() => smoke.classList.add("_opacity"), fadeTime);
                        });

                        setTimeout(() => smoke.remove(), fadeTime + removeDelay);
                    }
                }

                createSmoke();

                setTimeout(() => {
                    setInterval(createSmoke, interval);
                }, delay);
            });
        }


        // function startSmoke(carSelector, smokeClass, maxCount, interval, delay, fadeTime, removeDelay, extraClass = '', activeClass = false) {
        //     const cars = document.querySelectorAll(carSelector);
        //     cars.forEach(car =>{
        //         if (!car) return;
        //         console.log(car.parentElement.parentElement.classList.contains("_active"))
        //
        //         function createSmoke() {
        //             if(activeClass){
        //                 if (!car || !car.parentElement.parentElement.classList.contains("_active")) return;
        //             }
        //             if (car.querySelectorAll(`.${smokeClass}${extraClass ? `.${extraClass}` : ''}`).length < maxCount) {
        //                 const smoke = document.createElement('div');
        //                 smoke.classList.add(smokeClass);
        //                 if (extraClass) smoke.classList.add(extraClass);
        //                 car.appendChild(smoke);
        //                 setTimeout(() => smoke.classList.add("_opacity"), fadeTime);
        //                 setTimeout(() => smoke.remove(), fadeTime + removeDelay);
        //             }
        //         }
        //         createSmoke();
        //         setTimeout(createSmoke, delay);
        //         setInterval(() => {
        //             createSmoke();
        //             setTimeout(createSmoke, delay);
        //         }, interval);
        //     })
        //
        // }

        startSmoke('.race__bolid-car', 'race__bolid-smoke-front', 4, 900, 500, 200, 1600, "", true);
        startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 8, 900, 500, 200, 1600, "", true);
        startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 4, 900, 500, 200, 1600, "_large", true);
        startSmoke('.welcome__pers-smoke-front', 'front-before', 4, 900, 500, 200, 1600, "", false);
        startSmoke('.welcome__pers-smoke-back', 'front-before', 4, 900, 500, 200, 1600, "", false);


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

            popupsContainer.addEventListener("click", (e) =>{
                if (e.target === popupsContainer || e.target === closeButton){
                    closePopup()
                }
            })

            function closePopup() {
                popupsContainer.classList.add('_opacity');
                popupsContainer.classList.remove(popupClass);
                document.body.style.overflow = '';
            }
        }

        setPopups(document.querySelector('.bet__btn-item'), '_betPopup');
        setPopups(document.querySelector('.confirm__upd-btn'), '_confirmPopup');
        setPopups(document.querySelector('.results__popup-btn'), '_resultsPopup');

        function animateOnScroll(element, animationClass, delay) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() =>{
                            entry.target.classList.add(animationClass);
                        }, delay)

                    } else {
                        entry.target.classList.remove(animationClass);
                    }
                });
            }, options);

            observer.observe(element);


        }

        animateOnScroll(resultsFirst.querySelector(".results__top-decor"), "_show", 0)
        animateOnScroll(resultsSecond.querySelector(".results__top-decor"), "_show", 400)
        animateOnScroll(resultsThird.querySelector(".results__top-decor"), "_show", 800)
        animateOnScroll(resultsFirst.querySelector(".results__top-wrap"), "_show", 0)
        animateOnScroll(resultsSecond.querySelector(".results__top-wrap"), "_show", 400)
        animateOnScroll(resultsThird.querySelector(".results__top-wrap"), "_show", 800)


        document.querySelectorAll('.bet__item').forEach(item => {
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

    })

    document.querySelector(".dark-btn").addEventListener("click", () =>{
        document.body.classList.toggle("dark")
    })
})()