import Image from "next/image";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {
    const dataimg = [{img: "https://addy-web.s3.ap-south-1.amazonaws.com/profile.png"}]
    return (
        <div className="hero-container">
            <Image src="https://addy-web.s3.ap-south-1.amazonaws.com/profile.jpeg" className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
            <div className="hero-text">
                <h1>Hey, I&apos;m Aaditya 👋</h1>
                <p>
                    I&apos;m a software developer based in Bengaluru, Karnataka. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
                </p>
                <div className="social-icons">
                    {/* <a
                        href="https://twitter.com/olawanle_joel"
                        aria-label="Twitter"
                        target="_blank"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a> */}
                    <a
                        href="https://github.com/AestheticAaditya0203"
                        aria-label="GitHub"
                        target="_blank"
                    >
                        {/* <i className="fa-brands fa-github"></i> */}
                        <GitHubIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aaditya-joshi-6aba8b120/"
                        aria-label="LinkedIn"
                        target="_blank"
                    >
                        {/* <i className="fa-brands fa-linkedin"></i> */}
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;