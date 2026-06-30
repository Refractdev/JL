## JL e Extensões — Site profissional

Landing page única (one-page) em português, elegante e feminina, focada em converter visitas em clientes via WhatsApp.

### Identidade visual

- **Paleta**: branco quente, dourado champagne, bege/nude, rosa suave, carvão para texto
- **Tipografia**: serif elegante para títulos (Playfair Display), sans-serif limpa para corpo (Inter)
- **Estilo**: imagens grandes, muito espaço em branco, detalhes dourados subtis, animações suaves ao rolar (fade/slide-in)
- **Idioma**: 100% português de Portugal

### Estrutura (one-page com navegação âncora)

**1. Header fixo**
Logótipo "JL e Extensões" + menu (Início · Sobre · Serviços · Galeria · Contacto) + botão WhatsApp dourado

**2. Hero**
- Vídeo de fundo (um dos MP4 enviados) com overlay suave
- Título: "Realça a tua beleza com JL e Extensões"
- Subtítulo curto sobre extensões premium e cuidado capilar
- 2 botões: "Marcar no WhatsApp" (principal) + "Ver serviços"

**3. Sobre nós**
- Texto curto sobre o estúdio, qualidade e transformação da autoestima
- Imagem ao lado (uma das fotos do estúdio com cabelo trabalhado)
- 3 mini-destaques: Qualidade Premium · Cuidado Personalizado · Anos de Experiência

**4. Serviços** (grelha de cards com hover dourado)
- **Extensões de Cabelo** — destaque principal, card maior com várias fotos
- Cabeleireiro
- Maquilhagem
- Cílios
- Unhas
- Depilação
Cada card: imagem + título + descrição curta + "Marcar"

**5. Secção "Antes e Depois"**
Mostra a transformação (foto cabelo seco/danificado vs cabelo tratado e com extensões) — usa as fotos enviadas que mostram esse contraste

**6. Galeria**
- Grelha masonry com todas as fotos enviadas (cabelos lisos, ondulados, ruivos, loiros, penteados, materiais/extensões)
- Vídeos integrados em cards de proporção vertical
- Lightbox ao clicar para ver em grande
- Filtros opcionais: Tudo · Extensões · Penteados · Cor · Materiais

**7. Contacto**
- Coluna esquerda: dados (Joice Lopes, telefone, morada completa, horário se aplicável)
- Coluna direita: formulário simples (nome, telefone, serviço pretendido, mensagem) — submissão envia mensagem pré-formatada para WhatsApp
- Botão grande dourado "Falar no WhatsApp" (+351 935 449 306)
- Mapa estático/embed da morada em Vila Real

**8. Footer**
Logótipo, contactos, morada, copyright. Sem redes sociais.

### Funcionalidades

- Botão flutuante WhatsApp sempre visível (canto inferior direito)
- Smooth scroll entre secções
- Animações de entrada ao rolar (fade-up suave)
- 100% responsivo (mobile-first — público maioritariamente mobile)
- SEO básico (meta tags, título otimizado para "extensões cabelo Vila Real")
- Lightbox de galeria com navegação

### Conteúdo multimédia

Todas as imagens e os 2 vídeos enviados serão integrados:
- 1 vídeo no hero (com fallback de imagem)
- 1 vídeo na galeria
- Fotos de materiais (extensões em várias cores) na secção Extensões
- Fotos de resultados finais (lisos, ondulados, ruivos, loiros, penteados) distribuídas pela galeria e cards de serviços
- Foto "antes" na secção de transformação

### Notas técnicas

- React + Tailwind + shadcn/ui já existentes
- Tokens de design (cores douradas, fontes) configurados em `index.css` e `tailwind.config.ts`
- Componentes: Header, Hero, About, Services, BeforeAfter, Gallery, Contact, Footer, FloatingWhatsApp
- Imagens importadas de `src/assets/` para otimização do Vite
- Formulário de contacto sem backend nesta fase: ao submeter abre WhatsApp com mensagem pré-preenchida (sem necessidade de Cloud)