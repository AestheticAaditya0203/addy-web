import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy; {new Date().getFullYear()} Aaditya Joshi
                </p>
                <div className="social_icons">
                    {/* <a
                        href="https://twitter.com/olawanle_joel"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
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
        </>
    )
}

export default Footer;