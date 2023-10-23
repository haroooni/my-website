let names = [
    "امیررضا غیاثی" ,
    "امیررضا رمضانلو" ,
    "محمد جواد کردلو" , 
    "محمد طاها بهرامی" , 
    "امیرعلی خانمحمدی " 
]
let ht = document.querySelector("html")
let num = document.querySelector("#num")
let btn = document.querySelector("button")
let number = 6

btn.addEventListener("click" , start )

function start () {
    btn.style.display = "none"
    ht.style.marginTop = "4%"

    if(number == 0 ) {
        number = null
    } else {
        setInterval(() => {
            number --
            console.log(number);
            num.innerHTML = number
        }, 1000)
    }
}
