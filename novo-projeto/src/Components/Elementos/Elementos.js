import StyleElementos from './StyleElementos.module.css';

function Elementos({img, titulo, tituloInicio}) {   
    return(
        <>
        <div className={StyleElementos.hdiv}>
            {
                tituloInicio? 
                <>
                    <h1>{titulo}</h1>
                    <img src={img}/>
                </>
                :  
                <>
                    <img src={img}/>
                    <h1>{titulo}</h1>
                </>
            }
        </div>
        </>
    )
}

export default Elementos;