<template>
  <div class="my-5  d-flex img-esquerda-componente-id">
    <div class="pl-4 ">
      <img height="250px" :src="require('~/assets/imagens/' + img)" alt="" />
    </div>
    <div class="px-5 pt-5">
      <h2>
        <strong>{{ titulo }}</strong>
      </h2>
      <p>{{ conteudoTxt }}</p>
      <NuxtLink v-if="btnRota!=''" :to='btnRota'><button  class="btn-azul"> Saiba mais</button></NuxtLink>
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
    btnRota:{default:''}
  },
      mounted() {
    if (document.documentElement.clientWidth <= 1200) {
      console.log("mobile laytou");
        $(".img-esquerda-componente-id").addClass('d-flex-inline ').removeClass('d-flex ');
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 1200) {
        $(".img-esquerda-componente-id").addClass('d-flex-inline ').removeClass('d-flex ');
        console.log("mobile laytou");
      } else {
        $(".img-esquerda-componente-id").addClass('d-flex ').removeClass('d-flex-inline ');

      }
    });
  },
};
</script>

<style>
</style>
