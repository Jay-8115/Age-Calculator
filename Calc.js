let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click", ()=> {
    let birth = new Date(document.getElementById("birth").value);
    let datenow = new Date();

    if(birth.getTime()){
        let difference = datenow.getTime() - birth.getTime();
        let newage = new Date(difference);
        let x = Math.abs(newage.getFullYear()-1970)

        let indays = (Math.floor(difference / (1000*3600*24)));
        result.style.display = "block";
        result.innerHTML = `You are <sapan>${x}</span> Years and <span>${indays}</span> Days Old`;
    }

})