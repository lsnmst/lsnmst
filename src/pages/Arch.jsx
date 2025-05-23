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

export default class Arch extends React.Component {

  static defaultProps = {
    margin: [2, 2],
  }
  render() {
    const layout = [
      { i: "04", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "03", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "02", x: 6, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
      { i: "01", x: 9, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true },
    ];

    const layoutxs = [
      { i: "04", x: 0, y: 0, w: 3, h: 3, static: true },
      { i: "03", x: 3, y: 0, w: 3, h: 3, static: true },
      { i: "02", x: 6, y: 0, w: 3, h: 3, static: true },
      { i: "01", x: 9, y: 0, w: 3, h: 3, static: true },
    ];


    return (

      <><><><>
        <h1 className='ilnomecheappareprimadelresto'><span>ALESSANDRO</span></h1>
        <h2 className='dopoilnomecheappareprimadelresto'><span>AMPLIFIES VOICES FROM MARGINALISED COMMUNITIES, BUILDING SOLIDARITY THROUGH SOUTH-SOUTH COOPERATION</span></h2>
        <h1 className='ascii'><span>⌭</span></h1>

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

            {/*Add block 04 */}
            <div key="04" className='recipe'>
              <div className="header">
                <div className="index">🜴</div>
                <div className="year">2025</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/endangered-recipes/" target="_blank" rel="noopener noreferrer">ENDANGERED RECIPES</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/endangered-recipes/" target="_blank" rel="noopener noreferrer">\Endangered recipes\ is a collection of recipes shared by women, Indigenous and ecofeminists, custodians of seeds, forests and water, spiritual and cultural leaders, whose territories are threatened by extractivism, climate change and cultural + memory annihilation</a></p></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
              </div>
              <div className="lang" title='Language'>en fr pt es</div>
            </div>

            {/*Add block 03 */}
            <div key="03" className='linhas'>
              <div className="header">
                <div className="index">𒀭</div>
                <div className="year">2025</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/linhas/" target="_blank" rel="noopener noreferrer">LINHAS</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/linhas/" target="_blank" rel="noopener noreferrer">The \Linhas\ archive chronicles the stories of the buses that workers and residents of Rio de Janeiro board every day, victims of armed conflict, discrimination and racism, sexual harassment, extreme weather events, neglect or lack of maintenance, and lack of alternatives</a></p></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
              </div>
              <div className="lang" title='Language'>pt</div>
            </div>

            {/*Add block 02 */}
            <div key="02" className='carbon'>
              <div className="header">
                <div className="index">ꮬ</div>
                <div className="year">2024</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/carbon-violence/" target="_blank" rel="noopener noreferrer">CARBON VIOLENCE</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/carbon-violence/" target="_blank" rel="noopener noreferrer">The \Carbon Violence\ archive exposes the physical, economic, psychological, epistemic violence that occur to individuals and communities living in areas where carbon offsetting projects are implemented, making accountable project developers, subsidiaries, investors, funders, validation and verification bodies, brokers, corporations purchasing credits</a></p></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="arch"></div>
                <div className="arch"></div>
                <div className="arch"></div>
                <div className="arch"></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 01 */}
            <div key="01" className='carto'>
              <div className="header">
                <div className="index">ꗴ</div>
                <div className="year">2023</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/cartorituals/" target="_blank" rel="noopener noreferrer">CARTO RITUALS</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/cartorituals/" target="_blank" rel="noopener noreferrer">\Rituals in the cartographic practice\, visual archive hosts social technology practices and participatory cartography from the Global South as an endogenous product of the multiple relationship between body-territory-language. Countering epistemic racism</a></p></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>


          </ResponsiveGridLayout>
        </div>

      </>

      </><div className='bio'>
          <div className='biotext'>🕮<br></br><br></br>✻ ✻ ✻ ✻ ✻ ✻<br></br><br></br>Because we are human beings surrounded by immeasurable complexity, we cannot terraform Mars in a matter of a few human generations, nor surgically engineer the climate without a flood of unintended consequences. So if you need quick and simple solutions, you must first be able to see the complexity. My superpower is indeed to turn the simple into complex (≠ complicated) and communicate it, because once revealed, it will be easier to find common solutions. Or at least, we try to. The urgency to understand practices, ontologies and epistemologies made me passionate about research and investigations. Above all, building experiences in the fields of political ecology and social justice; moreover, I have a particular connection with the African and Afro-descendant movements' root and with South-South forms of liberation and cooperation. Thus, I cannot stop listening to people and I am willing to travel as far as necessary to learn from them.<br /><br />
            <p style={{ border: "1px black solid", padding: "12px" }}><img src={Otc} style={{ width: 20 }} /><br /><br />Some of the projects featured were built in solidarity and jointly with Indigenous, traditional and local communities between Latin America and Africa, with the purpose of raising awareness of their struggle for cultural and biological survival. Any information and data rights on culture, cosmologic view, customary law, arts and crafts, tangible and intangible heritage, biodiversity, folklore and commons, remain with these Peoples.
              <br /><br /><b><i>Open to Collaborate</i></b><br />ALESSANDRO is committed to the development of new modes of collaboration, engagement, and partnership with Indigenous peoples for the care and stewardship of past and future heritage collections. What is this notice? Read more <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>here</u></a>.<br /></p>
            <br /><br />Thanks for being here!<br /><br /><br />hello@alessandromusetta.com<br />PGP KEY <a href="img/HgauJwTzvNjsxVS2P3oJX.asc">🔒</a><br /> FINGERPRINT: D43A CD45 175E 79EA F11F D448 C90C 1302 EDCB 1889<br /><br /><br />
            <br /><br /><Link style={{ fontSize: 8 }} to="/archive-ptBR">ptBR</Link><br /><br />
          </div>
        </div></></>
    );
  }
}

