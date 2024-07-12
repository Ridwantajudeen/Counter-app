let count = document.getElementById("count-el")
let saved = document.getElementById("save-el")

let theCount=0 

function increment(){
theCount += 1
count.innerText = theCount
console.log(count.innerText)
}

function save(){
saved.innerText += " " + theCount + "-"
theCount = 0
count.innerText = 0

}



