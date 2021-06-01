$(document).ready(function(){

let body = $("body");
let inputData = $(".form__input-date");
const btnSignIn = $(".btn-SignIn");

let modalWrapper1 = $(".modal-wrapper1");
let modalWrapper2 = $(".modal-wrapper2");
let modalTitle_CheckIn= $(".modal__title_CheckIn");
let modalTitle_signIn = $(".modal__title_signIn");
let btn_cancel = $(".form__btn_cancel");


let modal= $(".modal");


// меняем у инпута тип по нажатию
inputData.focus(function() {
  this.setAttribute("type", "date");
});

inputData.blur(function() {
  this.setAttribute("type", "text");
});

// функции для удобства

function close1() {
  modalWrapper1.removeClass("modal-wrapper1--active");
  modalTitle_signIn.removeClass("modal__title_active");
}
function add1() {
  modalWrapper1.toggleClass("modal-wrapper1--active");
  modalTitle_signIn.addClass("modal__title_active");
  close2();
}
function add2() {
  modalWrapper2.addClass("modal-wrapper2--active");
  modalTitle_CheckIn.addClass("modal__title_active");
}
function close2() {
  modalWrapper2.removeClass("modal-wrapper2--active");
  modalTitle_CheckIn.removeClass("modal__title_active");
  
}

// вызываем кнопкой модальные окна
btnSignIn.click(function(e){
  e.stopPropagation();
  body.toggleClass("no-scroll");
  if(modalWrapper2.hasClass("modal-wrapper2--active")){
    close2();
  }else{
    add1();
  }
})
// функция для того чтобы $(document) не поднимал модальное окна на верх
modal.click(function(e){
  e.stopPropagation();
})

// переключаем модалки между собой
modalTitle_CheckIn.click(function(){
  add2();
  close1();
})
// переключаем модалки между собой
modalTitle_signIn.click(function(){
  close2();
  add1();
})
// закрываем модальное окно по нажатию на "Отказаться"
btn_cancel.click(function(){
  close2();
})



// закрываем модальные окна при нажатии мимо
$(document).click(function(e){
  let target = e.target;
  if(target !== modal){
    close1(),close2()
    body.removeClass("no-scroll");
  }
  })


})


