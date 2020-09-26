import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { GridImage, SliderText } from './styles'
import Image from '../../../image'
import { Link } from 'gatsby'

export const Slide = ({ imagePath = 'ImgExpandingStore.png', url = '/', text = 'text' }) => {
  return (
    <Grid container>
      <GridImage item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Link to={url}>
          <Image name={imagePath} description={imagePath} />
        </Link>
      </GridImage>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
        <Box mt={[5, 10]}>
          <SliderText variant='body2'>
            {text}
          </SliderText>
        </Box>
      </Grid>
    </Grid>
  )
}
