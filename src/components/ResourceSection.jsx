import React from 'react'

const ResourceSection = ({ title, resources }) => {
  return (
    <section
      style={{
        margin: '20px 0',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px'
      }}
    >
      <h2>{title}</h2>
      {resources.map((res, index) => (
        <div
          key={index}
          style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          {res.type === 'video' ? (
            <video
              className='video-content'
              controls
              style={{ width: '60%', maxHeight: '100vh' }}
            >
              <source src={res.url} type='video/mp4' />
              Brauzeringiz ushbu videoni qo&apos;llab-quvvatlamaydi.
            </video>
          ) : (
            <>
              <iframe
                width={'700px'}
                style={{
                  alignSelf: 'center',
                  marginInline: 'auto'
                }}
                className='pdf-iframe'
                height={'800px'}
                src={res.url}
              />
              <object
                data='http://africau.edu/images/default/sample.pdf'
                type='application/pdf'
                width='100%'
                height='100%'
                className='mobile-pdf'
              >
                <p>
                  <a href='http://africau.edu/images/default/sample.pdf'>
                    Faylni
                  </a>{' '}
                  yuklab oling
                </p>
              </object>
            </>
          )}
          <a
            href={res.url}
            download
            style={{
              display: 'block',
              marginTop: '10px',
              color: '#007BFF',
              background: 'white',
              width: 'max-content',
              padding: '12px',
              borderRadius: '8px'
            }}
          >
            Yuklab olish
          </a>
        </div>
      ))}
    </section>
  )
}

export default ResourceSection
