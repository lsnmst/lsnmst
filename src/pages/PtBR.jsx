import React from 'react';
import NavbarptBR from './Navbar-ptBR';
import { Link } from "react-router-dom";
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import './block.css';
import './patterns.css';
import Otc from './img/open_to_collaborate.png';


const ResponsiveGridLayout = WidthProvider(Responsive);

export default class PtBR extends React.Component {

  static defaultProps = {
    margin: [2, 2],
  }
  render() {
    const layout = [
      { i: "18", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "17", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "16", x: 6, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "15", x: 9, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "14", x: 0, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "13", x: 3, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "12", x: 6, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "11", x: 9, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "10", x: 0, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "09", x: 3, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "08", x: 6, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "07", x: 9, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "06", x: 0, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "05", x: 3, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "04", x: 6, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "03", x: 9, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "02", x: 0, y: 12, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "01", x: 3, y: 12, w: 3, h: 3, minW: 2, minH: 2, static: true },
    ];

    const layoutxs = [
      { i: "18", x: 0, y: 0, w: 3, h: 3, static: true },
      { i: "17", x: 3, y: 0, w: 3, h: 3, static: true },
      { i: "16", x: 6, y: 0, w: 3, h: 3, static: true },
      { i: "15", x: 9, y: 0, w: 3, h: 3, static: true },
      { i: "14", x: 0, y: 3, w: 3, h: 3, static: true },
      { i: "13", x: 3, y: 3, w: 3, h: 3, static: true },
      { i: "12", x: 6, y: 3, w: 3, h: 3, static: true },
      { i: "11", x: 9, y: 3, w: 3, h: 3, static: true },
      { i: "10", x: 0, y: 6, w: 3, h: 3, static: true },
      { i: "09", x: 3, y: 6, w: 3, h: 3, static: true },
      { i: "08", x: 6, y: 6, w: 3, h: 3, static: true },
      { i: "07", x: 9, y: 6, w: 3, h: 3, static: true },
      { i: "06", x: 0, y: 9, w: 3, h: 3, static: true },
      { i: "05", x: 3, y: 9, w: 3, h: 3, static: true },
      { i: "04", x: 6, y: 9, w: 3, h: 3, static: true },
      { i: "03", x: 9, y: 9, w: 3, h: 3, static: true },
      { i: "02", x: 0, y: 12, w: 3, h: 3, static: true },
      { i: "01", x: 3, y: 12, w: 3, h: 3, static: true },
    ];

    return (

      <><><><>
        <h1 className='ilnomecheappareprimadelrestopt'><span>ALESSANDRO</span></h1>
        <h2 className='dopoilnomecheappareprimadelrestopt'><span>AMPLIFICA AS VOZES DAS COMUNIDADES MARGINALIZADAS, CONSTRUINDO SOLIDARIEDADE POR MEIO DA COOPERAÇÃO SUL-SUL</span></h2>
        <h1 className='ascii'><span>☸</span></h1>

        <NavbarptBR />

        <div>
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout, xs: layoutxs }}
            margin={{ lg: [8, 8], md: [6, 6], sm: [4, 4] }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >


            {/* key font https://decodeunicode.org/en/u+0A5B3 */}
            {/*Add block 18 */}
            <div key="18" className='carbon'>
              <div className="header">
                <div className="index">ꮬ</div>
                <div className="year">2024</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/carbon-violence/" target="_blank" rel="noopener noreferrer">CARBON VIOLENCE</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/carbon-violence/" target="_blank" rel="noopener noreferrer">O arquivo \Carbon Violence\ expõe a violência física, econômica, psicológica e epistêmica sofrida por indivíduos e comunidades que vivem nas áreas onde os projetos de compensação de carbono são implementados, responsabilizando os desenvolvedores de projetos, as empresas subsidiárias, os investidores, os financiadores, os órgãos de validação e verificação, os corretores e as empresas que compram créditos</a></p></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 17 */}
            <div key="17" className='agathe'>
              <div className="header">
                <div className="index">ꖘ</div>
                <div className="year">2024</div>
              </div>
              <div className="title"><a href="https://alliancepourlavie.github.io/agathe/" target="_blank" rel="noopener noreferrer">AGATHE</a></div>
              <div className="description"><p><a href="https://alliancepourlavie.github.io/agathe/" target="_blank" rel="noopener noreferrer">\Agathe, the matriarch above the water\ (Agathe, a matriarca sobre as águas) é uma reportagem multimídia que levanta as vozes das pescadoras tradicionais dos desembarcadouros de Kadutu e Bagira, província de Kivu do Sul, República Democrática do Congo</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
              </div>
              <div className="lang" title='Language'>sw, en, fr</div>
            </div>

