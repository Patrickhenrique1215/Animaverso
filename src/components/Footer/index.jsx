import styles from "./Footer.module.scss";

function Footer(){
    return(
        <footer className={styles.footer}>
            <p>Desenvolvido por <a href="https://portfolio-patrick-henrique.vercel.app/">Patrick Henrique - 2026</a></p>
        </footer>
    )
}
export default Footer;