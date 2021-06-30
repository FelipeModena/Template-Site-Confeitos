<template>
  <div class="my-4 centraliza cor-fundo-primaria">
    <img  v-if="imgNome!=''" :src="require('~/assets/imagens/'+imgNome)" :alt="imgNome">
    <h2>{{ titulo }}</h2>
    <p>{{ texto }}</p>
    <NuxtLink :to="rota ||  'quemSomos'"
      ><button v-if="btnRota==true" class="btn-azul-form">Leia mais</button></NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: {
    titulo: "",
    texto: "",
    rota: "",
    btnRota:{default:false},
    img:{default:false},
    imgNome:{default:''}
  },
};
</script>

<style scoped></style>
