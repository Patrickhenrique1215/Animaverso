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
                <h2><hr/> Lançamentos</h2>
                <ListaLancamentos />
            </div>
            <div>
                <h2><hr/> Populares</h2>
                <ListaPopulares />
            </div>
            <div>
                <h2><hr/> Disney</h2>
                <ListaDisney />
            </div>
            <div>
                <h2><hr/> Pixar</h2>
                <ListaPixar />
            </div>
            <div>
                <h2><hr/> Família</h2>
                <ListaFamilia />
            </div>
            <div>
                <h2><hr/> Ação</h2>
                <ListaAcao />
            </div>
            <div>
                <h2><hr/> DC</h2>
                <ListaDC />
            </div>
            <div>
                <h2><hr/> Marvel</h2>
                <ListaMarvel />
            </div>
            <div>
                <h2><hr/> Comédia</h2>
                <ListaComedia />
            </div>
            <div>
                <h2><hr/> Aventura</h2>
                <ListaAventura />
            </div>
            <div>
                <h2><hr/> Fantasia</h2>
                <ListaFantasia />
            </div>
            <div>
                <h2><hr/> Ficção Científica</h2>
                <ListaFiccao />
            </div>
            <div>
                <h2><hr/> Adultos (classificação +16)</h2>
                <ListaAdultos />
            </div>
            <div>
                <h2><hr/> Últimos adicionados</h2>
                <ListaAdicionados />
            </div>
        </section>
    )
}

export default AreaListas;