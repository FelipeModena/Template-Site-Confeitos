<template>
  <div>
    <div>
      <img
        class="banner-superior"
        :src="require(`~/assets/imagens/quemSomos/${quemSomos.bannerSuperior.img}`)"
        alt="bannerSuperior.png"
      />
    </div>
    <div class="cor-fundo-primaria banner-img-texto py-4" id="banner-img-esquerda">
      <div class="d-flex align-items-center" v-if="hideImgs == false">
        <img
          :src="require(`~/assets/imagens/quemSomos/${quemSomos.bannerImgEsquerda.img}`)"
          :alt="quemSomos.bannerImgEsquerda.img"
        />
      </div>
      <div class="my-auto">
        <span v-html="quemSomos.bannerImgEsquerda.texto"></span>
      </div>
    </div>
    <div>
      <img
        class="banner-superior"
        :src="require(`~/assets/imagens/quemSomos/${quemSomos.bannerMeio.img}`)"
        alt="bannerSuperior.png"
      />
    </div>
    <div class="cor-fundo-primaria banner-img-texto py-4" id="banner-img-direita">
      <div class="my-auto">
        <span v-html="quemSomos.bannerImgDireita.texto"></span>
      </div>
      <div class="d-flex align-items-center" v-if="hideImgs == false">
        <img
          :src="require(`~/assets/imagens/quemSomos/${quemSomos.bannerImgDireita.img}`)"
          alt="quemSomos.bannerImgDireita.img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      hideImgs: false,
      teste: "teste.jpg",
    };
  },
  methods: {
    getters() {
      console.log(this.quemSomos);
    },
    teste1() {
      return this.teste;
    },
  },
  computed: {
    ...mapGetters({
      quemSomos: "conteudo/quemSomos",
    }),
  },

  mounted() {
    if (document.documentElement.clientWidth <= 700) {
      this.hideImgs = true;
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 700) {
        this.hideImgs = true;
      } else {
        this.hideImgs = false;
      }
    });
  },
};
</script>

<style scoped>
.banner-superior {
  width: 100%;
  height: 300px;
}
.banner-img-texto {
  display: flex;
}
.banner-img-texto div {
  padding: 0 20px;
}
.banner-img-texto div > img {
  width: 300px;
  height: auto;
  float: right;
}
</style>
