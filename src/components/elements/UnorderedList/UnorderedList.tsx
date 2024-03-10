import { ListItem } from '../ListItem'
import { TitleListBlack } from '../TitleListBlack'

type UnorderedListPropsType = {
  list: string[]
  title?: string
}

export const UnorderedList = (props: UnorderedListPropsType) => {
  const { list, title } = props
  return (
    <ul>
      {title && <TitleListBlack title={title} />}
      {list.map((elem) => (
        <ListItem key={elem} text={elem} />
      ))}
    </ul>
  )
}
