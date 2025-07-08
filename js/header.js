const make = () => {
  const depth1 = document.querySelectorAll(".head_wrap .nav li");

  const depthBg = document.querySelector(".depth_bg");
  console.log(depth1);
  let idx = 0;
  depth1.forEach((item, idx) => {
    const depth2 = item.querySelector(".depth2 .nav.dep");
    item.addEventListener("mouseenter", (e) => {
      if (depth2) {
        console.log(item);
        //배경활성화
        depthBg.classList.add("active");

        document.querySelectorAll(".depth2").forEach((el) => {
          el.classList.remove("active");
        });
        depth2.classList.add("active");
      }
    });
    // class add
    item.addEventListener("mouseleave", (e) => {
      if (depth2) {
        console.log(item);
        //배경활성화
        depthBg.classList.remove("active");

        document.querySelectorAll(".depth2").forEach((el) => {
          el.classList.remove("active");
        });
        depth2.classList.remove("active");
      }
    });
  });
  // class remove
};
setTimeout(() => {
  make();
}, 100);
