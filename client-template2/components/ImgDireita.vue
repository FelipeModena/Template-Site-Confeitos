<template>
  <div class="my-5 d-flex img-direita-componente-id">
    <div class="px-5 pt-5">
      <h2>
        <strong>{{ titulo }}</strong>
      </h2>
      <p>{{ conteudoTxt }}</p>
    </div>
    <div class="pr-5" >
      <img height="250px" :src="require('~/assets/imagens/' + img)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mobile: false,
    img: { type: String },
    titulo: { type: String},
    conteudoTxt: { type: String },
  },
    mounted() {
    if (document.documentElement.clientWidth <= 1200) {
        $(".img-direita-componente-id").addClass('d-flex-inline ').removeClass('d-flex ');
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 1200) {
        $(".img-direita-componente-id").addClass('d-flex-inline ').removeClass('d-flex ');
      } else {
        $(".img-direita-componente-id").addClass('d-flex ').removeClass('d-flex-inline ');

      }
    });
  },
};
</script>

<style>

</style>
