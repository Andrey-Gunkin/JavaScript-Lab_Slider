let project = document.querySelectorAll('.projects-content');
let projectItem = document.querySelectorAll('.projects-item');
let projectDot = document.querySelectorAll('.projects-pagination__circle');
let leftArrow = document.querySelector('.projects-pagination__left');
let rightArrow = document.querySelector('.projects-pagination__right');

sliderButtons('.projects-item', '.active-window');
sliderButtons('.projects-pagination__circle', '.active-dot');

function sliderButtons(blockClass, activeClass) {
    let projectItem = document.querySelectorAll(blockClass);
    projectItem.forEach((item, index) => item.addEventListener('click', function () {

        let active = document.querySelector(blockClass + activeClass);
        if (active != item) {
            sliderProject(index);
        }
    }));
}

function sliderProject(index) {
    let active = document.querySelector('.projects-content.active');
    let activeItem = document.querySelector('.projects-item.active-window');
    let activeDot = document.querySelector('.projects-pagination__circle.active-dot');
    active.classList.remove('active');
    project[index].classList.add('active');
    activeItem.classList.remove('active-window');
    projectItem[index].classList.add('active-window');
    activeDot.classList.remove('active-dot');
    projectDot[index].classList.add('active-dot');
}

leftArrow.addEventListener('click', () => {
    let activeDot = document.querySelector('.projects-pagination__circle.active-dot');
    projectDot.forEach(function (item, index) {
        if (item == activeDot) {
            if (index == 0) {
                index = projectDot.length;
            }
            sliderProject(index - 1);
        }
    })
})

rightArrow.addEventListener('click', () => {
    let activeDot = document.querySelector('.projects-pagination__circle.active-dot');
    projectDot.forEach(function (item, index) {
        if (item == activeDot) {
            if (index == projectDot.length - 1) {
                index = -1;
            }
            sliderProject(index + 1);
        }
    })
})