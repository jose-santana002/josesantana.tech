import Head from 'next/head'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Dance from './Dance'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Jose Santana | Home</title>
    </Head>
    <main>
      <h1 className={styles.title}>
        While you wait for the site to be built, feel free to watch him dance :)
      </h1>
      <div className={styles.canvas}>

        <Canvas>
          <ambientLight instensity={0.6} />
          <directionalLight instensity={0.5} />
          <Suspense fallback={null}>
            <Dance />
          </Suspense>
        </Canvas>
      </div>
    </main>
    </>
  )
}
