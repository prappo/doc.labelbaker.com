import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <>
    <div style={{ display: 'flex', gap: 15, justifyContent: 'center', alignItems: 'center' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10"
        viewBox="0 0 406.585 406.585"
        width="50"
        height="50"
      >
        <path
          fill="#F7E88B"
          d="M203.292 406.585L17.588 289.939l185.704-116.647 185.705 116.647z"
        ></path>
        <path
          fill="#F9A18A"
          d="M203.292 319.935L17.588 203.289 203.292 86.642l185.705 116.647z"
        ></path>
        <path
          fill="#88C5FC"
          d="M388.997 116.64L203.298 233.29l-58.221-36.57-67.529-42.42-59.96-37.66L203.298 0l26.239 16.48 67.541 42.42z"
        ></path>
        <path
          fill="#F2F2F2"
          d="M86.563 246.614l116.729 73.322 116.731-73.322-116.731-73.322z"
          opacity="0.23"
        ></path>
        <path
          fill="#F2F2F2"
          d="M86.559 159.966l116.733 73.325 116.735-73.325-116.735-73.324z"
          opacity="0.23"
        ></path>
      </svg>
      <span style={{ fontWeight: 'bolder' }}>LableBaker</span>
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
