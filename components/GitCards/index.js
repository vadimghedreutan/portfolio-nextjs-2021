import Card from './Card'
import Title from '../Title'

export default function GitCards({ result }) {
  return (
    <section className="gitcards_section">
      <div className="container">
        <Title title="10 Latest Updated Repositories" />
        <div className="gitcards scrollbar-hide">
          {result.map((item) => {
            return <Card {...item} key={item.id} />
          })}
        </div>
      </div>
    </section>
  )
}
