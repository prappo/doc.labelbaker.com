import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Label Baker</span>,

  project: {
    link: 'https://labelbaker.com',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://labelbaker.com',
  footer: {
    text: 'LabelBaker Documentation',
  },
  useNextSeoProps(){
    return {
      titleTemplate: '%s – Labelbaker'
    }
  }
}

export default config
