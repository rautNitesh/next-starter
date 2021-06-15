import OtherComp from '@components/counter/other-comp'
import axios from 'axios'
import { connect } from 'react-redux'
import { AppState } from '@store/store'
import { Dispatch } from 'redux'
import { addPost } from 'src/actions/counterActions'

type UserData = {
  data: {
    id: number
    title: string
  }
}

const Other: React.FC<UserData> = ({ data }) => {
  return <OtherComp data={data} />
}

const mapStateToProps = ({ counter }: AppState) => {
  counter.post
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addPost: () => dispatch(addPost),
})

export default connect(mapStateToProps, mapDispatchToProps)(Other)

export const getServerSideProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  addPost(res.data)
}
