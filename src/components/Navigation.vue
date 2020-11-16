<template>
  <nav id="nav" class="flex-column align-center trans justify-center">
    <div class="nav-container flex-row align-center justify-between">
      <div class="nav-logo">
        <Logo />
        <img src="@/assets/img/nav-logo.png" alt="parspack-logo" />
      </div>

      <ul class="nav-links trans justify-between flex-row vazir">
        <li class="nav-link trans" v-for="(link, index) in links" :key="index">
          <a
            @click="onLinkClick"
            v-if="link.childs.length"
            class="with-child"
            >{{ link.title }}</a
          >
          <a v-else>{{ link.title }}</a>

          <ul v-if="link.childs.length" class="trans child-links">
            <li class="child-link" v-for="child of link.childs" :key="child">
              <a class="trans vazir" href="#"> {{ child }}</a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="nav-buttons flex-row vazir-bold">
        <a class="trans-long" href="#">ورود</a>
        <a class="trans-long" href="tel:02141807">
          <span>۴۱۸۰۷</span>
          <span><Telephone /></span
        ></a>
      </div>

      <div @click="onToggle" id="backdrop"></div>

      <button @click="onToggle" class="nav-toggle"></button>
    </div>
  </nav>
</template>

<script>
import Logo from "../assets/img/Logo.svg";
import Telephone from "../assets/img/Telephone.svg";
export default {
  components: {
    Logo,
    Telephone,
  },
  data() {
    return {
      links: [
        {
          title: "سازمان ها",
          childs: [
            "ابر خصوصی",
            "کلاستر دیتابیس",
            "ایمیل سازمانی",
            "فضای دیتانتر",
          ],
        },
        {
          title: "هاست ابری",
          childs: [
            "هاست",
            "ثبت دامنه",
            "هاست رایگان",
            "هاست دانلود",
            "هاست نمایندگی",
            "قوانین",
            "گزارش تخلف",
          ],
        },
        {
          title: "ابر سرور",
          childs: ["سرور ابری", "سرور مجازی", "سرور رایگان"],
        },
        {
          title: "سرور اختصاصی",
          childs: ["ماکرو سرور", "Bare Metal", "هایبرید سرور"],
        },
        { title: "CDN", childs: ["CDN وب سایت", "CDN فایل", "CDN ویدیو"] },
        { title: "SSL", childs: [] },
        {
          title: "...",
          childs: [
            "مالکیت سرویس",
            "نحوه پرداخت",
            "راهنمای پشتیبانی",
            "قوانین خرید",
            "وبلاگ",
            "سوالات متداول",
            "استخدام",
            "درباره ما",
            "ارتباط با ما",
          ],
        },
        { title: "ثبت نام", childs: [] },
      ],
    };
  },
  mounted() {
    const nav = document.getElementById("nav");
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    window.onscroll = function () {
      // if user scrolling to top its true
      const toTop = this.oldScroll > this.scrollY;
      // viewport to top
      const scrollTop = window.pageYOffset;
      // element position to top

      // const pageContentPos = nav.getBoundingClientRect().top;

      function scrollToTop() {
        // show nav when scrolling to top
        nav.classList.remove("hidden");

        // change position to block
        if (scrollTop <= vh) {
          nav.classList.add("hidden");
        }
        if (scrollTop <= vh - 100) {
          nav.classList.remove("fixed");
          nav.classList.remove("hidden");
        }
      }
      function scrollToDown() {
        if (scrollTop >= vh) {
          nav.classList.add("hidden");
          setTimeout(() => {
            nav.classList.add("fixed");
          }, 300);
        }
      }

      if (toTop) {
        scrollToTop();
      } else {
        scrollToDown();
      }
      // reset old scrollToY each time
      this.oldScroll = this.scrollY;
    };
  },
  methods: {
    onToggle() {
      const nav = document.getElementById("nav");
      nav.classList.toggle("sidebar");

      if (nav.classList.contains("sidebar")) {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.height = "";
        document.body.style.overflow = "";
      }
    },
    onLinkClick(event) {
      event.target.parentNode.classList.toggle("open");
    },
  },
};
</script>

<style scoped>
#nav {
  top: 0;
  right: 0;
  min-height: 90px;
  width: 100%;
}
#nav.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 50px;
  width: unset;
  padding: 17px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  background-color: var(--secondary);
}
#nav.hidden {
  transform: translateY(-100%);
}
.nav-container {
  width: 85%;
}
.nav-toggle {
  display: none;
}
.nav-toggle::after {
  top: 5px;
}
.nav-toggle::before,
.nav-toggle::after {
  content: "";
  position: absolute;
  right: 0;
  width: 100%;
  height: 4px;
  border-radius: 3px;
  background-color: var(--secondary);
  transform-origin: center;
  transition: all 0.5s cubic-bezier(0.18, 0.89, 0.54, 1.93);
}
#nav.fixed .nav-toggle::before,
#nav.fixed .nav-toggle::after {
  background-color: var(--accent);
}
.sidebar .nav-toggle::before {
  top: 50%;
  transform: translateY(-150%) rotate(45deg);
}
.sidebar .nav-toggle::after {
  transform: translateY(100%) rotate(-45deg);
}
#backdrop {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 200vh;
  background-color: rgba(0, 91, 159, 0.2);
  pointer-events: none;
  opacity: 0;
  transition: all 1.5s ease;
}
.nav-links {
  margin-right: 20px;
  flex-wrap: wrap;
  width: 100%;
}
.nav-link {
  padding: 15px 10px;
  position: relative;
  cursor: pointer;
}
.nav-link > a {
  font-size: 1rem;
  color: var(--secondary);
}
#nav.fixed .nav-link > a {
  color: var(--gray);
}
.nav-link > a.with-child::after {
  content: "";
  border: solid;
  border-width: 0 2px 2px 0;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  display: inline-block;
  padding: 3px;
  margin-right: 5px;
  transform: translateY(-25%) rotate(45deg);
}
.nav-link:hover > a::after {
  transform: rotate(225deg);
}
.child-links {
  position: absolute;
  pointer-events: none;
  opacity: 0;
  display: block;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  width: 12.5rem;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 3px 15px 0px rgba(40, 142, 217, 0.5);
}
.child-links::after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  bottom: 100%;
  margin: auto;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
