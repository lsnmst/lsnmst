import React from 'react';
import Casabar from './Casabar';
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';
import './block.css';
import './patterns.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Home extends React.Component {

  static defaultProps = {
    margin: [2, 2],
  }
  render() {
    const layout = [
      { i: "07", x: 0, y: 0, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "06", x: 3, y: 0, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "05", x: 6, y: 0, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "04", x: 9, y: 0, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "03", x: 0, y: 3, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "02", x: 3, y: 3, w: 3, h: 3, minW: 2, minH: 2, },
      { i: "01", x: 6, y: 3, w: 3, h: 3, minW: 2, minH: 2, },
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

      <><Casabar /><><><>
        <h1 className='ilnomecheappareprimadelresto'><span>LSNMST</span></h1>
        <h1 className='ascii'><span>✑</span></h1>

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
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-antarctica.pdf" target="_blank" rel="noopener noreferrer">Reveal Complexity : Antarctica, Southern Ocean, Ross Sea, Victoria Land, Transantarctic Mountains, Ross Ice Shelf, Mcmurdo Sound, Terra Nova Bay</a></div>
            </div>

            {/*Add block 06 */}
            <div key="06" className='desert'>
              <div className="header">
                <div className="index">ꬬ</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">LANG_EN, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-desert.pdf" target="_blank" rel="noopener noreferrer">Reveal Complexity : Ténéré Desert, Aïr Mountains, Ighazer Plain, Aïr And Ténéré National Nature Reserve, Kawar Oases</a></div>
            </div>

            {/*Add block 05 */}
            <div key="05" className='forest'>
              <div className="header">
                <div className="index">︗</div>
                <div className="yeartext">2023</div>
              </div>
              <div className="description">LANG_EN, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/LSNMST-mapping-empty-forest.pdf" target="_blank" rel="noopener noreferrer">Reveal Complexity : Forest, Congo Basin, Ituri And Hautuélé Provinces, Mambasa And Watsa Chiefdom, Okapi Wildlife Reserve, Kibali and Ituri River</a></div>
            </div>

            {/*Add block 04 */}
            <div key="04" className='amazonia'>
              <div className="header">
                <div className="index">ꬁ</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">LANG_EN, pt-BR, ES, FR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/alliances-aliancas-alianzas-alliances.pdf" target="_blank" rel="noopener noreferrer">Tightening alliances between researchers, earth and land rights defenders between Amazonia and the Congo Basin</a></div>
            </div>

            {/*Add block 03 */}
            <div key="03" className='candomble'>
              <div className="header">
                <div className="index">ꬉ</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">LANG_EN, pt-BR</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/culto-afro-educacao-ambiental_v02.pdf" target="_blank" rel="noopener noreferrer">Stop religious intolerance through environmental education. The African diaspora religions in Brazil</a></div>
            </div>

            {/*Add block 02 */}
            <div key="02" className='idp'>
              <div className="header">
                <div className="index">𐓦</div>
                <div className="yeartext">2022</div>
              </div>
              <div className="description">LANG_EN</div>
              <div className="titletext"><a href="https://www.alessandromusetta.com/cloud/Managing-water-scarcity-IDPs-Rutshuru-YOUsustain.pdf" target="_blank" rel="noopener noreferrer">Managing water scarcity in the IDPs camps located in the second-tier towns along the Congolese N2 national highway</a></div>
            </div>

            {/*Add block 01 */}
            <div key="01" className='simpleshort'>
              <div className="header">
                <div className="index">༕</div>
                <div className="yeartext">2018</div>
              </div>
              <div className="description">LANG_EN</div>
              <div className="titletext"><a href="https://medium.com/@lsnmst/redutionism-and-multiscale-indicators-in-the-complex-system-dynamics-approach-cb4bca38c9b8" target="_blank" rel="noopener noreferrer">When they sell you solutions on short and simple promises, don't trust them</a></div>
            </div>



          </ResponsiveGridLayout>

        </div>

      </></><div className='bio'>
          {/* <div className='biotext'>🕮<br></br><br></br>✻ ✻ ✻ ✻ ✻ ✻<br></br><br></br>Since we are human beings surrounded by an immensurable complexity, we couldn't terraform Mars in a matter a few human generations, or surgically engineer the climate without a torrent of unintended consequences. If you need short and simple solutions first you must be able to see the complexity. My superpower is to turn simple into complex, even though to many complex sounds or is mistaken for complicated.<br />Curiosity made me fall in love with research and investigations. Especially by building practices in the fields of political ecology, social and climate justice. But there is no such research without fieldwork, so I am available backpacking anytime.<br />Thanks for being here!<br /><br /><br />hello@alessandromusetta.com<br />PGP KEY <a href="img/HgauJwTzvNjsxVS2P3oJX.asc">🔒</a><br /> FINGERPRINT: D43A CD45 175E 79EA F11F D448 C90C 1302 EDCB 1889<br /><br /><br /></div> */}
        </div></></>
    );
  }
}

