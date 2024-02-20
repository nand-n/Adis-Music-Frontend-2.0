import '../App.css'
import TitleTypography from '../libs/ui/components/TitleTypography'
import { PostContainer } from '../features/posts/components/PostContainer'

const HomePage = () => {

  return (
    <>
      <TitleTypography title={'home.title'} />
      <PostContainer />
    </>
  )
}

export default HomePage
