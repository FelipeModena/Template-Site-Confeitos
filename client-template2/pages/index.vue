<template>
  <div>
    <b-carousel
      v-if="mobile != true"
      id="carousel-index-banner"
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
    <div v-else>
      <img
        class="w-100"
        :src="require('~/assets/imagens/' + index.carouselTopo[0].img)"
        alt=""
      />
      <div class="index-carousel-conteudo-texto centraliza">
        <h1>
          <strong>{{ index.carouselTopo[0].texto }}</strong>
        </h1>
        <NuxtLink class="mt-5" :to="index.carouselTopo[0].rota"
          ><button class="btn-caraousel-cor">visiste nossa Galeria</button></NuxtLink
        >
      </div>
    </div>

    <TextoCentralizado
      :titulo="index.conteudo1.titulo"
      :texto="index.conteudo1.texto"
      :btnRota="true"
    />
    <div class="d-flex px-2 py-5" id="index-img-esquerda-banner">
      <img
        class="ml-3"
        width="600px"
        :src="require('~/assets/imagens/' + index.conteudo3.img)"
        alt=""
      />
      <div class="p-4 mt-5">
        <h1>
          <strong>{{ index.conteudo3.titulo }}</strong>
        </h1>
        <p>{{ index.conteudo3.texto }}</p>
        <NuxtLink to="nossosProdutos'"
          ><button class="btn-azul-form">Saiba mais</button></NuxtLink
        >
      </div>
    </div>
    <div class="my-4" id="index-grid-book-imagens">
      <img
        v-for="(foto, index) in index.conteudo2"
        class="index-lista-grid-imagens-foto"
        :key="index"
        width="100%"
        height="290x"
        :src="require('~/assets/imagens/' + foto)"
        :alt="foto.img"
        @click="showImgInModal(foto)"
      />
    </div>
    <b-modal
      id="modal-imagens-componente-tamanho"
      :hide-header="true"
      :hide-footer="true"
      :busy="true"
    >
      <img
        class="img-fluid"
        width="400px"
        :src="'/_nuxt/assets/imagens/' + imgEscolhidaModal"
        alt=""
      />
    </b-modal>

    <div class="centraliza my-4">
      <NuxtLink to="nossosProdutos"
        ><button class="btn-azul-form">Visite nossa galeria</button></NuxtLink
      >
    </div>
    <FormsContato
      class="my-4 cor-fundo-forms py-3"
      id="index-forms-contato"
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
      mobile: false,
      imgEscolhidaModal: "tortinha.jpg",
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    showImgInModal(foto) {
      this.imgEscolhidaModal = foto;
      this.$bvModal.show("modal-imagens-componente-tamanho");
    },
  },
  mounted() {
    if (document.documentElement.clientWidth <= 850) {
      $(".mobile-display").css("display", "list-item");
      $("#index-img-esquerda-banner").removeClass("d-flex");
      this.mobile = true;
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 850) {
        $(".mobile-display-img").css("width", "100%");
        $("#index-img-esquerda-banner").removeClass("d-flex");
        $(".mobile-display").css("display", "list-item");
        this.mobile = true;
      } else {
        $(".mobile-display-img").css("width", "400px");
        $("#index-img-esquerda-banner").addClass("d-flex");
        $(".mobile-display").css("display", "flex");
        this.mobile = false;
      }
    });
  },
};
</script>

<style>
#carousel-index-banner .carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 25%;
  height: 100%;
}
.relative-container-carousel {
  position: relative;
  text-align: center;
}
.relative-container-carousel div {
  position: absolute;
  top: 8px;
  left: 110px;
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
  width: 100%;
}
.btn-caraousel-cor :hover {
  transition: 0.4s;
  background: #3a24bb;
  width: 80%;
}

#index-img-esquerda-banner {
  background: var(--cor-padrao-header-fundo);
  color: var(--cor-form-fonte);
}
#index-grid-book-imagens {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.index-lista-grid-imagens-foto {
  transition: 0.4s;
}
.index-lista-grid-imagens-foto :hover {
  transition: 0.4s;
  opacity: 30%;
  background: green;
  border: red;
  width: 400px;
}
</style>
