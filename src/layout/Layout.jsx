import { Outlet } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import '../styles/layout.css'
import Logo from '../assets/escudo.svg'

const Layout = () => {
  return (
    <Container fluid className="container-box">
      <Row>
        <Col xs={12} className="header py-2 px-5 d-flex">
          <div className="my-auto d-flex flex-row">
            <img src={Logo} alt="logo alcaldia" width={110} height={160} />
            <p className="display-2 my-auto mx-5 text-white">Registro de Ciudadanos</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          sidebar
        </Col>
        <Col xs={8}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default Layout