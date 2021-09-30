import styles from './Title.module.scss'

export default function Title({ title }) {
  return (
    <div className={styles.content}>
      <hr />
      <h3>{title}</h3>
    </div>
  )
}