            {/*Add block 16 */}
            <div key="16" className='izzi'>
              <div className="header">
                <div className="index">ⵞ</div>
                <div className="year">2024</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/izzi/#/" target="_blank" rel="noopener noreferrer">ECO-COSMIC CALENDAR</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/izzi/#/" target="_blank" rel="noopener noreferrer">O \Calendário ecológico e cósmico do povo Izzi\ (Ȯra Ebonyi, Nigéria) é um sistema de conhecimento vivo que incorpora continuamente a compreensão do tempo e das fenomenologias cosmológicas em relação aos processos ecológicos e ao movimento dos corpos celestes. O calendário é apresentado aqui de forma gráfica com o objetivo de documentar e transmitir o conhecimento indígena</a></p></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 15 */}
            <div key="15" className='quilombo'>
              <div className="header">
                <div className="index">ꔞ</div>
                <div className="year">2023</div>
              </div>
              <div className="title"><a href="https://chiroxiphiacaudata.github.io/quilombo/" target="_blank" rel="noopener noreferrer">RE-EXISTIR</a></div>
              <div className="description"><p><a href="https://chiroxiphiacaudata.github.io/quilombo/" target="_blank" rel="noopener noreferrer">\Re-existências quilombolas\ coloca as comunidades quilombolas no mapa e reivindica seu reconhecimento. Cada ponto no mapa é uma pessoa quilombola que re-existe</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
              </div>
              <div className="lang" title='Language'>pt</div>
            </div>

            {/*Add block 14 */}
            <div key="14" className='ishasha'>
              <div className="header">
                <div className="index">ꖹ</div>
                <div className="year">2023</div>
              </div>
              <div className="title"><a href="https://chiroxiphiacaudata.github.io/60point8/#/fr-FR" target="_blank" rel="noopener noreferrer">60.8KM</a></div>
              <div className="description"><p><a href="https://chiroxiphiacaudata.github.io/60point8/#/fr-FR" target="_blank" rel="noopener noreferrer">\60.8 km, une route de sang\, é um relatório on-line que expõe e condena crimes ambientais perpetrados entre 2018 e 2023 no eixo rodoviário Rutshuru-Ishasha na província de Kivu do Norte da República Democrática do Congo</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
              </div>
              <div className="lang" title='Language'>en, fr</div>
            </div>

