import React from 'react'
import { Box, Button, Container, Flex, Space, Text } from '@mantine/core'
import NurseImg from './../../assets/nurse.jpg'

export const Welcome = () => {
  return (
    <Container mih={'100vh'} size={'lg'}>
      <Box p={20} my={20} style={{ border: '1px solid gray', borderRadius: 8 }}>
        <Text
          variant='text'
          component='h2'
          size='md'
          style={{ fontWeight: 'bold' }}
        >
          NurseValeo
        </Text>
      </Box>
      <img
        style={{
          width: '100%',
          objectFit: 'cover',
          height: '60vh'
        }}
        src={NurseImg}
        alt='nurse'
      />
      <Box
        display={'flex'}
        style={{ gap: 20, flexDirection: 'column', marginTop: 20 }}
      >
        <Flex gap={28} wrap={'wrap'}>
          <Button component='a' href='#lecture' variant='gradient' size='md'>
            Общая информация
          </Button>
          <Button component='a' href='#lecture' variant='gradient' size='md'>
            Лекционные занятия
          </Button>

          <Button component='a' href='#lecture' variant='gradient' size='md'>
            Практические занятия
          </Button>
          <Button component='a' href='#lecture' variant='gradient' size='md'>
            Самостоятельная занятия
          </Button>
        </Flex>
        <Flex gap={28} wrap={'wrap'}>
          <Button component='a' href='#lecture' variant='gradient' size='md'>
            Публикации
          </Button>
          <Button component='a' href='#lecture' variant='gradient' size='md'>
            Онлай-тесты
          </Button>
          <Button component='a' href='#lecture' variant='gradient' size='md'>
            Дополнительные материалы
          </Button>
        </Flex>
        <Flex gap={28} wrap={'wrap'}>
          <Button component='a' href='#lecture' variant='gradient' size='md'>
            Рефлексия и обратная связь
          </Button>
          <Button component='a' href='#lecture' variant='gradient' size='md'>
            Сертификат
          </Button>
          <Button variant='gradient' size='md'>
            Словарь терминов
          </Button>
          <Button component='a' href='#videos' variant='gradient' size='md'>
            Практический блок
          </Button>
        </Flex>
      </Box>
    </Container>
  )
}
