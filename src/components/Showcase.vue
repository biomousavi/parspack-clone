<template>
  <div class="showcase w100 trans">
    <ShowcaseSVG />

    <div class="showcase-card">
      <div class="header">
        <span class="header-text">فناوری ابری </span>
        <!-- <span class="slider-container"> -->
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="header-text"> به سادگی</swiper-slide>
          <swiper-slide class="header-text">سریع تر</swiper-slide>
          <swiper-slide class="header-text">پایدار تر</swiper-slide>
          <swiper-slide class="header-text">ارزان تر</swiper-slide>
          <swiper-slide class="header-text">مقیاس پذیر</swiper-slide>
        </swiper>
      </div>
      <p>از یک استارت‌آپ کوچک تا سازمانی بزرگ پشتیبان‌تان هستیم.</p>
      <div class="footer flex-row align-center">
        <a class="right" href="#"> شروع کنید <ArrowDownSVG /> </a>
        <a class="left" href="#"><SupporterSVG /></a>
      </div>
    </div>
  </div>
</template>

<script>
import ShowcaseSVG from "../assets/img/Showcase.svg";
import ArrowDownSVG from "../assets/img/ArrowDown.svg";
import SupporterSVG from "../assets/img/Supporter.svg";

export default {
  components: {
    ShowcaseSVG,
    ArrowDownSVG,
    SupporterSVG,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        direction: "vertical",
        autoplay: true,
        speed: 600,
        slidesPerView: 1,
        fadeEffect: {
          crossFade: true,
        },
        effect: "slide",
        spaceBetween: 20,
      },
    };
  },
};
</script>

<style scoped>
.showcase {
  background: linear-gradient(45deg, #24bddf 0%, #0287ed 100%);
  width: 100%;
  height: calc(100vh - 100px);
  padding-top: 100px;
  position: relative;
}

.showcase-card {
  position: absolute;
  top: 35%;
  right: 8%;
  color: var(--secondary);
}
.showcase-card > p {
  overflow: hidden;
  opacity: 0;
  height: 25px;
  animation: showcase-p 400ms ease 800ms forwards;
}
@keyframes showcase-p {
  0% {
    opacity: 1;
    width: 0;
  }
  100% {
    width: 100%;
    opacity: 1;
  }
}
.header {
  display: flex;
  animation-name: showcase-header;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 0s;
  animation-timing-function: ease-out;
}
@keyframes showcase-header {
  0% {
    transform: translateY(70%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.swiper-container {
  margin: auto 5px;
  height: 35px;
  padding-top: 10px;
  overflow: hidden;
}
.swiper-slide {
  transition: opacity 0.2s ease;
  height: 30px;
  opacity: 0;
}
.swiper-slide-active {
  opacity: 1;
}
.showcase-card .header {
  margin-bottom: 1.5rem;
  font-size: 30px;
  word-spacing: -4px;
}
.header > span {
  padding-top: 10px;
}
.footer {
  margin-top: 1.5rem;
}
.footer .right:hover {
  color: var(--primary);
}
.footer .right {
  background-color: var(--secondary);
  padding: 10px;
  border-radius: 50px;
  margin-left: 10px;
  opacity: 0;
  color: var(--accent);
  animation: footer-right 0.8s ease 1.2s forwards;
}
@keyframes footer-right {
  0% {
    opacity: 0.2;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.footer .right:hover .arrow-down-svg {
  transform: translateY(5px) scale(1.1);
  fill: var(--primary);
}
.arrow-down-svg {
  width: 12px;
  fill: var(--accent);
  transition: all 0.3s ease;
}
.footer .left:hover .supporter-svg {
  fill: var(--primary);
}
.supporter-svg {
  width: 30px;
  opacity: 0;
  fill: var(--accent);
  background-color: var(--secondary);
  padding: 5px;
  border-radius: 50px;
  animation: supporter-svg 0.8s ease 1.6s forwards;
}
@keyframes supporter-svg {
  0% {
    opacity: 0.2;
    transform: translateX(-100px) rotateZ(460deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotateZ(0deg);
  }
}
.showcase-svg {
  position: absolute;
  width: 150%;
  bottom: 0;
  left: 40%;
  transform: translateX(-50%);
}
.showcase-ground-svg {
  opacity: 0;
  animation: showcase-ground-svg 0.8s ease 0s forwards;
}
@keyframes showcase-ground-svg {
  0% {
    opacity: 0.2;
    transform: translateY(150px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.showcase-server-svg {
  opacity: 0;
  animation: showcase-server-svg 0.8s ease 1.8s forwards;
}
@keyframes showcase-server-svg {
  0% {
    opacity: 0.2;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.showcase-apartment-svg {
  opacity: 0;
  animation: showcase-apartment-svg 0.8s ease 1.8s forwards;
}
@keyframes showcase-apartment-svg {
  0% {
    opacity: 0.2;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.showcase-shadow-svg {
  opacity: 0;
  animation: showcase-shadow-svg 0.8s ease 1.8s forwards;
}
@keyframes showcase-shadow-svg {
  0% {
    opacity: 0.2;
    transform: translateY(150px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.showcase-deskman-svg,
.showcase-bg-svg,
.showcase-plant-main-svg,
.cloud-right,
.showcase-apartment-man-svg,
.text-bottom-lines,
.text-top-lines,
.Group_8667,
.Group_8596,
.cloud-left {
  opacity: 0;
  animation: showcase-deskman-svg 1s ease 2.2s forwards;
}
@keyframes showcase-deskman-svg {
  0% {
    opacity: 0.01;
  }
  100% {
    opacity: 1;
  }
}
.text-top-lines path {
  stroke-dasharray: 100;
  animation: text-top-lines-path 12s infinite linear;
}

@keyframes text-top-lines-path {
  to {
    stroke-dashoffset: 600;
  }
}
.text-bottom-lines path {
  stroke-dasharray: 100;
  animation: text-bottom-lines-path 10s infinite 3s linear;
}

@keyframes text-bottom-lines-path {
  to {
    stroke-dashoffset: 800;
  }
}
@media (max-width: 900px) {
  .showcase-svg {
    width: 170%;
    left: 50%;
  }
  .showcase-card {
    top: 15%;
    right: 5%;
  }
}
@media (max-width: 700px) {
  .showcase-svg {
    width: 200%;
    left: 60%;
  }
}
@media (max-width: 500px) {
  .showcase-svg {
    width: 280%;
    left: 70%;
  }
}
@media (max-width: 400px) {
  .showcase-card > p {
    font-size: 15px;
    word-spacing: -1px;
  }
  .header-text {
    font-size: 25px;
  }
  .footer .right {
    padding: 12px;
  }
}
</style>