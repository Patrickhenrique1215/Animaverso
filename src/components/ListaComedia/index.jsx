import { useState, useEffect } from "react";
import styles from "./ListaComedia.module.scss";

const API_KEY = "d8d845616ef648907b00e45d63d0584f";
const BASE_URL = "https://api.themoviedb.org/3";

function ListaComedia() {
  const [animacoesComedia, setAnimacoesComedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimacoesComedia = async () => {
      try {
        // Filmes e séries de animação da Comedia
        const [filmesRes, seriesRes] = await Promise.all([
          fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,35&sort_by=popularity.desc&language=pt-BR`
          ),
          fetch(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,35&sort_by=popularity.desc&language=pt-BR`
          )
        ]);

        const filmes = await filmesRes.json();
        const series = await seriesRes.json();

        // Junta e pega top 20 mais populares
        const todasAnimacoesComedia = [
          ...filmes.results,
          ...series.results
        ].slice(0, 30);

        setAnimacoesComedia(todasAnimacoesComedia);
      } catch (error) {
        console.error("Erro ao buscar animações da Comedia:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimacoesComedia();
  }, []);

  if (loading) {
    return <section className={styles.listaComedia}>Carregando...</section>;
  }

  return (
    <section className={styles.listaComedia}>
      {animacoesComedia.filter(animacao => animacao.poster_path).map((animacao) => (
        <a
                  key={animacao.id}
                  className={styles.cardlink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${animacao.poster_path}`}
                    className={styles.imgCard}
                    alt={animacao.title || animacao.name}
                  />
                  <div className={styles.hoverCard} >
                    <div className={styles.topoHoverCard}>
                      <h3>
                        {animacao.title || animacao.name}
                      </h3>
                      <p className={styles.notaHover}> ★ {animacao.vote_average?.toFixed(1)}</p>
                    </div>
                    <div className={styles.botoesHoverCard}> 
                                  <button className={styles.buttonPlay} title="Assistir agora!"><img src="/play-button.png"/></button>
                                  <button className={styles.buttonAddAssistirDepois} title="Adicionar em Assistir Depois"><img src="/adicionar.png"/></button>
                                  <button className={styles.buttonDetalhes} title={`Ver mais informações sobre ${animacao.title || animacao.name}`}><img src="/angle-down-solid.png" /></button>
                                </div>
                  </div>
                </a>
      ))}
    </section>
  );
}

export default ListaComedia;

