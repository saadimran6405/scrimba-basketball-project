let home_score = 0
let guest_score = 0

// home score point functions
function addonepoint(){
    home_score += 1
    document.getElementById('home-text').textContent = home_score
}

function addtwopoints(){
    home_score += 2
    document.getElementById('home-text').textContent = home_score
}

function addthreepoints() {
    home_score += 3
    document.getElementById('home-text').textContent = home_score
}


// guest score point functions 
function add1point(){
    guest_score += 1
    document.getElementById("guest-text").textContent = guest_score
}

function add2point(){
    guest_score += 2
    document.getElementById("guest-text").textContent = guest_score
}

function add3point() {
    guest_score += 3
    document.getElementById("guest-text").textContent = guest_score
}

function reset() {
    guest_score = 0
    home_score = 0
    document.getElementById('home-text').textContent = home_score
    document.getElementById('guest-text').textContent = guest_score
}