<template>
  <div class="px-4 my-4 cor-fundo-primaria">
    <div class="row">
      <FormsContato
        id="contato-forms-contato"
        class="col"
        :ativo="index.forms.ativo"
        :listaIputs="index.forms.inputs"
        :mensagem="index.forms.mensagem"
      />
      <div class="col">
        <h1 v-if="mobile" class="ml-5 text-center">
          <strong>Fale conosco e faça seu orçamento!</strong>
        </h1>
        <ListaInformativa
          id="contato-lista-informativa"
          class="p-5 col w-100 text-center"
          :contato="dadosCadastrais"
        />
      </div>
    </div>

    <div
      class="my-4 mx-3"
      v-html="contato.iframeMapaGoogle"
      id="contato-iframe"
      v-show="contato.iframeMapaGoogle"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      mobile: false,
    };
  },
  computed: {
    ...mapGetters({
      index: "conteudo/index",
      dadosCadastrais: "conteudo/dadosCadastrais",
      contato: "conteudo/contato",
    }),
  },
  mounted() {
    if (document.documentElement.clientWidth <= 850) {
      this.mobile = true;
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 850) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    });
  },
};
</script>

<style>
#contato-lista-informativa {
  height: 500px;
  width: 45%;
}
#contato-forms-contato input {
  width: 100%;
}
#contato-iframe iframe {
  width: 100%;
}
</style>
