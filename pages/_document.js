import React from 'react'
import NextDocument from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class Document extends NextDocument {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
        head: (
          <>
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}