
export const state = () => ({
    headerOpcoes: [
        { titulo: 'Inicio', rota: '/', id: 0 },
        { titulo: 'Quem somos', rota: 'quemSomos', id: 1 },
        { titulo: 'Nossos produtos', rota: 'nossosProdutos', id: 2 },
        { titulo: 'Portfólio', rota: 'portfolio', id: 3 },
        { titulo: 'Contato', rota: 'contato', id: 4 }
    ],
    index: {
        forms: {
            ativo: true,
            inputs: ['Nome', 'Telefone', 'Email'],
            mensagem: true
        },
        carouselTopo: [
            {
                img: 'boloChoco.jpg',
                texto: 'Bolos especiais para momentos especiais',
                rota: '/nossosProdutos'
            },
            {
                img: 'cenoura.jpg',
                texto: 'Bolos especiais para momentos especiais',
                rota: '/nossosProdutos'
            },
            {
                img: 'macaron.jpg',
                texto: 'Macaron especiais para momentos especiais',
                rota: '/nossosProdutos'
            },
        ],
        conteudo1: {
            titulo: 'Nossa historia',
            texto: 'Pequeno texto sobre a empresa, ou sobre qualquer coisa na verdade, esse site é apenas um exemplo e pode ser adaptado a qualquer outra com áreas de atuação distintas. Trocando cores e inganes tudo  e possivel! É interessante deixaros texto da pagtina inicial curtos e sucientos, apresnetar seu negocio, sua  area de atuação. Exsitem páginas internas onde é posivel detalhar mais as coisas'
        },
        conteudo3:{
            titulo: 'Nossa historia',
            texto: 'Pequeno texto sobre a empresa, ou sobre qualquer coisa na verdade, esse site é apenas um exemplo e pode ser adaptado a qualquer outra com áreas de atuação distintas. Trocando cores e inganes tudo  e possivel! É interessante deixaros texto da pagtina inicial curtos e sucientos, apresnetar seu negocio, sua  area de atuação. Exsitem páginas internas onde é posivel detalhar mais as coisas',
            img:'tortaColorida.jpg'
        },
        conteudo2: ['tortaMaca.jpg', 'boloCremeMorango.jpg', 'boloChocoBranco.jpg', 'cupcake.jpg',
            'boloBarbie.jpg', 'tortinha.jpg', 'tortaCreme.jpg', 'colecaoCupcake.jpg',
        ]

    },
    quemSomos: {
        bannerSuperior: {
            img: 'topo-quemsomos.jpg'
        },
        conteudo1: {
            titulo: 'Nossa historia',
            texto: 'Pequeno texto sobre a empresa, ou sobre qualquer coisa na verdade, esse site é apenas um exemplo e pode ser adaptado a qualquer outra com áreas de atuação distintas. Trocando cores e inganes tudo  e possivel! É interessante deixaros texto da pagtina inicial curtos e sucientos, apresnetar seu negocio, sua  area de atuação. Exsitem páginas internas onde é posivel detalhar mais as coisas'
        },
        conteudo2: {
            imgs: [
                {
                    img: 'tortaEncomenda.jpg',
                    texto: 'Tortas espaciais sob demanda'
                },
                {
                    img: 'tortaCreme.jpg',
                    texto: 'Tortas espaciais sob demanda'
                },
                {
                    img: 'tortaMorango.jpg',
                    texto: 'Tortas espaciais sob demanda'
                },
                {
                    img: 'tortaColorida.jpg',
                    texto: 'Tortas espaciais sob demanda'
                },
            ]
        }
    },
    nossosProdutos: [
        {
            titulo: 'Bolos decorados',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.',
            imgPrincipal: 'boloFrutaBanner.jpg',
        },
        {
            titulo: 'Tortas doces',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.',
            imgPrincipal: 'tortaMorangoP.jpg',
        },
        {
            titulo: 'Docinhos para festa',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at ornare metus, ut venenatis diam. Ut blandit dolor non velit tincidunt congue. Nunc imperdiet, sem eleifend imperdiet lobortis, ex est ultricies risus, sit amet vestibulum sapien sapien eget felis. Curabitur consectetur orci est, ut molestie ipsum porttitor quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ac turpis sed mauris sagittis venenatis at vel sem. Suspendisse a pulvinar massa.',
            imgPrincipal: 'macaron.jpg',
        },
    ],
    portfolio:{
        titulo:'Portfólio',
        listas:[
            ['tortaMaca.jpg','tortaMorango.jpg','tortaCortada.jpg','tortaCreme.jpg','boloBarbie.jpg','cupcake.jpg',],
            ['colecaoCupcake.jpg','boloChocoBranco.jpg','tortaPequena.jpg','tortinha.jpg','tortaMorangoP.jpg','cupcakeGourmet.jpg',],
            ['cenoura.jpg','macaron.jpg','tortaEncomenda.jpg','tortaColorida.jpg','boloMacaron.jpg','bolinhoMoranho.jpg',],
        ],
    },
    contato:{
        iframeMapaGoogle:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5554.362154665995!2d-49.050529729305254!3d-22.35358764178771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1624995827887!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    },
    dadosCadastrais: [
        {
            nomeLoja: 'Matriz',
            rua: 'Rua das Paineiras n° 245',
            bairro: 'Jd.Florido',
            cidade: 'Florianopolis',
            estado: 'São Paulo',
            telefone: ['(xx) 96525-5422'],
            email: 'email.loja.com.br',
            contatos: []
        },
    ]

})

export const getters = {
    headerOpcoes(state) {
        return state.headerOpcoes
    },
    index(state) {
        return state.index
    },
    quemSomos(state) {
        return state.quemSomos
    },
    nossosProdutos(state) {
        return state.nossosProdutos
    },
    portfolio(state) {
        return state.portfolio
    },
    dadosCadastrais(state) {
        return state.dadosCadastrais
    },
    contato(state) {
        return state.contato
    }
}
