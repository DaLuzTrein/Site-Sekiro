function mostrarDivs() {
            const divs = document.querySelectorAll('div');
            const botao = document.getElementById('botaoFundo');
            const header = document.getElementById('header')
            const footer = document.getElementById('footer')
            const todasEscondidas = Array.from(divs).every(div => div.style.display === 'none');

            if (todasEscondidas) {
                divs.forEach(div => div.style.display = '');
                header.style.display= '';
                footer.style.display= '';
                header.style.backgroundImage='url(imagens/papelbackground.jpeg)';
                header.style.borderBottom='4px solid orangered'
                botao.textContent = 'Ver Fundo';
            } else {
                divs.forEach(div => div.style.display = 'none');
                header.style.backgroundImage='none';
                header.style.border='none'
                footer.style.display= 'none';
                botao.textContent = 'Ver Página';
            }
        }

let dadosDosBosses = {};

fetch('bosses.json')
  .then(response => response.json())
  .then(data => {dadosDosBosses = data; });

function mostrarBoss(Boss) {
    const caixaDeInformacoes = document.getElementById('informacao');
    const botoesBoss = document.querySelectorAll('.botaoBoss');
    const botaoPressionado = document.querySelectorAll('.botaoBoss')[Boss - 1];

    if (botaoPressionado.classList.contains('pressionado')) {
        botaoPressionado.classList.remove('pressionado');
        caixaDeInformacoes.innerHTML = '<h1><b>Bosses</b></h1><p class="explicacaoBoss">Bosses em Sekiro: Shadows Die Twice são inimigos especiais e poderosos que não reaparecem. Bosses são encontrados ao longo do jogo e apresentam conjuntos de movimentos especiais, vida aumentada e mecânicas únicas. Alguns bosses podem ser opcionais, enquanto outros devem ser derrotados para continuar no jogo. A maioria dos bosses tem vários marcadores vermelhos ao lado de sua barra de vitalidade que devem ser removidos antes que o boss possa ser morto, cada um dos quais requer um golpe mortal; a vitalidade e a postura de um boss são totalmente restauradas entre os golpes mortais, e alguns bosses podem ganhar movimentos ou habilidades adicionais conforme cada marcador de golpe mortal é removido. Imediatamente após o marcador final de golpe mortal ser removido, um boss deve ser executado com um golpe mortal finalizador especial, que é realizado como um golpe mortal normal, mas envolve Lobo realizando uma animação finalizadora especial exclusiva para cada boss.  <br> <br> <a href="https://sekiroshadowsdietwice.wiki.fextralife.com/Bosses" style="font-size: 120%;">Saber mais</a></p>';
    } else {
        botoesBoss.forEach(botaoBoss => {
            botaoBoss.classList.remove('pressionado');
        });
    botaoPressionado.classList.add('pressionado');

     const boss = dadosDosBosses[Boss];
    if (boss) {
      caixaDeInformacoes.innerHTML = `
        <div class="informacoesBoss">
          <a href="${boss.video}"><img src="${boss.imagem}" class="imagemBossFundo"> </a>
          <h1 style="font-size:220%">${boss.nome}</h1>
          <h2>História</h2>
          <p>${boss.historia}</p>
          <h2>Luta</h2>
          <p>${boss.luta}</p>
          <h2>Fraquezas</h2>
          <p>${boss.fraquezas}</p>
          <h2>Recompensas</h2>
          <p>${boss.recompensas}</p>
        </div>`;
    } 
  }
}

let dadosDasArvores = {};

fetch('arvores.json')
  .then(response => response.json())
  .then(data => { dadosDasArvores = data; });

