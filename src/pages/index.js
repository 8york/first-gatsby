import * as React from 'react'
import Layout from '../components/layout'

const IndexPage =()=>{
  return(
    <Layout pageTitle="Home page">
      <p>I am making this by following the Gatsby tutoriral</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage