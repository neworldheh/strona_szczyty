const body = document.querySelector("body")
const menu = document.querySelector("div.menu")
const info = document.querySelector("div.info")
const first = document.querySelector("div.first")
const second = document.querySelector("div.second")
const back = document.querySelector("button")
const img2 = document.querySelector("img.img_logo2")
const select = document.querySelector("div.select")
const option = ["afryka", "ameryka_pol", "ameryka_pul", "antarktyda", "australia", "eu", "azja"];
const content = [afryka = document.querySelector("div.afrykac"), ameryka_pol = document.querySelector("div.ameryka_polc"),
ameryka_pul = document.querySelector("div.ameryka_pulc"),
antarktyda = document.querySelector("div.antarktydac"),
australia = document.querySelector("div.australiac"),
eu = document.querySelector("div.euc"),
azja = document.querySelector("div.azjac")];
const bcgk = document.querySelector("source")
const vid = document.querySelector("video")
const selected = document.getElementsByTagName("a");
let cont;
let clicked
let click
back.remove()
info.remove()
img2.remove()
for(let i = 1; i <= 7; i++){
    selected[i].addEventListener("click", () => {
        /*afryka.style.marginTop = "0px";*/
        console.log("Kliknięty został element: " + i)
        clicked = i;
        console.log(selected[clicked])
        const hove = selected[clicked]
        click = selected[clicked]
        cont = content[clicked-1]
        for(n = 7;n>=1;n--){
            selected[n].remove();
            content[n-1].remove();
        }
        body.append(img2)
        select.append(back)
        select.appendChild(click)
        menu.remove()
        select.classList.remove("select")
        hove.classList.remove(option[clicked - 1])
        select.classList.add("new_select")
        back.addEventListener("click", () => {
            location.reload();
        })
        vid.remove()
        if(i === 1){
            body.style.backgroundImage = "url('afryka.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
            info.appendChild(cont)
        }
        else if(i === 2){
            body.style.backgroundImage = "url('ameryka_pol.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
            info.appendChild(cont)
        }
        else if(i === 3){
            body.style.backgroundImage = "url('ameryka_pul.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
            info.appendChild(cont)
        }
        else if(i === 4){
            body.style.backgroundImage = "url('antarktyda.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
            info.appendChild(cont)
        }
        else if(i === 5){
            body.style.backgroundImage = "url('australia.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
            info.appendChild(cont)
        }
        else if(i === 6){
            body.style.backgroundImage = "url('eu.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
            info.appendChild(cont)
        }
        else if(i === 7){
            body.style.backgroundImage = "url('azja.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
            info.appendChild(cont)
        }
    });
}
/*afryka.addEventListener("click", () => {
    for(n = 2; n<=7;n++){
        selected[n].remove();
    }
});*/