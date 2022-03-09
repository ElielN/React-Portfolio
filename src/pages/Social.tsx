import { Header } from "../components/Header";
import { SocialMedia } from "../components/SocialMedia";

import instagramImg from "../assets/images/instagramImage.svg";
import facebookImg from "../assets/images/facebookImage.svg";
import gmailImg from "../assets/images/gmailImage.svg";
import linkedinImg from "../assets/images/linkedinImage.svg";

import "../styles/social.scss";


export function Social(){

    function handleClickRedirect(link: string) {
        window.open(link, '_blank');
    }

    return (
        <div className="page-social">
            <Header currentPage="social"/>
            <div className="content-social">
                <SocialMedia 
                    socialImg={linkedinImg}
                    socialAlt='linkedin'
                    handleRedirect={() => handleClickRedirect('https://www.linkedin.com/in/eliel-souza-6b5919190')}
                />
                <SocialMedia 
                    socialImg={instagramImg}
                    socialAlt='instagram'
                    handleRedirect={() => handleClickRedirect('https://www.instagram.com/ele_eh_o/')}
                />
                <SocialMedia 
                    socialImg={facebookImg}
                    socialAlt='facebook'
                    handleRedirect={() => handleClickRedirect('https://www.facebook.com/ElielNolascoo/')}
                />
                <SocialMedia 
                    socialImg={gmailImg}
                    socialAlt='gmail'
                    handleRedirect={() => handleClickRedirect('mailto:elielnnsouza@gmail.com?subject=Assunto do e-mail')}
                />
            </div>
        </div>
    );
}