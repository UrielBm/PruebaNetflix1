import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Logo from '../assets/logo.png';
import { Button } from 'antd';
import { Input } from 'antd';
import { RightOutlined } from '@ant-design/icons';

class home extends Component {
    render() {
        return (
            <div className="Home" >
                <Row className="Row_Encabezado" align="middle">

                    <Col className="col_L" span={24}>
                        <img src={Logo} className="Logo" />
                    </Col>
                    <Col className="col_B" span={24}>
                        <Button type="primary" shape="round" size="large" className="Inicio_B">Iniciar Sesión</Button>
                    </Col>
                </Row>
                <Row align="middle" justify="center" className="Row_Centrado">
                    <h1>Programas y películas sin<br /> límite y mucho más</h1>
                </Row>
                <Row align="middle" justify="center" className="Row_Centrado">
                    <h2>Disfruta donde quieras.Cancela en cualquier<br />momento.</h2>
                </Row>
                <Row align="middle" justify="center" className="Row_Centrado">
                    <Input placeholder="Email" className="Busqueda_barra" />
                    <Button type="primary" className="Boton_busqueda">PROBAR AHORA <RightOutlined /></Button>
                </Row>
                <Row align="middle" justify="center" className="Row_Centrado">
                    <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
                </Row>


            </div>
        );
    }
}

export default home;