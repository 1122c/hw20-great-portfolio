// import React from "react";
import styles from "./Footer.module.css"; // Make sure to create this CSS module file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"; // Corrected icons import

// Removed the duplicate and incorrect Footer.css import

export default function Footer() {
    const socialLinks = [
        { name: "GitHub", icon: faGithub, url: "https://github.com/1122c" },
        { name: "LinkedIn", icon: faLinkedinIn, url: "https://linkedin.com/in/rjv123" },
        // If you want to include Twitter, make sure to import faTwitter and add it here
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow me on ${link.name}`}
                        className={styles.socialLink}
                    >
                        <FontAwesomeIcon icon={link.icon} className={styles.icon} />
                    </a>
                ))}
            </div>
        </footer>
    );
}
