    function randomBgc() {
        let red = Math.floor(Math.random() * 25 + 30);
        let green = Math.floor(Math.random() * 25 + 40);
        let blue = Math.floor(Math.random() * 25 + 50);
        let rgbColor = `rgb(${red}, ${green}, ${blue})`;
        $("body").css("background-color", rgbColor);
    }

    setInterval(() => {
        randomBgc();
    }, 2000);