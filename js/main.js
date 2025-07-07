document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".con_img").forEach((img) => {
    // 중복 감싸는 걸 방지
    if (!img.parentElement.classList.contains("img_hover")) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("img_hover");

      img.parentNode.insertBefore(wrapper, img); // 원래 위치에 div 삽입
      wrapper.appendChild(img); // 이미지 div 안으로 이동
    }
  });
});
