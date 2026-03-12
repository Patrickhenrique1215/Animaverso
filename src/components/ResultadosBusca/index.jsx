import { useState, useEffect, useRef } from "react";
import styles from "./ResultadosBusca.module.scss";

const API_KEY = "d8d845616ef648907b00e45d63d0584f"; 
const BASE_URL = "https://api.themoviedb.org/3";

function ResultadosBusca({ resultados }) {

    //States
    const [modalAberto, setModalAberto] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState(null);
    const [detalhesModal, setDetalhesModal] = useState(null);

    // Função para formatar duração
  const formatarDuracao = (detalhes) => {
    if (!detalhes) return 'Carregando...';
    
    if (detalhes.runtime) {
      return `${detalhes.runtime} min`;
    } else if (detalhes.episode_run_time?.[0]) {
      return `${detalhes.episode_run_time[0]} min/ep`;
    }
    return 'N/D';
  };

  //Função pra formatar idiomas
  const getNomeIdioma = (codigo) => {
    if (!codigo) return 'N/D'; // ← Proteção contra undefined/null
    
    const idiomas = {
      'en': 'Inglês',
      'pt': 'Português', 
      'es': 'Espanhol',
      'fr': 'Francês',
      'ja': 'Japonês',
      'ko': 'Coreano'
    };
    return idiomas[codigo] || codigo.toUpperCase();
  };


  // Função pra traduzir status
  const getStatusTraduzido = (status) => {
    const traducoes = {
      'Released': 'Lançado',
      'Returning Series': 'Em exibição',
      'Ended': 'Finalizada',
      'In Production': 'Em produção',
      'Canceled': 'Cancelada',
      'Planned': 'Planejado'
    };
    return traducoes[status] || status;
  };

  //Função para abrir modal
  const abrirModal = (item) => {
    setItemSelecionado(item);
    setModalAberto(true);
  };

  //Funçao pra fechar modal
  const closeModal = (item) => {
    setItemSelecionado(null);
    setModalAberto(false);
  }

  
  //useEffect para bloquear scroll do body quando modal abre
  useEffect(() => {
    if (itemSelecionado) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [itemSelecionado]);

  // useEffect para carregar detalhes do card selecionado
      useEffect(() => {
        if (itemSelecionado) {
          const fetchTudo = async () => {
            // Detalhes principais
            const detalhesUrl = itemSelecionado.title 
              ? `${BASE_URL}/movie/${itemSelecionado.id}`
              : `${BASE_URL}/tv/${itemSelecionado.id}`;
            
            const [detalhesRes, ratingRes] = await Promise.all([
              fetch(`${detalhesUrl}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits,images`),
              fetch(`${detalhesUrl}/${
                itemSelecionado.title ? 'release_dates' : 'content_ratings'
              }?api_key=${API_KEY}`)
            ]);
            
            const detalhes = await detalhesRes.json();
            const ratingData = await ratingRes.json();
            
            // Pega classificação BR
            const classificacaoBR = ratingData.results?.find(r => 
              r.iso_3166_1 === 'BR'
            )?.certification || ratingData.results?.find(r => 
              r.iso_3166_1 === 'BR'
            )?.rating || 'Classificação indicativa não informada';
            
            setDetalhesModal({ ...detalhes, classificacao: classificacaoBR });
          };
          fetchTudo();
        }
      }, [itemSelecionado]);


    return (
        <>
        <section className={styles.areaBuscados}>
            <h2><hr /> Resultados</h2>

            {resultados.length === 0 ? (
                <p className={styles.semResultados}>Sem resultados</p>
            ) : (
                <div className={styles.areaCardsPesquisados}>
                    {resultados.map((item, index) => (
                        <a 
                            href="#"
                            key={item.id || index}
                            className={styles.cardlink}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.title || item.name}
                                className={styles.imgCard}
                            />
                            <div className={styles.hoverCard}>
                                <div className={styles.topoHoverCard}>
                                    <h3>{item.title || item.name}</h3>
                                    <p className={styles.notaHover}> ★ {item.vote_average?.toFixed(1)}</p>
                                </div>
                                <div className={styles.botoesHoverCard}> 
                                    <button className={styles.buttonPlay} title="Assistir agora!">
                                        <img src="/play-button.png"/>
                                    </button>
                                    <button className={styles.buttonAddAssistirDepois} title="Adicionar em Assistir Depois">
                                        <img src="/adicionar.png"/>
                                    </button>
                                    <button className={styles.buttonDetalhes} onClick={(e) => {e.preventDefault(); e.stopPropagation(); abrirModal(item);}} title={`Ver mais informações sobre ${item.title || item.name}`}>
                                        <img src="/angle-down-solid.png" />
                                    </button>
                                </div>
                            </div>
                        </a>    
                    ))}
                </div>
            )}
        </section>
        {modalAberto && itemSelecionado && (
                  <div className={styles.modalOverlay} onClick={closeModal}>
                  <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.topo} style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0,0,0,0) 25%, rgba(20, 20, 20, 1)), url("https://image.tmdb.org/t/p/w1280${detalhesModal?.backdrop_path}")`}}>
                        <img className={styles.imgInvisivel} src={`https://image.tmdb.org/t/p/w1280${detalhesModal?.backdrop_path}`} />
                        <button className={styles.closeBtn} onClick={closeModal}>×</button>
                        <div className={styles.titleEButtons}>
                            <h5>{detalhesModal?.title || detalhesModal?.name}</h5>
                            <p>★ {detalhesModal?.vote_average?.toFixed(1)}</p>
                            <button className={styles.buttonAssistir}>Assistir</button>
                            <button className={styles.addMyLista}><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>    
                    <div className={styles.sinopse}>
                        <h6>Sinopse:</h6>
                        <p>{detalhesModal?.overview}</p>
                    </div>
                    <div className={styles.infosMidia}>
                        <div>
                            <p>{detalhesModal?.release_date?.split('-')[0] || detalhesModal?.first_air_date?.split('-')[0]} - {itemSelecionado.title ? 'Filme' : 'Série'}</p>
                            <p>{detalhesModal?.classificacao || 'Não classificado'}</p>
                            <p>IDIOMA ORIGINAL: {getNomeIdioma(detalhesModal?.original_language)}</p>
                            <p>STATUS: {getStatusTraduzido(detalhesModal?.status)}</p>
                            <p>DURAÇÃO: {formatarDuracao(detalhesModal)}</p>
                        </div>
                        <div>
                            <p>Gêneros: {detalhesModal?.genres?.map(g => g.name).join(', ')}</p>
                            <p>Elenco: {detalhesModal?.credits?.cast?.slice(0,5).map(a => a.name).join(', ')}</p>
                            <p>Diretor: {detalhesModal?.credits?.crew?.filter(p => p.job === "Director").map(d => d.name).join(', ')}</p>
                            <p>Produtoras: {detalhesModal?.production_companies?.map(p => p.name).join(', ')}</p>
                        </div>
                    </div>
                    <div className={styles.imagensMidia}>
                      {detalhesModal?.images?.backdrops?.slice(0,8).map(img => (
                        <img
                          key={img.file_path}
                          src={`https://image.tmdb.org/t/p/w780${img.file_path}`}
                          alt="Cena"
                        />
                      ))}
                    </div>
            
                    {/*}
                    <div className={styles.episodios}>
                        <form>
                            <select>
                                <option selected>Temporada 1 </option>
                            </select>
                        </form>
                        <h6>Episodios:</h6>
                        <div className={styles.cadaEpisodio}>
                            <div className={styles.nEpisodio}>4</div>
                            <div className={styles.caixaImagem}><img /></div>
                            <div className={styles.textoEp}>
                                <h6>Titulo do episodio</h6>
                                <p>Sinopse do episodio</p>
                            </div>
                        </div>
                    </div>*/}
                  </div>
                  </div>
                )}
                </>
    );
}

export default ResultadosBusca;