function mostrarArvore(Arvore) {
    const caixaDeInformacoesArvore = document.getElementById('informacaoArvore');
    const caixaDeInformacoesSkills = document.getElementById('informacaoSkills');
    const botoesArvore = document.querySelectorAll('.botaoArvore');
    const botoesSkills = document.querySelectorAll('.botaoSkills');
    const botaoPressionado = document.querySelectorAll('.botaoArvore')[Arvore - 1];

    if (botaoPressionado.classList.contains('pressionado')) {
        botaoPressionado.classList.remove('pressionado');
        caixaDeInformacoesArvore.innerHTML = '';
        caixaDeInformacoesSkills.innerHTML = `
            <h1>Habilidades</h1>
            <p style="font-size: 200%;">
                Habilidades e Árvores de Habilidades em Sekiro Shadows Die Twice referem-se à Progressão de Personagem ao investir Pontos de Habilidade em Árvores de Habilidades que desbloqueiam Artes de Combate ou Técnicas. Existem 5 Árvores de Habilidades, além disso você pode adquirir habilidades através de textos. Algumas das Habilidades que você desbloqueia são passivas, significando que seus efeitos estarão sempre ativos. Outras são habilidades ativas chamadas Artes de Combate, que o jogador deve usar ativamente pressionando LB + RB.
            </p>`;
        botoesSkills.forEach(botao => botao.classList.remove('pressionado'));
    } else {
        botoesArvore.forEach(botaoArvore => {
            botaoArvore.classList.remove('pressionado');
        });
        botaoPressionado.classList.add('pressionado');

        botoesSkills.forEach(botao => botao.classList.remove('pressionado'));
        caixaDeInformacoesSkills.innerHTML = `
            <h1>Habilidades</h1>
            <p style="font-size: 200%;">
                Habilidades e Árvores de Habilidades em Sekiro Shadows Die Twice referem-se à Progressão de Personagem ao investir Pontos de Habilidade em Árvores de Habilidades que desbloqueiam Artes de Combate ou Técnicas. Existem 5 Árvores de Habilidades, além disso você pode adquirir habilidades através de textos. Algumas das Habilidades que você desbloqueia são passivas, significando que seus efeitos estarão sempre ativos. Outras são habilidades ativas chamadas Artes de Combate, que o jogador deve usar ativamente pressionando LB + RB.
            </p>`;

        const arvore = dadosDasArvores[Arvore];
        if (arvore) {
            caixaDeInformacoesArvore.innerHTML = `
            <h1 style="color:orangered; position:absolute">${arvore.nome}</h1>
                <div class="caixaDeInformacaoArvore">
                    <img src="${arvore.imagem}" style="width:100%; height:100%;">
                    <div class='botoesSkills' ${arvore.show1}>
                    <button class='botaoSkills' id='CorteRedemoinho' style='position: absolute; left:7.5%; top:45%' onclick='mostrarSkills(1)'></button>
                    <button class='botaoSkills' id='RepelirAereo' style='position: absolute; left:20.3%; top:45%' onclick='mostrarSkills(2)'></button>
                    <button class='botaoSkills' id='ArtesDeCombateAereas' style='position: absolute; left:33.3%; top:45%' onclick='mostrarSkills(3)'></button>
                    <button class='botaoSkills' id='ImpulsoSombrio' style='position: absolute; left:46.3%; top:44%; height:11%; width:5%' onclick='mostrarSkills(4)'></button>
                    <button class='botaoSkills' id='CarmaShinobiCorpo' style='position: absolute; left:20.3%; top:35.5%' onclick='mostrarSkills(5)'></button>
                    <button class='botaoSkills' id='CarmaShinobiMente' style='position: absolute; left:33.3%; top:35.5%' onclick='mostrarSkills(6)'></button>
                    <button class='botaoSkills' id='SoproDeVidaLuz' style='position: absolute; left:33.3%; top:26.7%' onclick='mostrarSkills(7)'></button>
                    <button class='botaoSkills' id='ContraAtaqueMikiri' style='position: absolute; left:7.5%; top:63.5%' onclick='mostrarSkills(8)'></button>
                    <button class='botaoSkills' id='CorridaEDeslizamento' style='position: absolute; left:20.3%; top:63.5%' onclick='mostrarSkills(9)'></button>
                    <button class='botaoSkills' id='OlhosDeShinobi' style='position: absolute; left:33.3%; top:63.5%' onclick='mostrarSkills(10)'></button>
                    <button class='botaoSkills' id='OcultarPresenca' style='position: absolute; left:20.3%; top:73%' onclick='mostrarSkills(11)'></button>
                    <button class='botaoSkills' id='SuprimirSom' style='position: absolute; left:33.3%; top:73%' onclick='mostrarSkills(12)'></button>
                    <button class='botaoSkills' id='Salto' style='position: absolute; left:33.3%; top:82.3%' onclick='mostrarSkills(13)'></button>"
                    </div>
                    <div class='botoesSkills' ${arvore.show2}>
                    <button class='botaoSkills' id='CortePerseguidor' style='position: absolute; left:7.3%; top:45%' onclick='mostrarSkills(14)'></button>
                    <button class='botaoSkills' id='PresaELamina' style='position: absolute; left:20.3%; top:45%' onclick='mostrarSkills(15)'></button>
                    <button class='botaoSkills' id='ForcaProjetada' style='position: absolute; left:33.3%; top:45%' onclick='mostrarSkills(16)'></button>
                    <button class='botaoSkills' id='ForcaVital' style='position: absolute; left:46.5%; top:44.2%; height:11%; width:5%' onclick='mostrarSkills(17)'></button>
                    <button class='botaoSkills' id='FerramentaProsteticaAerea' style='position: absolute; left:20.3%; top:35.5%' onclick='mostrarSkills(18)'></button>
                    <button class='botaoSkills' id='CarmaDoEscultorCicatrizes' style='position: absolute; left:33.3%; top:35.5%' onclick='mostrarSkills(19)'></button>
                    <button class='botaoSkills' id='CarmaDoEscultorSangue' style='position: absolute; left:33.3%; top:26.7%' onclick='mostrarSkills(20)'></button>
                    <button class='botaoSkills' id='AtaqueComGancho' style='position: absolute; left:7.3%; top:64%' onclick='mostrarSkills(21)'></button>
                    <button class='botaoSkills' id='CorteNoitibo' style='position: absolute; left:20.3%; top:64%' onclick='mostrarSkills(22)'></button>
                    <button class='botaoSkills' id='CorteNoitiboReverso' style='position: absolute; left:33.3%; top:64%' onclick='mostrarSkills(23)'></button>
                    <button class='botaoSkills' id='RemedioDaEmmaPotencia' style='position: absolute; left:20.3%; top:73.5%' onclick='mostrarSkills(24)'></button>
                    <button class='botaoSkills' id='RemedioDaEmmaAroma' style='position: absolute; left:33.3%; top:73.5%' onclick='mostrarSkills(25)'></button>
                    </div>
                    <div class='botoesSkills' ${arvore.show3}>
                    <button class='botaoSkills' id='Ichimonji' style='position: absolute; left:6.2%; top:63.5%' onclick='mostrarSkills(26)'></button>
                    <button class='botaoSkills' id='CarpaDescendente' style='position: absolute; left:19.7%; top:63.5%' onclick='mostrarSkills(27)'></button>
                    <button class='botaoSkills' id='IchimonjiDuplo' style='position: absolute; left:33%; top:63.5%' onclick='mostrarSkills(28)'></button>
                    <button class='botaoSkills' id='CruzDeAshina' style='position: absolute; left:46.5%; top:62.5%; height:11%; width:5%' onclick='mostrarSkills(29)'></button>
                    <button class='botaoSkills' id='CarpaAscendente' style='position: absolute; left:19.7%; top:54%' onclick='mostrarSkills(30)'></button>
                    <button class='botaoSkills' id='AguaFluente' style='position: absolute; left:33%; top:54%' onclick='mostrarSkills(31)'></button>
                    <button class='botaoSkills' id='SoproDaNaturezaLuz' style='position: absolute; left:33%; top:45%' onclick='mostrarSkills(32)'></button>
                    </div>
                    <div class='botoesSkills' ${arvore.show4}>
                    <button class='botaoSkills' id='GolpesHieraticos' style='position: absolute; left:6.5%; top:64.5%' onclick='mostrarSkills(33)'></button>
                    <button class='botaoSkills' id='GolpesHieraticosExorcismo' style='position: absolute; left:19.8%; top:64.5%' onclick='mostrarSkills(34)'></button>
                    <button class='botaoSkills' id='Devocao' style='position: absolute; left:33.3%; top:64.5%' onclick='mostrarSkills(35)'></button>
                    <button class='botaoSkills' id='Virtude' style='position: absolute; left:19.8%; top:55%' onclick='mostrarSkills(36)'></button>
                    <button class='botaoSkills' id='ChuteAltoSenpo' style='position: absolute; left:33.3%; top:55%' onclick='mostrarSkills(37)'></button>
                    <button class='botaoSkills' id='MongeElevado' style='position: absolute; left:46.8%; top:53.5%; height:11%; width:5%' onclick='mostrarSkills(38)'></button>
                    <button class='botaoSkills' id='VirtudeIrrefutavel' style='position: absolute; left:33.3%; top:45.2%' onclick='mostrarSkills(39)'></button>
                    </div>
                    <div class='botoesSkills' ${arvore.show5}>
                    <button class='botaoSkills' id='QuedaSombria' style='position: absolute; left:20%; top:25.5%; height:11%; width:5%' onclick='mostrarSkills(40)'></button>
                    <button class='botaoSkills' id='PassagemDeNuvensEspirais' style='position: absolute; left:20%; top:43.5%; height:11%; width:5%' onclick='mostrarSkills(41)'></button>
                    <button class='botaoSkills' id='SaqueMortalFortalecido' style='position: absolute; left:20%; top:62.3%; height:11%; width:5%' onclick='mostrarSkills(42)'></button>
                    <button class='botaoSkills' id='MongeElevado' style='position: absolute; left:6%; top:25.5%; height:11%; width:5%' onclick='mostrarSkills(38)'></button>
                    <button class='botaoSkills' id='ImpulsoSombrio' style='position: absolute; left:6%; top:43.5%; height:11%; width:5%' onclick='mostrarSkills(4)'></button>
                    <button class='botaoSkills' id='CruzDeAshina' style='position: absolute; left:6%; top:62.3%; height:11%; width:5%' onclick='mostrarSkills(29)'></button>
                    <button class='botaoSkills' id='ForcaVital' style='position: absolute; left:6%; top:80%; height:11%; width:5%' onclick='mostrarSkills(17)'></button>
                    </div>
                    <div class='botoesSkills' ${arvore.show6}>
                    <button class='botaoSkills' id='RemedioShinobiNivel1' style='position: absolute; left:6.3%; top:37.5%;' onclick='mostrarSkills(43)'></button>
                    <button class='botaoSkills' id='RemedioShinobiNivel2' style='position: absolute; left:14%; top:37.5%;' onclick='mostrarSkills(44)'></button>
                    <button class='botaoSkills' id='RemedioShinobiNivel3' style='position: absolute; left:21.7%; top:37.5%;' onclick='mostrarSkills(45)'></button>
                    <button class='botaoSkills' id='TecnicaDeRespiracaoMibu' style='position: absolute; left:29.5%; top:37.5%;' onclick='mostrarSkills(46)'></button>
                    <button class='botaoSkills' id='PassagemFlutuante' style='position: absolute; left:37.3%; top:37.5%;' onclick='mostrarSkills(47)'></button>
                    <button class='botaoSkills' id='LampejoDoDragao' style='position: absolute; left:45%; top:37.5%;' onclick='mostrarSkills(48)'></button>
                    <button class='botaoSkills' id='SoproDeVidaSombra' style='position: absolute; left:6.3%; top:66%;' onclick='mostrarSkills(49)'></button>
                    <button class='botaoSkills' id='SoproDeNaturezaSombra' style='position: absolute; left:13.6%; top:66%;' onclick='mostrarSkills(50)'></button>
                    <button class='botaoSkills' id='CarmaDeMonstro' style='position: absolute; left:21.7%; top:66%;' onclick='mostrarSkills(51)'></button>
                    <button class='botaoSkills' id='GolpeMortalAntiaereo' style='position: absolute; left:29.5%; top:66%;' onclick='mostrarSkills(52)'></button>
                    <button class='botaoSkills' id='MenteUna' style='position: absolute; left:37.3%; top:66%;' onclick='mostrarSkills(53)'></button>
                    <button class='botaoSkills' id='DancaDeSakura' style='position: absolute; left:45%; top:66%;' onclick='mostrarSkills(54)'></button>
                    </div>
                </div>`;
        }
    }
}

