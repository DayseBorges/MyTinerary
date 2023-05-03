import Filterbar from '../../Componentes/Filterbar/Filterbar'
import styles from './styles/Cities.module.css'

const Cities = () => {
    return ( 
        <div className={styles.main}>
        <Filterbar/>
        <h1>Cities</h1>
        </div>
    );
}
 
export default Cities;