import NavHeader from "./components/navbar"
import Sideheader from "./components/sidebar"
import Carditem from "./components/carditem"
import Search from "./components/search"
import { Col, Container, Row, } from "react-bootstrap";
import "./App.css"

import data from "./market.json";
const marketData = data;

function App() {
  const marketElements = marketData.map((market, index) => {
    return <Carditem key={index} marketList={market} />
  })
  return (
    <div>

      <NavHeader />
      <Sideheader />

      <Container fluid>
        <div className="row-content">
          <Search />
          <Row xs={1} md={1} lg={3} className="g-4">
            {marketElements}

          </Row>
        </div>
      </Container>
    </div >
  );
}

export default App;
