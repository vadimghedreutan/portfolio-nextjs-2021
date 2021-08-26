import { LinkIcon } from '@heroicons/react/solid'
export default function Card({ name, description, homepage, html_url }) {
  return (
    <article className="gitcards__card">
      <div className="gitcards__card-content">
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
