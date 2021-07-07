import articleStyles from '../styles/Article.module.css'
import Link from 'next/link'
import Meta from '../components/Meta'

const ArticleItem = ({article}) => {
  const { title, id, excerpt} = article

  return (
    <Link href="/article/[id]" as={`/article/${id}`}>
      <a className={articleStyles.card}>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
