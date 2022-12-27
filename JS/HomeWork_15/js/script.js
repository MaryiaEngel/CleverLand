"use strict";

window.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".tabheader__item");
  let tabsContent = document.querySelectorAll(".tabcontent");
  let tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", function (event) {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  const deadline = "2023-01-01";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      seconds = timer.querySelector("#seconds"),
      minutes = timer.querySelector("#minutes"),
      hours = timer.querySelector("#hours"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');
  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });

  function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
  }
  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
  if(e.target === modal){
    closeModal();
  }});
  this.document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')){
      closeModal();
    }
  });
 function showModalByScroll(){
    if(
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  this.window.addEventListener('scroll', showModalByScroll);
});
