import { useState, useEffect } from "react";
import styles from "./ListaLancamentos.module.scss";

const API_KEY = "d8d845616ef648907b00e45d63d0584f"; 
const BASE_URL = "https://api.themoviedb.org/3";

function ListaLancamentos() {
  const [animacoes, setAnimacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimacoes = async () => {
      try {
        // Animações em cartaz (filmes) + airing today (séries)
        const [filmesRes, seriesRes] = await Promise.all([
          fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&language=pt-BR`
          ),
          fetch(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16&language=pt-BR`
          )
        ]);

        const filmes = await filmesRes.json();
        const series = await seriesRes.json();

        // Junta filmes e séries ordenado por popularidade
        const todasAnimacoes = [
          ...filmes.results,
          ...series.results
        ].sort((a, b) => b.popularity - a.popularity)
         .slice(0, 30); // Top 10

        setAnimacoes(todasAnimacoes);
      } catch (error) {
        console.error("Erro ao buscar animações:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimacoes();
  }, []);

  if (loading) {
    return <section className={styles.listaLancamentos}>Carregando...</section>;
  }

  return (
    <section className={styles.listaLancamentos}>
      {animacoes.filter(animacao => animacao.poster_path).map((animacao) => (
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
              <button className={styles.buttonPlay} title="Assistir agora!"><img src="../../../public/play-button.png"/></button>
              <button className={styles.buttonAddAssistirDepois} title="Adicionar em Assistir Depois"><img src="../../../public/adicionar.png"/></button>
              <button className={styles.buttonDetalhes} title={`Ver mais informações sobre ${animacao.title || animacao.name}`}><img src="../../../public/angle-down-solid.png" /></button>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}

export default ListaLancamentos;
