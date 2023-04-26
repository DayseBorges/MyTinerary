import {Carrousel} from '../../Componentes/Carrousel/Carrousel';
import {Welcome} from '../../Componentes/Welcome/Welcome';
import styles from './styles/Home.module.css'

function Home () {
    return (  
        <div className={styles.home}>
            <Carrousel />
            <Welcome />
        </div>
    );
}

export default Home;