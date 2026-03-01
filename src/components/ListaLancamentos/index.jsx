import styles from "./ListaLancamentos.module.scss";

function ListaLancamentos(){
    return(
        <section className={styles.listaLancamentos}>
            <a className={styles.cardlink}>
               <img src="../../../public/bobesponjadesktop.jpg" className={styles.imgCard}></img> 
               <div className={styles.footerCard}>
                    <h2 className={styles.titleCard}>Bob Esponja</h2>
                    <p className={styles.descriptionCard}>Bob Esponja vive no mar</p>
                </div>   
            </a>
        </section>
    )
}

export default ListaLancamentos;