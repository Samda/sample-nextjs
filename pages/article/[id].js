import { server } from '../../config/'
import Link from "next/link";
import Meta from "../../components/Meta"

export default function article({article}) {
  const { title, excerpt, body } = article

  return (
    <div style={{ padding: '50px' }}>
      <Meta title={title} description={excerpt} />
      <h2>{title}</h2>
      <p>{body}</p>
      <br/>
      <Link href='/'>Back</Link>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()
//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id => ({params: { id: id.toString() }}))

//   return {
//     paths,
//     fallback: false
//   }
// }