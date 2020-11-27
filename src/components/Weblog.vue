<template>
  <section class="weblog">
    <header>
      <h2>وبلاگ پارس پک</h2>
      <p>اخبار و مقالات آموزشی هاست و سرور در وبلاگ پارس پک</p>
    </header>
    <div class="articles flex-row">
      <article class="article trans flex-column">
        <img src="../assets/img/article3.jpg" alt="article-image" />
        <a href="">آشنایی با خوشه‌بندی پایگاه داده و کاربردهای آن</a>
        <p class="text">
          پایگاه‌ داده یا همان دیتا‌‌بیس‌(Database) یکی از بخش‌های مهم در
          برنامه‌نویسی و ساخت نرم‌افزار است که وظیفه‌ی ذخیره و بازیابی اطلاعات
          را برعهده دارد. پ...
        </p>
        <p class="date">19 مهر 1399</p>
        <div class="card-footer">
          <a href="">بیشتر بخوانید</a>
        </div>
      </article>
      <article class="article trans flex-column">
        <img src="../assets/img/article1.jpg" alt="article-image" />
        <a href="">با بهترین ابزارهای تولید محتوا آشنا شوید!</a>
        <p class="text">
          این روزها ویروس کرونا، کسب‌و‌کارهای سنتی را تحت‌ تاثیر قرار‌داده و
          فعالیت بسیاری از این مشاغل را با مشکل مواجه‌ کرده است. در‌عوض
          کسب‌و‌کارهای آنلاین، ...
        </p>
        <p class="date">19 مهر 1399</p>
        <div class="card-footer">
          <a href="">بیشتر بخوانید</a>
        </div>
      </article>
      <article class="article trans flex-column">
        <img src="../assets/img/article2.jpg" alt="article-image" />
        <a href="">رویداد Cloud Talk</a>
        <p class="text">
          CloudTalk رویدادی آنلاین است که با حضور بیش از ۲۰۰۰ نماینده از
          شرکت‌های مطرح حوزه‌ی فناوری ابری برگزار می‌گردد. این رویداد در سال
          ۲۰۲۰، در روز سه‌شنبه...
        </p>
        <p class="date">19 مهر 1399</p>
        <div class="card-footer">
          <a href="">بیشتر بخوانید</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  text-align: center;
  word-spacing: -4px;
}
header > h2 {
  color: var(--accent);
  font-size: 20px;
  margin-top: 5rem;
}
header > p {
  color: var(--gray);
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.articles {
  max-width: 1200px;
  margin: 4rem 0;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
article {
  width: 29%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 7px 20px 0 #f2f2f2;
}
article > img {
  width: 100%;
  margin-bottom: 1.2rem;
}
article > a,
article > p {
  width: calc(100% - 20px);
  align-self: center;
}
article > a {
  word-spacing: -5px;
  margin-bottom: 2.5rem;
  color: gray;
}

.text {
  color: var(--gray);
  padding-bottom: 1rem;
  word-spacing: -5px;

  font-size: 14px;
  border-bottom: solid 1px #d3d3d3;
}
.date {
  color: var(--gray);
  font-size: 14px;
  margin-bottom: 1rem;
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
article:hover {
  transform: scale(1.02);
}
article:hover > a {
  color: var(--accent);
}
article:hover .card-footer {
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

@media (max-width: 950px) {
  article {
    width: 40%;
    margin-bottom: 3rem;
  }
}
@media (max-width: 750px) {
  article {
    width: 60%;
  }
  article > a {
    font-size: 15px;
  }
  .card-footer {
    position: static;
    height: 15%;
    opacity: 1;
    margin-bottom: 1rem;
  }
}
@media (max-width: 450px) {
  article {
    width: 80%;
  }
}
@media (max-width: 450px) {
  article > a {
    font-size: 14px;
  }
}
</style>