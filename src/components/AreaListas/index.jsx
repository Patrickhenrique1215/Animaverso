import styles from "./AreaListas.module.scss";
import ListaLancamentos from "../ListaLancamentos";
import ListaPopulares from "../ListaPopulares";
import ListaAdicionados from "../ListaAdicionados";
import ListaDisney from "../ListaDisney";
import ListaPixar from "../ListaPixar";
import ListaFamilia from "../ListaFamilia";
import ListaAcao from "../ListaAcao";
import ListaDC from "../ListaDC";
import ListaMarvel from "../ListaMarvel";
import ListaComedia from "../ListaComedia";
import ListaAventura from "../ListaAventura";
import ListaFantasia from "../ListaFantasia";
import ListaFiccao from "../ListaFiccao";
import ListaAdultos from "../ListaAdultos";

function AreaListas(){
    return(
        <section className={styles.areaListas}>
            <div>
                <h2>Lançamentos</h2>
                <ListaLancamentos />
            </div>
            <div>
                <h2>Populares</h2>
                <ListaPopulares />
            </div>
            <div>
                <h2>Disney</h2>
                <ListaDisney />
            </div>
            <div>
                <h2>Pixar</h2>
                <ListaPixar />
            </div>
            <div>
                <h2>Família</h2>
                <ListaFamilia />
            </div>
            <div>
                <h2>Ação</h2>
                <ListaAcao />
            </div>
            <div>
                <h2>DC</h2>
                <ListaDC />
            </div>
            <div>
                <h2>Marvel</h2>
                <ListaMarvel />
            </div>
            <div>
                <h2>Comédia</h2>
                <ListaComedia />
            </div>
            <div>
                <h2>Aventura</h2>
                <ListaAventura />
            </div>
            <div>
                <h2>Fantasia</h2>
                <ListaFantasia />
            </div>
            <div>
                <h2>Ficção Científica</h2>
                <ListaFiccao />
            </div>
            <div>
                <h2>Adultos (classificação +16)</h2>
                <ListaAdultos />
            </div>
            <div>
                <h2>Últimos adicionados</h2>
                <ListaAdicionados />
            </div>
        </section>
    )
}

export default AreaListas;