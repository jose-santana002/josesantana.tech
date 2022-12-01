import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Desk from '../public/Desk'
import Hello from '../public/Hello'
import PopUp from './popup'
import styles from '../styles/Home.module.css'

export default class Home extends React.Component {

  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return (
      <>
        <Head>
          <title>Jose Santana | Home</title>
        </Head>
        <main>
          <div className={styles.homeContainerOne}>
            <div className={styles.helloCanvas}>
              <Canvas camera={{ fov: 90 }}>
                <ambientLight intensity={1} />
                <directionalLight intensity={0.5} />
                <Suspense fallback={null}>
                  <Hello position={[0, 0, 0]} rotation={[0.40, 0, 0]} />
                </Suspense>
              </Canvas>
            </div>

            <div className={styles.title}>
              <h1 className={styles.headerOne}>Welcome!</h1>
              <p >My name is Jose Santana and I am an aspiring cyber security professional.</p>
            </div>
          </div>

          <div className={styles.scrollText}>
            <p>scroll to learn more</p>
            <div className={styles.downArrow}></div>
          </div>

          <div className={styles.homeContainerTwo}>
            <div className={styles.aboutTextContainer}>
              <h2 className={styles.subtitle}>whoami</h2>
              <p className={styles.text}>I am a college student pursuing a B.S. Cybersecurity & Information Assurance while being employed
                full-time as a Senior Technical Support Engineer. I love getting my hands dirty and applying my knowledge
                to real-world situations, whether at work or in labs at home. I have a passion for helping others and hope to impact this industry
                in my own unique way! Based in Los Angeles, CA.</p>
            </div>
          </div>

          <div className={styles.homeContainerThree}>
            <div className={styles.deskTextContainer}>
              <h2 className={styles.subtitle}>Securing the web by day so you can sleep at night.</h2>
              <p className={styles.text}>Much like the little guy to your right, I&apos;m always on my computer trying to
                learn something new and expand my skillsets. When I&apos;m not working or doing schoolwork, you will likely
                find me writing code, practicing on CTFs, or trying to figure out the latest exploit & mitigation techniques. </p>
            </div>
            <div className={styles.deskCanvas}>
              <Canvas camera={{ fov: 95 }}>
                <ambientLight intensity={1} />
                <directionalLight intensity={0.5} />
                <Suspense fallback={null}>
                  <Desk position={[0, 0, 0]} rotation={[.40, 10, 0]} />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className={styles.homeContainerFour}>
            <h2 className={styles.subtitle}>Trust me, I&apos;m certified.</h2>
            <p className={styles.text}>I&apos;ve had a ton of fun earning these certifications. More on the way soon!</p>
            <a href="./ITILv4.pdf" target="_blank" rel="noreferrer"><Image src="/itil4.png" width="200" height="200" alt="ITILv4 Foundations" className={styles.certifications} /></a>
            <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/R7ZAKYBKARHG" target="_blank" rel="noreferrer"><Image src="/googleit.png" width="200" height="200" alt="Google IT Support Professional" className={styles.certifications} /></a>
            <a href="https://badgr.com/public/assertions/44_E8-JATAOFlOffZkF8mw?identity__email=santanajcr01@gmail.com" target="_blank" rel="noreferrer"><Image src="/csulbcertification.png" width="200" height="200" alt="California State University, Long Beach Cybersecurity Professional Certificate" className={styles.certifications} /></a>
            <a href="https://www.credly.com/badges/975a9728-5bbd-4a9c-bc3e-f1e805560e95?source=linked_in_profile" target="_blank" rel="noreferrer"><Image src="/awsccp.png" width="200" height="200" alt="AWS Certified Cloud Practitioner" className={styles.certifications} /></a>
            <a href="https://www.credly.com/badges/85b5c28e-8bf4-455b-9a7b-122ad65fe688/linked_in_profile" target="_blank" rel="noreferrer"><Image src="/aplus.png" width="200" height="200" alt="CompTIA A+" className={styles.certifications} /></a>
          </div>
          <div className={styles.footerContainer}>
            <div>
              <div className={styles.credits} onClick={this.togglePop}>
                <p >Credits</p>
              </div>
              {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
            </div>
            {/* <p className={styles.subtext}>Thank you for visiting! You can also find me here: </p>
            <a href="https://github.com/jose-santana002" target="_blank"><Image src="/github.png" width="200" height="200" alt="Github Logo" className={styles.footerIcons} /></a>
            <a href="https://www.linkedin.com/in/jose-santana-01/" target="_blank"><Image src="/linkedin.png" width="200" height="200" alt="LinkedIn Logo" className={styles.footerIcons} /></a>
            <a href="https://twitter.com/JoseSantana002" target="_blank"><Image src="/twitter.png" width="200" height="200" alt="Twitter Logo" className={styles.footerIcons} /></a>
            <a href="https://www.youtube.com/channel/UCI497eZqFyJxbjyvP9PCvfQ" target="_blank"><Image src="/youtube.png" width="200" height="200" alt="Youtube Logo" className={styles.footerIcons} /></a>
            <a href="https://www.twitch.tv/josesantana002" target="_blank"><Image src="/twitch.png" width="200" height="200" alt="Twitch Logo" className={styles.footerIcons} /></a> */}
          </div>
        </main>
      </>
    )
  }

}
