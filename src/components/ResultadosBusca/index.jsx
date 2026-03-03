import styles from "./ResultadosBusca.module.scss";

function ResultadosBusca({ resultados }) {

    return (
        <section className={styles.areaBuscados}>
            <h2><hr /> Resultados</h2>

            <div className={styles.areaCardsPesquisados}>
                {resultados.map(item => (
                    <a 
                        key={item.id}
                        className={styles.cardlink}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                            alt={item.title || item.name}
                            className={styles.imgCard}
                        />
                        <div className={styles.hoverCard} >
                            <div className={styles.topoHoverCard}>
                                <h3>
                                {item.title || item.name}
                                </h3>
                                <p className={styles.notaHover}> ★ {item.vote_average?.toFixed(1)}</p>
                            </div>
                            <div className={styles.botoesHoverCard}> 
                                <button className={styles.buttonPlay} title="Assistir agora!"><img src="/play-button.png"/></button>
                                <button className={styles.buttonAddAssistirDepois} title="Adicionar em Assistir Depois"><img src="/adicionar.png"/></button>
                                <button className={styles.buttonDetalhes} title={`Ver mais informações sobre ${item.title || item.name}`}><img src="/angle-down-solid.png" /></button>
                            </div>
                        </div>
                    </a>    
                ))}
            </div>
        </section>
    );
}

export default ResultadosBusca;

