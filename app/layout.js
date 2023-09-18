import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import Head from 'next/head';
import styles from './styles/styles.module.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
const inter = Inter({ subsets: ['latin'] })

export const meta = {
  title: "Aaditya Joshi - Developer, Writer, Creator and YouTuber",
  description: `I've been working for around 2 years. Get in touch with me to know more.`,
  image: "https://addy-web.s3.ap-south-1.amazonaws.com/profile.jpeg",
  type: "website",
};
const nameStyles = "text-3xl font-pacifico"; 
const linkStyles = "text-xl transition hover:bg-black hover:bg-opacity-30 px-2 rounded-lg";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>        
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://addy-web.vercel.app`}
        />
        <link
          rel="canonical"
          href={`https://addy-web.vercel.app`}
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Aaditya Joshi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} /> */}
        {/* <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <body className={inter.className}>
        <Navbar />
          <main>
            {children}
          </main>
        <Footer />  
      </body>
    </html>
  )
}
