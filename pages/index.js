import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import GitCards from '../components/GitCards'
import Contact from '../components/Contact'

export default function Home({ result }) {
  return (
    <Layout>
      <Hero />
      <main>
        <Projects />
        <GitCards result={result} />
        <Contact />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    let result = await fetch(
      'https://api.github.com/users/vadimghedreutan/repos?sort=created&page=1&per_page=10'
    ).then((res) => res.json())
    result = result.map(({ id, name, description, homepage, html_url }) => ({
      id,
      name,
      description,
      homepage,
      html_url,
    }))
    if (!result) {
      return { notFound: true }
    }
    return {
      props: {
        result,
      },
    }
  } catch (err) {
    return { notFound: true }
  }
}
