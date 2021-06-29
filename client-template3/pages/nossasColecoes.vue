<template>
  <div>
    <div
      v-for="(colecao, index) in nossasColecoes"
      class="py-3"
      :key="index"
      :class="mudaCorColecao(index)"
    >
      <div
        class="banner-img-texto py-4 mobile-display"
        id="banner-superior-img-esquerda-0"
      >
        <div class="d-flex align-items-center">
          <img
            class="mobile-display-img"
            :src="
              require(`~/assets/imagens/nossasColecoes/colecao` +
                index +
                '/' +
                colecao.imgPrincipal)
            "
            :alt="colecao.imgPrincipal"
          />
        </div>
        <div class="my-auto">
          <h2>{{ colecao.titulo }}</h2>
          <p v-html="colecao.texto"></p>
        </div>
      </div>
      <b-carousel
        class="carousel-botao"
        v-model="slide"
        :interval="4000"
        controls
        img-width="1024"
        img-height="220"
        style="text-shadow: 1px 1px 2px #333; height 260px"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          img-blank
          v-for="(slideColecao, indexCarousel) in colecao.imgs"
          :key="indexCarousel"
        >
          <div class="d-flex">
            <img
              v-for="(conteudoSlide, indexCarouselSlide) in slideColecao"
              :key="indexCarouselSlide"
              @click="showModalColecoes(index)"
              class="mx-2"
              width="15%"
              height="200"
              :src="
                require(`~/assets/imagens/nossasColecoes/colecao` +
                  index +
                  '/carousel/' +
                  conteudoSlide)
              "
              alt="conteudoSlide"
              v-b-modal.modal-colecoes
            />
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <b-modal
      id="modal-colecoes"
      title="oie"
      :hide-header="true"
      :hide-footer="true"
      :busy="true"
    >
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slideModal"
          :interval="slider"
          controls
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart('modal')"
          @sliding-end="onSlideEnd('modal')"
        >
          <!-- Text slides with image -->
          <div v-for="(colecao, index) in modalColecoes.imgs" :key="index">
            <b-carousel-slide
              img-blank
              v-for="(imgColecaoModal, index1) in colecao"
              :key="index1"
            >
              <img
              height="60%"
              width="300px"
                :src="requestFoto(modalColecoes.id, imgColecaoModal)"
                :alt="imgColecaoModal"
              />
            </b-carousel-slide>
          </div>
        </b-carousel>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      nossasColecoes: "conteudo/nossasColecoes",
    }),
  },
  data() {
    return {
      slide: 0,
      slideModal:1,
      sliding: null,
      modalColecoes: "",
    };
  },
  methods: {
    requestFoto(id, img) {
      return `_nuxt/assets/imagens/nossasColecoes/colecao` + id + "/carousel/" + img;
    },
    showModalColecoes(id) {
      this.modalColecoes = { imgs: this.nossasColecoes[id].imgs, id: id };
      console.log(this.modalColecoes);
    },
    mudaCorColecao(id) {
      if (id % 2 == 0) {
        return "cor-fundo-primaria";
      } else return "cor-fundo-secundaria";
    },
    getters() {
      console.log(this.nossasColecoes);
    },
    onSlideStart(slide) {
      console.log(slide);

      if (slide=="modal") {
        return;
      }
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide);
      if (slide=="modal") {
        return;
      }
      this.sliding = false;
    },
  },
  mounted() {
    if (document.documentElement.clientWidth <= 850) {
      $(".mobile-display").css("display", "list-item");
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 850) {
        $(".mobile-display-img").css("width", "100%");
        $(".mobile-display").css("display", "list-item");
        console.log("trocou");
      } else {
        $(".mobile-display-img").css("width", "400px");
        $(".mobile-display").css("display", "flex");
      }
    });
  },
};
</script>

<style>
.banner-img-texto {
  display: flex;
}
.banner-img-texto div {
  padding: 0 20px;
}
.banner-img-texto div > img {
  width: 400px;
  height: auto;
  float: right;
}
.carousel-botao span {
  background-color: #505247;
  border-radius: 20px;
  padding: 19px;
}

#modal-colecoes .modal-content {
  background: transparent;
  border: none;
}
</style>
