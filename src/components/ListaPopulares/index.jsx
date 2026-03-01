import { useState, useEffect } from "react";
import styles from "./ListaPopulares.module.scss";

const API_KEY = "d8d845616ef648907b00e45d63d0584f";
const BASE_URL = "https://api.themoviedb.org/3";

function ListaPopulares() {
  const [animacoes, setAnimacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimacoes = async () => {
      try {
        // Animações MAIS POPULARES (qualquer época)
        const [filmesRes, seriesRes] = await Promise.all([
          fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=pt-BR`
          ),
          fetch(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=pt-BR`
          )
        ]);

        const filmes = await filmesRes.json();
        const series = await seriesRes.json();

        // Junta e pega top 10 mais populares
        const todasAnimacoes = [
          ...filmes.results,
          ...series.results
        ].slice(0, 30);

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
    return <section className={styles.listaPopulares}>Carregando...</section>;
  }

  return (
    <section className={styles.listaPopulares}>
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

export default ListaPopulares;
