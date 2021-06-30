<template>
  <div>
    <img width="100%" height="420px"  :src="require('~/assets/imagens/'+quemSomos.bannerSuperior.img)" :alt="quemSomos.bannerSuperior.img">
 
<TextoCentralizado :titulo="quemSomos.conteudo1.titulo" :texto="quemSomos.conteudo1.texto" />

    <div class="my-4" id="index-caixas-inferiores">
      <div
        class="relative-container-imagem-grid-inferior"
        v-for="(foto, index) in quemSomos.conteudo2.imgs"
        :key="index"
        @mouseenter="hoverGridInferior(index)"
        @mouseleave="unHoverGridInferior(index)"
      >
        <img
          :id="'relative-container-imagem-grid-inferior-img' + index"
          width="100%"
          height="300px"
          :src="require('~/assets/imagens/' + foto.img)"
          :alt="foto.img"
        />
        <div>
          <h3
            :id="'relative-container-imagem-grid-inferior-h' + index"
            class="text-center"
          >
            {{ foto.texto }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      quemSomos: "conteudo/quemSomos",
    }),
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    hoverGridInferior(id) {
      $("#relative-container-imagem-grid-inferior-h" + id).css({ opacity: "100%" });
      $("#relative-container-imagem-grid-inferior-img" + id).css({ opacity: "70%" });
    },
    unHoverGridInferior(id) {
      $("#relative-container-imagem-grid-inferior-h" + id).css({ opacity: "0%" });
      $("#relative-container-imagem-grid-inferior-img" + id).css({ opacity: "100%" });
    },
  },
};
</script>

<style>
#index-caixas-inferiores {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.relative-container-imagem-grid-inferior {
  position: relative;
  text-align: center;
  transition: 0.3s;
  color: var(--cor-secundaria-fonte);
}
.relative-container-imagem-grid-inferior h3{
  opacity: 0;
}
.relative-container-imagem-grid-inferior h3,img :hover {
  transition: 0.3s;
}
.relative-container-imagem-grid-inferior div {
  position: absolute;
  top: 8px;
  padding: 20% 30%;
}</style>
