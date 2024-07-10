import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { graphql } from "gatsby"

import PostLink from '../components/post-links/patch-notes-link.jsx'
import '../styles/global.css'
import '../styles/index.css'


import Header from "../components/header"
import Footer from "../components/footer"



const PatchNotesPage: React.FC<PageProps> = ({data: {allMarkdownRemark: { edges }, },}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .filter(edge => true)
    .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)


  return (
    <main className="">
      <Header />
      <div>
        <h1 className="text-center text-3xl font-bold mb-3">Patch Notes</h1>
        <h6 className="mt-5 text-center text-xl underline">Entries:</h6>
        <div className="mx-auto w-fit mt-5 pl-10">
          {Posts}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default PatchNotesPage

export const pageQuery = graphql`
  query {
     allMarkdownRemark(sort: { frontmatter: { date: DESC }}, filter: {fileAbsolutePath: {regex: "/(patch-notes)/"  }}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD/MMM/YYYY")
            slug
            title
          }
        }
      }
    }
  }
`


export const Head: HeadFC = () => <title>Patch Notes</title>
