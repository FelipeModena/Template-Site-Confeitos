<template>
  <div>
    <b-carousel
    v-if="mobile!=true"
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      label-indicators="asdas"
      img-width="1024"
      img-height="233"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        :id="'teste' + index"
        v-for="(listaCarousel, index) in index.carouselTopo"
        :key="index"
      >
        <template #img>
          <div class="relative-container-carousel">
            <img
              class="w-100"
              height="450px"
              :src="require('~/assets/imagens/' + listaCarousel.img)"
              :alt="listaCarousel.img"
            />
            <div class="p-4 my-5 index-carousel-conteudo-texto">
              <h1>{{ listaCarousel.texto }}</h1>
              <NuxtLink :to="listaCarousel.rota"
                ><button class="btn-caraousel-cor">
                  visiste nossa Galeria
                </button></NuxtLink
              >
            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  <img v-else class="w-100" :src="require('~/assets/imagens/'+index.carouselTopo[0].img)" alt="">
    <TextoCentralizado
      :titulo="index.conteudo1.titulo"
      :texto="index.conteudo1.texto"
      :btnRota="true"
    />

    <ImgEsquerda
    class="cor-fundo-secundaria p-3"
      :id="'img-esquerda-nossos-produtos' + index.conteudo3.titulo"
      :conteudoTxt="index.conteudo3.texto"
      :titulo="index.conteudo3.titulo"
      :img="index.conteudo3.img"
      :btnRota="'nossosProdutos'"
    />

    <div class="my-4" id="index-grid-book-imagens">
      <img
        v-for="(foto, index) in index.conteudo2"
        :key="index"
        width="100%"
        height="290x"
        :src="require('~/assets/imagens/' + foto)"
        :alt="foto.img"
      />
    </div>
    <div class="centraliza my-4">
      <NuxtLink to="nossosProdutos"
        ><button class="btn-azul-form">Visite nossa galeria</button></NuxtLink
      >
    </div>
    <FormsContato
      :ativo="index.forms.ativo"
      :listaIputs="index.forms.inputs"
      :mensagem="index.forms.mensagem"
      :corFundo="true"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      index: "conteudo/index",
    }),
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      mobile:false,
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
      $(".mobile-display").css("display", "list-item");
      this.mobile=true;
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 850) {
        $(".mobile-display-img").css("width", "100%");
        $(".mobile-display").css("display", "list-item");
      this.mobile=true;
      } else {
        $(".mobile-display-img").css("width", "400px");
        $(".mobile-display").css("display", "flex");
      this.mobile=false;
        
      }
    });
  },
};
</script>

<style>
.relative-container-carousel {
  position: relative;
  text-align: center;
}
.relative-container-carousel div {
  position: absolute;
  top: 8px;
  left: 50px;
  width: 400px;
  height: 500px;
}

.index-carousel-conteudo-texto {
  color: #890d00;
}

.btn-caraousel-cor {
  background: #890d00;
  opacity: 90%;
  color: white;
  transition: 0.4s;
  border: 2px solid #890d00;
  padding: 12px;
  width: 70%;
}
.btn-caraousel-cor :hover {
  opacity: 40%;
  transition: 0.4s;
}
#index-grid-book-imagens {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
</style>
