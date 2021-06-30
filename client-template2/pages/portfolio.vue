<template>
  <div>
    <div class="centraliza cor-fundo-primaria my-4">
      <h1>
        <strong>{{ portfolio.titulo }}</strong>
      </h1>
      <p>Clique nas imagens para ampliar</p>
    </div>
    <div class="my-4">
      <div v-for="(lista, index) in portfolio.listas" :key="index">
        <ListaImagens
          :listas="lista"
          modal
          idModal="modal-imagens-componente-tamanho"
          @imgEscolhida="escolheImgModal"
        />
      </div>
      <b-modal
        id="modal-imagens-componente-tamanho"
        title="oie"
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      portfolio: "conteudo/portfolio",
    }),
  },
  data() {
    return {
      imgEscolhidaModal: "",
      mobile: "",
    };
  },
  methods: {
    escolheImgModal(e) {
      this.imgEscolhidaModal = e;
    },
  },
};
</script>

<style>
#modal-imagens-componente-tamanho .modal-content {
  background: transparent;
  border: none;
}
</style>
