import { useState } from 'react'
import { AudioRecorder } from 'react-audio-voice-recorder'

const MicroPhone = () => {
  const [audioSrc, setAudioSrc] = useState('')
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob)
    setAudioSrc(url)
  }

  return (
    <div>
      <div>
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          onNotAllowedOrFound={(err) => console.table(err)}
          downloadOnSavePress={false}
          downloadFileExtension='webm'
          mediaRecorderOptions={{
            audioBitsPerSecond: 128000,
          }}
          showVisualizer={true}
        />
      </div>
      {audioSrc !== '' && (
        <div style={{ marginTop: '20px' }}>
          <audio controls>
            <source src={audioSrc} />
          </audio>
        </div>
      )}
    </div>
  )
}

export default MicroPhone
