import { LinkIcon } from '@heroicons/react/solid'
import styles from './Cards.module.scss'

export default function Card({ name, description, homepage, html_url }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3>
          <a href={html_url}>{name}</a>
        </h3>
        <p>{description}</p>
        <a href={homepage}>
          <LinkIcon />
        </a>
      </div>
    </article>
  )
}
