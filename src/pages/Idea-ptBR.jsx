import React from 'react';
import { Link } from "react-router-dom";
import CasabarptBR from './Casabar-ptBR';
import NavbarptBR from './Navbar-ptBR';
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import './block.css';
import './patterns.css';
import Otc from './img/open_to_collaborate.png';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class IdeaptBR extends React.Component {

  static defaultProps = {
    margin: [2, 2],
  }
  render() {
    const layout = [
      { i: "16", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "15", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "14", x: 6, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "13", x: 9, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "12", x: 0, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "11", x: 3, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "10", x: 6, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "09", x: 9, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "08", x: 0, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "07", x: 3, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "06", x: 6, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "05", x: 9, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "04", x: 0, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "03", x: 3, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "02", x: 6, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "01", x: 9, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
    ];

    const layoutxs = [
      { i: "16", x: 0, y: 0, w: 3, h: 3, static: true },
      { i: "15", x: 3, y: 0, w: 3, h: 3, static: true },
      { i: "14", x: 6, y: 0, w: 3, h: 3, static: true },
      { i: "13", x: 9, y: 0, w: 3, h: 3, static: true },
      { i: "12", x: 0, y: 3, w: 3, h: 3, static: true },
      { i: "11", x: 3, y: 3, w: 3, h: 3, static: true },
      { i: "10", x: 6, y: 3, w: 3, h: 3, static: true },
      { i: "09", x: 9, y: 3, w: 3, h: 3, static: true },
      { i: "08", x: 0, y: 6, w: 3, h: 3, static: true },
      { i: "07", x: 3, y: 6, w: 3, h: 3, static: true },
      { i: "06", x: 6, y: 6, w: 3, h: 3, static: true },
      { i: "05", x: 9, y: 6, w: 3, h: 3, static: true },
      { i: "04", x: 0, y: 9, w: 3, h: 3, static: true },
      { i: "03", x: 3, y: 9, w: 3, h: 3, static: true },
      { i: "02", x: 6, y: 9, w: 3, h: 3, static: true },
      { i: "01", x: 9, y: 9, w: 3, h: 3, static: true },
    ];

    return (

      <><><><>
        <h1 className='ilnomecheappareprimadelrestopt'><span>ALESSANDRO</span></h1>
        <h2 className='dopoilnomecheappareprimadelrestopt'><span>AMPLIFICA AS VOZES DAS COMUNIDADES MARGINALIZADAS, CONSTRUINDO SOLIDARIEDADE POR MEIO DA COOPERAÇÃO SUL-SUL</span></h2>
        <h1 className='ascii'><span>✑</span></h1>

        <NavbarptBR />

        <div>
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout, xs: layoutxs }}
            margin={{ lg: [8, 8], md: [6, 6], sm: [4, 4] }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >


            {/* key font https://decodeunicode.org/en/u+AB01 */}

            {/*Add block 16 */}
            <div key="16" className='matriarch'>
              <div className="header">
                <div className="index">𐏌</div>
                <div className="yeartext">2025</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_SW, EN</div>
              <div className="titletext"><a href="https://archive.org/details/agathe-matriarch-juu-ya-maji" target="_blank" rel="noopener noreferrer">Agathe Matriarch Juu Ya Maji <i>(Agathe, a matriarca sobre as águas)</i></a></div>
            </div>

            {/*Add block 15 */}
            <div key="15" className='nyinga'>
              <div className="header">
                <div className="index">𐰪</div>
                <div className="yeartext">2025</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_EN</div>
              <div className="titletext"><a href="https://archive.org/details/nyinga_tye_beatrice" target="_blank" rel="noopener noreferrer">Nyinga Tye Beatrice <i>(Nosso nome é Beatrice)</i></a></div>
            </div>

            {/*Add block 14 */}
            <div key="14" className='calendario'>
              <div className="header">
                <div className="index">𐤎</div>
                <div className="yeartext">2025</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_pt-BR, ES, EN</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/CALENDARIO_ECOCOSMOLOGICO/CALENDARIO_ECOCOSMOLOGICO.pdf" target="_blank" rel="noopener noreferrer">Instruções para a criação de um calendário ecocosmológico</a></div>
            </div>

            {/*Add block 13 */}
            <div key="13" className='cynthia'>
              <div className="header">
                <div className="index">ﻎ</div>
                <div className="yeartext">2025</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_EN</div>
              <div className="titletext"><a href="https://icsf.net/yemaya/profile-fishing-against-odds-2/" target="_blank" rel="noopener noreferrer">Pescando contra todas as adversidades. Pescadoras do Lago Kivu lutam contra o estigma social e a discriminação com Mama Cynthia no comando</a></div>
            </div>

            {/*Add block 12 */}
            <div key="12" className='aves'>
              <div className="header">
                <div className="index">𐰍</div>
                <div className="yeartext">2024</div>
              </div>
              <div className="description">IDEIA: IDIOMAS_pt-BR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST_paisagem-sonora-floresta-tingua.pdf" target="_blank" rel="noopener noreferrer">A PAISAGEM SONORA DA FLORESTA DO TINGUÁ. Arquivo, divulgação científica e educação ambiental envolvendo a bioacústica</a></div>
            </div>

            {/*Add block 11 */}
            <div key="11" className='ice'>
              <div className="header">
                <div className="index">ꬤ</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_EN</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-antarctica.pdf" target="_blank" rel="noopener noreferrer">Revelando a complexidade : Antártica, Oceano Antártico, Mar de Ross, Terra de Victoria, Montanhas Transantárticas, Plataforma de Gelo Ross, Mcmurdo Sound</a></div>
            </div>

            {/*Add block 10 */}
            <div key="10" className='desert'>
              <div className="header">
                <div className="index">ꬬ</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_EN, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-desert.pdf" target="_blank" rel="noopener noreferrer">Revelando a complexidade : Deserto de Ténéré, Montanhas de Aïr, Planície de Ighazer, Reserva Natural Nacional de Aïr e Ténéré, Oásis de Kawar</a></div>
            </div>

            {/*Add block 09 */}
            <div key="09" className='forest'>
              <div className="header">
                <div className="index">︗</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_EN, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-forest.pdf" target="_blank" rel="noopener noreferrer">Revelando a complexidade : Floresta, Bacia do Congo, Províncias de Ituri e Hautuélé, Chefatura de Mambasa e Watsa, Reserva do Okapi, Rio Kibali e Ituri</a></div>
            </div>

            {/*Add block 08 */}
            <div key="08" className='amazonia'>
              <div className="header">
                <div className="index">ꬁ</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">IDEIA: IDIOMAS_EN, pt-BR, ES, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/alliances-aliancas-alianzas-alliances.pdf" target="_blank" rel="noopener noreferrer">Fortalecimento das alianças entre pesquisadorxs, defensorxs da terra e dos direitos territoriais entre a Amazônia e a Bacia do Congo</a></div>
            </div>

            {/*Add block 07 */}
            <div key="07" className='candomble'>
              <div className="header">
                <div className="index">ꬉ</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">IDEIA: IDIOMAS_EN, pt-BR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/culto-afro-educacao-ambiental_v02.pdf" target="_blank" rel="noopener noreferrer">Acabar com a intolerância religiosa através da educação ambiental. As religiões da diáspora africana no Brasil</a></div>
            </div>

            {/*Add block 06 */}
            <div key="06" className='idp'>
              <div className="header">
                <div className="index">𐓦</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_EN</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/Managing-water-scarcity-IDPs-Rutshuru-YOUsustain.pdf" target="_blank" rel="noopener noreferrer">Gerenciar a falta de água nos campos de refugiados internos ao longo da rodovia nacional congolesa N2</a></div>
            </div>

            {/*Add block 05 */}
            <div key="05" className='model'>
              <div className="header">
                <div className="index">שּ</div>
                <div className="yeartext">2020</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_EN</div>
              <div className="titletext"><a href="https://docs.google.com/presentation/d/1fquKsck_tr3GPNNOkClED8fFMgA7UZzOFcs7oPUeEOU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">UM MODELO PARA A RESILIÊNCIA DE AGRICULTORES DE SUBSISTÊNCIA E PESCADORES NA UGANDA</a></div>
            </div>

            {/*Add block 04 */}
            <div key="04" className='simpleshort'>
              <div className="header">
                <div className="index">༕</div>
                <div className="yeartext">2018</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_EN</div>
              <div className="titletext"><a href="https://medium.com/@lsnmst/redutionism-and-multiscale-indicators-in-the-complex-system-dynamics-approach-cb4bca38c9b8" target="_blank" rel="noopener noreferrer">Quando lhe venderem soluções em promessas imediatistas e simplistas, não confie nelas</a></div>
            </div>

            {/*Add block 03 */}
            <div key="03" className='soundofthings'>
              <div className="header">
                <div className="index">ꡤ</div>
                <div className="yeartext">2016</div>
              </div>
              <div className="description">IDEIA: IDIOMAS_IT</div>
              <div className="titletext"><a href="http://www.postmediabooks.it/2016/152aurali/9788874901524.htm" target="_blank" rel="noopener noreferrer">O som das coisas</a></div>
            </div>

            {/*Add block 02 */}
            <div key="02" className='performativa'>
              <div className="header">
                <div className="index">𐭬</div>
                <div className="yeartext">2016</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_IT</div>
              <div className="titletext"><a href="https://medium.com/@lsnmst/la-mappa-performativa-d43a8b860e9d" target="_blank" rel="noopener noreferrer">O mapa performativo. Como as práticas espaciais nômades no mundo digital influenciaram a geografia radical</a></div>
            </div>

            {/*Add block 01 */}
            <div key="01" className='popscape'>
              <div className="header">
                <div className="index">𐭛</div>
                <div className="yeartext">2011</div>
              </div>
              <div className="description">TEXTO: IDIOMAS_IT</div>
              <div className="titletext"><a href="https://archive.org/details/popscape__immagine-della-citta/page/n29/mode/thumb" target="_blank" rel="noopener noreferrer">Popscape. Notas para uma crítica aos estudos urbanos, por um estudante de arquitetura (entre 2011 e 2012)</a></div>
            </div>

          </ResponsiveGridLayout>

        </div>
      </>

      </><div className='bio'>
          <div className='biotext'>🕮<br></br><br></br>✻ ✻ ✻ ✻ ✻ ✻<br></br><br></br>Como somos seres humanos cercados por uma complexidade imensurável, não conseguimos terraformar Marte em uma questão de poucas gerações humanas, nem fazer a engenharia cirúrgica do clima sem uma enxurrada de consequências indesejadas. Então, se você precisa de soluções rápidas e simples, primeiro deve ser capaz de enxergar a complexidade. Meu superpoder é justamente transformar o simples em complexo (≠ complicado) e comunicá-lo, pois, uma vez revelado, será mais fácil encontrar soluções comuns. Ou pelo menos, tentamos. A urgência de compreender práticas, ontologias e epistemologias fizeram que me apaixonasse por pesquisas e investigações. Acima de tudo, construindo experiências nos campos da ecologia política e da justiça social; aliás, tenho um apego especial às causas dos movimentos africanos e afrodescendentes e às formas de libertação e cooperação Sul-Sul. Assim, não posso deixar de ouvir as pessoas e estou disposto a viajar o quanto for necessário para aprender com elas.<br /><br /><br />
            <p style={{ border: "1px black solid", padding: "12px" }}><img src={Otc} style={{ width: 20 }} /><br /><br />Entre os projetos apresentados, alguns foram construídos em solidariedade e conjuntamente com comunidades indígenas, tradicionais e locais entre a América Latina e a África, com o objetivo de conscientizar sobre suas lutas pela sobrevivência cultural e biológica. Todos os direitos de informação e dados sobre cultura, visão cosmológica, direito consuetudinário, artesanato, patrimônio tangível e intangível, biodiversidade, folclore e bens comuns, permanecem com esses povos.
              <br /><br /><b><i>Aberto para colaboração</i></b><br />ALESSANDRO está comprometido com o desenvolvimento de novos modos de colaboração, envolvimento e parceria com os povos indígenas para o cuidado e a conservação de coleções de patrimônio passadas e futuras. O que é este aviso? Leia mais <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>aqui</u></a>.<br /></p>
            <br /><br />Obrigado por estar aqui!<br /><br /><br />hello@alessandromusetta.com<br />PGP KEY <a href="img/HgauJwTzvNjsxVS2P3oJX.asc">🔒</a><br /> FINGERPRINT: D43A CD45 175E 79EA F11F D448 C90C 1302 EDCB 1889<br /><br /><br />
            <br /><br /><Link style={{ fontSize: 8 }} to="/Idea">EN</Link><br /><br />
          </div>
        </div></></>
    );
  }
}

