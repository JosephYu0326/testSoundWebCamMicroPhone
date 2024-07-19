import useSound from 'use-sound'

const Sound = () => {
  const [playSound] = useSound('erro.mp3')
  return (
    <div>
      <button onClick={() => playSound()}>playSound</button>
    </div>
  )
}

export default Sound
