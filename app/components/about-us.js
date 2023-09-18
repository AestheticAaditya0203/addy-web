import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development, with a focus on web technologies such as HTML, CSS, and JavaScript. I enjoy exploring Pega applications as well, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
                    </p>
                    <p>In my current experience, I have worked on a various projects, and also in working with a variety of development tools and frameworks, including React, React Native and Next.js. I am always eager to learn and explore new technologies, and I am constantly seeking out opportunities to improve my skills and knowledge.</p>
                </div>
                <div className="about-img">
                    <Image src= "https://addy-web.s3.ap-south-1.amazonaws.com/profile_2.jpeg" className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;