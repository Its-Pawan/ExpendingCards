

// const panels = document.querySelectorAll('.panel');
// let currentIndex = 0;

// // Set up auto-swiping
// const intervalId = setInterval(autoSwipe, 3000); // Adjust the interval as needed (3000 milliseconds = 3 seconds)

// // adding autoSwiping
// function autoSwipe() {
//     currentIndex = currentIndex + 1;
//     if(currentIndex == panels.length){
//         currentIndex = 0
//     }
//     setActiveClass(currentIndex);
//     // console.log(currentIndex);
// }

// function setActiveClass(currentIndex) {
//     panels.forEach((panel) => panel.classList.remove('active'));
//     panels[currentIndex].classList.add('active');
//     // console.log(i)
// }



// // Add click event listener to stop auto-swiping when a panel is clicked
// panels.forEach((panel) => {
//     panel.addEventListener('click', () => {
//         // clearInterval(intervalId);
//         currentIndex = Array.from(panels).indexOf(panel);
//         setActiveClass(currentIndex);
//     });
// });


// Getting Class from HTML---------------
const panels = document.querySelectorAll('.panel')

let index = 0

// Function to add active class ---------
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

// Function to remove active Class -----------------
function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

// Function for auto slide feature------ 
function autoSlide() {
    index = index + 1;
    if (index === panels.length) {
        index = 0
    }
    removeActiveClass()
    panels[index].classList.add('active')
}


// This will run autoslide in every 3 second
const interval = setInterval(autoSlide, 3000)

// Add click event listener to stop auto-swiping when a panel is clicked
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        let newIndex = (Array.from(panels).indexOf(panel))
        index = newIndex
    });
});