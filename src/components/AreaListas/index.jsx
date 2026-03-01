import styles from "./AreaListas.module.scss";
import ListaLancamentos from "../ListaLancamentos";
import ListaPopulares from "../ListaPopulares";

function AreaListas(){
    return(
        <section className={styles.areaListas}>
            <ListaLancamentos />
            <ListaPopulares />
        </section>
    )
}

export default AreaListas;