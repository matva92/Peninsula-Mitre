function votos() {
    var servidor =
        'https://cors-anywhere.herokuapp.com/' +
        'https://www.change.org/p/conservemos-pen%C3%ADnsula-mitre-que-sea-%C3%A1rea-natural-protegida-gobiernotdf-monica-urquiza-federicobilota-legismmartinez-pablovillegas19';

    fetch(servidor)
        .then(res => res.text())
        .then(data => {
            var index = data.match("displayed").index + 11;
            var index2 = data.match(`,"goal"`).index;
            return data.substring(index, index2)
        })
        .then(data => $("#votos").html("Somos " + data.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')))
        .then(() => {
            $(".votos").css("color", "white");
        })
        .catch(console.error)
}
votos()
// window.setInterval(votos, 60000)