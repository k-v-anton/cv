import { portfolio } from '../../../data/data'
import { ContainerBlock } from '../../containers/containerBlock'
import { TitleBlokWhite } from '../../elements/titleBlokWhite'
import { Item } from './Item'
import { Grid } from './grid'

export const Portfolio = () => {
  return (
    <ContainerBlock>
      <TitleBlokWhite title={'Портфолио'} />
      <Grid>
        {portfolio.map((item) => (
          <Item key={item.id} href={item.href} image={item.image} />
        ))}
      </Grid>
    </ContainerBlock>
  )
}
