import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

// const IndexPage = () => (
//   <Layout>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/page-2/">Go to page 2</Link>
//     <br/>
//     <Link to="/about/">About</Link>
//     <br/>
//     <Link to="/cost100k/">CostCalc</Link>
//   </Layout>
// )

// export default IndexPage

import Cost100k from './cost100k'

export default () => <Cost100k />
