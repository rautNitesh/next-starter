import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import { storeWrapper } from '../store/store'
import { addPosts } from 'src/actions/counterActions'
import axios from 'axios'
/**
 * Homepage
 */

type Post = {
  id: number
  title: string
}

type Posts = Post[]

interface PostsProps {
  counter: { count: number; posts: Posts }
}

const ResetPage: React.FC<PostsProps> = (props) => {
  const { posts } = props.counter
  return (
    <main>
      <Link href={'/'}>
        <a>back</a>
      </Link>
      {posts?.length > 0 &&
        posts.map((post) => <div key={post.id.toString()}>{post.title}</div>)}
      <HomepageCounter />
    </main>
  )
}

export const getServerSideProps = storeWrapper.getServerSideProps(
  async ({ store }) => {
    try {
      const res = await axios.get<Posts>(
        'https://jsonplaceholder.typicode.com/todos/'
      )
      const list: Posts = []
      res.data.map((data) =>
        list.push({
          id: data.id,
          title: data.title,
        })
      )
      store.dispatch(addPosts(list))
    } catch (err) {
      console.log(err)
    }
    return { props: store.getState() }
  }
)

export default ResetPage
