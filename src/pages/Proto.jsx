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

export default class Proto extends React.Component {

  static defaultProps = {
    margin: [2, 2],
  }
  render() {
    const layout = [
      { i: "04", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true},
      { i: "03", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true},
      { i: "02", x: 6, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true},
      { i: "01", x: 9, y: 0, w: 3, h: 3, minW: 2, minH: 2, static: true},
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
            <div key="04" className='carbon'>
              <div className="header">
                <div className="index">ꮬ</div>
                <div className="year">2024</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/carbon-violence/" target="_blank" rel="noopener noreferrer">CARBON VIOLENCE</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/carbon-violence/" target="_blank" rel="noopener noreferrer">The \Carbon Violence\ archive is an initiative intended to collect and make visible (physical, economic, psychological, epistemic) violence occurring to local communities living in areas where carbon offset projects are implemented</a></p></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 03 */}
            <div key="03" className='pacific'>
              <div className="header">
                <div className="index">ꮼ</div>
                <div className="year">2024</div>
              </div>
              <div className="title"><a href="https://comunidados.github.io/pacific-territories-gender-inequalities/" target="_blank" rel="noopener noreferrer">PACIFIC GENDER</a></div>
              <div className="description"><p><a href="https://comunidados.github.io/pacific-territories-gender-inequalities/" target="_blank" rel="noopener noreferrer">\Pacific gender\ is an online data story proving the dynamics by which gender inequalities in education increase child marriage, exposition to violence and decrease wages</a></p></div>
              <div className="viz">
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 02 */}
            <div key="02" className='wwa'>
              <div className="header">
                <div className="index">ꕾ</div>
                <div className="year">2023</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/first-language/" target="_blank" rel="noopener noreferrer">FIRST LANGUAGE</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/first-language/" target="_blank" rel="noopener noreferrer">Who are they and what is the legacy of women writing Africa in their First languages? \The First language of the women writing Africa\ collects the written literary expression of African women along the last two centuries</a></p></div>
              <div className="viz">
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
              </div>
              <div className="lang" title='Language'>en</div>
            </div>

            {/*Add block 01 */}
            <div key="01" >
              <div className='legend'>
                <div className="circles-3" style={{ width: "100%" }}>
                  <div className='legendtext'>Researcher</div>
                </div>
                <div className="circles-4" style={{ width: "100%", marginTop: "5px" }}>
                  <div className='legendtext'>GIS Specialist</div>
                </div>
                <div className="circles-5" style={{ width: "100%", marginTop: "5px" }}>
                  <div className='legendtext'>Information Designer</div>
                </div>
                <div className="circles-6" style={{ width: "100%", marginTop: "5px" }}>
                  <div className='legendtext'>Front-end web developer</div>
                </div>
                <div className="circles-7" style={{ width: "100%", marginTop: "5px" }}>
                  <div className='legendtext'>Map Designer</div>
                </div>
              </div>
            </div>


          </ResponsiveGridLayout>
        </div>

      </>

      </><div className='bio'>
          <div className='biotext'>🕮<br></br><br></br>✻ ✻ ✻ ✻ ✻ ✻<br></br><br></br>Because we are human beings surrounded by immeasurable complexity, we cannot terraform Mars in a matter of a few human generations, nor surgically engineer the climate without a flood of unintended consequences. So if you need quick and simple solutions, you must first be able to see the complexity. My superpower is indeed to turn the simple into complex (≠ complicated) and communicate it, because once revealed, it will be easier to find common solutions. Or at least, we try to. The urgency to understand practices, ontologies and epistemologies made me passionate about research and investigations. Above all, building experiences in the fields of political ecology and social justice; moreover, I have a particular connection with the African and Afro-descendant movements' root and with South-South forms of liberation and cooperation. Thus, I cannot stop listening to people and I am willing to travel as far as necessary to learn from them.<br /><br /><img src={Otc} style={{ width: 20 }} /><br /><br />Some of the featured projects have been built together with local and traditional communities with the sole purpose of upholding their land rights and visibilizing their struggle for the cultural and biological survival. Any information and data rights on culture, cosmologic view, customary law, arts and crafts, tangible and intangible heritage, biodiversity, folklore and commons, remain with these Peoples.
            <br /><br /><b><i>Open to Collaborate</i></b><br />ALESSANDRO is committed to the development of new modes of collaboration, engagement, and partnership with Indigenous peoples for the care and stewardship of past and future heritage collections. What is this notice? Read more <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>here</u></a>.<br />
            <br /><br />Thanks for being here!<br /><br /><br />hello@alessandromusetta.com<br />PGP KEY <a href="img/HgauJwTzvNjsxVS2P3oJX.asc">🔒</a><br /> FINGERPRINT: D43A CD45 175E 79EA F11F D448 C90C 1302 EDCB 1889<br /><br /><br />
            <br /><br /><Link style={{ fontSize: 8 }} to="/proto-ptBR">ptBR</Link><br /><br />
          </div>
        </div></></>
    );
  }
}

