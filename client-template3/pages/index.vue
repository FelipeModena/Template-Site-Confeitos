<template>
  <div>
    <header id="header-index-layout" class="">
      <div class="container-index-solo">
        <div id="index-logo-container">
          <img width="6%" src="~/assets/icones/imagem.png" alt="" />
          <span class="logotipo-cor">Logotipo</span>
        </div>
        <div class="d-inline-flex">
          <NuxtLink
            :to="headerOp.rota"
            v-for="(headerOp, index) in headerOpcoes"
            :key="index"
          >
            <h5 class="mx-4" :id="`nav-opcao` + index">
              {{ headerOp.titulo }}
            </h5>
          </NuxtLink>
        </div>
      </div>
    </header>
    <main>
      <b-carousel
        id="carousel-index-1"
        class="carousel-botao"
        v-model="slide"
        :interval="0"
        indicators
        img-width="1024"
        img-height="400"
        style="text-shadow: 1px 1px 2px #333; height 260px"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-blank
          v-for="(slideColecao, index4) in index.carouselTopo"
          :key="index4"
        >
          <img
            class="w-100"
            width="100%"
            :src="require(`~/assets/imagens/index/${slideColecao}`)"
            alt="conteudoSlide"
          />
        </b-carousel-slide>
      </b-carousel>

      <div class="my-4">
        <div class="d-inline-flex px-5" id ="index-caixa-colecoes">
          <NuxtLink :to="`nossasColecoes?colecao=${index}`"
            class="mx-3 img-responsiva-caixas-colecoes my-2 container cor-fundo-primaria"
            :style="`background:url(${require('~/assets/imagens/nossasColecoes/colecao' +
              index +
              '/' +
              colecoes.imgPrincipal)})`"
            v-for="(colecoes, index) in nossasColecoes"
            :key="index"
          >
            <h2 class="text-center centered py-auto">{{ colecoes.titulo }}</h2>
          </NuxtLink>
        </div>
        <div class="container my-1">
          <NuxtLink to="nossasColecoes"
            ><button class="btn-transparente-primaria">
              Conheça todas as coleções
            </button></NuxtLink
          >
        </div>
      </div>

      <div class="my-3 cor-fundo-primaria" id="index-caixa-final-informativa">
        <div>
          <img src="~/assets/imagens/index/imgCarousel3.jpg" alt="" />
        </div>
        <div id="index-caixa-final-informativa-texto" class="py-5 px-3">
          <h3 class="mb-3">{{ index.saibaMaisInferior.titulo }}</h3>
          <p class="text-left" v-html="index.saibaMaisInferior.texto"></p>
          <div class="container text-center">
            <NuxtLink to="/nossasColecoes"
              ><button class="btn-transparente-secundaria">Saiba mais</button></NuxtLink
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "indexLayout",
  computed: {
    ...mapGetters({
      index: "conteudo/index",
      nossasColecoes: "conteudo/nossasColecoes",
      headerOpcoes: "conteudo/headerOpcoes",
    }),
  },
  data() {
    return {
      array: [
        [1, 2, 3, 4, 5],
        [11, 12, 13, 14, 15],
      ],
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  mounted() {
    if (document.documentElement.clientWidth <= 850) {
      console.log("menor");
    }

    addEventListener("resize", () => {
      console.log(document.documentElement.clientWidth);
      if (document.documentElement.clientWidth <= 850) {
        $("#index-caixa-final-informativa").css("display", "list-item");
        $("#index-caixa-colecoes").removeClass('d-inline-flex').css("display","grid").css("grid-template-columns", "auto auto" ).css("grid-gap", "12px")
      } else {
        console.log("maior");
        $("#index-caixa-final-informativa").css("display", "grid");
        $("#index-caixa-colecoes").addClass('d-inline-flex')

      }
    });
  },
};
</script>

<style>
#header-index-layout {
  position: absolute;
  width: 100%;
  z-index: 20;
  background-color: var(--cor-padrao-header-transparente);
}
#index-logo-container span,
img {
  vertical-align: middle;
}

.container-index-solo {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#carousel-index-1 ol {
  margin-bottom: 38px;
}
#carousel-index-1 ol > li {
  width: 10%;
}
#index-caixa-final-informativa {
  display: grid;
  grid-template-columns: auto auto;
}
.img-responsiva-caixas-colecoes {
  transition: 0.6s;
  background-repeat: no-repeat !important;
  background-size: contain;
  background-position: center;
  height: 280px;
  width: 104%;
}
.img-responsiva-caixas-colecoes:hover {
  cursor: pointer;
  opacity: 70%;
  transition: 0.6s;
}
</style>
