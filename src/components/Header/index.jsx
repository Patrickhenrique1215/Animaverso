import styles from "./Header.module.scss";

function Header(){
    return(
        <header className={styles.header}>
            <img src="./public/logo.png" alt="logotipo de Animaverso - seu mundo de aventuras!"></img>
            <nav>
                <ul>
                    <li>Lançamentos</li>
                </ul>
                <div>
                    <input type="text" placeholder="Pesquisar" className={styles.inputpesquisar}></input>
                </div>
            </nav>
        </header>
    )
}

export default Header;