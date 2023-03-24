interface navContent{
    title: string;
    link: string;
    sublink?: {
        title: string;
        link: string;
    }[]   
}

export const navContent: navContent[] = [
    {
        title: "Background",
        link: "/terms/#background",
    },
    {
        title: "Information We collect",
        link: "/terms/#information-we-collect",
    },
    {
        title: "Storage Of Information",
        link: "/terms/#storage-of-information",
        sublink:[
            {
                title: "Where Information is Stored ",
                link: "/terms/#where-information-is-stored"
            },
            {
                title: "Duration of Information Storage", 
                link: "/terms/#duration-of-information-storage"
            },
        ]
    },
    {
        title: "Information Security",
        link: "/terms/#information-security",
    },
    {
        title: "Information Sharing",
        link: "/terms/#information-sharing",
    },
    {
        title: "How We Use Cookies and Similar Technologies",
        link: "/terms/#how-we-use-cookies-and-similar-technologies",
        sublink:[
            {
                title: "What are Cookies?",
                link: "/terms/#what-are-cookies"
            },
            {
                title: "Cookies and Similar Technologies We Use",
                link: "/terms/#cookies-and-similar-technologies-we-use"
            }
        ]
    },
    {
        title: "Changes to this Privacy Policy",
        link: "/terms/#changes-to-this-privacy-policy",
    },
    {
        title: "Contact Us",
        link: "/terms/#contact-us",
    },
    {
        title: "Permissions",
        link: "/terms/#permissions",
    }
]