import tamaoPic from './tamao.jpg'
import styles from './card.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.tamao} src={tamaoPic} alt='Zoological Park' />
      <h2>Phnom Tamao</h2>
      <p>
        Phnom Tamao Zoo has a total area 2,025 hectares which is covered by
        deciduous forest. Moreover, it is home and rescue center for about 102
        wildlife species, including critically endangered and vulnerable species
        such as birds, mammals, and reptiles.
      </p>
    </div>
  )
}

export default Card
