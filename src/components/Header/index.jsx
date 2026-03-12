import { useState,useRef, useEffect } from "react";
import styles from "./Header.module.scss";

const API_KEY = "d8d845616ef648907b00e45d63d0584f";
const BASE_URL = "https://api.themoviedb.org/3";

function Header({ setBusca, setResultados }) {

    //States
    const [texto, setTexto] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    //Refs
    const dropdownRef = useRef(null);

    //Utilitarias
    const toggleDropdown = () => setIsOpen(!isOpen);


    //Funçao buscar FAMILIA
    async function familia(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,10751&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,10751&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("familia");
        setResultados(filtrados);
    }
    
    //Funçao buscar COMEDIA
    async function comedia(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,35&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,35&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("comedia");
        setResultados(filtrados);
    }

    //Funçao buscar AVENTURA
    async function aventura(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,12&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,12&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("aventura");
        setResultados(filtrados);
    }

    //Funçao buscar DRAMA
    async function drama(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,18&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,18&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("drama");
        setResultados(filtrados);
    }

    //Funçao buscar AÇÃO
    async function acao(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,28&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,28&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("acao");
        setResultados(filtrados);
    }

    //Funçao buscar FANTASIA
    async function fantasia(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,14&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,14&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("fantasia");
        setResultados(filtrados);
    }

    //Funçao buscar ROMANCE
    async function romance(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,10749&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,10749&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("romance");
        setResultados(filtrados);
    }

    //Funçao buscar MISTERIO
    async function misterio(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,9648&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,9648&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("misterio");
        setResultados(filtrados);
    }

    //Funçao buscar HORROR
    async function horror(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,27&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,27&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("horror");
        setResultados(filtrados);
    }


    //Funçao buscar classificaçao L - Livre
    async function buscarLivre(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16,10751&certification_country=US&certification=G&without_original_language=ja&language=pt-BR&sort_by=popularity.desc&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16,10751&with_content_ratings=TV-G&without_original_language=ja&language=pt-BR&sort_by=popularity.desc&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("livre");
        setResultados(filtrados);
    } 

    //Funçao buscar classificaçao 10
    async function buscar10(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=BR&certification.gte=10&without_original_language=ja&language=pt-BR&with_keywords=210024|1721|9715|456&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=10|TV-Y7|TV-G|PG&without_original_language=ja&language=pt-BR&with_keywords=210024|1721|9715|456&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("10");
        setResultados(filtrados);
    } 

    //Função buscar classificaçao 12
    async function buscar12(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=US&certification.gte=PG-13&without_original_language=ja&language=pt-BR&sort_by=release_date.desc&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=12|12A|TV-PG|PG&without_original_language=ja&language=pt-BR&sort_by=release_date.desc&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("12");
        setResultados(filtrados);
    } 

    //Função buscar classificação 14
    async function buscar14(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=BR&certification.gte=14&without_original_language=ja&language=pt-BR&sort_by=primary_release_date.desc&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=14|15|TV-14&without_original_language=ja&language=pt-BR&sort_by=primary_release_date.desc&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("14");
        setResultados(filtrados);
    } 

    //Função buscar classificaçao 16
    async function buscar16(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=GB&certification.gte=15&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=16|18|TV-MA|R|NC-17&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("16");
        setResultados(filtrados);
    } 

    //Função buscar classificaçao 18
    async function buscar18(e) {
        e.preventDefault();

        const paginas = [1,2,3,4,5,6,7,8,9];

        const requestsFilmes = paginas.map(page =>
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&certification_country=US&certification.gte=NC-17&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const requestsSeries = paginas.map(page =>
            fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16with_content_ratings=18|TV-MA&without_original_language=ja&language=pt-BR&page=${page}`)
        );

        const respostas = await Promise.all([...requestsFilmes, ...requestsSeries]);

        const json = await Promise.all(respostas.map(r => r.json()));

        // junta todos resultados
        const todos = json.flatMap(d => d.results);

        // remove duplicados
        const unicos = Array.from(
            new Map(
                todos.map(item => [
                `${item.id}-${item.title ? "movie" : "tv"}`,
                item
                ])
            ).values()
        );

        const filtrados = unicos.filter(item =>
            item.poster_path &&
            item.vote_average >= 5 &&
            item.vote_count >= 200
        );

        setBusca("18");
        setResultados(filtrados);
    } 


    //Funçao de buscar no CAMPO DE BUSCA
    async function buscarFilmes(e) {
        if (e.key === "Enter" && texto.trim() !== "") {

            const resposta = await fetch(
                `${BASE_URL}/search/multi?query=${texto}&api_key=${API_KEY}&language=pt-BR`
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

    //Para fechar o categorias drop quando clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false); // Fecha se clicar fora
        }
        };

        document.addEventListener('mousedown', handleClickOutside); // ou 'click'
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); // [] roda só uma vez

    //Return
    return (
        <header className={styles.header}>
            <a className={styles.linklogo} href=""><img src="/logosemfundo.png" alt="Animaverso" /></a>
            <ul className={styles.ul1} >
                <li className={styles.dropdown} ref={dropdownRef} onMouseEnter={() => setIsOpen(true)} e onMouseLeave={() => setIsOpen(false)}>
                    <a onClick={toggleDropdown}>Categorias <span><svg className={styles.svgcategorias} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 16l-6-6h12l-6 6z"/>
                    </svg></span></a>
                    
                    {isOpen && (
                    <ul className={styles.dropdownContent} >
                        <li className={styles.sectionDropdown}>
                            <h4 className={styles.titleGen}>Gêneros</h4>
                            <ul className={styles.ul3}>
                                <li><a href="#" onClick={(e) => { familia(e); setIsOpen(false); }}>Família</a></li>
                                <li><a href="#" onClick={(e) => { comedia(e); setIsOpen(false); }}>Comédia</a></li>
                                <li><a href="#" onClick={(e) => { aventura(e); setIsOpen(false); }}>Aventura</a></li>
                                <li><a href="#" onClick={(e) => { drama(e); setIsOpen(false); }}>Drama</a></li>
                                <li><a href="#" onClick={(e) => { acao(e); setIsOpen(false); }}>Ação</a></li>
                                <li><a href="#" onClick={(e) => { fantasia(e); setIsOpen(false); }}>Fantasia</a></li>
                                <li><a href="#" onClick={(e) => { romance(e); setIsOpen(false); }}>Romance</a></li>
                                <li><a href="#" onClick={(e) => { misterio(e); setIsOpen(false); }}>Mistério</a></li>
                                <li><a href="#" onClick={(e) => { horror(e); setIsOpen(false); }}>Horror</a></li>
                            </ul>
                        </li>
                        
                        <li className={styles.sectionDropdown}>
                            <h4>Classificação indicativa</h4>
                            <ul className={styles.ul3}>
                                <li><a href="#" onClick={(e) => { buscarLivre(e); setIsOpen(false); }}>L - Livre</a></li>
                                <li><a href="#" onClick={(e) => { buscar10(e); setIsOpen(false); }}>10</a></li>
                                <li><a href="#" onClick={(e) => { buscar12(e); setIsOpen(false); }}>12</a></li>
                                <li><a href="#" onClick={(e) => { buscar14(e); setIsOpen(false); }}>14</a></li>
                                <li><a href="#" onClick={(e) => { buscar16(); setIsOpen(false); }}>16</a></li>
                                <li><a href="#" onClick={(e) => { buscar18(e); setIsOpen(false); }}>18</a></li>
                            </ul>
                        </li>
    
                    </ul>
                    )}
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