// let task1= document.querySelectorAll(".nav__link")
//
// task1 = Array for (task1).map(el => el.innerHTML)(0)
// console.log(task1)

// let task1 = document.querySelectorAll(".nav__link")
// let task2 = Array.from(task1).map(el => el.innerHTML)
// console.log(task2)
//
// let task3 =Array.from(document.querySelectorAll(".nav__link__item"))
// console.log(task3.map(el => el.textContent))
//

////////////////////////////////////////////////////////////////////////
let board = document.querySelector(".doska")
let text = document.querySelector(".content")
for (let i = 1; i <= 10; i++) {
    let btn = document.createElement("button");
    btn.classList.add("button")
    btn.innerText = i

    board.append(btn)
}

let buttons = document.querySelectorAll(".button")

buttons.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
        buttons.forEach((btn2) => {
            btn2.classList.remove("active")
        })
        btn.classList.add("active")
        text.innerHTML = getIndex(ind + 1)
    })
})

function getIndex(index) {
    if (index === 1 || index === 2 || index === 5 || index === 7 || index === 8) {
        return `${index}чи кнопка басылды`
    } else if (index === 3 || index === 4 || index === 9 || index === 10) {
        return `${index}чу кнопка басылды`
    }
    return `${index}чы кнопка басылды`
}




//
let btn_shape = document.querySelectorAll(".btn-shape")
let box_shape = document.querySelector("#shape")

btn_shape.forEach(el =>{
    el.addEventListener("click",()=>{
        box_shape.removeAttribute("class")
        box_shape.classList.add(el.textContent)
    })
})
