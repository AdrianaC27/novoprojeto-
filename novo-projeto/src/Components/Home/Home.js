import styleHome from './Home.module.css';
import Logo from '../images/logo.png'

function Home() {
    return(
        <div className={styleHome.dad}>
            <main>
                <div className={styleHome.txtHome}>
                    <h1>Olá, me chamo <span>Harry!</span></h1>
                    <h2>Sou desenvolvedor Full Stack</h2>
                </div>
                <div className={styleHome.dadLogo}>
                    <img src={Logo} alt="logo" />
                </div>
            </main>
            <footer>
                <button>Sobre mim</button>
                <button>Meus Projetos</button>
                <button>Habilidades</button>
                <button>Contato</button>
            </footer>
        </div>
    )
}

export default Home;
