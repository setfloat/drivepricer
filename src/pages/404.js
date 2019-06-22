import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <section
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '80px',
      }}
    >
      <h1>Page not found</h1>
      <a href="/">Return to Drive Pricer</a>
    </section>
  </Layout>
)

export default NotFoundPage
