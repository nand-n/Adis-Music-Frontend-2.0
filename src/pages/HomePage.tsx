import 'App.css'
import TitleTypography from '../libs/ui/components/TitleTypography'
import { PostContainer } from '../features/posts/components/PostContainer'
// import { PostContainer } from 'features/posts'
// import TitleTypography from 'libs/ui/components/TitleTypography'

const HomePage = () => {
  // const { t } = useTranslation()

  return (
    <>
      <TitleTypography title={'home.title'} />
      <PostContainer />
    </>
  )
}

export default HomePage
