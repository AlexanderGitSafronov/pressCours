const btnLesson = document.querySelectorAll('.choise__lesson_btn .lesson')
const nubberLesson = document.querySelector('.numberLesson')
const videoContentAll = document.querySelectorAll('.main__content_left')
btnLesson.forEach((item,idx) => {
    item.addEventListener('click', (e)=>{
        e.preventDefault()
        nubberLesson.textContent = idx+1 + "/10";
        btnLesson.forEach((el) => {
            el.classList.remove('active')
        })
        item.classList.add("active")

        videoContentAll.forEach((item) => {
            item.classList.add('d-none')
        })
        // console.log(videoContentAll[idx])
        videoContentAll[idx].classList.remove('d-none')
    })
})






// function getNextMonday() {
//     const now = new Date();
//     const dayOfWeek = now.getDay();
//     const distanceToNextMonday = (8 - dayOfWeek) % 7;
//     const nextMonday = new Date();
//     nextMonday.setDate(now.getDate() + distanceToNextMonday);
//     nextMonday.setHours(0, 0, 0, 0);
//     return nextMonday;
// }

// function updateCountdown() {
//     const countdownElement = document.getElementById('countdown');
//     const now = new Date();
//     const nextMonday = getNextMonday();
//     const timeDifference = nextMonday - now;

//     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//     countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//     if (timeDifference < 0) {
//         countdownElement.textContent = "Next week is available now!";
//         clearInterval(interval);
//     }
// }

// const interval = setInterval(updateCountdown, 1000);











const firstButton = document.querySelector('.open__modal')
const secondButton = document.querySelector('.btn__week2')
const firstModal = document.querySelector('.modal__wrapper')
const firstModalCloset = document.querySelector('.modal__btn')


firstButton.addEventListener('click', ()=> {
  
    firstModal.classList.remove('hiden');
})
secondButton.addEventListener('click', ()=> {
  
    firstModal.classList.remove('hiden');
})
firstModalCloset.addEventListener('click', () => {
    firstModal.classList.add('hiden');
})
firstModal.addEventListener('click', ()=> {
    firstModal.classList.add('hiden');
})
firstModal.querySelector('.modal').addEventListener('click', (e) => {
e.stopPropagation()
})


const choiseLessons = document.querySelectorAll('.choise__lesson_btn')
const btnWeek = document.querySelectorAll('.btn__week')

btnWeek.forEach((item,idx) => {
    item.addEventListener('click', ()=>{
        console.log("kkkkk")
        btnWeek.forEach((btn) => {
            if(btn.classList.contains("active")){
                btn.classList.remove("active")
            }
        })
        item.classList.add("active")
        console.log(idx)
        if(idx === 0){
            if(choiseLessons[1].classList.contains("d-none")){
                return
            } else {
                choiseLessons[1].classList.add("d-none")
            choiseLessons[0].classList.remove("d-none")
            }
            
        }
        if(idx === 2){
            if(choiseLessons[0].classList.contains("d-none")){
                 return
            } else {
            choiseLessons[1].classList.remove("d-none")
            choiseLessons[0].classList.add("d-none")
            }
            
        }
    })
})



