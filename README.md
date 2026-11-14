# Landing page — Essence Beleza e Bem-Estar

Landing page do **Essence | Beleza & Saúde Capilar** (Governador Valadares – MG), conduzido pela terapeuta capilar **Kelem Gatto**.
Feita com HTML5, CSS3 e JavaScript puro: não precisa instalar nada nem compilar.

## Estrutura

```
landing-page/
├── index.html                 Página completa (todas as seções)
├── README.md                  Este arquivo
└── assets/
    ├── css/style.css          Estilos, paleta da marca e responsividade
    ├── js/script.js           Menu mobile, animações, link ativo e formulário → WhatsApp
    └── images/                22 imagens otimizadas + logotipo em SVG
```

Os nomes das imagens seguem a seção onde aparecem (`hero.jpg`, `about.jpg`, `service-01-terapia-capilar.jpg` etc.).
Usei `logo-essence.svg` (vetor) em vez de um JPG porque a única versão do logotipo disponível no Instagram era pequena demais. Ele é uma **recriação** do selo da marca e deve ser trocado pelo arquivo oficial quando o salão enviar.

## Como abrir

Dê dois cliques em `index.html`. Para testar exatamente como ficará online, rode um servidor local na pasta:

```bash
python -m http.server 8000
# depois abra http://localhost:8000
```

## Seções

1. Cabeçalho fixo com logotipo, menu e botão "Agendar horário" (menu hambúrguer no celular)
2. Hero com chamada principal e CTA para o WhatsApp
3. Sobre a Kelem Gatto (história contada por ela no Instagram)
4. Serviços com uma foto para cada: Terapia capilar, Corte, Mechas, Make & produção, Manicure e Princess day
5. Diferenciais
6. Experiência de atendimento em 4 etapas
7. O espaço (fachada, recepção, detalhes e área de atendimento)
8. Equipe
9. Depoimentos reais com link para a publicação original
10. Ação social com o Projeto Esperançar
11. Perguntas frequentes
12. Chamada final
13. Contato (WhatsApp, endereço, Instagram, mapa e formulário)
14. Rodapé com redes sociais

## Identidade visual

| Cor | Hex | De onde veio |
|---|---|---|
| Verde-musgo | `#6A834C` | Faixa "ESSENCE" do vídeo de boas-vindas e parede verde do salão |
| Verde profundo | `#3E4D2C` / `#2C361F` | Variação escura para contraste |
| Areia | `#C29B74` | Selo do logotipo |
| Vinho | `#7A2E3A` | Assinatura "Beleza & Bem-estar" |
| Marfim | `#FAF7F2` / `#F2ECE3` | Fundo claro e acolhedor |

Tipografia (Google Fonts): **Marcellus** nos títulos (lembra o "ESSENCE" da marca), **Cormorant Garamond** itálico nos destaques e **Jost** no texto.

## Formulário

O formulário não precisa de servidor: ele valida nome e serviço, monta a mensagem e abre o WhatsApp do salão com o texto pronto.
Para mudar o número, edite `WHATSAPP_NUMBER` no início de `assets/js/script.js` e os links `wa.me/5533991514709` no `index.html` (use buscar e substituir).

## Publicar no GitHub Pages

1. Crie uma conta em github.com (se ainda não tiver).
2. Clique em **New repository**, dê um nome (ex.: `essence`) e deixe como **Public**.
3. Na página do repositório, clique em **Add file → Upload files** e arraste **o conteúdo** da pasta `landing-page` (o `index.html` precisa ficar na raiz do repositório, junto com a pasta `assets`). Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Build and deployment*, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e clique em **Save**.
5. Aguarde 1 a 2 minutos. O site ficará em `https://SEU-USUARIO.github.io/essence/`.

Depois de publicar, troque no `index.html` o `og:image` (e o `image` dentro do bloco JSON-LD) pela URL completa da imagem, por exemplo `https://SEU-USUARIO.github.io/essence/assets/images/cta.jpg`, para a prévia aparecer certinho no WhatsApp e nas redes sociais.

Se tiver um domínio próprio, configure em **Settings → Pages → Custom domain**.

## Origem das imagens

Todas as fotos vêm de publicações públicas do Instagram do próprio salão e da Kelem Gatto. Nenhuma foto de banco de imagens foi usada.

| Arquivo | Origem |
|---|---|
| hero, about, service-01, 02, 05, 06, experience-01, 02, 03, space-01 a 04, team, social, faq | Quadros do reel de boas-vindas do @salaoessencegv (jul/2024, gravação @darkfiilms) |
| cta | Capa desse mesmo reel |
| service-03-mechas, experience-04 | Reel da cliente Cláudia (@salaoessencegv, out/2026) |
| service-04-make | Capa do reel do evento "Gratidão" (@salaoessencegv, out/2023) |
| differentials | Post "Cabelos além da estética" (@kelemgatto, dez/2024) |

Como muitas fotos vieram de quadros de vídeo, a resolução fica entre 640 e 1080 px. Para um resultado ainda mais nítido, peça ao salão os arquivos originais das fotos e do vídeo e substitua mantendo os mesmos nomes.

## O que ainda precisa ser confirmado com o cliente

- [ ] **Logotipo oficial** em alta resolução (SVG ou PNG transparente) para substituir `logo-essence.svg`
- [ ] **Horário de funcionamento** (não aparece no Instagram; por isso não foi colocado no site)
- [ ] **Princess day**: o que está incluído, para quem é e se tem pacote ou valor fixo (o texto atual é genérico de propósito)
- [ ] **Make & produção**: enviar uma foto de trabalho feito em cliente (hoje o card usa uma foto da própria Kelem produzida para um evento)
- [ ] **Outros serviços**: o vídeo de boas-vindas mostra cílios/sobrancelhas e procedimentos de estética facial; confirmar se devem entrar na lista
- [ ] **Autorização de imagem** das clientes e profissionais que aparecem nas fotos (Cláudia, cliente da recepção e equipe) para uso no site
- [ ] **Autorização** da Nathália Souza para o depoimento e do Projeto Esperançar para a menção à parceria
- [ ] **Nomes e funções das profissionais** da equipe, se quiserem apresentá-las individualmente
- [ ] **Formas de pagamento, estacionamento e acessibilidade**, se quiserem incluir no FAQ
- [ ] **Domínio** do site (ex.: essencegv.com.br) e URL final para as tags de compartilhamento
- [ ] Grafia do nome: o perfil pessoal usa "Kelem Gatto" e o vídeo apresenta "Kelem Gatto Lopes" (algumas publicações de parceiros escrevem "Kellen"). O site usa **Kelem Gatto**.
