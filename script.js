const menu = document.querySelector("div.menu")
const back = document.querySelector("button")
const select = document.querySelector("div.select")
const option = ["afryka", "ameryka_pol", "ameryka_pul", "antarktyda", "australia", "eu", "azja"];
const bcgk = document.querySelector("source")
const vid = document.querySelector("video")
const br = document.querySelector("div.br")
const selected = document.getElementsByTagName("a");
let clicked
let click
back.remove()
for(let i = 1; i <= 7; i++){
    selected[i].addEventListener("click", () => {
        /*afryka.style.marginTop = "0px";*/
        console.log("Kliknięty został element: " + i)
        clicked = i;
        console.log(selected[clicked])
        const hove = selected[clicked]
        click = selected[clicked]
        for(n = 7;n>=1;n--){
            selected[n].remove();
        }
        select.append(back)
        select.appendChild(click)
        br.remove()
        menu.remove()
        select.classList.remove("select")
        hove.classList.remove(option[clicked - 1])
        select.classList.add("new_select")
        vid.load();
        /*if(clicked === 4){
            bcgk.src = "antarktyda.mp4"
        }*/
        switch(clicked){
        case 1: 
        case
        }
        back.addEventListener("click", () => {
            location.reload();
        })
    });
}
/*afryka.addEventListener("click", () => {
    for(n = 2; n<=7;n++){
        selected[n].remove();
    }
});*/