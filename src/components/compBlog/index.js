import React from 'react'
import { Title } from '../../theme'
import { Box, Grid } from '@material-ui/core'
import Image from '../image'
import { ArchiveContainer, MyButton } from './styles'
import { Link } from 'gatsby'

const blogs = require('../../blogs')

export const CompBlog = () => {
  const listaBlogs = blogs.listaBlogs()

  return (
    <ArchiveContainer>
      <Title>Blog</Title>
      <Box mt={6}>
        <Grid container spacing={4}>
          {listaBlogs.map((blog, id) =>
            <Grid
              item
              xs={12}
              sm={4}
              key={id}
            >
              <Link to={`/${blog.url}`}>
                <Image name={blog.img} />
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
                <MyButton variant='outlined' color='secondary'>
                Leer más
                </MyButton>
              </Link>
            </Grid>
          )}
        </Grid>
      </Box>
    </ArchiveContainer>
  )
}
