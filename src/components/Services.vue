<template>
  <section class="services flex-column w100 justify-center align-center">
    <header>
      <h2>خدمات ابری شرکت پارس پک</h2>
      <p>اولین ارائه‌دهنده خدمات رایانش ابری در ایران</p>
    </header>

    <section class="cards">
      <article class="card">
        <ServerCloudSVG />
        <a href="#">ابر سرور</a>
        <p>
          با ابرسرورها می‌توانید سرور با سیستم‌عامل دلخواه خود را در چند دقیقه
          انتخاب و نصب نموده و آزادانه منابع سخت‌افزاری که در نظر دارید را، در
          زمان دلخواه به سرور خود بیافزایید و تنها برای منابع مورد نیاز سرور،
          هزینه پرداخت نمایید. بیشتر بدانید
        </p>
        <div class="card-footer">
          <a href="#">بیشتر بدانید</a>
        </div>
      </article>
      <article class="card">
        <ServerHybridSVG />
        <a href="#">هایبرید سرور</a>
        <p>
          هایبرید سرورها نسل جدید و پیشرفته سرورهای اختصاصی هستند که با پنل
          قدرتمند ابری ارائه می‌شوند. در هایبرید سرورها علاوه بر ارائه سخت‌افزار
          مستقل، امکانات سخت‌افزاری ویژه‌ای نیز در نظر گرفته شده است. بیشتر
          بدانید
        </p>
        <div class="card-footer">
          <a href="#">بیشتر بدانید</a>
        </div>
      </article>
      <article class="card">
        <ServerMicroSVG />
        <a href="#">ماکرو سرور</a>
        <p>
          ماکرو سرور محصولی ویژه است که برای دریافت بالاترین کیفیت سخت‌افزاری
          طراحی شده است. در شرایطی که نیازمند سخت‌افزاری قدرتمند برای سرور خود
          هستید، ماکرو سرورها منابع سخت‌افزاری مورد نیاز را برای شما فراهم
          می‌کنند. بیشتر بدانید
        </p>
        <div class="card-footer">
          <a href="#">بیشتر بدانید</a>
        </div>
      </article>
      <article class="card">
        <HostCloud2SVG />
        <a href="#">هاست ابری</a>
        <p>
          در هاست ابری برخلاف یک هاست اشتراکی، سایت‌های پر بازدید نیز بسادگی
          می‌توانند از خدمات میزبانی استفاده کنند، بدون آنکه درگیر دغدغه‌های
          مدیریت سرور شوند. همواره تنها برای آن میزان از منابع سخت‌افزاری که
          نیاز دارید هزینه می‌پردازید و دیگر نیازی به پرداخت هزینه‌های غیر موجه،
          در ابتدای فعالیت وب سایت خود، نخواهید داشت.
        </p>
        <div class="card-footer">
          <a href="#">بیشتر بدانید</a>
        </div>
      </article>
      <article class="card">
        <CDNSVG />
        <a href="#">هاست دانلود</a>
        <p>
          بسیاری از مدیران سایت‌های دانلود و یا سایت‌هایی که با ترافیک بالایی
          برای به اشتراک‌گذاری فایل‌های خود روبرو هستند، عمدتا با مشکلاتی مانند
          هزینه‌های گزاف زیرساختی و یا مصرف بالای منابع سخت‌افزاری روبرو
          می‌شوند. از همین رو پارس‌پک با معرفی فضای هاست دانلود برای این دسته از
          کاربران، محصول مناسبی را پیش‌بینی نموده است. بیشتر بدانید
        </p>
        <div class="card-footer">
          <a href="#">بیشتر بدانید</a>
        </div>
      </article>
    </section>
  </section>
</template>

<script>
import ServerCloudSVG from "../assets/img/server-cloud.svg";
import ServerHybridSVG from "../assets/img/server-hybrid.svg";
import ServerMicroSVG from "../assets/img/server-micro.svg";
import CDNSVG from "../assets/img/cdn.svg";
import HostCloud2SVG from "../assets/img/host-cloud2.svg";
export default {
  components: {
    ServerCloudSVG,
    ServerHybridSVG,
    ServerMicroSVG,
    CDNSVG,
    HostCloud2SVG,
  },
};
</script>

