<template>
  <section class="testimonials w100 flex-column align-center">
    <h2>تعدادی از مشتریان ما در ۱۰ سال گذشته</h2>
    <p>قدردان اعتمادتان هستیم و منسجم‌تر از دیروز تلاش می‌کنیم</p>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img src="../assets/img/avatar1.png" alt="" />
        <div class="slider-text">
          <p class="name">محمد نصیری</p>
          <p class="role">بنیانگذار توسینسو</p>
          <p class="text">
            در یک جمله نمیشه پارس پک رو خلاصه کرد ، طی بیش از ۴ سال تجربه همکاری
            میتونم صداقت ، پشتیبانی ، حمایت ، تعهد و دانش فنی بالا رو از جمله
            مهمترین فاکتورهای انتخاب پارس پک به عنوان سرویس دهنده هاستینگ
            اینترنتی عنوان کنم ، خوشحالم که چنین مجموعه با کیفیت خصوصی در ایران
            هست و می تونم تجربه استفاده از خدماتشون رو داشته باشم
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/avatar4.jpg" alt="" />
        <div class="slider-text">
          <p class="name">محمدباقر تبریزی</p>
          <p class="role">بنیانگذار کوئرا</p>
          <p class="text">
            در Quera به انواع مختلف سرور (مجازی، فیزیکی، هیبرید و کاستوم) نیاز
            داشتیم که همکاری پارس‌پک در فراهم کردن همه‌ی نیازهای ما فوق‌العاده
            بود. زمانی که همه‌ی سرورها (بالغ بر ۱۳ سرور) را به پارس‌پک منتقل
            کردیم، اوایل کار Quera بود و در وضعیت مالی مناسبی نبودیم که پارس‌پک
            با حمایت کامل کمک کرد که موضوع سرورها که از مهم‌ترین چالش‌های ما
            بود، چه از لحاظ کیفیت خدمات و چه از لحاظ مادی، از لیست دغدغه‌های ما
            خارج شود و فقط به رشد کسب و کارمان بپردازیم.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/avatar3.jpg" alt="" />
        <div class="slider-text">
          <p class="name">قاسم رادمان</p>
          <p class="role">مدیر عامل آیدی پی</p>
          <p class="text">
            وقتی یه سرویس بانکی و مالی رو میخواهید راه اندازی کنید، یکی از
            مهمترین موضوعات برای شما امنیت، کیفیت زیر ساخت و آپ تایم بودنه. ما
            در آیدی پی این نگرانی را با وجود پارس پک فراموش کردیم و خیالمون
            راحته، چون نزدیک ۱۰ ساله داریم از خدمات شون استفاده میکنیم و همیشه
            راضی بودیم.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/avatar2.png" alt="" />
        <div class="slider-text">
          <p class="name">محسن صحافی</p>
          <p class="role">فارنت</p>
          <p class="text">
            در نزدیک به ده سالی که از ابتدای راه‌اندازی فارنت تجربه کردیم
            روزهایی که میهمان پارس‌پک بوده‌ایم بدون شک کم استرس‌ترین و بهترین
            میزبانی را در این سال‌ها تجربه کرده‌ایم. پشتیبانی صمیمانه و تمام وقت
            پارس‌پک کاملا مطابق انتظار و حتی بالاتر از انتظار ما بوده و قابل
            اعتماد بودن پارس‌پک مزیتی بوده که همواره باعث شده استفاده از
            سرویس‌های این مجموعه را به سایرین پیشنهاد کنیم.
          </p>
        </div>
      </swiper-slide>
    </swiper>
    <a href="">مشاوره با کارشناسان <ArrowLeftSVG /> </a>
  </section>
</template>

<script>
import ArrowLeftSVG from "../assets/img/ArrowLeft.svg";

export default {
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  components: {
    ArrowLeftSVG,
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
.testimonials {
  background: linear-gradient(20deg, #288ed9 0%, #137fcf 100%);
}
h2 {
  margin: 5rem 0 2rem 0;
  font-size: 23px;
  word-spacing: -5px;
  color: var(--secondary);
}
.testimonials > p {
  font-size: 16px;
  color: #98cdf2;
}
.swiper-container {
  height: 200px;
  margin: 2rem 0;
  margin: 2rem 0;
  overflow: unset;
}
.swiper-slide {
  width: 510px;
  display: flex;
  padding: 0 15px;
  background-color: var(--secondary);
  border-top-right-radius: 90px;
  border-bottom-right-radius: 90px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
}
.swiper-slide > img {
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-left: 10px;
  align-self: center;
  opacity: 0;
  transition: all 0.8s ease;
}
.slider-text .name {
  color: var(--accent);
  font-size: 19px;
  margin-top: 12px;
  transition: all 1s ease;
  transform: translateY(-25px);
}
.slider-text .role {
  color: var(--gray);
  font-size: 14px;
  transition: all 1s ease;
}
.slider-text .text {
  font-size: 13px;
  word-spacing: -4px;
  text-align: justify;
  line-height: 19px;
  width: 100%;
  height: 130px;
  overflow: hidden;
}

.swiper-slide-active.swiper-slide {
  opacity: 1;
}
.swiper-slide-active > img {
  opacity: 1;
  transform: translateX(30px);
}
.swiper-slide-active .slider-text .name {
  transform: translateY(0);
}
svg {
  width: 12px;
  fill: var(--accent);
  transition: all 0.3s ease;
}
a {
  color: var(--accent);
  background-color: var(--secondary);
  padding: 15px;
  border-radius: 40px;
  margin: 2rem 0;
}
a:hover svg {
  transform: translateX(-5px) scale(1.2);
}
@media (max-width: 610px) {
  .swiper-slide {
    width: 80vw;
  }
}
@media (max-width: 510px) {
  h2 {
    font-size: 19px;
  }
  .testimonials > p {
    font-size: 12px;
  }
}
</style>