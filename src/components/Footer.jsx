import react from "react";

const currentYear = new Date().getFullYear();

function Footer() {
    return <footer><p>&copy; Copyright {currentYear} The Whacky Boy</p></footer >
}

export default Footer;

