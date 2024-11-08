let count = 0
let draft = document.getElementById("draft-el")

function increment() {
    count = ++count
    document.getElementById("countertext").innerText = count 
}

function save(){
    let countEl = " - " + count  
    draft.innerText += " " + countEl
}


function reset() {
    count = 0
    document.getElementById("countertext").innerText = count 
    draft.innerText = "drafts: "
}