.child-link {
  width: 100%;
}
.child-link a {
  display: block; /* defaul inline-block */
  padding: 20px 25px;
  border-radius: 6px;
  font-weight: normal;
  color: var(--gray);
  background-color: var(--secondary);
}
.child-link a:hover {
  box-shadow: 0px 3px 15px 0px rgba(40, 142, 217, 0.4);
  color: var(--primary-light);
  transform: scale(1.1);
}
.nav-link:hover > .child-links {
  opacity: 1;
  pointer-events: all;
}
.nav-logo {
  position: relative;
  margin-right: 10px;
}
#nav.fixed .nav-logo > img {
  display: none;
}
.nav-buttons {
  margin: 10px 0px 0px 10px;
}
.nav-buttons > a {
  margin-right: 10px;
  padding: 8px;
  font-size: 20px;
  background-color: var(--secondary);
  border-radius: 50px;
}
#nav.fixed .nav-buttons > a {
  background-color: var(--accent);
}
.nav-buttons a,
.nav-buttons span {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-light);
}
#nav.fixed .nav-buttons a,
#nav.fixed .nav-buttons span {
  color: var(--secondary);
}
.nav-buttons span:first-child {
  margin-left: 8px;
}
.telephone-svg {
  width: 1.2rem;
  fill: var(--accent);
  animation: telephone-svg 1s ease infinite;
}
@keyframes telephone-svg {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-15deg);
  }
}
#nav.fixed .telephone-svg {
  fill: var(--secondary);
}
.logo-svg {
  position: absolute;
  width: 60px;
  display: block;
  transition: all 300ms ease;
}
#nav.fixed .logo-svg {
  position: static;
}
.logo-circle-svg {
  fill: var(--secondary);
  transition: all 2.5s ease;
}
#nav.fixed .logo-circle-svg {
  fill: var(--accent);
}
.logo-path-svg {
  fill: var(--accent);
}
#nav.fixed .logo-path-svg {
  fill: var(--secondary);
}
@media (max-width: 1300px) {
  .nav-container {
    width: 100%;
  }
}
@media (max-width: 1150px) {
  .nav-logo > img {
    display: none;
  }
  #nav.fixed {
    padding: 5px;
  }
  .logo-svg {
    position: static;
    margin-right: 10px;
  }
  .nav-buttons {
    flex-direction: column;
  }
  .nav-buttons > a {
    margin-bottom: 1rem;
    text-align: center;
  }
}
@media (max-width: 1100px) {
}
@media (max-width: 970px) {
  .nav-links {
    all: unset;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    padding-top: 80px;
    z-index: 10;
    width: var(--sidebar-width);
    background-color: var(--secondary);
    overflow-y: auto;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: translateX(100%);
  }

  .nav-link {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0;
    overflow-x: hidden;
  }
  .nav-link > a {
    padding: 15px 0;
    margin-right: 25px;
    cursor: pointer;
    user-select: none;
    color: var(--gray);
  }
  .nav-link.open a {
    color: var(--accent);
  }
  .nav-link > a.with-child::after {
    position: absolute;
    left: 10%;
    padding: 4px;
    transform: translateY(-25%) rotate(45deg);
  }
  .nav-link.open .with-child::after {
    color: var(--accent);
    transform: rotate(225deg) !important;
  }
  .child-link a:hover {
    transform: unset;
  }

  .child-links {
    all: unset;
    position: relative;
    display: block;
    height: 0;
    transform-origin: top;
    transform: scaleY(0);
    overflow: hidden;
    transition: all 0.4s ease-in-out;
  }
  .nav-link.open .child-links {
    height: 100%;
    transform: scaleY(1);
  }
  .child-links::after {
    display: none;
  }
  .child-link {
    width: 100%;
  }
  .child-link > a {
    color: var(--secondary) !important;
    background-color: var(--accent);
    border-radius: unset;
  }
  .child-link > a:hover {
    box-shadow: unset;
    color: var(--secondary);
  }

  #nav.fixed .nav-links {
    height: calc(100vh - 90px);
  }
  .sidebar .nav-links {
    transform: translateX(0);
  }
  #nav {
    min-height: 80px !important;
  }
  .nav-buttons {
    position: fixed;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    right: 0;
    top: 0;
    height: 80px;
    width: var(--sidebar-width);
    margin: 0;
    z-index: 10;
    background-color: var(--secondary);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
    transform: translateX(100%);
  }
  .sidebar .nav-buttons {
    transform: translateX(0);
  }
  .nav-buttons > a,
  #nav.fixed .nav-buttons > a {
    font-size: 20px;
    margin-bottom: 0;
    padding: 8px;
    height: fit-content;
    color: var(--secondary);
    background-color: var(--accent);
    border-radius: 50px;
  }
  .nav-buttons span {
    color: var(--secondary);
    background-color: var(--accent);
  }
  .telephone-svg {
    fill: var(--secondary);
  }

  #nav.fixed .nav-logo > img {
    display: none;
  }
  .nav-toggle {
    display: block;
    position: relative;
    width: 32px;
    height: 30px;
    margin-left: 10px;
    background-color: transparent;
    border: none;
  }
  .sidebar #backdrop {
    opacity: 1;
    pointer-events: all;
  }
}
</style>