<style scoped>
.services {
  background: linear-gradient(
    to bottom,
    rgba(214, 238, 255, 0.15) 0%,
    #d6eeff 100%
  );
  padding: 70px 20px;
}
header {
  text-align: center;
  word-spacing: -4px;
}
header > h2 {
  color: var(--accent);
  font-size: 20px;
  margin-bottom: 1rem;
}
header > p {
  color: var(--gray);
}
.cards {
  max-width: 1000px;
  display: flex;
  margin-top: 5rem;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  width: 20%;
  display: flex;
  position: relative;
  border-radius: 10px;
  flex-grow: 0.5;
  margin: 10px;
  padding: 30px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.35s ease;
  overflow: hidden;
  background-color: var(--secondary);
}
.card:hover {
  box-shadow: 0 10px 30px 0 rgba(0, 91, 159, 0.2);
}
.card > a {
  margin: 1.2rem 0;
  font-size: 18px;
  color: var(--accent);
}
.card > p {
  font-size: 14px;
  color: var(--gray);
  text-align: justify;
}
.card > svg {
  width: 65%;
}
.card-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  opacity: 0;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.card:hover .card-footer {
  opacity: 1;
  background: linear-gradient(
    to top,
    #fff 0%,
    #fff 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

.card-footer > a {
  color: var(--secondary);
  padding: 10px 15px;
  background-color: var(--accent);
  border-radius: 50px;
  transition: all 0.3s ease;
}
.card-footer > a:hover {
  background-color: var(--primary);
  transform: scale(1.1);
}

@media (max-width: 750px) {
  .card {
    width: 25%;
  }
  .card-footer {
    position: static;
    height: 15%;
    opacity: 1;
  }
}
@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}

.server-hybrid-svg .st0 {
  fill: #c6e6ff;
}
.server-hybrid-svg .st1 {
  fill: #30a3d1;
}
.server-hybrid-svg .st2 {
  fill: #005b9f;
}
.server-hybrid-svg .st3 {
  fill: #21e2e2;
}
.server-hybrid-svg .st4 {
  fill: #0e71bb;
}
.server-hybrid-svg .st5 {
  fill: #52acea;
}
.server-hybrid-svg .st6 {
  fill: #ffbc98;
}
.server-hybrid-svg .st7 {
  fill: none;
}
.server-hybrid-svg .st8 {
  fill: none;
  stroke: #ffbc98;
  stroke-width: 2;
}
.server-hybrid-svg .st9 {
  fill: #288ed9;
}
.server-hybrid-svg .st10 {
  fill: #137fcf;
}
.server-hybrid-svg .st11 {
  fill: #d6eeff;
}
.server-hybrid-svg .st12 {
  fill: #ffffff;
}
.server-hybrid-svg .st13 {
  fill: none;
  stroke: #21e2e2;
  stroke-width: 2;
}

.server-micro-svg .st0 {
  fill: #c6e6ff;
}
.server-micro-svg .st1 {
  fill: #30a3d1;
}
.server-micro-svg .st2 {
  fill: #005b9f;
}
.server-micro-svg .st3 {
  fill: #21e2e2;
}
.server-micro-svg .st4 {
  fill: #0e71bb;
}
.server-micro-svg .st5 {
  fill: #52acea;
}
.server-micro-svg .st6 {
  fill: #ffbc98;
}
.server-micro-svg .st7 {
  fill: none;
}
.server-micro-svg .st8 {
  fill: none;
  stroke: #ffbc98;
  stroke-width: 2;
}
.server-micro-svg .st9 {
  fill: #80c9ff;
}
.server-micro-svg .st10 {
  fill: #288ed9;
}
.server-micro-svg .st11 {
  fill: #137fcf;
}
.server-micro-svg .st12 {
  fill: #d6eeff;
}
.server-micro-svg .st13 {
  fill: #ffffff;
}
.server-micro-svg .st14 {
  fill: none;
  stroke: #21e2e2;
  stroke-width: 2;
}

.cdn-svg .st0 {
  fill: #c6e6ff;
}
.cdn-svg .st1 {
  fill: none;
  stroke: #005b9f;
  stroke-width: 5;
}
.cdn-svg .st2 {
  fill: #288ed9;
}
.cdn-svg .st3 {
  fill: #21e2e2;
}
.cdn-svg .st4 {
  fill: #0e71bb;
}
.cdn-svg .st5 {
  fill: none;
  stroke: #ffbc98;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}
.cdn-svg .st6 {
  fill: #30a3d1;
  stroke: #ffbc98;
  stroke-width: 3;
  stroke-linecap: round;
}
.cdn-svg .st7 {
  fill: none;
}
.cdn-svg .st8 {
  fill: #80c9ff;
}
.cdn-svg .st9 {
  fill: none;
  stroke: #288ed9;
  stroke-width: 2;
}
.cdn-svg .st10 {
  fill: none;
  stroke: #21e2e2;
  stroke-width: 2;
}

.cloud2-svg .st0 {
  fill: #c6e6ff;
}
.cloud2-svg .st1 {
  fill: #0e71bb;
}
.cloud2-svg .st2 {
  fill: #005b9f;
}
.cloud2-svg .st3 {
  fill: #ffbc98;
}
.cloud2-svg .st4 {
  fill: #80c9ff;
}
.cloud2-svg .st5 {
  fill: #21e2e2;
}
.cloud2-svg .st6 {
  fill: #52acea;
}
.cloud2-svg .st7 {
  fill: #288ed9;
}
.cloud2-svg .st8 {
  fill: #137fcf;
}
.cloud2-svg .st9 {
  fill: #d6eeff;
}
.cloud2-svg .st10 {
  fill: #ffffff;
}
</style>