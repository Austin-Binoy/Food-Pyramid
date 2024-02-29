

const menuBtns = document.querySelectorAll('.triangle-btn');
const foodItems = document.querySelectorAll('.triangle-item');

let activeBtn = "adults";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn() {
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn) {
    activeBtn = newMenuBtn;
    foodItems.forEach((item)=> {
        if(item.classList.contains(activeBtn)) {
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    })
}










const countContainers = document.querySelectorAll('.shape');
countContainers.forEach(function(container) {
    const plusBtn = container.querySelector('.add');
    const minusBtn = container.querySelector('.sub');
    const countNum = container.querySelector('.qtyBox');
    let count = 0;

    plusBtn.addEventListener('click', function()  {
        count++;
        countNum.innerText = count;
    });

    minusBtn.addEventListener('click', function()  {
        if(count > 0) {
            count--;
        }
        countNum.innerText = count;
    });
});