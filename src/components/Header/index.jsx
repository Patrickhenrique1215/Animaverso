import styles from "./Header.module.scss";

function Header(){
    return(
        <header className={styles.header}>
            <img src="../../../public/logosemfundo.png" alt="logotipo de Animaverso - seu mundo de aventuras!"></img>
            <nav>
                <div>
                    <input type="text" placeholder="Pesquisar" className={styles.inputpesquisar}></input>
                </div>
            </nav>
        </header>
    )
}

export default Header;