<template>
  <section class="features">
    <article>
      <img src="@/assets/img/time-matters.png" alt="time-matters" />
      <div>
        <h2>می‌دانیم ثانیه‌ها برایتان اهمیت دارند</h2>
        <p>
          اگر بررسی راهکارها شما را خسته می‌کند و یا آن چیزی را که نیاز دارید،
          اینجا نمی‌بینید، کافی است اشاره کنید تا کارشناسان ما با شما تماس
          بگیرند.
        </p>
        <div class="footer">
          <a href=""> شروع کنید <ArrowLeftSVG /> </a>
          <a href="">مشاوره با کارشناس</a>
        </div>
      </div>
    </article>

    <article>
      <div>
        <h2>در سختی ها پشتیبان شما هستیم</h2>
        <p>
          تیم پارس‌پک به صورت ۲۴ ساعته در تمامی روزهای هفته، پاسخ‌گو و در کنار
          شما است. برای تسریع در امر پاسخگویی، می‌توانید از سیستم تیکتینگ برای
          ارتباط با کارشناسان پشتیبانی استفاده نمایید.
        </p>
        <div class="footer">
          <a href=""> شروع کنید <ArrowLeftSVG /> </a>
          <a href="">مشاوره با کارشناس</a>
        </div>
      </div>
      <SupportSVG />
    </article>
  </section>
</template>

<script>
import ArrowLeftSVG from "../assets/img/ArrowLeft.svg";
import SupportSVG from "../assets/img/support.svg";

export default {
  components: {
    ArrowLeftSVG,
    SupportSVG,
  },
};
</script>

<style scoped>
.features {
  max-width: 1100px;
}

article {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 3rem 0;
}
article > img,
.support-svg {
  width: 40%;
}
article > div {
  width: 40%;
}
h2 {
  font-size: 23px;
  color: var(--accent);
}
p {
  margin: 2rem 0;
  font-size: 16px;
  color: var(--gray);
}
svg:not(.support-svg) {
  width: 12px;
  fill: var(--secondary);
  transition: all 0.3s ease;
}

a:last-child {
  color: var(--gray);
}

a:first-child {
  background-color: var(--accent);
  color: var(--secondary);
  padding: 10px;
  border-radius: 40px;
  margin-left: 2rem;
}

a:first-child:hover svg {
  transform: translateX(-5px) scale(1.2);
}
@media (max-width: 950px) {
  article:first-child {
    flex-direction: column;
  }
  article {
    flex-direction: column-reverse;
  }
  article > img,
  .support-svg {
    width: 70%;
    margin: 3rem 0;
  }
  article > div {
    width: 80%;
  }
}

@media (max-width: 620px) {
h2 {
  font-size: 19px;
  word-spacing: -5px;
}
p {
  margin: 2rem 0;
  font-size: 16px;
  color: var(--gray);
}
  }

.cls-1 {
  fill: url(#linear-gradient);
}

.cls-2 {
  fill: #137fcf;
}

.cls-3 {
  fill: url(#linear-gradient-2);
}

.cls-4 {
  fill: #0e71bb;
}

.cls-5 {
  fill: #152735;
}

.cls-6 {
  fill: #f0d2b9;
}

.cls-7 {
  fill: #30a3d1;
}

.cls-8 {
  fill: #1f364c;
}

.cls-9 {
  fill: url(#linear-gradient-3);
}

.cls-10 {
  fill: #004f89;
}

.cls-11 {
  fill: #005b9f;
}

.cls-12 {
  fill: #ffe7cb;
}

.cls-13 {
  fill: #f1d2b7;
}

.cls-14 {
  fill: #288ed9;
}

.cls-15,
.cls-21,
.cls-22,
.cls-23,
.cls-26 {
  fill: none;
}

.cls-15 {
  stroke: #005b9f;
}

.cls-15,
.cls-21,
.cls-22,
.cls-23 {
  stroke-width: 2px;
}

.cls-16,
.cls-25 {
  fill: #fff;
}

.cls-17 {
  fill: #d6eeff;
}

.cls-18 {
  fill: #21e2e2;
}

.cls-19 {
  fill: #ffbc98;
}

.cls-20 {
  fill: url(#linear-gradient-6);
}

.cls-21 {
  stroke: #ffbc98;
}

.cls-21,
.cls-22,
.cls-23,
.cls-25 {
  stroke-miterlimit: 10;
}

.cls-22,
.cls-25,
.cls-26 {
  stroke: #fff;
}

.cls-23 {
  stroke: #52acea;
}

.cls-24 {
  fill: #52acea;
}

.cls-26 {
  opacity: 0.2;
}

.cls-27 {
  filter: url(#Union_11);
}
</style>