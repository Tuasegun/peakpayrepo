import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'

interface SocialIconInterface {
    icon: any;
    link: string;
}

export const SocialIcon: SocialIconInterface[] = [
    {
        icon: <FaFacebookF/>,
        link: "https://www.facebook.com/peakpay"
    },
    {
        icon: <AiOutlineInstagram/>,
        link: "https://www.instagram.com/peakpay"
    },
    {
        icon: <FaTwitter/>,
        link: "https://www.twitter.com/peakpay"
    }
]
