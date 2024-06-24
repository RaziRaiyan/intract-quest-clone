import gridlines from '../../assets/gridlines.png';
import styles from './Background.module.css';

const Background = () => {

    return (
        <div className={styles.glow_effect_container}>
            <section className={styles.container}>
                <img
                    src={gridlines}
                    className={styles.gridlines}
                    alt="gridlines"
                />
                <div className={styles["glow-effect"]}></div>
            </section>
        </div>
    );
}

export default Background;