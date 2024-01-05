window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");

  function deleteContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function addTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  deleteContent();
  addTabContent();

  tabsParent.addEventListener("click", (event) => {
    let target1 = event.target;
    if (target1 && target1.classList.contains("tabheader__item")) {
      tabs.forEach((item, idx) => {
        if (target1 == item) {
          deleteContent();
          addTabContent(idx);
        }
      });
    }
  });

  // function hideTabContent() {
  //   tabsContent.forEach((item) => {
  //     item.classList.add("hide");
  //     item.classList.remove("show", "fade");
  //   });
  //   tabs.forEach((item) => {
  //     item.classList.remove("tabheader__item_active");
  //   });
  // }
  // function showTabContent(i = 0) {
  //   tabsContent[i].classList.add("show", "fade");
  //   tabsContent[i].classList.remove("hide");
  //   tabs[i].classList.add("tabheader__item_active");
  // }
  // hideTabContent();
  // showTabContent();

  // tabsParent.addEventListener("click", (event) => {
  //   let target = event.target;
  //   if (target && target.classList.contains("tabheader__item")) {
  //     tabs.forEach((item, idx) => {
  //       if (target == item) {
  //         hideTabContent();
  //         showTabContent(idx);
  //       }
  //     });
  //   }
  // });
});
