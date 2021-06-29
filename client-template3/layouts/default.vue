<template>
  <div>
    <header>
      <b-navbar id="heder-estilos" class="header-padrao" toggleable="lg">
        <b-navbar-brand @click="alteraMarcacao()">
          <NuxtLink to="/">
            <img width="25%" src="~/assets/icones/imagem.png" alt="Logotipo" /><span
              class="logotipo-cor"
              >Logotipo</span
            ></NuxtLink
          ></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto" id="nav-bar-links-topo">
            <NuxtLink
              :to="headerOp.rota"
              v-for="(headerOp, index) in headerOpcoes"
              :key="index"
              ><li>
                <h5 @click="alteraMarcacao(index)" :id="`nav-opcao` + index">
                  {{ headerOp.titulo }}
                </h5>
              </li></NuxtLink
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main><Nuxt /></main>
    <footer>
      <div class="cor-fundo-primaria centraliza py-3">
        <div>
          <img width="5%" src="~/assets/icones/imagem.png" alt="" />
          <span class="logotipo-cor">Logotipo</span>
        </div>
        <div id="footer-lista-icones">
          <a href="https://pt-br.facebook.com/">
            <img src="~/assets/icones/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="~/assets/icones/instagram.png" alt="instagram"
          /></a>
          <a href="https://br.linkedin.com/">
            <img src="~/assets/icones/linkedin.png" alt="linkedin"
          /></a>
          <a href="https://www.whatsapp.com/?lang=pt_br">
            <img src="~/assets/icones/whatsapp.png" alt="whatsapp"
          /></a>
          <a href=""> <img src="~/assets/icones/message.png" alt="email" /></a>
        </div>
      </div>
      <div class="container py-3">
        <img width="8%" src="~/assets/icones/logo_sharkdata.png" alt="" />
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      headerOpcoes: "conteudo/headerOpcoes",
    }),
  },
  methods: {
    alteraMarcacao(e) {
      if (e==undefined) {
         for (let index = 0; index < this.headerOpcoes.length; index++) {
         $("#nav-opcao" + index).css("border-bottom", "none");
         }
         return
      }
      for (let index = 0; index < this.headerOpcoes.length; index++) {
        if (this.headerOpcoes.length != e) {
          $("#nav-opcao" + index).css("border-bottom", "none");
        }
      }
      $("#nav-opcao" + e).css("border-bottom", "2px solid black");
    },
  },
  mounted() {
    let nav = this.headerOpcoes.find((elemnt) => elemnt.rota == this.$route.name);
    if (nav != undefined) {
      $("#nav-opcao" + nav.id).css("border-bottom", "2px solid black");
    }
    return;
  },
};
</script>
<style>
#heder-estilos {
  background: var(--cor-padrao-header-fundo);
}
#nav-bar-links-topo li {
  margin-right: 30px;
  font-family: "Abel";
  color: var(--cor-padrao-header-fonte);
}
#footer-lista-icones img {
  margin-right: 10px;
}
</style>
