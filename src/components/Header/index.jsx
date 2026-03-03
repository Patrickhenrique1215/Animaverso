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