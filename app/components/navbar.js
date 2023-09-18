import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Aaditya Joshi
                </Link>
            </div>
            <a href="https://addy-web.s3.ap-south-1.amazonaws.com/AadityaJoshi_Resume.pdf" target="_blank" className="cta-btn" >Resume</a>
        </div>
    )
}

export default Navbar;