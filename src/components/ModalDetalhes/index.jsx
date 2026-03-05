import styles from "./ModalDetalhes.module.scss";

function ModalDetalhes(){
    return(
        <div className={styles.modal}>
            <div className={styles.topo}>
                <img className={styles.imgInvisivel} src="/public/back.png" />
                <div className={styles.titleEButtons}>
                    <h5>Titulo da midia</h5>
                    <p>a nota</p>
                    <button className={styles.buttonAssistir}>Assistir</button>
                    <button className={styles.buttonContinuar}>Continuar</button>
                    <button className={styles.addMyLista}>+</button>
                </div>
             </div>    
            <div className={styles.sinopse}>
                <h6>Sinopse</h6>
                <p></p>
            </div>
            <div className={styles.infosMidia}>
                <div>
                    <p>Ano de lançamento - serie ou filme</p>
                    <p>class indicativa, icone e texto</p>
                    <p>IDIOMA ORIGINAL: </p>
                    <p>IDIOMAS DISPONÍVEIS: </p>
                    <p>STATUS: </p>
                    <p>DURAÇÃO: </p>
                </div>
                <div>
                    <p>Gêneros: </p>
                    <p>Elenco: </p>
                    <p>Diretor: </p>
                    <p>Produtoras: </p>
                </div>
            </div>
            <div className={styles.imagensMidia}></div>
            <div className={styles.episodios}>
                <form>
                    <select>
                        <option selected>Temporada 1 </option>
                    </select>
                </form>
                <h6>Episodios</h6>
                <div className={styles.cadaEpisodio}>
                    <div className={styles.nEpisodio}></div>
                    <div className={styles.caixaImagem}><img /></div>
                    <div>
                        <h6>Titulo do episodio</h6>
                        <p>Sinopse do episodio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDetalhes;