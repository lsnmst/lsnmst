import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import Casabar from './Casabar';
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import './block.css';
import './patterns.css';
import Otc from './img/open_to_collaborate.png';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Idea extends React.Component {

  static defaultProps = {
    margin: [2, 2],
  }
  render() {
    const layout = [
      { i: "14", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "13", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "12", x: 6, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "11", x: 9, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "10", x: 0, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "09", x: 3, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "08", x: 6, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "07", x: 9, y: 3, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "06", x: 0, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "05", x: 3, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "04", x: 6, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "03", x: 9, y: 6, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "02", x: 0, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "01", x: 3, y: 9, w: 3, h: 3, minW: 2, minH: 2, static: true },
    ];

    const layoutxs = [
      { i: "14", x: 0, y: 0, w: 3, h: 3, static: true },
      { i: "13", x: 3, y: 0, w: 3, h: 3, static: true },
      { i: "12", x: 6, y: 0, w: 3, h: 3, static: true },
      { i: "11", x: 9, y: 0, w: 3, h: 3, static: true },
      { i: "10", x: 0, y: 3, w: 3, h: 3, static: true },
      { i: "09", x: 3, y: 3, w: 3, h: 3, static: true },
      { i: "08", x: 6, y: 3, w: 3, h: 3, static: true },
      { i: "07", x: 9, y: 3, w: 3, h: 3, static: true },
      { i: "06", x: 0, y: 6, w: 3, h: 3, static: true },
      { i: "05", x: 3, y: 6, w: 3, h: 3, static: true },
      { i: "04", x: 6, y: 6, w: 3, h: 3, static: true },
      { i: "03", x: 9, y: 6, w: 3, h: 3, static: true },
      { i: "02", x: 0, y: 9, w: 3, h: 3, static: true },
      { i: "01", x: 3, y: 9, w: 3, h: 3, static: true },
    ];


    return (

      <><><><>
        <h1 className='ilnomecheappareprimadelresto'><span>ALESSANDRO</span></h1>
        <h2 className='dopoilnomecheappareprimadelresto'><span>AMPLIFIES VOICES FROM MARGINALISED COMMUNITIES, BUILDING SOLIDARITY THROUGH SOUTH-SOUTH COOPERATION</span></h2>
        <h1 className='ascii'><span>✑</span></h1>

        <Navbar />

        <div>
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout, xs: layoutxs }}
            margin={{ lg: [8, 8], md: [6, 6], sm: [4, 4] }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >


            {/* key font https://decodeunicode.org/en/u+AB01 */}

            {/*Add block 14 */}
            <div key="14" className='calendario'>
              <div className="header">
                <div className="index">𐤎</div>
                <div className="yeartext">2025</div>
              </div>
              <div className="description">TEXT: LANG_pt-BR, ES, EN</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/CALENDARIO_ECOCOSMOLOGICO/CALENDARIO_ECOCOSMOLOGICO.pdf" target="_blank" rel="noopener noreferrer">Instructions to create an ecocosmological calendar</a></div>
            </div>

            {/*Add block 13 */}
            <div key="13" className='cynthia'>
              <div className="header">
                <div className="index">ﻎ</div>
                <div className="yeartext">2025</div>
              </div>
              <div className="description">TEXT: LANG_EN</div>
              <div className="titletext"><a href="https://icsf.net/yemaya/profile-fishing-against-odds-2/" target="_blank" rel="noopener noreferrer">Fishing against odds. Fisherwomen of Lake Kivu fight against social stigma and discrimination with Mama Cynthia at the helm</a></div>
            </div>

            {/*Add block 12 */}
            <div key="12" className='aves'>
              <div className="header">
                <div className="index">𐰍</div>
                <div className="yeartext">2024</div>
              </div>
              <div className="description">IDEA: LANG_pt-BR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST_paisagem-sonora-floresta-tingua.pdf" target="_blank" rel="noopener noreferrer">THE SOUNDSCAPE OF THE TINGUÁ FOREST. Archive, popularisation and environmental education involving bioacoustics</a></div>
            </div>

            {/*Add block 11 */}
            <div key="11" className='ice'>
              <div className="header">
                <div className="index">ꬤ</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">TEXT: LANG_EN</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-antarctica.pdf" target="_blank" rel="noopener noreferrer">Reveal Complexity : Antarctica, Southern Ocean, Ross Sea, Victoria Land, Transantarctic Mountains, Ross Ice Shelf, Mcmurdo Sound, Terra Nova Bay</a></div>
            </div>

            {/*Add block 10 */}
            <div key="10" className='desert'>
              <div className="header">
                <div className="index">ꬬ</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">TEXT: LANG_EN, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-desert.pdf" target="_blank" rel="noopener noreferrer">Reveal Complexity : Ténéré Desert, Aïr Mountains, Ighazer Plain, Aïr And Ténéré National Nature Reserve, Kawar Oases</a></div>
            </div>

            {/*Add block 09 */}
            <div key="09" className='forest'>
              <div className="header">
                <div className="index">𐊙</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">TEXT: LANG_EN, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-forest.pdf" target="_blank" rel="noopener noreferrer">Reveal Complexity : Forest, Congo Basin, Ituri And Hautuélé Provinces, Mambasa And Watsa Chiefdom, Okapi Wildlife Reserve, Kibali and Ituri River</a></div>
            </div>

            {/*Add block 08 */}
            <div key="08" className='amazonia'>
              <div className="header">
                <div className="index">ꬁ</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">IDEA: LANG_EN, pt-BR, ES, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/alliances-aliancas-alianzas-alliances.pdf" target="_blank" rel="noopener noreferrer">Tightening alliances between researchers, earth and land rights defenders between Amazonia and the Congo Basin</a></div>
            </div>

            {/*Add block 07 */}
            <div key="07" className='candomble'>
              <div className="header">
                <div className="index">ꬉ</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">IDEA: LANG_EN, pt-BR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/culto-afro-educacao-ambiental_v02.pdf" target="_blank" rel="noopener noreferrer">Stop religious intolerance through environmental education. The African diaspora religions in Brazil</a></div>
            </div>

            {/*Add block 06 */}
            <div key="06" className='idp'>
              <div className="header">
                <div className="index">𐓦</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">TEXT: LANG_EN</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/Managing-water-scarcity-IDPs-Rutshuru-YOUsustain.pdf" target="_blank" rel="noopener noreferrer">Managing water scarcity in the IDPs camps located in the second-tier towns along the Congolese N2 national highway</a></div>
            </div>

            {/*Add block 05 */}
            <div key="05" className='model'>
              <div className="header">
                <div className="index">שּ</div>
                <div className="yeartext">2020</div>
              </div>
              <div className="description">TEXT: LANG_EN</div>
              <div className="titletext"><a href="https://docs.google.com/presentation/d/1fquKsck_tr3GPNNOkClED8fFMgA7UZzOFcs7oPUeEOU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">A MODEL FOR UGANDAN SUBSISTENCE FARMERS AND FISHERFOLKS RESILIENCE</a></div>
            </div>

            {/*Add block 04 */}
            <div key="04" className='simpleshort'>
              <div className="header">
                <div className="index">༕</div>
                <div className="yeartext">2018</div>
              </div>
              <div className="description">TEXT: LANG_EN</div>
              <div className="titletext"><a href="https://medium.com/@lsnmst/redutionism-and-multiscale-indicators-in-the-complex-system-dynamics-approach-cb4bca38c9b8" target="_blank" rel="noopener noreferrer">When they sell you solutions on short and simple promises, don't trust them</a></div>
            </div>

            {/*Add block 03 */}
            <div key="03" className='soundofthings'>
              <div className="header">
                <div className="index">ꡤ</div>
                <div className="yeartext">2016</div>
              </div>
              <div className="description">IDEA: LANG_IT</div>
              <div className="titletext"><a href="http://www.postmediabooks.it/2016/152aurali/9788874901524.htm" target="_blank" rel="noopener noreferrer">The sound of things</a></div>
            </div>

            {/*Add block 02 */}
            <div key="02" className='performativa'>
              <div className="header">
                <div className="index">𐭬</div>
                <div className="yeartext">2016</div>
              </div>
              <div className="description">TEXT: LANG_IT</div>
              <div className="titletext"><a href="https://medium.com/@lsnmst/la-mappa-performativa-d43a8b860e9d" target="_blank" rel="noopener noreferrer">The performative map. How nomadic spatial practices in the digital world have influenced radical geography</a></div>
            </div>

            {/*Add block 01 */}
            <div key="01" className='popscape'>
              <div className="header">
                <div className="index">𐭛</div>
                <div className="yeartext">2011</div>
              </div>
              <div className="description">TEXT: LANG_IT</div>
              <div className="titletext"><a href="https://archive.org/details/popscape__immagine-della-citta/page/n29/mode/thumb" target="_blank" rel="noopener noreferrer">Popscape. Notes for a critique of the urban studies,
                by an architecture student between 2011 and 2012</a></div>
            </div>


          </ResponsiveGridLayout>
        </div>

      </>

      </><div className='bio'>
          <div className='biotext'>🕮<br></br><br></br>✻ ✻ ✻ ✻ ✻ ✻<br></br><br></br>Because we are human beings surrounded by immeasurable complexity, we cannot terraform Mars in a matter of a few human generations, nor surgically engineer the climate without a flood of unintended consequences. So if you need quick and simple solutions, you must first be able to see the complexity. My superpower is indeed to turn the simple into complex (≠ complicated) and communicate it, because once revealed, it will be easier to find common solutions. Or at least, we try to. The urgency to understand practices, ontologies and epistemologies made me passionate about research and investigations. Above all, building experiences in the fields of political ecology and social justice; moreover, I have a particular connection with the African and Afro-descendant movements' root and with South-South forms of liberation and cooperation. Thus, I cannot stop listening to people and I am willing to travel as far as necessary to learn from them.<br /><br />
            <p style={{ border: "1px black solid", padding: "12px" }}><img src={Otc} style={{ width: 20 }} /><br /><br />Some of the featured projects have been built together with local and traditional communities with the sole purpose of upholding their land rights and visibilizing their struggle for the cultural and biological survival. Any information and data rights on culture, cosmologic view, customary law, arts and crafts, tangible and intangible heritage, biodiversity, folklore and commons, remain with these Peoples.
              <br /><br /><b><i>Open to Collaborate</i></b><br />ALESSANDRO is committed to the development of new modes of collaboration, engagement, and partnership with Indigenous peoples for the care and stewardship of past and future heritage collections. What is this notice? Read more <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>here</u></a>.<br /></p>
            <br /><br />Thanks for being here!<br /><br /><br />hello@alessandromusetta.com<br />PGP KEY <a href="img/HgauJwTzvNjsxVS2P3oJX.asc">🔒</a><br /> FINGERPRINT: D43A CD45 175E 79EA F11F D448 C90C 1302 EDCB 1889<br /><br /><br />
            <br /><br /><Link style={{ fontSize: 8 }} to="/Idea-PtBR">ptBR</Link><br /><br />
          </div>
        </div></></>
    );
  }
}

