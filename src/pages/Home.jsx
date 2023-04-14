import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";
import Popup from 'reactjs-popup';
import SimpleImageSlider from "react-simple-image-slider";
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import 'reactjs-popup/dist/index.css';
import 'react-slideshow-image/dist/styles.css'
import './block.css';
import './patterns.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Home extends React.Component {

  static defaultProps = {
    margin: [2, 2],
  }
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "15", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "14", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "13", x: 6, y: 0, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "12", x: 9, y: 0, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "11", x: 0, y: 3, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "10", x: 3, y: 3, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "09", x: 6, y: 3, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "08", x: 9, y: 3, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "07", x: 0, y: 6, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "06", x: 3, y: 6, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "05", x: 6, y: 6, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "04", x: 9, y: 6, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "03", x: 0, y: 9, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "02", x: 3, y: 9, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "01", x: 6, y: 9, w: 3, h: 3, minW: 2, minH: 2, },
    ];

    const layoutxs = [
      { i: "15", x: 0, y: 0, w: 3, h: 3, static: true },
      { i: "14", x: 3, y: 0, w: 3, h: 3, static: true },
      { i: "13", x: 6, y: 0, w: 3, h: 3, static: true },
      { i: "12", x: 9, y: 0, w: 3, h: 3, static: true },
      { i: "11", x: 0, y: 3, w: 3, h: 3, static: true },
      { i: "10", x: 3, y: 3, w: 3, h: 3, static: true },
      { i: "09", x: 6, y: 3, w: 3, h: 3, static: true },
      { i: "08", x: 9, y: 3, w: 3, h: 3, static: true },
      { i: "07", x: 0, y: 6, w: 3, h: 3, static: true },
      { i: "06", x: 3, y: 6, w: 3, h: 3, static: true },
      { i: "05", x: 6, y: 6, w: 3, h: 3, static: true },
      { i: "04", x: 9, y: 6, w: 3, h: 3, static: true },
      { i: "03", x: 0, y: 9, w: 3, h: 3, static: true },
      { i: "02", x: 3, y: 9, w: 3, h: 3, static: true },
      { i: "01", x: 6, y: 9, w: 3, h: 3, static: true },
    ];


    return (
      <><><><h1>LSNMST</h1>

        <div>
          <ResponsiveGridLayout
            className="layout"
            layouts={{ lg: layout, xs: layoutxs }}
            margin={{ lg: [8, 8], md: [6, 6], sm: [4, 4] }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          >


            {/* key list https://decodeunicode.org/en/u+0A5B3 */}

            {/*Add block 15 */}
            <div key="15" className='carto'>
              <div className="header">
                <div className="index">ꗴ</div>
                <div className="year">2023</div>
              </div>
              <div className="title"><a href="https://lsnmst.github.io/cartorituals/" target="_blank" rel="noopener noreferrer">CARTO RITUALS</a></div>
              <div className="description"><p><a href="https://lsnmst.github.io/cartorituals/" target="_blank" rel="noopener noreferrer">\Rituals in the cartographic practice\ visual archive hosts social technology practices and participatory cartography from the Global South as an endogenous product of the multiple relationship between body-territory-language. Countering epistemic racism</a></p></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
                <div className="circles-4" title='GIS specialist'></div>
                <div className="circles-5" title='Information designer'></div>
                <div className="circles-6" title='Front-end web developer'></div>
                <div className="circles-7" title='Map Design'></div>
              </div>
            </div>

            {/*Add block 14 */}
            <div key="14" className='comunidados'>
              <div className="header">
                <div className="index">ꖳ</div>
                <div className="year">2022</div>
              </div>
              <div className="title"><a href="https://chiroxiphiacaudata.github.io/comunidados/" target="_blank" rel="noopener noreferrer">Comuni-<br />dados</a></div>
              <div className="description"><p><a href="https://chiroxiphiacaudata.github.io/comunidados/" target="_blank" rel="noopener noreferrer">\Comunidados\ is a participative platform to collect, share and process data, information, texts, videos, images, audio about Tinguá and the communities of the Tinguá Valley (Nova Iguaçu, Rio de Janiero, Brazil). From an environmentalist perspective and a fair and sustainable socio-economic development</a></p></div>
              <div className="viz">
                <div className="circles-4" title='GIS specialist'></div>
                <div className="circles-5" title='Information designer'></div>
                <div className="circles-6" title='Front-end web developer'></div>
                <div className="circles-7" title='Map Design'></div>
              </div>
            </div>


            {/*Add block 13 */}
            <div key="13" className='defence'>
              <div className="header">
                <div className="index">ꖺ</div>
                <div className="year">2022</div>
              </div>
              <div className="title"><a href="https://watetezi.org/wp-content/uploads/2022/04/HALTING-THE-ECOLOGICAL-CRISIS-AND-ECOSYSTEM-COLLAPSE-OF-THE-CONGO-BASIN-EDGE_v2_compressed.pdf" target="_blank" rel="noopener noreferrer">Last Defence</a></div>
              <div className="description"><a href="https://watetezi.org/wp-content/uploads/2022/04/HALTING-THE-ECOLOGICAL-CRISIS-AND-ECOSYSTEM-COLLAPSE-OF-THE-CONGO-BASIN-EDGE_v2_compressed.pdf" target="_blank" rel="noopener noreferrer">Open Source Investigation (2022). "The Last Line of Defense. Halting the Ecological Crisis and Ecosystem Collapse of the Congo Basin Edge", investigates the concepts of social, ecological and climate justice by focusing on the Watsa territory, Haut-Uélé province, Democratic Republic of the Congo</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
                <div className="circles-4" title='GIS specialist'></div>
                <div className="circles-5" title='Information designer'></div>
              </div>
            </div>


            {/*Add block 12 */}
            <div key="12" className='blood'>
              <div className="header">
                <div className="index">ꖁ</div>
                <div className="year">2021</div>
              </div>
              <div className="title"><a href="https://www.watetezi.org/wp-content/uploads/2021/03/Environemtal-Defenders-Blood-in-the-forest-v01.pdf" target="_blank" rel="noopener noreferrer">Blood in the Forest</a></div>
              <div className="description"><a href="https://www.watetezi.org/wp-content/uploads/2021/03/Environemtal-Defenders-Blood-in-the-forest-v01.pdf" target="_blank" rel="noopener noreferrer">Open Source Investigation (2021). Blood in the forest. Identification of ecologically fragile areas prioritized for forest conservation and restoration in Mambasa and Mongbwalu sector, Ituri province, Democratic Republic of the Congo</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
                <div className="circles-4" title='GIS specialist'></div>
                <div className="circles-5" title='Information designer'></div>
              </div>
            </div>

            {/*Add block 11 */}
            <div key="11" className='shores'>
              <div className="header">
                <div className="index">ꖻ</div>
                <div className="year">2021</div>
              </div>
              <div className="title"><a href="https://watetezi.org/hrd/along-the-shores/index.html" target="_blank" rel="noopener noreferrer">ALONG THE SHORES</a></div>
              <div className="description"><a href="https://watetezi.org/hrd/along-the-shores/index.html" target="_blank" rel="noopener noreferrer">Open Source Investigation (2021). Along the Shores of the Itaka Lya Mwitanzige. A journey that connects women and rights in the Northern Albertine Rift, Uganda</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
                <div className="circles-6" title='Front-end web developer'></div>
                <div className="circles-5" title='Information designer'></div>
              </div>
            </div>

            {/*Add block 10 */}
            <div key="10" className='onda'>
              <div className="header">
                <div className="index">ꖃ</div>
                <div className="year">2021</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/comunidados/arquivo/Brasil/Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense/01-Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense.pdf" target="_blank" rel="noopener noreferrer">ÁGUA E MATA</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/comunidados/arquivo/Brasil/Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense/01-Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense.pdf" target="_blank" rel="noopener noreferrer">Open Source Investigation (2021). Onda Verde, a Forest Economies Center for the Baixada Fluminense (State of Rio de Janeiro, Brazil). Assessment of the operational scenario and the potential of forest restoration as a climate change adaptation strategy</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
                <div className="circles-4" title='GIS specialist'></div>
                <div className="circles-5" title='Information designer'></div>
              </div>
            </div>

            {/*Add block 09 */}
            <div key="09" className='tracker'>
              <div className="header">
                <div className="index">ꖬ</div>
                <div className="year">2020</div>
              </div>
              <div className="title"><a href="https://watetezi.org/tracker/" target="_blank" rel="noopener noreferrer">TRACKER</a></div>
              <div className="description"><a href="https://watetezi.org/tracker/" target="_blank" rel="noopener noreferrer">The Albertine Region Tracker is a human rights abuses and environmental crimes reporting and mapping platform. The Albertine region tracker gathers, audits and publishes reports from a network of dedicated and trained activists based in the districts of northern and western Uganda</a></div>
              <div className="viz">
                <div className="circles-6" title='Front-end web developer'></div>
                <div className="circles-4" title='GIS specialist'></div>
                <div className="circles-5" title='Information designer'></div>
              </div>
            </div>

            {/*Add block 08 */}
            <div key="08" className='underwater'>
              <div className="header">
                <div className="index">ꖸ</div>
                <div className="year">2020</div>
              </div>
              <div className="title"><a href="https://valori.it/innalzamento-mari-danni-miliardari-mappe/" target="_blank" rel="noopener noreferrer">ITALY UNDERWATER</a></div>
              <div className="description"><a href="https://valori.it/innalzamento-mari-danni-miliardari-mappe/" target="_blank" rel="noopener noreferrer">Italy underwater because of climate change: how much wealth each Italian province would lose</a></div>
              <div className="viz">
                <div className="circles-4" title='GIS specialist'></div>
                <div className="circles-5" title='Information designer'></div>
              </div>
            </div>

            {/*Add block 07 */}
            <div key="07" className='metro'>
              <div className="header">
                <div className="index">ꖧ</div>
                <div className="year">2019</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/metrocarto/Lk4YGYmTs4LaMCgV.html" target="_blank" rel="noopener noreferrer">METRO CARTO</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/metrocarto/Lk4YGYmTs4LaMCgV.html" target="_blank" rel="noopener noreferrer">Online course. The metropolitan cartography is the process of reading, understanding, and interpreting the territory of a metropolis using maps and spatial information technologies in a decision-making support system</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
                <div className="circles-6" title='Front-end web developer'></div>
              </div>
            </div>

            {/*Add block 06 */}
            <div key="06" className='paz'>
              <div className="header">
                <div className="index">ꖅ</div>
                <div className="year">2018</div>
              </div>
              <div className="title">PACEÑ@S Y ALTEÑ@S</div>
              <div className="description">Research materials and methods about La Paz / El Alto (Bolivia) urban area within the UN-Habitat Expert Group for developing the Guiding Principles on Urban-Rural Linkages for advancing integrated territorial development</div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
                <div className="circles-4" title='GIS specialist'></div>
              </div>
            </div>

            {/*Add block 05 */}
            <div key="05" className='uganda'>
              <div className="header">
                <div className="index">ꖐ</div>
                <div className="year">2018</div>
              </div>
              <div className="title">WAKATI UJAO JE?</div>
              <div className="description">Research materials and methods about secondary cities in Uganda with a focus in the Koboko, Arua, Nebbi corridor, West Nile Region (Uganda)</div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
                <div className="circles-4" title='GIS specialist'></div>
              </div>
            </div>

            {/*Add block 04 */}
            <div key="04" className='vie'>
              <div className="header">
                <div className="index">ꖜ</div>
                <div className="year">2017</div>
              </div>
              <div className="title" ><a href="https://www.alessandromusetta.com/presentations/milano/milano.php" target="_blank" rel="noopener noreferrer">SANT ORSOLA 5</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/presentations/milano/milano.php" target="_blank" rel="noopener noreferrer">Historical GIS. Muzio, Gio Ponti and the architects of Sant Orsola street (Milan, Italy)</a></div>
              <div className="viz">
                <div className="circles-5" title='Information designer'></div>
                <div className="circles-7" title='Map Design'></div>
              </div>
            </div>

            {/*Add block 03 */}
            <div key="03" className='diesel'>
              <div className="header">
                <div className="index">ꖵ</div>
                <div className="year">2017</div>
              </div>
              <div className="title">DIESELGATE</div>
              <div className="description">2017 was the year of the Dieselgate, but what are the advancements in the sustainable mobility industry? Are we facing a paradigm shift?</div>
              <div className="viz">
                <div className="circles-5" title='Information designer'></div>
              </div>
            </div>

            {/*Add block 02 */}
            <div key="02" className='sound'>
              <div className="header">
                <div className="index">ꖣ</div>
                <div className="year">2014</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/soundofthings/index.html" target="_blank" rel="noopener noreferrer">SOUND OF THINGS</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/soundofthings/index.html" target="_blank" rel="noopener noreferrer">Sonification and musification: turning information into knowledge through the design and production of a taxonomy that provides a systematic classification of visualization techniques of data.</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
              </div>
            </div>

            {/*Add block 01 */}
            <div key="01" className='animal'>
              <div className="header">
                <div className="index">ꖒ</div>
                <div className="year">2013</div>
              </div>
              <div className="title"><a href="https://www.alessandromusetta.com/resource/alessandro-musetta-animal-estates.pdf" target="_blank" rel="noopener noreferrer">ANIMAL ESTATES</a></div>
              <div className="description"><a href="https://www.alessandromusetta.com/resource/alessandro-musetta-animal-estates.pdf" target="_blank" rel="noopener noreferrer">Animal Estates is a speculative project around the capability of living species to build their own inhabiting space, to co-operate and co-habit.</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
              </div>
            </div>

          </ResponsiveGridLayout>
        </div>

      </><div className='legend'>
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
            <div className='legendtext'>Map Design</div>
          </div>
        </div>

      </><div className='bio'>
          <div className='biotext'>🕮<br></br><br></br>✻ ✻ ✻ ✻ ✻ ✻<br></br><br></br>Since we are human beings surrounded by an immensurable complexity, we couldn't terraform Mars in a matter a few human generations, or surgically engineer the climate without a torrent of unintended consequences. If you need short and simple solutions first you must be able to see the complexity. My superpower is to turn simple into complex, even though to many complex sounds or is mistaken for complicated.<br />Curiosity made me fall in love with research and investigations. Especially by building practices in the fields of political ecology, social and climate justice. But there is no such research without fieldwork, so I am available backpacking anytime.<br />Thanks for being here!<br /><br /><br />hello@alessandromusetta.com<br />PGP KEY <a href="img/HgauJwTzvNjsxVS2P3oJX.asc">🔒</a><br /> FINGERPRINT: D43A CD45 175E 79EA F11F D448 C90C 1302 EDCB 1889<br /><br /><br /></div>
        </div></>
    );
  }
}

