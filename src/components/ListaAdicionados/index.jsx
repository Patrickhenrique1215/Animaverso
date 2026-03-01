import { useState, useEffect } from "react";
import styles from "./ListaAdicionados.module.scss";

const API_KEY = "d8d845616ef648907b00e45d63d0584f";
const BASE_URL = "https://api.themoviedb.org/3";

function ListaAdicionados() {
  const [animacoes, setAnimacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUltimos = async () => {
      try {
        // Filmes e séries animação ORDENADAS por data de lançamento (mais novas primeiro)
        const [filmesRes, seriesRes] = await Promise.all([
          fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}` +
            `&with_genres=16` +
            `&sort_by=release_date.desc` +  // 🎯 MAIS NOVAS PRIMEIRO
            `&language=pt-BR`
          ),
          fetch(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}` +
            `&with_genres=16` +
            `&sort_by=first_air_date.desc` +  // Séries usam first_air_date
            `&language=pt-BR`
          )
        ]);

        const filmes = await filmesRes.json();
        const series = await seriesRes.json();

        const todasAnimacoes = [
          ...filmes.results,
          ...series.results
        ].slice(0, 30);

        setAnimacoes(todasAnimacoes);
      } catch (error) {
        console.error("Erro ao buscar últimos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUltimos();
  }, []);

  if (loading) {
    return <section className={styles.lista}>Carregando...</section>;
  }

  return (
    <section className={styles.lista}>
      {animacoes.map((animacao) => (
        <a 
          key={animacao.id} 
          href={`https://www.themoviedb.org/${animacao.media_type || 'movie'}/${animacao.id}`}
          className={styles.cardlink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src={
              animacao.poster_path
                ? `https://image.tmdb.org/t/p/w500${animacao.poster_path}`
                : "/placeholder.jpg"
            } 
            className={styles.imgCard}
            alt={animacao.title || animacao.name}
          />
          <div className={styles.footerCard}>
            <h2 className={styles.titleCard}>
              {animacao.title || animacao.name}
            </h2>
            <p className={styles.descriptionCard}>
              {animacao.overview.slice(0, 100)}...
            </p>
          </div>
        </a>
      ))}
    </section>
  );
}

export default ListaAdicionados;
