(function (){
    document.addEventListener("DOMContentLoaded", () =>{
        const slides = document.querySelectorAll(".race__item")
        const slideMoveLeft = document.querySelector(".race__nav-left")
        const slideMoveRight = document.querySelector(".race__nav-right")
        const slideCounter = document.querySelector(".race__nav-counter")

        let currentSLide = 0

        // slides.forEach((slide, i) =>{
        //
        // })

        function setSlider(slides){

        }




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
            const car = document.querySelector(carSelector);

            function createSmoke() {
                if(activeClass){
                    if (!car || !car.parentElement.parentElement.classList.contains("_active")) return;
                }
                if (car.querySelectorAll(`.${smokeClass}${extraClass ? `.${extraClass}` : ''}`).length < maxCount) {
                    const smoke = document.createElement('div');
                    smoke.classList.add(smokeClass);
                    if (extraClass) smoke.classList.add(extraClass);
                    car.appendChild(smoke);
                    setTimeout(() => smoke.classList.add("_opacity"), fadeTime);
                    setTimeout(() => smoke.remove(), fadeTime + removeDelay);
                }
            }
            createSmoke();
            setTimeout(createSmoke, delay);
            setInterval(() => {
                createSmoke();
                setTimeout(createSmoke, delay);
            }, interval);
        }
        // startSmoke('.race__bolid-car', 'race__bolid-smoke-front', 4, 900, 500, 100, 800, "", true);
        // startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 8, 900, 500, 100, 800, "", true);
        // startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 4, 900, 500, 100, 800, "_large", true);
        // startSmoke('.welcome__pers-smoke-front', 'front-before', 4, 900, 500, 100, 800, "", false);
        // startSmoke('.welcome__pers-smoke-back', 'front-before', 4, 900, 500, 100, 800, "", false);


        startSmoke('.race__bolid-car', 'race__bolid-smoke-front', 4, 900, 500, 200, 1600, "", true);
        startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 8, 900, 500, 200, 1600, "", true);
        startSmoke('.race__bolid-car', 'race__bolid-smoke-back', 4, 900, 500, 200, 1600, "_large", true);
        startSmoke('.welcome__pers-smoke-front', 'front-before', 4, 900, 500, 200, 1600, "", false);
        startSmoke('.welcome__pers-smoke-back', 'front-before', 4, 900, 500, 200, 1600, "", false);

    })
})()