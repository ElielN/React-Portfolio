import './styles.scss';

type socialProps = {
    socialImg: string,
    socialAlt: string,
    handleRedirect: Function,
};


export function SocialMedia({socialImg, socialAlt, handleRedirect}: socialProps) {
    return(
        <div className="social" onClick={() => handleRedirect()}>
            <img src={socialImg} alt={socialAlt}/>
        </div>
    );
};