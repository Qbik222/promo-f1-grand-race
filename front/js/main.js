(function (){
    function startCountdown(endTime) {
        const hoursEls = document.querySelectorAll(".timer__hours-item");
        const minutesEls = document.querySelectorAll(".timer__minutes-item");
        const secondsEls = document.querySelectorAll(".timer__seconds-item");

        function updateTimer() {
            const now = new Date().getTime();
            const timeLeft = endTime - now;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                updateDigits(hoursEls, "00");
                updateDigits(minutesEls, "00");
                updateDigits(secondsEls, "00");
                return;
            }

            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
            const seconds = Math.floor((timeLeft / 1000) % 60);

            updateDigits(hoursEls, String(hours).padStart(2, "0"));
            updateDigits(minutesEls, String(minutes).padStart(2, "0"));
            updateDigits(secondsEls, String(seconds).padStart(2, "0"));
        }

        function updateDigits(elements, value) {
            elements[0].textContent = value[0];
            elements[1].textContent = value[1];
        }

        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
    }

    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59).getTime();

    startCountdown(endOfDay);


})()