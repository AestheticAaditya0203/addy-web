import Image from 'next/image'
import Link from 'next/link';


export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {/* Pega research   */}
       <section>
            Pega research
        </section>     
      {/* hey there, here will be sitting the main page reg the blogs and research. */}
        <section>
            Blogs ... Research React Next React Native ...
        </section>
      {/* Academic research */}
        <section>
            AI/ML Related Project based Reasearch ... Stock Market Predictor ...
            App made in simple Html css and js based on that ...
        </section>
    </main>
  )
}
