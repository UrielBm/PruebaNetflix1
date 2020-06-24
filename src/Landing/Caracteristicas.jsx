import React, { Component } from 'react';
import Imagen1 from '../assets/netflixgif.gif';
import Imagen2 from '../assets/Imagen2.jpg';
import Imagen3 from '../assets/Imagen3.jpg';
import ImagenXbox from '../assets/netfliXbox.gif';
import { Button } from 'antd';
import {SyncOutlined} from '@ant-design/icons';
class Caracteristicas extends Component {
    render() {
        return (
            <div className="Caracteristicas">
                <table width="100%">
                    <tr className="Row_Centrado">
                        <th className="texo">
                            <h1 className="texto_Decorativo">Disfruta en tu TV.</h1>
                            <h2 className="texto_Decorativo">Ve en smart TV, PlayStation, Xbox,<br />
                                 Chromecast, Apple TV, reproductores de Blu-<br />
                                 ray y más.</h2>
                        </th>
                        <th className="imagen_gif">
                            <img src={Imagen1} className="Imagen1" />
                        </th>
                    </tr>
                </table>
                <div className="Caracteristicas" >
                    <table width="100%">
                        <tr className="Row_CentradoI">
                            <th className="Imagen3">
                                <img src={Imagen3} className="Imagen2" />
                                <Button type="dashed" className="Boton_Descargar">
                                <b>Stranger Things</b><br/>
                                <span S>Descargando...</span>&nbsp;&nbsp;&nbsp;<SyncOutlined spin className="IconSpin" /></Button>
                            </th>
                            <th className="texo">
                                <h1 className="texto_Decorativo2">Descarga tus series<br/> para verlas offline.</h1>
                                <h2 className="texto_Decorativo2">Guarda tu contenido favorito<br/> y ten siempre algo para ver.</h2>
                            </th>
                        </tr>
                    </table>

                </div>
                <div className="Caracteristicas" >
                    <table width="100%">
                        <tr className="Row_Centrado">
                            <th className="texo">
                                <h1 className="texto_Decorativo">Disfruta donde quieras.</h1>
                                <h2 className="texto_Decorativo">Películas y programas ilimitados en tu teléfono,<br/> tablet, computadora y TV sin costo extra.</h2>
                            </th>
                            <th className="imagen_gif">
                                <img src={ImagenXbox} className="Imagen1" />
                            </th>
                        </tr>
                    </table>

                </div>
            </div>
        );
    }
}

export default Caracteristicas;