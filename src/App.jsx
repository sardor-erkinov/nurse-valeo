import '@mantine/core/styles.css'

import { createTheme, MantineProvider } from '@mantine/core'
import React from 'react'
import { Welcome } from './screens/Welcome'
import { Lectures } from './screens/Lectures'
import { Videos } from './screens/Videos'
// const resources = {
//   videos: [
//     { url: '/static/videos/video1.mp4', type: 'video' },
//     { url: '/static/videos/video2.mp4', type: 'video' }
//   ],
//   pdfs: [
//     { url: '/static/pdfs/book1.pdf', type: 'pdf' },
//     { url: '/static/pdfs/article1.pdf', type: 'pdf' }
//   ]
// }
const App = () => {
  const theme = createTheme({
    fontFamily: 'Montserrat, sans-serif',
    defaultRadius: 'md'
  })

  return (
    <MantineProvider theme={theme}>
      <Welcome />
      <Lectures />
      <Videos />
    </MantineProvider>
  )
}

export default App
