    function randomBgc() {
        let red = Math.floor(Math.random() * 25 + 170);
        let green = Math.floor(Math.random() * 25 + 180);
        let blue = Math.floor(Math.random() * 25 + 190);
        let rgbColor = `rgb(${red}, ${green}, ${blue})`;
        $("body").css("background-color", rgbColor);
    }

    setInterval(() => {
        randomBgc();
    }, 2000);