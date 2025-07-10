import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Aaditya Joshi
                </Link>
            </div>
            <a href="https://krxjab57hs2ywbhr.public.blob.vercel-storage.com/AadityaJoshi_Resume-myTCaNEyxKyD2ijZtfUlDISRnhc6HI.pdf" target="_blank" className="cta-btn" >Resume</a>
        </div>
    )
}

export default Navbar;
