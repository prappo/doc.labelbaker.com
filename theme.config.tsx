import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <>
    <div>
      <img style={{width:'150px'}} src='https://raw.githubusercontent.com/prappo/prappo/master/images/labelbaker_logo_white_with_text.svg' />
    </div>
  </>,
  editLink: {
    text: null
  },
  feedback: {
    labels: null,
    content: null,
  },

  banner: {
    key: '2.0-release',
    text: <a href="https://app.labelbaker.com/" target="_blank">
      🎉 Try LabelBaker  →
    </a>,
  },

  // project: {
  //   link: 'https://labelbaker.com',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: 'https://labelbaker.com',
  footer: {
    text: 'LabelBaker Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Labelbaker'
    }
  }
}

export default config