            {/*Add block 13 */}
            <div key="13" className='beatrice'>
              <div className="header">
                <div className="index">ㅆ</div>
                <div className="year">2023</div>
              </div>
              <div className="title"><a href="https://watetezi.github.io/beatrice/" target="_blank" rel="noopener noreferrer">BEATRICE</a></div>
              <div className="description"><p><a href="https://watetezi.github.io/beatrice/" target="_blank" rel="noopener noreferrer">\Morembe, meu nome é Beatrice\, é a história de uma pescadora e sua comunidade na fronteira entre Uganda e a República Democrática do Congo. Como as mulheres estão enfrentando desafios para sua subsistência, um megafone para amplificar sua voz</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 12 */}
            <div key="12" className='carto'>
              <div className="header">
                <div className="index">ꗴ</div>
                <div className="year">2023</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/cartorituals/" target="_blank" rel="noopener noreferrer">CARTO RITUALS</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/cartorituals/" target="_blank" rel="noopener noreferrer">\Rituals in the cartographic practice\, è um arquivo visual que reúne práticas de tecnologia social e cartografia participativa do Sul Global como um produto endógeno da relação múltipla entre corpo - território - idioma. Enfrentando o racismo epistêmico</a></p></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 11 */}
            <div key="11" className='comunidados'>
              <div className="header">
                <div className="index">ꖳ</div>
                <div className="year">2022</div>
              </div>
              <div className="title"><a href="https://chiroxiphiacaudata.github.io/comunidados/" target="_blank" rel="noopener noreferrer">Comuni-<br />dados</a></div>
              <div className="description"><p><a href="https://chiroxiphiacaudata.github.io/comunidados/" target="_blank" rel="noopener noreferrer">\Comunidados\, è uma plataforma participativa para coletar, compartilhar e processar dados, informações, textos, vídeos, imagens e áudio sobre Tinguá e as comunidades do Vale do Tinguá (Nova Iguaçu, Rio de Janeiro, Brasil). A partir de uma perspectiva ambientalista e de um desenvolvimento socioeconômico justo e sustentável</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
              </div>
              <div className="lang" title='Language'>pt</div>
            </div>


            {/*Add block 10 */}
            <div key="10" className='defence'>
              <div className="header">
                <div className="index">ꖺ</div>
                <div className="year">2022</div>
              </div>
              <div className="title"><a href="https://watetezi.org/wp-content/uploads/2022/04/HALTING-THE-ECOLOGICAL-CRISIS-AND-ECOSYSTEM-COLLAPSE-OF-THE-CONGO-BASIN-EDGE_v2_compressed.pdf" target="_blank" rel="noopener noreferrer">Last Defence</a></div>
              <div className="description"><a href="https://watetezi.org/wp-content/uploads/2022/04/HALTING-THE-ECOLOGICAL-CRISIS-AND-ECOSYSTEM-COLLAPSE-OF-THE-CONGO-BASIN-EDGE_v2_compressed.pdf" target="_blank" rel="noopener noreferrer">\The last defence\, mostra como evitar a crise ecológica e o colapso do ecossistema da orla da bacia do Congo e investiga as noções de justiça social, ecológica e climática, concentrando-se no território de Watsa, província de Haut-Uélé, República Democrática do Congo</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
              </div>
              <div className="lang" title='Language'>en, fr</div>
            </div>


            {/*Add block 09 */}
            <div key="09" className='blood'>
              <div className="header">
                <div className="index">ꖁ</div>
                <div className="year">2021</div>
              </div>
              <div className="title"><a href="https://www.watetezi.org/wp-content/uploads/2021/03/Environemtal-Defenders-Blood-in-the-forest-v01.pdf" target="_blank" rel="noopener noreferrer">Blood in the Forest</a></div>
              <div className="description"><a href="https://www.watetezi.org/wp-content/uploads/2021/03/Environemtal-Defenders-Blood-in-the-forest-v01.pdf" target="_blank" rel="noopener noreferrer">\Blood in the Forest\, identifica áreas prioritárias ecologicamente frágeis para conservação e restauração florestal no setor de Mambasa e Mongbwalu, província de Ituri, República Democrática do Congo</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 08 */}
            <div key="08" className='shores'>
              <div className="header">
                <div className="index">ꖻ</div>
                <div className="year">2021</div>
              </div>
              <div className="title"><a href="https://chiroxiphiacaudata.github.io/the-minute-we-fall-silent/" target="_blank" rel="noopener noreferrer">ALONG THE SHORES</a></div>
              <div className="description"><a href="https://chiroxiphiacaudata.github.io/the-minute-we-fall-silent/" target="_blank" rel="noopener noreferrer">\Along the Shores of the Itaka Lya Mwitanzige\, è uma viagem que conecta mulheres e seus direitos no norte de Albertine Rift, Uganda</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 07 */}
            <div key="07" className='onda'>
              <div className="header">
                <div className="index">ꖃ</div>
                <div className="year">2021</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/comunidados/arquivo/Brasil/Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense/01-Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense.pdf" target="_blank" rel="noopener noreferrer">ÁGUA E MATA</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/comunidados/arquivo/Brasil/Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense/01-Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense.pdf" target="_blank" rel="noopener noreferrer">Um relatório para demonstrar que a entidade ambientalista Onda Verde se torna um centro para as economias florestais da Baixada Fluminense (Estado do Rio de Janeiro, Brasil), ampliando o potencial da restauração florestal como estratégia de adaptação às mudanças climáticas</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
              </div>
              <div className="lang" title='Language'>pt</div>
            </div>

            {/*Add block 06 */}
            <div key="06" className='bugoma'>
              <div className="header">
                <div className="index">ฒ</div>
                <div className="year">2021</div>
              </div>
              <div className="title"><a href="https://watetezi.org/data/maps/forest/bugoma.html" target="_blank" rel="noopener noreferrer">664<br />HECTARES</a></div>
              <div className="description"><a href="https://watetezi.org/data/maps/forest/bugoma.html" target="_blank" rel="noopener noreferrer">Duas empresas da indústria da cana-de-açúcar deram início ao desmatamento de milhares de hectares em trechos disputados da Floresta Bugoma, em Uganda. \664 Hectares\, habilita o sensoriamento remoto para demonstrar o tamanho da destruição da floresta</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 05 */}
            <div key="05" className='tracker'>
              <div className="header">
                <div className="index">ꖬ</div>
                <div className="year">2020</div>
              </div>
              <div className="title"><a href="https://watetezi.org/tracker/" target="_blank" rel="noopener noreferrer">TRACKER</a></div>
              <div className="description"><a href="https://watetezi.org/tracker/" target="_blank" rel="noopener noreferrer">\Albertine Region Tracker\, é uma plataforma de mapeamento e denúncia de violações de direitos humanos e crimes ambientais. O tracker da região de Albertine Rift coleta, verifica e publica relatórios de uma rede de ativistas dedicados e treinados, baseados nos distritos do norte e oeste de Uganda</a></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 04 */}
            <div key="04" className='underwater'>
              <div className="header">
                <div className="index">ꖸ</div>
                <div className="year">2020</div>
              </div>
              <div className="title"><a href="https://valori.it/innalzamento-mari-danni-miliardari-mappe/" target="_blank" rel="noopener noreferrer">ITALY UNDERWATER</a></div>
              <div className="description"><a href="https://valori.it/innalzamento-mari-danni-miliardari-mappe/" target="_blank" rel="noopener noreferrer">\Italy underwater\, estima a riqueza que cada província italiana perderia devido a elevação do nível do mar provocada pelas mudanças climáticas</a></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
              </div>
              <div className="lang" title='Language'>it</div>
            </div>

            {/*Add block 03 */}
            <div key="03" className='metro'>
              <div className="header">
                <div className="index">ꖧ</div>
                <div className="year">2019</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/metrocarto/Lk4YGYmTs4LaMCgV.html" target="_blank" rel="noopener noreferrer">METRO CARTO</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/metrocarto/Lk4YGYmTs4LaMCgV.html" target="_blank" rel="noopener noreferrer">\The metropolitan cartography\, é um curso on-line sobre o processo de leitura, conhecimento e interpretação do território de uma metrópole usando mapas e tecnologias de informações espaciais por meio de um sistema de apoio à tomada de decisões</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 07 */}
            {/* <div key="07" className='paz'>
              <div className="header">
                <div className="index">ꖅ</div>
                <div className="year">2018</div>
              </div>
              <div className="title">PACEÑ@S Y ALTEÑ@S</div>
              <div className="description">Materiais e métodos de pesquisa sobre a área urbana de La Paz / El Alto (Bolívia) no âmbito do Grupo de Especialistas da ONU-Habitat para o desenvolvimento dos Princípios Orientadores sobre Conexões Urbano-Rurais para o avanço do desenvolvimento territorial integrad</div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
              </div>
              <div className="lang" title='Language'>es</div>
            </div> */}

            {/*Add block 06 */}
            {/* <div key="06" className='uganda'>
              <div className="header">
                <div className="index">ꖐ</div>
                <div className="year">2018</div>
              </div>
              <div className="title">WAKATI UJAO JE?</div>
              <div className="description">Materiais e métodos de pesquisa sobre cidades secundárias em Uganda, com foco no corredor Koboko, Arua, Nebbi, região do Nilo Ocidental (Uganda)</div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="lang" title='Language'>en</div>
              </div>
            </div> */}

            {/*Add block 05 */}
            {/* <div key="05" className='vie'>
              <div className="header">
                <div className="index">ꖜ</div>
                <div className="year">2017</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/presentations/milano/milano.php" target="_blank" rel="noopener noreferrer">SANT ORSOLA 5</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/presentations/milano/milano.php" target="_blank" rel="noopener noreferrer">\Le matite di Sant'Orsola\, é um SIG histórico que documenta a vida e as obras dos arquitetos de Milão da geração "Novecento", como Gio Ponti e Piero Portaluppi</a></div>
              <div className="viz">
                <div className="circles-5" title='Information designer'></div>
                <div className="circles-7" title='Map Design'></div>
              </div>
            </div> */}

            {/*Add block 02 */}
            <div key="02" className='diesel'>
              <div className="header">
                <div className="index">ꖵ</div>
                <div className="year">2017</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/cloud/Musetta_Dieselgate_Esta_FIOM_poster.pdf" target="_blank" rel="noopener noreferrer">DIESELGATE</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/cloud/Musetta_Dieselgate_Esta_FIOM_poster.pdf" target="_blank" rel="noopener noreferrer">Uma série de infográficos sobre o caso Dieselgate, apresentando as medidas tomadas para uma mudança de paradigma no setor automotivo</a></div>
              <div className="viz">
                <div className="circles-5 tooltip" data-text='Information designer'></div>
              </div>
              <div className="lang" title='Language'>it</div>
            </div>

            {/*Add block 03 */}
            {/* <div key="03" className='sound'>
              <div className="header">
                <div className="index">ꖣ</div>
                <div className="year">2014</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/soundofthings/index.html" target="_blank" rel="noopener noreferrer">SOUND OF THINGS</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/soundofthings/index.html" target="_blank" rel="noopener noreferrer">\Sound of Things\, é um projeto de sonificação e musicalização, sobre como transformar informações por meio do design e da produção de uma taxonomia sonora</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
              </div>
            </div> */}

            {/*Add block 02 */}
            {/* <div key="02" className='animal'>
              <div className="header">
                <div className="index">ꖒ</div>
                <div className="year">2013</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/resource/alessandro-musetta-animal-estates.pdf" target="_blank" rel="noopener noreferrer">ANIMAL ESTATES</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/resource/alessandro-musetta-animal-estates.pdf" target="_blank" rel="noopener noreferrer">\Animal Estates\, é um projeto especulativo sobre a capacidade das espécies silvestres de construir no espaço urbano seu próprio espaço de habitação, de cooperar e co-habitar</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
              </div>
            </div> */}

            {/*Add block 01 */}
            {/* <div key="01" >
              <div className='legend'>
                <div className="circles-3" style={{ width: "100%" }}>
                  <div className='legendtext'>Pesquisa</div>
                </div>
                <div className="circles-4" style={{ width: "100%", marginTop: "5px" }}>
                  <div className='legendtext'>Especialista em SIG</div>
                </div>
                <div className="circles-5" style={{ width: "100%", marginTop: "5px" }}>
                  <div className='legendtext'>Design de informação</div>
                </div>
                <div className="circles-6" style={{ width: "100%", marginTop: "5px" }}>
                  <div className='legendtext'>Desenvolvimento web</div>
                </div>
                <div className="circles-7" style={{ width: "100%", marginTop: "5px" }}>
                  <div className='legendtext'>Design do mapa</div>
                </div>
              </div>
            </div>*/}

          </ResponsiveGridLayout>
        </div>

      </>

      </><div className='bio'>
          <div className='biotext'>🕮<br></br><br></br>✻ ✻ ✻ ✻ ✻ ✻<br></br><br></br>Como somos seres humanos cercados por uma complexidade imensurável, não conseguimos terraformar Marte em uma questão de poucas gerações humanas, nem fazer a engenharia cirúrgica do clima sem uma enxurrada de consequências indesejadas. Então, se você precisa de soluções rápidas e simples, primeiro deve ser capaz de enxergar a complexidade. Meu superpoder é justamente transformar o simples em complexo (≠ complicado) e comunicá-lo, pois, uma vez revelado, será mais fácil encontrar soluções comuns. Ou pelo menos, tentamos. A urgência de compreender práticas, ontologias e epistemologias fizeram que me apaixonasse por pesquisas e investigações. Acima de tudo, construindo experiências nos campos da ecologia política e da justiça social; aliás, tenho um apego especial às causas dos movimentos africanos e afrodescendentes e às formas de libertação e cooperação Sul-Sul. Assim, não posso deixar de ouvir as pessoas e estou disposto a viajar o quanto for necessário para aprender com elas.<br /><br /><br />
            <p style={{ border: "1px black solid", padding: "12px" }}><img src={Otc} style={{ width: 20 }} /><br /><br />Entre os projetos apresentados, alguns foram desenvolvidos em conjunto com comunidades locais e tradicionais com o único objetivo de apoiar seus direitos territoriais e visibilizar suas lutas pela sobrevivência cultural e biológica. Todos os direitos de informação e dados sobre cultura, visão cosmológica, direito consuetudinário, artesanato, patrimônio tangível e intangível, biodiversidade, folclore e bens comuns, permanecem com esses povos.
              <br /><br /><b><i>Aberto para colaboração</i></b><br />ALESSANDRO está comprometido com o desenvolvimento de novos modos de colaboração, envolvimento e parceria com os povos indígenas para o cuidado e a conservação de coleções de patrimônio passadas e futuras. O que é este aviso? Leia mais <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>aqui</u></a>.<br /></p>
            <br /><br />Obrigado por estar aqui!<br /><br /><br />hello@alessandromusetta.com<br />PGP KEY <a href="img/HgauJwTzvNjsxVS2P3oJX.asc">🔒</a><br /> FINGERPRINT: D43A CD45 175E 79EA F11F D448 C90C 1302 EDCB 1889<br /><br /><br />
            <br /><br /><Link style={{ fontSize: 8 }} to="/">EN</Link><br /><br />
          </div>
        </div></></>
    );
  }
}