let dadosDasSkills = {};

fetch('skills.json')
  .then(response => response.json())
  .then(data => { dadosDasSkills = data; });

function mostrarSkills(Skills) {
    const caixaDeInformacoesSkills = document.getElementById('informacaoSkills');
    const botoesSkills = document.querySelectorAll('.botaoSkills');
    const botaoPressionadoArvore = document.querySelectorAll('.botaoSkills')[Skills - 1];

    if (botaoPressionadoArvore.classList.contains('pressionado')) {
        botaoPressionadoArvore.classList.remove('pressionado');
        caixaDeInformacoesSkills.innerHTML = '<h1>Habilidades</h1> <p style="font-size: 200%;"> Habilidades e Árvores de Habilidades em Sekiro Shadows Die Twice referem-se à Progressão de Personagem ao investir Pontos de Habilidade em Árvores de Habilidades que desbloqueiam Artes de Combate ou Técnicas. Existem 5 Árvores de Habilidades, além disso você pode adquirir habilidades através de textos. Algumas das Habilidades que você desbloqueia são passivas, significando que seus efeitos estarão sempre ativos. Outras são habilidades ativas chamadas Artes de Combate, que o jogador deve usar ativamente pressionando LB + RB.</p>';
    } else {
        botoesSkills.forEach(botaoSkills => {
            botaoSkills.classList.remove('pressionado');
        });
    botaoPressionadoArvore.classList.add('pressionado');

     const skills = dadosDasSkills[Skills];
    if (skills) {
      caixaDeInformacoesSkills.innerHTML = `
        <h1>${skills.nome}</h1> <br>
        <img src='${skills.imagem}' style="height:30%"> <br>
        <h2 style="font-size:120%"> ${skills.custo} </h2> <br>
        <p class="descricaoSkills"style="font-size:150%; width:70%; margin-top:-2%">${skills.descricao}</p>
        `;
    } 
  }
}

