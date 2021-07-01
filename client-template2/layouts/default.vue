<template>
  <div>
    <header>
      <b-navbar id="heder-estilos" class="header-padrao" toggleable="lg">
        <b-navbar-brand @click="alteraMarcacao()">
          <NuxtLink to="/">
            <img width="25%" src="~/assets/icones/imagem.png" alt="Logotipo" /><span
              class="logotipo-cor"
              >Logotipo</span
            >
          </NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="nav-bar-links-topo" class="ml-auto">
            <NuxtLink
              v-for="(headerOp, index) in headerOpcoes"
              :key="index"
              :to="headerOp.rota"
            >
              <li class="nav-bar-opcao-li">
                <i :id="`nav-opcao-italico-` + index"></i>
                <h5 :id="`nav-opcao` + index" @click="alteraMarcacao(index)">
                  {{ headerOp.titulo }}
                </h5>
              </li>
            </NuxtLink>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main><Nuxt /></main>
    <footer>
      <div id="footer-default-grid" class="cor-fundo-secundaria px-5 py-2">
        <div>
          <div class="text-left">
            <img width="15%" src="~/assets/icones/imagem.png" alt="" />
            <span class="logotipo-cor">Logotipo</span>
          </div>
          <NuxtLink
            class="text-left"
            v-for="(headerOp, index) in headerOpcoes"
            :key="index"
            :to="headerOp.rota"
            @click="alteraMarcacao(index)"
          >
            <h5 :id="`nav-opcao` + index">
              {{ headerOp.titulo }}
            </h5>
          </NuxtLink>
        </div>
        <div class="mt-3">
          <ListaInformativa :contato="dadosCadastrais" />
        </div>
      </div>

      <div class="container py-3">
        2021 (c) Nome da empresa todos os direito reservadis
        <img class="ml-3" width="10%" src="~/assets/icones/logo_sharkdata.png" alt="" />
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      headerOpcoes: "conteudo/headerOpcoes",
      dadosCadastrais: "conteudo/dadosCadastrais",
    }),
  },
  mounted() {
    const nav = this.headerOpcoes.find((elemnt) => elemnt.rota === this.$route.name);
    if (nav !== undefined) {
      $("#nav-opcao-italico-" + nav.id).addClass("circulo-marcacao-pagination");
    } else $("#nav-opcao-italico-" + 0).addClass("circulo-marcacao-pagination");
  },
  methods: {
    alteraMarcacao(e) {
      for (let index = 0; index < this.headerOpcoes.length; index++) {
        $("#nav-opcao-italico-" + index).removeClass("circulo-marcacao-pagination");
      }
      if (e === undefined) {
        $("#nav-opcao-italico-" + 0).addClass("circulo-marcacao-pagination");
        return;
      }
      $("#nav-opcao-italico-" + e).addClass("circulo-marcacao-pagination");
    },
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
#footer-default-grid {
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
}
.nav-bar-opcao-li {
  display: flex;
}
.circulo-marcacao-pagination {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  background: var(--cor-padrao-header-fonte);
  margin: 8px 3px 0 0;
  width: 8px;
  height: 8px;
}
</style>
