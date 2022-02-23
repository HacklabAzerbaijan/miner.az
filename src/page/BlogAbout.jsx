import React from 'react'
import NewBlog from '../component/blogAboutComponent/NewBlog'
import Header from '../component/blogAboutComponent/Header'
import Footer from '../component/homeComponent/Footer'

const BlogAbout = () => {
  return (
    <div style={{backgroundColor:"#fff"}}>
    <Header />
    <NewBlog />
    <Footer />
    </div>
  )
}

export default BlogAbout