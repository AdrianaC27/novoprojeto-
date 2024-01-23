import Elementos from '../Elementos/Elementos';
import Header from '../Header/Header';
import StyleHabilidade from './StyleHabilidades.module.css';
import React from '../images/react.png';
import Js from '../images/js.png';
import Css from '../images/css.png';
import Html from '../images/html.png';
import Sql from '../images/sql.png';
import Node from '../images/node.png';

function Habilidade() {
    return(
        <>
        <Header titulo='Habilidades'/>
        <div className={StyleHabilidade.hdiv}>
            <Elementos img={React} titulo="ReactJS" tituloInicio={true}/>
            <Elementos img={Js} titulo="JavaScript" tituloInicio={true}/>
            <Elementos img={Css} titulo="CSS3" tituloInicio={true}/>
            <Elementos img={Html} titulo="HTML5" tituloInicio={true}/>
            <Elementos img={Sql} titulo="SQL" tituloInicio={true}/>
            <Elementos img={Node} titulo="NodeJS" tituloInicio={true}/>
        </div>
        </>
    )
}

export default Habilidade;