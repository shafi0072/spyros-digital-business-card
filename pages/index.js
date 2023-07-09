import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const divStyle = {
    position: 'relative',
    width: '200px',
    height: '200px',
    backgroundColor: 'blue',
    overflow: 'hidden',
  };

  const waveStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40px',
    backgroundImage: 'url("wave.png")',
    backgroundRepeat: 'repeat-x',
    animation: 'wave-animation 2s linear infinite',
  };

  const imageStyle = {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  return (
    <div id="blue-div">
    <img src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg" alt="Your Image"/>
  </div>
  )
}
