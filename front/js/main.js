(function (){
    document.addEventListener("DOMContentLoaded", () =>{
        const slides = document.querySelectorAll(".race__item")
        const slideMoveLeft = document.querySelector(".race__nav-left")
        const slideMoveRight = document.querySelector(".race__nav-right")
        const slideCounter = document.querySelector(".race__nav-counter")

        let currentSlide = 0


        function updateSlider(index) {
            slides.forEach(slide => slide.classList.remove("_active"));
            slides[index].classList.add("_active");
            slideCounter.textContent = `${index + 1}/${slides.length}`;
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
            cars.forEach(car =>{
                if (!car) return;
                console.log(car.parentElement.parentElement.classList.contains("_active"))

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
            })

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