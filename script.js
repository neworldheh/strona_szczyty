const body = document.querySelector("body")
const menu = document.querySelector("div.menu")
const info = document.querySelector("div.info")
const back = document.querySelector("button")
const img2 = document.querySelector("img.img_logo2")
const select = document.querySelector("div.select")
const option = ["afryka", "ameryka_pol", "ameryka_pul", "antarktyda", "australia", "eu", "azja"];
const bcgk = document.querySelector("source")
const vid = document.querySelector("video")
const br = document.querySelector("div.br")
const selected = document.getElementsByTagName("a");
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
        for(n = 7;n>=1;n--){
            selected[n].remove();
        }
        body.append(img2)
        select.append(back)
        select.appendChild(click)
        br.remove()
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
        }
        else if(i === 2){
            body.style.backgroundImage = "url('ameryka_pol.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
        }
        else if(i === 3){
            body.style.backgroundImage = "url('ameryka_pul.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
        }
        else if(i === 4){
            body.style.backgroundImage = "url('antarktyda.jpg')"
            body.append(info)
            window.addEventListener("scroll", () => {
                let scroll = window.pageYOffset;
                    let speed = info.dataset.speed
                    info.style.transform = `translateY(${scroll * speed}px)`
            })
        }
    });
}
/*afryka.addEventListener("click", () => {
    for(n = 2; n<=7;n++){
        selected[n].remove();
    }
});*/