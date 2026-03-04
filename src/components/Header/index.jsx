import { useState } from "react";
import styles from "./Header.module.scss";

function Header({ setBusca, setResultados }) {

    const [texto, setTexto] = useState("");

    async function buscarFilmes(e) {
        if (e.key === "Enter" && texto.trim() !== "") {

           const resposta = await fetch(
  `https://api.themoviedb.org/3/search/multi?query=${texto}&api_key=d8d845616ef648907b00e45d63d0584f&language=pt-BR`
);

const dados = await resposta.json();

const filtrados = dados.results.filter(item =>
  item.poster_path &&
  item.media_type !== "person" &&
  item.genre_ids?.includes(16)
);

    
            setBusca(texto);
            setResultados(filtrados);
        }
    }

    return (
        <header className={styles.header}>
            <img src="/logosemfundo.png" alt="Animaverso" />
            <ul>
                <li className={styles.dropdown}>
                    <a>Categorias</a>
                    <svg className={styles.svgcategorias} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 16l-6-6h12l-6 6z"/>
                    </svg>
                    <ul className={styles.dropdownContent}>

                        <li className={styles.sectionDropdown}>
                            <h4>Público</h4>
                            <ul>
                                <li><a href="#">Para todas as idades</a></li>
                                <li><a href="#">Baby (-5)</a></li>
                                <li><a href="#">Infantil (+5)</a></li>
                                <li><a href="#">Adolescente (+12)</a></li>
                                <li><a href="#">Adulto (+16)</a></li>
                            </ul>
                        </li>
                    
                        <li className={styles.sectionDropdown}>
                            <h4>Gêneros</h4>
                            <ul>
                                <li><a href="#">Família</a></li>
                                <li><a href="#">Comédia</a></li>
                                <li><a href="#">Aventura</a></li>
                                <li><a href="#">Drama</a></li>
                                <li><a href="#">Ação</a></li>
                                <li><a href="#">Fantasia</a></li>
                                <li><a href="#">Romance</a></li>
                                <li><a href="#">Mistério</a></li>
                                <li><a href="#">Horror</a></li>
                            </ul>
                        </li>
                        
                        <li className={styles.sectionDropdown}>
                            <h4>Classificação indicativa</h4>
                            <ul>
                                <li><a href="#">L</a></li>
                                <li><a href="#">10</a></li>
                                <li><a href="#">12</a></li>
                                <li><a href="#">14</a></li>
                                <li><a href="#">16</a></li>
                                <li><a href="#">18</a></li>
                            </ul>
                        </li>
                        
                        
                    
                    </ul>
                </li>
            </ul>

            <nav>
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className={styles.inputpesquisar}
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    onKeyDown={buscarFilmes}
                />
            </nav>
        </header>
    );
}

export default Header;