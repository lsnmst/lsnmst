import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import './block.css';
import './patterns.css';
import Otc from './img/open_to_collaborate.png';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Home extends React.Component {

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
        <h1 className='ilnomecheappareprimadelresto'><span>ALESSANDRO</span></h1>
        <h2 className='dopoilnomecheappareprimadelresto'><span>AMPLIFIES VOICES FROM MARGINALISED COMMUNITIES, BUILDING SOLIDARITY THROUGH SOUTH-SOUTH COOPERATION</span></h2>
        <h1 className='ascii'><span>☸</span></h1>

        <Navbar />

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

            {/*Add block 17 */}
            <div key="17" className='agathe'>
              <div className="header">
                <div className="index">ꖘ</div>
                <div className="year">2024</div>
              </div>
              <div className="title"><a href="https://alliancepourlavie.github.io/agathe/" target="_blank" rel="noopener noreferrer">AGATHE</a></div>
              <div className="description"><p><a href="https://alliancepourlavie.github.io/agathe/" target="_blank" rel="noopener noreferrer"> \Agathe, the matriarch above the water\ is a mixed-media story raising the voices of the customary fisherwomen from the landing sites of Kadutu and Bagira, province of South Kivu, Democratic Republic of the Congo</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
                <div className="arch"></div>
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
              <div className="description"><p><a href="https://lsnmst.github.io/izzi/#/" target="_blank" rel="noopener noreferrer">The \Ecological and cosmic calendar of the Izzi people\ (Ȯra Ebonyi, Nigeria) is a living knowledge system that continually incorporate their understanding of time and cosmological phenomenologies in relation to ecological processes and the movement of celestial bodies. The calendar is presented here graphically with the aim of documenting and transmitting Indigenous knowledge</a></p></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
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
              <div className="description"><p><a href="https://chiroxiphiacaudata.github.io/quilombo/" target="_blank" rel="noopener noreferrer">\Re-existências quilombolas\, puts Brazilian 'quilombola' communities on the map and advocated for their recognition. Each point on the map is a 'quilombola' person who re-exists</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
                <div className="arch"></div>
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
              <div className="description"><p><a href="https://chiroxiphiacaudata.github.io/60point8/#/fr-FR" target="_blank" rel="noopener noreferrer">\60.8 km, une route de sang\, is an online report exposing and condemning environmental crimes perpetrated between 2018-2023 on the Rutshuru-Ishasha road axis in the North-Kivu province of DR Congo</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
                <div className="arch"></div>
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
              <div className="description"><p><a href="https://watetezi.github.io/beatrice/" target="_blank" rel="noopener noreferrer">\Morembe, my name is Beatrice\, is the story of a fisherwoman and her community at the border between Uganda and the Democratic Republic of Congo, a loudspeaker to amplify her voice given the challenges the women are facing for their livelihoods</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
                <div className="arch"></div>
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

            {/*Add block 11 */}
            <div key="11" className='comunidados'>
              <div className="header">
                <div className="index">ꖳ</div>
                <div className="year">2022</div>
              </div>
              <div className="title"><a href="https://chiroxiphiacaudata.github.io/comunidados/" target="_blank" rel="noopener noreferrer">Comuni-<br />dados</a></div>
              <div className="description"><p><a href="https://chiroxiphiacaudata.github.io/comunidados/" target="_blank" rel="noopener noreferrer">\Comunidados\, is a participative platform to collect, share and process data, information, texts, videos, images, audio about Tinguá and the communities of the Tinguá Valley (Nova Iguaçu, Rio de Janiero, Brazil). From an environmentalist perspective and a fair and sustainable socio-economic development</a></p></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-7 tooltip" data-text='Map Design'></div>
                <div className="arch"></div>
              </div>
              <div className="lang" title='Language'>pt</div>
            </div>


            {/*Add block 10 */}
            <div key="10" className='defence'>
              <div className="header">
                <div className="index">ꖺ</div>
                <div className="year">2022</div>
              </div>
              <div className="title"><a href="https://archive.org/details/halting-the-ecological-crisis-and-ecosystem-collapse-of-the-congo-basin-edge-v-2-compressed" target="_blank" rel="noopener noreferrer">Last Defence</a></div>
              <div className="description"><a href="https://archive.org/details/halting-the-ecological-crisis-and-ecosystem-collapse-of-the-congo-basin-edge-v-2-compressed" target="_blank" rel="noopener noreferrer">\The last defence\, demonstrates how to avoid the ecological crisis and the collapse of the ecosystem of the Congo basin edge and investigates the notions of social, ecological and climate justice, focusing on the territory of Watsa, Haut-Uélé province, Democratic Republic of Congo</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
              </div>
              <div className="lang" title='Language'>en, fr</div>
            </div>


            {/*Add block 09 */}
            <div key="09" className='blood'>
              <div className="header">
                <div className="index">ꖁ</div>
                <div className="year">2021</div>
              </div>
              <div className="title"><a href="https://archive.org/details/environmental-defenders-blood-in-the-forest-v-01/mode/2up" target="_blank" rel="noopener noreferrer">Blood in the Forest</a></div>
              <div className="description"><a href="https://archive.org/details/environmental-defenders-blood-in-the-forest-v-01/mode/2up" target="_blank" rel="noopener noreferrer">\Blood in the Forest\, identifies ecologically fragile priority areas for forest conservation and restoration in the Mambasa and Mongbwalu sector, Ituri province, Democratic Republic of Congo</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
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
              <div className="description"><a href="https://chiroxiphiacaudata.github.io/the-minute-we-fall-silent/" target="_blank" rel="noopener noreferrer">\Along the Shores of the Itaka Lya Mwitanzige\, is a journey connecting women and their rights in the Northern Albertine Rift, Uganda</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
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
              <div className="description"><a href="https://www.alessandromusetta.com/comunidados/arquivo/Brasil/Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense/01-Onda-Verde-Um-centro-de-economia-florestal-pela-Baixada-Fluminense.pdf" target="_blank" rel="noopener noreferrer">A report to demonstrate how the conservation NGO Onda Verde could become the forest economy hub for the Baixada Fluminense (State of Rio de Janeiro, Brazil), enhancing the potential of forest restoration as a strategy to adapt to climate change</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
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
              <div className="description"><a href="https://watetezi.org/data/maps/forest/bugoma.html" target="_blank" rel="noopener noreferrer">Two sugarcane companies have begun clearing thousands of hectares in disputed sections of Uganda’s Bugoma Forest. \664 Hectares\, enables satellite technology depicts the degree of forest destruction</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="arch"></div>
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
              <div className="description"><a href="https://watetezi.org/tracker/" target="_blank" rel="noopener noreferrer">The \Albertine Region Tracker\, is a human rights abuses and environmental crimes reporting and mapping platform. The Albertine region tracker gathers, audits and publishes reports from a network of dedicated and trained activists based in the districts of northern and western Uganda</a></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
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
              <div className="description"><a href="https://valori.it/innalzamento-mari-danni-miliardari-mappe/" target="_blank" rel="noopener noreferrer">\Italy underwater\, estimates the wealth that each Italian province would lose due to rising sea levels caused by climate change</a></div>
              <div className="viz">
                <div className="circles-4 tooltip" data-text='GIS specialist'></div>
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
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
              <div className="description"><a href="https://www.alessandromusetta.com/metrocarto/Lk4YGYmTs4LaMCgV.html" target="_blank" rel="noopener noreferrer">\The metropolitan cartography\, is an online course about the process of reading, knowing and interpreting the territory of a metropolis using maps and spatial information technologies through a decision support system</a></div>
              <div className="viz">
                <div className="circles-3 tooltip" data-text='Researcher'></div>
                <div className="circles-6 tooltip" data-text='Front-end web developer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
                <div className="arch"></div>
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
              <div className="description">Research materials and methods about La Paz / El Alto (Bolivia) urban area within the UN-Habitat Expert Group for developing the Guiding Principles on Urban-Rural Linkages for advancing integrated territorial development</div>
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
              <div className="description">Research materials and methods about secondary cities in Uganda with a focus in the Koboko, Arua, Nebbi corridor, West Nile Region (Uganda)</div>
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
              <div className="description"><a href="https://www.alessandromusetta.com/presentations/milano/milano.php" target="_blank" rel="noopener noreferrer">\Le matite di Sant'Orsola\, is a historical GIS that documents the life and works of Milan architects of the "Novecento" generation, such as Gio Ponti and Piero Portaluppi</a></div>
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
              <div className="description"><a href="https://www.alessandromusetta.com/cloud/Musetta_Dieselgate_Esta_FIOM_poster.pdf" target="_blank" rel="noopener noreferrer">A series of infographics on the Dieselgate case, presenting the steps taken towards a paradigm shift in the automotive sector</a></div>
              <div className="viz">
                <div className="circles-5 tooltip" data-text='Information designer'></div>
                <div className="arch"></div>
                <div className="arch"></div>
                <div className="arch"></div>
                <div className="arch"></div>
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
              <div className="description"><a href="https://www.alessandromusetta.com/soundofthings/index.html" target="_blank" rel="noopener noreferrer">\Sound of Things\, is a sonification and musification project, about transforming information through design and the production of a sound taxonomy</a></div>
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
              <div className="description"><a href="https://www.alessandromusetta.com/resource/alessandro-musetta-animal-estates.pdf" target="_blank" rel="noopener noreferrer">\Animal Estates\, is a speculative project around the capability of living species to build their own inhabiting space, to co-operate and co-habit.</a></div>
              <div className="viz">
                <div className="circles-3" title='Researcher'></div>
              </div>
            </div> */}

            {/*Add block 01 */}
            {/*<div key="01" >
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
            </div>*/}

          </ResponsiveGridLayout>
        </div>

      </>

      </><div className='bio'>
          <div className='biotext'>🕮<br></br><br></br>✻ ✻ ✻ ✻ ✻ ✻<br></br><br></br>Because we are human beings surrounded by immeasurable complexity, we cannot terraform Mars in a matter of a few human generations, nor surgically engineer the climate without a flood of unintended consequences. So if you need quick and simple solutions, you must first be able to see the complexity. My superpower is indeed to turn the simple into complex (≠ complicated) and communicate it, because once revealed, it will be easier to find common solutions. Or at least, we try to. The urgency to understand practices, ontologies and epistemologies made me passionate about research and investigations. Above all, building experiences in the fields of political ecology and social justice; moreover, I have a particular connection with the African and Afro-descendant movements' root and with South-South forms of liberation and cooperation. Thus, I cannot stop listening to people and I am willing to travel as far as necessary to learn from them.<br /><br />
            <p style={{ border: "1px black solid", padding: "12px" }}><img src={Otc} style={{ width: 20 }} /><br /><br />Some of the projects featured were built in solidarity and jointly with Indigenous, traditional and local communities between Latin America and Africa, with the purpose of raising awareness of their struggle for cultural and biological survival. Any information and data rights on culture, cosmologic view, customary law, arts and crafts, tangible and intangible heritage, biodiversity, folklore and commons, remain with these Peoples.
              <br /><br /><b><i>Open to Collaborate</i></b><br />ALESSANDRO is committed to the development of new modes of collaboration, engagement, and partnership with Indigenous peoples for the care and stewardship of past and future heritage collections. What is this notice? Read more <a href="https://localcontexts.org/notice/open-to-collaborate/"><u>here</u></a>.<br /></p>
            <br /><br />Thanks for being here!<br /><br /><br />hello@alessandromusetta.com<br />PGP KEY <a href="img/HgauJwTzvNjsxVS2P3oJX.asc">🔒</a><br /> FINGERPRINT: D43A CD45 175E 79EA F11F D448 C90C 1302 EDCB 1889<br /><br /><br />
            <br /><br /><Link style={{ fontSize: 8 }} to="/PtBR">ptBR</Link><br /><br />
          </div>
        </div></></>
    );
  }
}

