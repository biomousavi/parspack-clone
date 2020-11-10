<template>
      <div class="container">
        <div class="div"></div>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 102.3 102.5"
          style="enable-background: new 0 0 102.3 102.5"
          xml:space="preserve"
        >
          <circle class="st0" cx="51" cy="51.3" r="51.2" />
          <path
            class="st1"
            d="M91.8,46.7L69.2,24.1L51,42.2l0,0L32.9,24.1L10.3,46.7l18.1,18.1l0,0L51,87.5l22.6-22.7l0,0L91.8,46.7z
	M69.2,33.1l13.6,13.6L69.2,60.3L55.6,46.7L69.2,33.1z M32.9,33.1l13.6,13.6L32.9,60.3L19.3,46.7L32.9,33.1z M51,78.4L37.5,64.9
	L51,51.3l13.6,13.6L51,78.4z"
          />
        </svg>
      </div>
</template>

<script>
import { SVG } from "@svgdotjs/svg.js";

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  methods: {
    onbtn() {
      document
        .querySelector("#SVGmator__ac37cw1604614305414")
        .contentWindow.postMessage("play", "*");
    },
  },
  mounted() {
    console.log();

    let fill = "#333";
    const layer_1 = document.getElementById("Layer_1");
    const PC = SVG("#Layer_1");
    const PP = SVG(".st1");
    PC.width("30%");
    PC.move(100, 50).fill("#f06");
    PP.fill("#fff");

    window.addEventListener("scroll", () => {
      if (this.$inVP(layer_1)) {
        PC.animate({ ease: "-", duration: 900 }).move(300, 400).fill(fill);
      }
    });
  },
};
</script>

<style >
.div {
  height: 150vh;
  width: 100%;
}

.container {
  width: 30vw;
}
</style>
