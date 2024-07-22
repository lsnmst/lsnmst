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
      { i: "07", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true},
      { i: "06", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true},
      { i: "05", x: 6, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true},
      { i: "04", x: 9, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true},
      { i: "03", x: 0, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true},
      { i: "02", x: 3, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true},
      { i: "01", x: 6, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true},
    ];

    const layoutxs = [
      { i: "07", x: 0, y: 0, w: 3, h: 3, static: true },
      { i: "06", x: 3, y: 0, w: 3, h: 3, static: true },
      { i: "05", x: 6, y: 0, w: 3, h: 3, static: true },
      { i: "04", x: 9, y: 0, w: 3, h: 3, static: true },
      { i: "03", x: 0, y: 3, w: 3, h: 3, static: true },
      { i: "02", x: 3, y: 3, w: 3, h: 3, static: true },
      { i: "01", x: 6, y: 3, w: 3, h: 3, static: true },
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

            {/*Add block 07 */}
            <div key="07" className='ice'>
              <div className="header">
                <div className="index">ꬤ</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">LANG_EN</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-antarctica.pdf" target="_blank" rel="noopener noreferrer">Revelando a complexidade : Antártica, Oceano Antártico, Mar de Ross, Terra de Victoria, Montanhas Transantárticas, Plataforma de Gelo Ross, Mcmurdo Sound</a></div>
            </div>

            {/*Add block 06 */}
            <div key="06" className='desert'>
              <div className="header">
                <div className="index">ꬬ</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">LANG_EN, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-desert.pdf" target="_blank" rel="noopener noreferrer">Revelando a complexidade : Deserto de Ténéré, Montanhas de Aïr, Planície de Ighazer, Reserva Natural Nacional de Aïr e Ténéré, Oásis de Kawar</a></div>
            </div>

            {/*Add block 05 */}
            <div key="05" className='forest'>
              <div className="header">
                <div className="index">︗</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">LANG_EN, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-forest.pdf" target="_blank" rel="noopener noreferrer">Revelando a complexidade : Floresta, Bacia do Congo, Províncias de Ituri e Hautuélé, Chefatura de Mambasa e Watsa, Reserva do Okapi, Rio Kibali e Ituri</a></div>
            </div>

            {/*Add block 04 */}
            <div key="04" className='amazonia'>
              <div className="header">
                <div className="index">ꬁ</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">LANG_EN, pt-BR, ES, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/alliances-aliancas-alianzas-alliances.pdf" target="_blank" rel="noopener noreferrer">Fortalecimento das alianças entre pesquisadorxs, defensorxs da terra e dos direitos territoriais entre a Amazônia e a Bacia do Congo</a></div>
            </div>

            {/*Add block 03 */}
            <div key="03" className='candomble'>
              <div className="header">
                <div className="index">ꬉ</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">LANG_EN, pt-BR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/culto-afro-educacao-ambiental_v02.pdf" target="_blank" rel="noopener noreferrer">Acabar com a intolerância religiosa através da educação ambiental. As religiões da diáspora africana no Brasil</a></div>
            </div>

            {/*Add block 02 */}
            <div key="02" className='idp'>
              <div className="header">
                <div className="index">𐓦</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">LANG_EN</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/Managing-water-scarcity-IDPs-Rutshuru-YOUsustain.pdf" target="_blank" rel="noopener noreferrer">Gerenciar a falta de água nos campos de refugiados internos ao longo da rodovia nacional congolesa N2</a></div>
            </div>

            {/*Add block 01 */}
            <div key="01" className='simpleshort'>
              <div className="header">
                <div className="index">༕</div>
                <div className="yeartext">2018</div>
              </div>
              <div className="description">LANG_EN</div>
              <div className="titletext"><a href="https://medium.com/@lsnmst/redutionism-and-multiscale-indicators-in-the-complex-system-dynamics-approach-cb4bca38c9b8" target="_blank" rel="noopener noreferrer">Quando lhe venderem soluções em promessas imediatistas e simplistas, não confie nelas</a></div>
            </div>

          </ResponsiveGridLayout>

        </div>
      </>

      </><div className='bio'>
          <div className='biotext'>🕮<br></br><br></br>✻ ✻ ✻ ✻ ✻ ✻<br></br><br></br>Como somos seres humanos cercados por uma complexidade imensurável, não conseguimos terraformar Marte em uma questão de poucas gerações humanas, nem fazer a engenharia cirúrgica do clima sem uma enxurrada de consequências indesejadas. Então, se você precisa de soluções rápidas e simples, primeiro deve ser capaz de enxergar a complexidade. Meu superpoder é justamente transformar o simples em complexo (≠ complicado) e comunicá-lo, pois, uma vez revelado, será mais fácil encontrar soluções comuns. Ou pelo menos, tentamos. A urgência de compreender práticas, ontologias e epistemologias fizeram que me apaixonasse por pesquisas e investigações. Acima de tudo, construindo experiências nos campos da ecologia política e da justiça social; aliás, tenho um apego especial às causas dos movimentos africanos e afrodescendentes e às formas de libertação e cooperação Sul-Sul. Assim, não posso deixar de ouvir as pessoas e estou disposto a viajar o quanto for necessário para aprender com elas.<br /><br /><br /><img src={Otc} style={{ width: 20 }} /><br /><br />Entre os projetos apresentados, alguns foram desenvolvidos em conjunto com comunidades locais e tradicionais com o único objetivo de apoiar seus direitos territoriais e visibilizar suas lutas pela sobrevivência cultural e biológica. Todos os direitos de informação e dados sobre cultura, visão cosmológica, direito consuetudinário, artesanato, patrimônio tangível e intangível, biodiversidade, folclore e bens comuns, permanecem com esses povos.
            <br /><br /><b><i>Aberto para colaboração</i></b><br />ALESSANDRO está comprometido com o desenvolvimento de novos modos de colaboração, envolvimento e parceria com os povos indígenas para o cuidado e a conservação de coleções de patrimônio passadas e futuras. O que é este aviso? Leia mais <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>aqui</u></a>.<br />
            <br /><br />Obrigado por estar aqui!<br /><br /><br />hello@alessandromusetta.com<br />PGP KEY <a href="img/HgauJwTzvNjsxVS2P3oJX.asc">🔒</a><br /> FINGERPRINT: D43A CD45 175E 79EA F11F D448 C90C 1302 EDCB 1889<br /><br /><br />
            <br /><br /><Link style={{ fontSize: 8 }} to="/idea">EN</Link><br /><br />
          </div>
        </div></></>
    );
  }
}

