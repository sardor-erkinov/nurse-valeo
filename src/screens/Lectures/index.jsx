import React, { useCallback, useMemo, useState } from 'react'
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Space,
  Stack,
  Text
} from '@mantine/core'
import PdfImage from './../../assets/pdf.png'
import DocImage from './../../assets/google-docs.png'
import PhotoImage from './../../assets/photo.png'
import classes from './styles.module.css'

export const Lectures = () => {
  const pdfs = [
    { url: '/static/pdfs/1.pdf', type: 'pdf', name: '1' },
    { url: '/static/pdfs/veleology.pdf', type: 'pdf', name: 'veleology' },
    { url: '/static/pdfs/ТАРИФИ.pdf', type: 'pdf', name: 'ТАРИФИ' },
    {
      url: '/static/pdfs/2022-йил 2-сон A.Azizova.pdf',
      type: 'pdf',
      name: '2022-йил 2-сон A.Azizova'
    },
    {
      url: '/static/pdfs/2022-йил 2-сон.pdf',
      type: 'pdf',
      name: '2022-йил 2-сон'
    },
    {
      url: '/static/pdfs/2023-3-son-saytga.pdf',
      type: 'pdf',
      name: '2023-3-son-saytga'
    },
    { url: '/static/pdfs/31-20.pdf', type: 'pdf', name: '31-20' },
    { url: '/static/pdfs/63-68.pdf', type: 'pdf', name: '63-68' },
    {
      url: '/static/pdfs/7.6. М. Журнал -6.pdf',
      type: 'pdf',
      name: '7.6. М. Журнал -6'
    },
    {
      url: '/static/pdfs/Azizova Asal Ruslanovna.pdf',
      type: 'pdf',
      name: 'Azizova Asal Ruslanovna'
    },
    {
      url: '/static/pdfs/Azizova Asalkhan Ruslankhan qizi.pdf',
      type: 'pdf',
      name: 'Azizova Asalkhan Ruslankhan qizi'
    },
    {
      url: '/static/pdfs/Canada Conference Package May 2022.pdf',
      type: 'pdf',
      name: 'Canada Conference Package May 2022'
    },
    {
      url: '/static/pdfs/Conference 2024.pdf',
      type: 'pdf',
      name: 'Conference 2024'
    },
    {
      url: '/static/pdfs/IJBEA_Vol 2 No 6 Jun_Combine.pdf',
      type: 'pdf',
      name: 'IJBEA_Vol 2 No 6 Jun_Combine'
    },
    {
      url: "/static/pdfs/Ilm_fan_ta'limda_innovatsiyalar,_takliflar_va_yechimlar_May_Iyun.pdf",
      type: 'pdf',
      name: "Ilm_fan_ta'limda_innovatsiyalar,_takliflar_va_yechimlar_May_Iyun"
    },
    {
      url: '/static/pdfs/JDPU_Xalqaro_anjuman_14.11.2023.pdf',
      type: 'pdf',
      name: 'JDPU_Xalqaro_anjuman_14.11.2023'
    },
    {
      url: "/static/pdfs/Konferensiya_To'plam 18.05.2024.pdf",
      type: 'pdf',
      name: "Konferensiya_To'plam 18.05.2024"
    },
    {
      url: '/static/pdfs/Pedagogika 6.2022.pdf',
      type: 'pdf',
      name: 'Pedagogika 6.2022'
    },
    {
      url: '/static/pdfs/TSUL 17.05.22.pdf',
      type: 'pdf',
      name: 'TSUL 17.05.22'
    },
    {
      url: '/static/pdfs/Talim_fan_va_innovatsiya_jurnal_2023_yil_2-son.pdf',
      type: 'pdf',
      name: 'Talim_fan_va_innovatsiya_jurnal_2023_yil_2-son'
    },
    {
      url: '/static/pdfs/USAT Maqolalar to‘plami.pdf',
      type: 'pdf',
      name: 'USAT Maqolalar to‘plami'
    },
    {
      url: '/static/pdfs/СПО 3 блок СПО 3 2024 (из типографии).pdf',
      type: 'pdf',
      name: 'СПО 3 блок СПО 3 2024 (из типографии)'
    },
    {
      url: '/static/pdfs/Азизова Асаль Руслановна .pdf',
      type: 'pdf',
      name: 'Азизова Асаль Руслановна'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 1.docx',
      type: 'docx',
      name: 'Теоретическое занятие 1'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 10.1.docx',
      type: 'docx',
      name: 'Теоретическое занятие 10.1'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 10.2.docx',
      type: 'docx',
      name: 'Теоретическое занятие 10.2'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 10.3.docx',
      type: 'docx',
      name: 'Теоретическое занятие 10.3'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 2.docx',
      type: 'docx',
      name: 'Теоретическое занятие 2'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 3.2.docx',
      type: 'docx',
      name: 'Теоретическое занятие 3.2'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 4.1.docx',
      type: 'docx',
      name: 'Теоретическое занятие 4.1'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 5.1.docx',
      type: 'docx',
      name: 'Теоретическое занятие 5.1'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 6.1.docx',
      type: 'docx',
      name: 'Теоретическое занятие 6.1'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 7.1.docx',
      type: 'docx',
      name: 'Теоретическое занятие 7.1'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 7.2.docx',
      type: 'docx',
      name: 'Теоретическое занятие 7.2'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 7.3.docx',
      type: 'docx',
      name: 'Теоретическое занятие 7.3'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 8.1.docx',
      type: 'docx',
      name: 'Теоретическое занятие 8.1'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 9.1.docx',
      type: 'docx',
      name: 'Теоретическое занятие 9.1'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 9.2.docx',
      type: 'docx',
      name: 'Теоретическое занятие 9.2'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 9.3.docx',
      type: 'docx',
      name: 'Теоретическое занятие 9.3'
    },
    {
      url: '/static/pdfs/Теоретическое занятие 9.4.docx',
      type: 'docx',
      name: 'Теоретическое занятие 9.4'
    },
    {
      url: '/static/images/photo_2022-12-08_22-38-44.jpg',
      type: 'image',
      name: 'photo_2022-12-08_22-38-44'
    },
    {
      url: '/static/images/photo_2022-12-08_22-38-55.jpg',
      type: 'image',
      name: 'photo_2022-12-08_22-38-55'
    },
    {
      url: '/static/images/photo_2022-12-08_22-38-58.jpg',
      type: 'image',
      name: 'photo_2022-12-08_22-38-58'
    },
    {
      url: '/static/images/photo_2022-12-08_22-39-02.jpg',
      type: 'image',
      name: 'photo_2022-12-08_22-39-02'
    }
  ]

  const [currentPdf, setCurrentPdf] = useState(pdfs[0].url)
  const [docType, setDocType] = useState('pdf')
  console.log({ currentPdf })

  const renderContnet = useMemo(() => {
    if (docType === 'pdf') {
      return (
        <embed
          style={{
            flex: 1,
            height: 'calc(100vh - 140px)'
            //   maxHeight: '800px'
          }}
          src={window.location.origin + currentPdf}
          width='100%'
          type='application/pdf'
        />
      )
    } else if (docType === 'docx') {
      return (
        // <iframe
        //   style={{
        //     flex: 1,
        //     height: 'calc(100vh - 140px)',
        //     maxWidth: '50%'
        //     //   maxHeight: '800px'
        //   }}
        //   src={
        //     'https://docs.google.com/gview?url=' +
        //     window.location.origin +
        //     currentPdf
        //   }
        // />
        <Center
          style={{
            border: '2px solid gray',
            height: 'calc(100vh - 140px)',
            borderRadius: 8
          }}
          flex={1}
        >
          <Text size='xl'>Скачайте!</Text>
        </Center>
      )
    } else {
      return (
        <img
          style={{
            flex: 1,
            height: 'calc(100vh - 140px)'
          }}
          src={currentPdf}
          width='100%'
        />
      )
    }
  }, [docType, currentPdf])

  const renderTypeIcon = useCallback(pdf => {
    if (pdf.type === 'pdf') {
      return (
        <img
          src={PdfImage}
          width={30}
          height={30}
          style={{ objectFit: 'contain' }}
        />
      )
    } else if (pdf.type === 'docx') {
      return (
        <img
          src={DocImage}
          width={30}
          height={30}
          style={{ objectFit: 'contain' }}
        />
      )
    } else {
      return (
        <img
          src={PhotoImage}
          width={30}
          height={30}
          style={{ objectFit: 'contain' }}
        />
      )
    }
  }, [])

  return (
    <Container id='lecture' pt={20} h={'100vh'} mih={'800px'} size={'lg'}>
      <Box p={20} style={{ border: '1px solid gray', borderRadius: 8 }}>
        <Text
          variant='text'
          component='h2'
          size='xl'
          style={{ fontWeight: 'bold' }}
        >
          Информация
        </Text>
      </Box>
      <Box className={classes.lecturesWrapper} style={{ marginTop: 20 }}>
        <Flex
          className={classes.files}
          wrap={'wrap'}
          gap={20}
          flex={1}
          justify={'center'}
        >
          {pdfs.map(pdf => (
            <Stack key={pdf.url} align='center'>
              <Stack
                key={pdf.url}
                onClick={() => {
                  setCurrentPdf(pdf.url)
                  setDocType(pdf.type)
                }}
                gap={8}
                align='center'
                style={{
                  border:
                    pdf.url === currentPdf
                      ? '2px solid gray'
                      : '2px solid transparent',
                  height: 'max-content',
                  cursor: 'pointer',
                  borderRadius: 8,
                  padding: 10,
                  maxWidth: '100px'
                }}
              >
                {renderTypeIcon(pdf)}
                <p style={{ wordBreak: 'break-all' }}>{pdf.name}</p>
              </Stack>
              <Button
                size='sm'
                variant='outline'
                m={20}
                component='a'
                href={pdf.url}
                download
              >
                Скачать
              </Button>
            </Stack>
          ))}
        </Flex>
        {currentPdf ? (
          renderContnet
        ) : (
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
        )}
      </Box>
    </Container>
  )
}
