import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { Alert } from 'react-bootstrap'

const Camera = () => {
  const [qrCodeValue, setQrCodeValue] = useState()

  const handleScan = data => {
    if (data) {
      setQrCodeValue(data)
    }
  }

  return (
    <div>
      <h1>QR reader</h1>
      <QrReader
        delay={300}
        onScan={handleScan}
        onError={console.error}
        style={{ width: '100%' }}
      />
      {qrCodeValue&&
        <Alert variant="success" className="d-flex ">
          {qrCodeValue}
          {(qrCodeValue.toUpperCase().startsWith('HTTP')||qrCodeValue.toUpperCase().startsWith('WWW'))&&<a className="btn btn-outline-dark ml-auto" href={qrCodeValue} target="_blank" rel="noopener noreferrer">Go there</a>
          }

        </Alert>
      }
    </div>
  )
}

export default Camera
