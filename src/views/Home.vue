<template>
  <div class="home-page w100 rtl flex-column align-center">
    <Header />
    <Showcase />
    <Services />
    <Features />
    <Testimonials />
    <Weblog />
    <Statistics />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Weblog from "../components/Weblog";
import Statistics from "../components/Statistics.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Showcase,
    Services,
    Features,
    Testimonials,
    Weblog,
    Statistics,
    Footer,
  },
};
</script>

<style scoped>
.home-page {
  overflow-x: hidden;
  position: relative;
}
</style>
