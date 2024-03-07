// import React from "react";
import "./Footer.css"; // Make sure to create this CSS module file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Corrected icons import


export default function Footer() {
    const socialLinks = [
        { name: "GitHub", icon: faGithub, url: "https://github.com/1122c" },
        { name: "LinkedIn", icon: faLinkedinIn, url: "https://linkedin.com/in/rjv123" },
        // If you want to include Twitter, make sure to import faTwitter and add it here
    ];

    return (
        <footer className="footer">
            <div className="socialLinks">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer" //security for new page opening. prevents url from redirecting to malicious url
                        aria-label={`Follow me on ${link.name}`}
                        className="socialLink"
                    >
                        <FontAwesomeIcon icon={link.icon} className="icon" />
                    </a>
                ))}
            </div>
        </footer>
    );
}
