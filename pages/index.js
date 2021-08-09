import Head from 'next/head'
import Nav from '../components/NavBar'
import Intro from '../components/intro/intro'
import MyProjects from '../components/Myprojects/Myprojects'
import MySkills from '../components/MySkills/MySkills'
import Footer from '../components/Footer/Footer'
import axios from "axios"

export default function Home({cards,skills,resume}) {
  return (
    <div >
      <Head>
        <title>portfolio</title>
        <meta name="description" content="React developer protfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
    <div className="app">
    <div className="square">
    <Nav resume={resume} />
    <Intro />
    </div>
    <MyProjects card={cards} />
    <MySkills skills={skills} />
    </div>
    <Footer />
    </>
    </div>
  )
}
export const getStaticProps= async(context) => {
  let DOMAIN = process.env.DOMAIN || "http://localhost:3000"
  const resumeResponse = await axios.get(`${DOMAIN}/api/resume`)
  const skillsResponse = await axios.get(`${DOMAIN}/api/skills`)
  const cardsResponse = await axios.get(`${DOMAIN}/api/cards`)
  const resume = resumeResponse.data[0].link
  const skills = skillsResponse.data[0]
  const cards = cardsResponse.data 
  return {
    props: {
      cards,
      skills,
      resume
    },
    revalidate:300 
  }
}