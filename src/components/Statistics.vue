<template>
  <section class="statistics flex-column align-center w100">
    <header>
      <h2>انتقال داده در سراسر جهان</h2>
      <p>بیش از ۱۰۰ ترابایت انتقال داده بصورت روزانه در سراسر جهان</p>
    </header>
    <World />
    <div class="iran-spot"></div>
  </section>
</template>

<script>
import World from "../assets/img/world.svg";
export default {
  components: {
    World,
  },
};
</script>

<style scoped>
.statistics {
  position: relative;
  background: linear-gradient(to bottom, #288ed9 0%, #106fb6 50%, #004c84 100%);
}
header {
  text-align: center;
  word-spacing: -4px;
}
header > h2 {
  color: var(--secondary);
  font-size: 20px;
  margin-top: 5rem;
}
header > p {
  color: #98cdf2;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
svg {
  width: 80%;
  margin: 4rem 0;
  animation: world-svg 5s  ease infinite ;
}

@keyframes world-svg {
  100%, 0% {
    transform: scale(1);
  }
  50%{
    transform: scale(1.03);

  }
}
.world-line {
  stroke-width: 1;
  stroke-dasharray: 100;
  animation: world-line 30s infinite 3s linear;
}
@keyframes world-line {
  to {
    stroke-dashoffset: 800;
  }
}
</style>