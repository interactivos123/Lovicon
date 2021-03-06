import React from 'react'
import { TitleSEO } from '../../theme'
import { Box, Grid } from '@material-ui/core'
import Image from '../image'
import { ArchiveContainer, StepNumber, StepTitle, StepContent, ContainerCard } from './styles'
import { ListItem } from '../../components/generals/ListItem'
import { Link } from 'gatsby'

const blogs = require('../../blogs')

export const CompBlog = () => {
  const listaBlogs = blogs.listaBlogs()

  return (
    <ArchiveContainer>
      <TitleSEO>Blog</TitleSEO>
      <Box mt={6}>
        <Grid container spacing={0}>
          {listaBlogs.map((blog, id) =>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={id}
            >
              <Link to={`/blog/${blog.url}`}>
                <ContainerCard>
                  <Image name={blog.img} description={blog.title} />
                  <ListItem>
                    <StepNumber>{`0${id + 1}`}</StepNumber>
                  </ListItem>
                  <StepTitle>{blog.title}</StepTitle>
                  <StepContent variant='p'>{blog.excerpt}</StepContent>
                </ContainerCard>
              </Link>
            </Grid>
          )}
        </Grid>
      </Box>
    </ArchiveContainer>
  )
}
