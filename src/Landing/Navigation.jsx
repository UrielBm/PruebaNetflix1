import React, { Component } from 'react';
import {SearchOutlined,GiftOutlined} from '@ant-design/icons';

class Navigation extends Component {
    render() {
        return (
            <div>
                <header>
                <div class="container">
                    <img src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=3" className="logo"/>
                    <nav>
                        <ul>
                            <li> Inicio</li>
                            <li>Programas</li>
                            <li>Películas</li>
                            <li>Más recientes</li>
                            <li>Mi lista</li>
                            <li><SearchOutlined /></li>
                            <li>NIÑOS</li>
                            <li><GiftOutlined /></li>
                        </ul>
                    </nav>
                </div>
            </header>
            </div>
        );
    }
}

export default Navigation;