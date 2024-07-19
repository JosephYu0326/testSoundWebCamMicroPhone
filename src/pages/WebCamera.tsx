import { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

const WebCamera = () => {
  const [captureSrc, setCaptureSrc] = useState<string>('')
  const videoConstraints = {
    width: 600,
    height: 400,
    facingMode: 'user',
  }
  const webcamRef = useRef<Webcam>(null)
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot()

      setCaptureSrc(imageSrc!)
    }
  }, [webcamRef])

  return (
    <>
      <section style={{ display: 'flex' }}>
        <div>
          <h1 style={{ color: 'white' }}>WebCam</h1>
          <div>
            <div>
              <Webcam
                videoConstraints={videoConstraints}
                screenshotFormat='image/jpeg'
                ref={webcamRef}
              />
            </div>
            <button onClick={capture}>Capture photo</button>
          </div>
        </div>
        <div style={{ color: 'white' }}>
          <h1>CapturePhoto</h1>
          <div>
            <img src={captureSrc} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default WebCamera
