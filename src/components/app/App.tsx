import { useWindowSize } from '../../hooks/useWindowSize'
import { PageMobile } from '../PageMobile'
import { PagePc } from '../PagePC'

export const App = () => {
  const { width } = useWindowSize()
  return <> {width > 768 ? <PagePc /> : <PageMobile />}</>
}
