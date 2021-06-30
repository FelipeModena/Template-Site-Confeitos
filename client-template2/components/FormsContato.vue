<template>
  <div v-if="mobile==false">
    <div class="my-4 py-3 text-center" v-if="ativo === true" :class="fundoColorido">
      <h2>Faça seu orçamento online</h2>
      <div v-for="input in listaIputs" :key="input" class="mt-4 index-forms">
        <label class="text-left" :for="input"
          ><strong>{{ input }}</strong></label
        >
        <input type="text" :id="input" />
      </div>
      <div class="index-forms">
        <label class="mt-4 text-left" v-if="mensagem == true" for=""
          ><strong>Mensagem</strong></label
        >
        <textarea v-if="mensagem == true" name="" id="" cols="30" rows="5"></textarea>

        <button class="my-4 btn-forms">Enviar!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ativo: Boolean,
    mensagem: Boolean,
    listaIputs: Array,
    corFundo: Boolean,
  },
  computed: {
    fundoColorido() {
      if (this.corFundo == true) {
        return "cor-fundo-forms";
      } else return "";
    },
  },
  data() {
    return {
      mobile:false
    }
  },
        mounted() {
    if (document.documentElement.clientWidth <= 800) {
      this.mobile=true;
    }

    addEventListener("resize", () => {
      if (document.documentElement.clientWidth <= 800) {
      this.mobile=true;

      } else {
      this.mobile=false;

      }
    });
  },
};
</script>

<style>
.index-forms {
  padding: 0 20%;
  display: grid;
}
.index-forms input,textarea {
  width: 100%;
  background:#f0f2e6 ;
  padding: 6px;
  border: none;
}
</style>
