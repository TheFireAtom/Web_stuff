//  ######################
//  Model appear/disappear
//  ######################

// Variables

let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let modalContainer = document.getElementById("modal-container");
let modal = document.getElementById("modal");

// Event listeners

openBtn.addEventListener("click", function(){
    modal.style.animationName = "animateModal";
    modalContainer.style.display = "block";
});


closeBtn.addEventListener("click", function(){
    myAsyncFunc();
})

window.addEventListener("click", function(e){
    if (e.target === modalContainer) {
        myAsyncFunc();
    }
});

// Sleep function for modal to disappear

const sleep = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
};
  
const myAsyncFunc = async () => {
    modal.style.animationName = "animateModalContainer";
    await sleep(200);
    modalContainer.style.display = "none";
};
