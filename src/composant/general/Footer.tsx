import './Footer.scss';

function Footer(){
    return(
        <div className='Footer'>
            <div className="contactUs">
                <h2>Get in Touch</h2>
                <ul>
                    <li>Phone: 123-456-7890</li>
                    <li>Email: <a href="mailto:info@company.com">info@company.com</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;