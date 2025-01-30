import React, { useState } from 'react'
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Stack,
  Text
} from '@mantine/core'
import VideoImage from './../../assets/video.png'
import classes from './styles.module.css'

export const Videos = () => {
  const [open, setOpen] = useState(false)

  const videos = [
    { src: '/static/videos/Ситуация.mp4' },
    { src: '/static/videos/2.mp4' },
    { src: '/static/videos/Персонаж №1.mp4' }
  ]
  const [currentVideo, setCurrentVideo] = useState(videos[0]?.src)

  const videoList = [
    {
      name: 'Ситуация, 1'
    },
    { name: '2' },
    { name: 'Персонаж №1' }
  ]
  return (
    <Container
      id='videos'
      pt={20}
      pb={'12px'}
      h={'100vh'}
      mih={'800px'}
      size={'lg'}
    >
      <Box p={20} style={{ border: '1px solid gray', borderRadius: 8 }}>
        <Text
          variant='text'
          component='h2'
          size='xl'
          style={{ fontWeight: 'bold' }}
        >
          Видео
        </Text>
      </Box>
      <Box
        className={classes.videosWrapper}
        display={'flex'}
        style={{ marginTop: 20 }}
      >
        {videos.length > 0 ? (
          <Flex className={classes.files} wrap={'wrap'} gap={20} flex={1}>
            {videos?.map((video, index) => (
              <Stack key={video?.src} align='center'>
                <Stack
                  onClick={() => {
                    setCurrentVideo(video.src)
                  }}
                  gap={8}
                  align='center'
                  style={{
                    border:
                      video.src === currentVideo
                        ? '2px solid gray'
                        : '2px solid transparent',
                    height: 'max-content',
                    cursor: 'pointer',
                    borderRadius: 8,
                    padding: 10
                  }}
                >
                  <img src={VideoImage} width={30} />
                  <p>{videoList[index].name}</p>
                </Stack>
                <Button
                  size='sm'
                  variant='outline'
                  m={20}
                  component='a'
                  href={video.src}
                  download
                >
                  Скачать
                </Button>
              </Stack>
            ))}
          </Flex>
        ) : (
          <Center>
            <Text size='xl'>Видео отсутствуют!</Text>
          </Center>
        )}
        {currentVideo ? (
          <Center
            style={{
              border: '2px solid gray',
              height: 'calc(100vh - 140px)',
              borderRadius: 8
            }}
            flex={1}
          >
            <video src={currentVideo} width='100%' height='100%' controls>
              <source src={currentVideo} type='video/mp4' />
              Ваш браузер не поддерживает этот формат видео!
            </video>
          </Center>
        ) : (
          videos.length > 0 && (
            <Center
              style={{
                border: '2px solid gray',
                height: 'calc(100vh - 140px)',
                borderRadius: 8
              }}
              flex={1}
            >
              <Text size='xl'>Выберите файл!</Text>
            </Center>
          )
        )}
      </Box>
    </Container>
  )
}
