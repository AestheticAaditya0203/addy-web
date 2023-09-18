import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head';
import About from './components/about'
import Aboutus from './components/about-us'
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* Pega research   */}
       {/* <section>
            Pega research
        </section>      */}
      {/* hey there, here will be sitting the main page reg the blogs and research. */}
        {/* <section>
            Blogs ... Research React Next React Native ...
        </section> */}
      {/* Academic research */}
        {/* <section>
            AI/ML Related Project based Reasearch ... Stock Market Predictor ...
            App made in simple Html css and js based on that ...
        </section> */}
        <Head>
				<title>Joel's Portfolio</title>
				<meta name="description" content="Aaditya's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div>
				<About />
				<Aboutus />
				<Skills />
				<Projects />
				<Contact />
			</div>
    </main>
  )
}
