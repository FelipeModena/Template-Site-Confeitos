<template>
  <div>
    <div
      v-for="(produto, index) in nossosProdutos"
      :key="index"
      class="cor-fundo-primaria"
    >
      <ImgEsquerda
        :id="'img-esquerda-nossos-produtos' + index"
        v-if="index % 2 == 0"
        :conteudoTxt="produto.texto"
        :titulo="produto.titulo"
        :img="produto.imgPrincipal"
      />
      <ImgDireita
        v-else
        :id="'img-direita-nossos-produtos' + index"
        :conteudoTxt="produto.texto"
        :titulo="produto.titulo"
        :img="produto.imgPrincipal"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
mapGetters;
export default {
  computed: {
    ...mapGetters({
      nossosProdutos: "conteudo/nossosProdutos",
    }),
  },
  methods: {},
};
</script>

<style>
.nossos-produtos-grid-fotos {
  display: grid;
  grid-template-columns: 50% 50%;
}
</style>
