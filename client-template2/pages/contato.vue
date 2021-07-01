<template>
  <div class="px-4 my-4 cor-fundo-primaria">
    <div class="row">
      <FormsContato
      id="contato-forms-contato"
        class="col "
        :ativo="index.forms.ativo"
        :listaIputs="index.forms.inputs"
        :mensagem="index.forms.mensagem"
      />
      <ListaInformativa id="contato-lista-informativa" class="p-5 col" :contato="dadosCadastrais" />
    </div>

    <div class="my-4 mx-3" v-html="contato.iframeMapaGoogle" id="contato-iframe" v-show="contato.iframeMapaGoogle">
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      index: "conteudo/index",
      dadosCadastrais: "conteudo/dadosCadastrais",
      contato: "conteudo/contato",
    }),
  },
};
</script>

<style>
#contato-lista-informativa{
height: 100%;
}
#contato-forms-contato input{
width: 100%;
}
#contato-iframe iframe{
width: 100%;
}
</style>
