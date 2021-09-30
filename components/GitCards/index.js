import Card from './Card'
import Title from '../Title'
import styles from './Cards.module.scss'

export default function GitCards({ result }) {
  return (
    <section>
      <div className="container">
        <Title title="Github Repositories" />
        <div className={styles.box}>
          {result.map((item) => {
            return <Card {...item} key={item.id} />
          })}
        </div>
      </div>
    </section>
  )
}
