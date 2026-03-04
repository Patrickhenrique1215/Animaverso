import styles from "./Footer.module.scss";

function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Desenvolvido por <a href="https://portfolio-patrick-henrique.vercel.app/">Patrick Henrique - 2026</a></p>
            <p>Este produto usa a API do <img src="/tmdb.svg" alt="logotipo do TMDB" height="8vw"/>, mas não é endossado ou certificado pelo TMDB.</p>
        </footer>
    )
}
export default Footer;