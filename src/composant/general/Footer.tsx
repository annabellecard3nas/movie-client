import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){
    return(
        <div className='Footer'>
            <div className="contactUs">
                <h2>Contacter</h2>
                <ul>
                    <li>Phone: 123-456-7890</li>
                    <li>Email: <a href="mailto:info@company.com">info@company.com</a></li>
                </ul>
            </div>
            <div className="service">
                <h2>Service a la clientele</h2>
                <ul>
                    <a href=""><li>FAQ</li></a>
                    <a href=""><li>Mention legal</li></a>
                    <a href=""><li>politique de privacite</li></a>
                    <a href=""><li>termes d'utilisation</li></a>
                </ul>
            </div>
            <div className="a propos de nous">
                <h2>a propos de nous</h2>
                <ul>
                    <li>cookies</li>
                    <li>offre d'enplois</li>
                </ul>
            </div>
            <div className="media">
                <h2>nous suivre</h2>
                <ul>
                   <InstagramIcon />
                   <XIcon />
                   <GitHubIcon/>
                </ul>
            </div>
        </div>
    );
}

export default Footer;