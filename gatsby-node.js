const path = require('path')
const listaBlogs = require('./src/blogs')
const blogs = listaBlogs.listaBlogs()

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const singleBlog = path.resolve('src/templates/SingleBlog/index.js')

  blogs.forEach(blog => {
    createPage({
      path: `blog/${blog.url}`,
      component: singleBlog,
      context: blog
    })
  })
}
