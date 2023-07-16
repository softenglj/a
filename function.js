alert("Hi");
alert("Happy 18th birthday");
alert("Bago mo matapos tong alert na to");
alert("Gusto ko lng sabihin na");
alert("Ang saya ko para sayo^;^");
alert("At kung gusto mo may music habang binabasa at scroll ka dito");
alert("Pindutin mo lng yung button na nasa gilid at mag play na to");
alert("Salamat sana maappreciate hehe");

function playAudio() {
    var x = document.createElement("AUDIO");

    if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src", "audio/enchanted.mp3");
    } else {
        x.setAttribute("src", "audio/enchanted.mp3");
    }

    x.setAttribute("autoplay", "autoplay");
    document.body.appendChild(x);
}