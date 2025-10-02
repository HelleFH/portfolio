import React from 'react';
import './AboutMe.scss';
import SocialLinks from '../../../../components/SocialLinks/SocialLinks'

const AboutMe = () => {
    return (
        <section className="about">
            <div className="about-me__content">
                <div className="about-me__personal-info">

                    <div className="about-me__contact-info">
                        <h4>Contact Info</h4>
                        <p> hellefruergaardh@gmail.com</p>
                        <p> +45 29664077</p>
                        <SocialLinks />

                    </div>
                </div>

                <div className="about-me__bio">


                    <div className="about-me__intro">
                        <p >
                            Here’s a little bit about who I am and what I do
                        </p>
                    </div>

                    <p>

                    </p>
                    <p>
                        I’ve worked independently and collaborated on many different kinds of projects mainly with React. I’m comfortable with the full process of development . 
                    </p>
                    <p>
I studied web development at NEXT in Copenhagen, where I received thorough training in HTML, JavaScript, and CSS. I have experience with various frameworks, but my main focus has been React. I’m comfortable working across the full stack and adapting to new technologies as needed. Additionally, I hold a degree in Biology and Chemistry from the University of Southern Denmark, which has provided me with a strong background in sustainability, climate, and related fields.                    </p>

                    <p>
                        I have several years of experience in copywriting and translation/localization, where I’ve worked on adapting content for different languages and cultures.
                    </p>

                    <p>
                        Currently, I work with a company that has an AI-based app, and I have years of experience in technical support, troubleshooting both software and hardware.
                    </p>

                    <p>
                        Outside of work, I’m a very active person. I have two small kids, a dog and a cat, and I’m always curious and learning something new, whether it’s in tech or in life.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
