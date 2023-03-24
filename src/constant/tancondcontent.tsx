interface BackgroundContentProps {
  id: string;
  title: string;
  mainContent: string;
  listContent: string[];
  summary: string;
}

interface InfoWeCollectProps {
  id: string
  title: string;
  mainContent: string;
  listContent: {
    numbering: string;
    content: string;
    list?: string[];
  }[];
  summary: string;
}

interface StorageInfoProps {
  id: string
  title: string;
  mainContent: string;
  listContent: {
    id: string
    numbering: string;
    title: string;
    content: string;
    list?: string[];
  }[];
}

interface InfoSecurityProps {
  id: string;
  title: string;
  mainContent: string;
  content: string[];
}

interface InfoSharingProps {
  id: string;
  title: string;
  mainContent: string;
}

interface CookiesProps {
  id: string;
  title: string;
  listContent: {
    id:string;
    numbering: string;
    title: string;
    content: string;
  }[];
}

interface PrivacyChangesProps {
  id: string;
  title: string;
  listContent: string[];
}

interface PermissionProps {
  id: string;
  title: string;
  mainContent: string;
  list: {
    title: string;
    content: string;
  }[];
}

interface ContactUsProps {
  id: string
    title: string;
    listContent: string[];
}

export const backgroundContent: BackgroundContentProps = {
  id: "background",
  title: "Background",
  mainContent:
    "PEAKPAY provides safe, convenient and easy-to-operate financial services for every user. We not only need to meet the user's 'monetary' needs, but also need to solve data security issues, so that every customer can rest assured and trust our products. The processing of personal information involved in this agreement is only for users who use PEAKPAY and participate in our activities, hereinafter referred to as PEAKPAY ('we'). In order to explain how we collect, use and store your personal information and what rights you have. We will explain the relevant matters to you through the 'PEAKPAY Privacy Protection Agreement', the main points of which are as follows:",
  listContent: [
    "We will explain the types of personal information we collect from you and the use of the application one by one, so that you can understand the specific categories of personal information we collect for a specific function, the reasons for use and the methods of collection.",
    " When you use certain functions, we will collect your sensitive personal information after obtaining your consent. If you fill in the contact information, we will collect your mobile phone contact information, and we will collect your mobile phone text message information when you enter or apply for a loan. Unless it must be collected in accordance with relevant laws and regulations, refusing to provide this information will only prevent you from using the relevant specific functions, but will not affect your normal use of our other functions.",
    "We will not actively share or transfer your personal information to third parties other than PEAKPAY. If there are other situations where your personal information is shared or transferred, or you need us to share or transfer your personal information to a third party outside of PEAKPAY, we will directly obtain or confirm that the third party has obtained your express consent for the above behaviour, except as otherwise provided by laws and regulations or required to protect user rights, or protect the ecological security of PEAKPAY. In addition, we will conduct risk assessments on the behaviour of providing information externally.",
    "We will not actively obtain your personal information from third parties outside PEAKPAY. If it is necessary to obtain your personal information from a third party for business development, we will verify the legitimacy of the source in accordance with the law, or express to you the source, type and scope of use of your personal information before obtaining it, such as the personal information that PEAKPAY needs to conduct business. Processing activities beyond the scope of your authorization and consent when you originally provided your personal information to a third party, we will obtain your express consent before processing your personal information; in addition, we will also strictly abide by the relevant laws and regulations, and require third parties to guarantee the legality of the information as the personal information that PEAKPAY needs to cond business. Processing activities beyond the scope of yo authorization and consent when you originally provided your personal information to a third party, we will obtain your express consent before processing your personal information; in addition, we will also strictly abide by the relevant laws and regulations, and require third parties to guarantee the legality of the information they provide.",
    "You can view, correct, copy, delete your personal information through the channels and methods listed in this guideline, and you can also withdraw your consent, cancel your account, complain and report and other privacy functions.",
    "In order to collect your information under these guidelines, or provide you with services, optimise our services and protect your account security, we will need to ask you for relevant permissions; sensitive permissions such as address book, location, camera, photo albums, etc. will not be enabled by default, and we will call or use them within the scope of your consent only after your explicit consent.",
  ],
  summary:
    "It should be noted that the fact that we have obtained a specific sensitive permission does not mean that we will necessarily collect your relevant information; even if we have obtained sensitive permissions, it will only be within the necessary scope and during your use of related services or functions. We use these guidelines to collect information about you.",
};

export const infoWeCollect: InfoWeCollectProps = {
  id: "information-we-collect",
  title: "Information we collect",
  mainContent:
    "During your use of the PEAKPAYservice, we will collect and use the information that you actively provide when using the service or that is generated due to the use of the service in the following ways:",
  listContent: [
    {
      numbering: "1.11",
      content:
        "When you register for the PEAKPAY service, we will collect and use your mobile phone number. The purpose of collecting this information is to help you, complete functions such as PEAKPAY registration and protect the security of your PEAKPAY. The collection and use of mobile phone numbers is to meet the real identity information authentication requirements of relevant laws and regulations. If you do not provide such information, you may not be able to use our services normally.",
    },
    {
      numbering: "1.12",
      content:
        " When you use PEAKPAY services, in order to ensure your normal use of our services, maintain the normal operation of our services, improve and optimise our service experience and protect the security of your account, we will collect and use your device model, operating system, unique Log information such as device identifier (Android ID/OAID for Android, and IDFA before iOS 14.5 for 1OS), login IP address, network access method, type and status, and operation logs. At the same time, in order to prevent ​​your normal use of our services, maintain the normal operation our services, improve and optimise our service experience a protect the security of your account, we will collect and use your device model, operating system, unique Log information such as device identifier (Android ID/OAID for Android, and IDFA before iOS 14.5 for iOS), login IP address, network access method, type and status, and operation logs. At the same time, in order to prevent viruses, Trojan horse programs or other malicious programs and websites, we may collect application information installed on your device, running process information or data stored in the device memory to prevent the leakage of your personal information.",
    },
    {
      numbering: "1.13",
      content:
        " When you fill in personal information, company information, etc. This information will be uploaded and stored in our server, so that we can review your loan qualifications when you apply for a loan, and we have the right to refuse or approve your loan through your application.",
    },
    {
      numbering: "1.14",
      content:
        " When you need to take photos such as ID photos/BVN/driver's licences during the process of filling in the information, we will ask your consent to obtain camera permissions and enable you to click on your KYC documents and other necessary documents during the loan application process.",
    },
    {
      numbering: "1.15",
      content:
        "When filling in your personal address or business address, we will collect and upload location information from your device after obtaining your consent to reduce the risk associated with your account. We will store your location information in our system database.",
    },
    {
      numbering: "1.16",
      content:
        " When you need to upload pictures such as ID photos/BVN/selfie photos during the process of filling in the information, we will ask your consent to obtain storage permissions and help you complete the loan application steps.",
    },
    {
      numbering: "1.17",
      content:
        "When you fill in the contact information, you obtain the permission of the contact list. After we obtain your consent, you can quickly select friends from the communication list and automatically fill them in our APP. And with your consent, data is collected from your contact list, including name, phone number, account type, recently modified contact information, favourites and other optional data (such as relationship and structure addresses).The purpose is to collect your information from your close friends, analyse and assess your risk profile and determine your loan eligibility.",
    },
    {
      numbering: "1.18",
      content:
        "If you contact our customer service, we may require you to provide the necessary personal information. for identity verification in order to ensure the security of your account. In order to provide services according to your demands, with your authorization, human customer service personnel need to inquire or verify your relevant information within the scope of your authorization. We will try our best to take technical and management measures to ensure the security and confidentiality of your information, and when necessary, use within the range. We may also save your contact information (mobile phone number, email, Whatsapp, Facebook or other contact information you use or provide), the record and content of your communications with us, and other necessary information, to provide you with satisfactory customer service.",
    },
    {
      numbering: "1.19",
      content:
        " In addition, according to relevant laws, regulations and national standards, we may process your relevant personal information without your authorization and consent in the following situations:",
      list: [
        "Necessary for the personal information processor to perform legal obligations or legal duties.",
        "Necessary to enter into, and perform a contract to which you are a party",
        "It is necessary to respond to public health emergencies, or to protect the life, health and property safety of natural persons in emergencies.",
        "Handle the personal information that you have disclosed by yourself, or others that have been legally disclosed within a reasonable scope according to law.",
        "Other circumstances stipulated by laws and administrative regulations.",
      ],
    },
    {
      numbering: "1.20",
      content:
        " In order to ensure the security of the service and help us better understand the operation of our application, we may record relevant information, such as the frequency of your use of the application, crash data, overall usage, performance data and the source of the application. We do not merge the information we store in our analytics software with any personally identifiable information you provide in the app.",
    },
    {
      numbering: "1.21",
      content:
        " If we use your personal information beyond the purpose authorised by you and the scope of direct or reasonable connection, we will inform you again and obtain your express consent before using your personal information.",
    },
    {
      numbering: "1.22",
      content:
        " Please note that at present, we will not actively obtain your personal information from third parties outside PEAKPAY. If it is necessary to indirectly obtain your personal information from a third party for business development in the future, we will make it clear to you the source, type and scope of use of your personal information before obtaining it. The scope of authorization and consent for personal information, we will obtain your express consent before processing your personal information.",
    },
  ],
  summary:
    "In addition, we will strictly abide by the relevant laws and regulations, and require third parties to protect the legality of the information they provide.",
};

export const StorageInfo: StorageInfoProps = {
  id:"storage-of-information",
  title: "Storage of information",
  mainContent:
    "We will store the personal information of users collected in Nigeria, in accordance with laws and regulations. If your personal information storage location is to be transferred from Nigeria to outside, we will strictly follow the law. The data we collect (e.g: SMS, contact list, installed apps list, etc.) are encrypted and stored on our membership server `https://service.peakpay.ng/.` We will never share this data with third parties.",
  listContent: [
    {
      id: "where-information-is-stored",
      numbering: "2.1",
      title: "Where Information is Stored",
      content:
        "We will store the personal information of users collected in Nigeria, in accordance with laws and regulations. If your personal information storage location is to be transferred from Nigeria to outside, we will strictly follow the law. The data we collect (e.g: SMS, contact list, installed apps list, etc.) are encrypted and stored on our membership server `https://service.peakpay.ng/. `We will never share this data with third parties.",
    },
    {
      id: "duration-of-information-storage",
      numbering: "2.2",
      title: "How Long We Keep Your Information",
      content:
        "Generally speaking, we only retain your personal information for the time necessary to achieve the purpose and the retention period is stipulated by laws and administrative regulations, such as:",
      list: [
        "Mobile phone number: You register PEAKPAY account with your mobile phone number, and if you need to use PEAKPAY service, we need to keep your mobile phone number (including initial registered mobile phone number, replacement of new mobile phone number, etc.) to ensure that you can use the service normally. When you cancel your PEAKPAY account, we will delete the corresponding information according to law.",
        "When our products or services stop operating, we will notify you in the form of push notifications, announcements, etc., and delete your personal information within a reasonable period",
      ],
    },
  ],
};

export const SecurityInfo: InfoSecurityProps = {
  id:"information-security",
  title: "Information Security",
  mainContent:
    "We strive to safeguard the security of our user's information against loss, misuse, alteration, unauthorised access or disclosure.",
  content: [
    "We will use various security safeguards within a reasonable level of security to keep information secure. For example, we will use encryption technology (e.g, SSL), de-identification, anonymization and other means to protect your personal information.",
    "We strengthen the security capabilities of the software installed on your device, through continuously improving technical means to prevent the leakage of your personal information. For example, we will encrypt some information locally on your device for secure transmission; in order to prevent viruses, Trojan horse programs, or other malicious programs and websites, so as to know the application information installed on your device, running process information or device memory. In order to prevent fraud, account theft, impersonation, other illegal acts and conduct security inspections. Data such as unique device identifiers, login IP addresses, operation logs, location information may be analysed and used to facilitate the adoption of security measures or security reminders e.t.c.",
    "We have established special management systems, operating procedures and organisations to ensure the security of information. For example, we strictly limit the scope of people who have access to information, require them to comply with confidentiality obligations, and conduct audits. In addition, PEAKPAY will set up an independent body mainly composed of external members to supervise the protection of our personal information.",
    "In the event of security incidents such as personal information leakage, we will initiate emergency plans and remedial measures to prevent the expansion of security incidents, and perform relevant reporting and notification obligations in accordance with the law.",
    "We will do our best to protect your personal information. We also ask you to understand that no security measure can be flawless.",
  ],
};

export const InfoSharing: InfoSharingProps = {
  id: "information-sharing",
  title: "Information Sharing",
  mainContent:
    "We do not share information that could be used to personally identify you with our partners unless you expressly authorise it.",
};

export const Cookies: CookiesProps = {
  id:"how-we-use-cookies-and-similar-technologies",
  title: "How We Use Cookies and Similar Technologies",
  listContent: [
    {
      id: "what-are-cookies",
      numbering: "5.1",
      title: "What are cookies?",
      content:
        "A cookie is a small file transmitted by our website, application or service and stored on your device. Our website, online services, interactive applications, emails and advertisements may use cookies and other similar technologies such as pixel tags and web beacons. Cookies may be stored on your computer for a short period of time (such as only when your browser is open) or for a long period of time, even years. We cannot access cookies not set by us.",
    },
    {
      id: "cookies-and-similar-technologies-we-use",
      numbering: "5.2",
      title: "Cookies and Similar Technologies We Use",
      content:
        "We and our partners use cookies or similar tracking technologies to better understand the usage of mobile software on your device, to understand the frequency of your use of the app, events that occur within the app, cumulative usage, performance data and where to download apps from. We do not link the information stored in the analytics information stored in the analytics software to any personal information you submit in the mobile application. We and our partners use cookies or similar tracking technologies to analyse trends, administer the site, track user behaviour on the site, and collect overall demographic information about our user base.",
    },
  ],
};

export const PrivacyChanges: PrivacyChangesProps = {
    id: "changes-to-this-privacy-policy",
    title: "Changes to this Privacy Policy",
    listContent:[
        "PEAKPAY reserves the right to change, modify, add or delete portions of this Privacy Policy at any time and for any reason. Any revisions will be updated on our website. Unless otherwise stated, these changes will be effective immediately upon posting. We encourage you to periodically review this page for the latest information on our privacy practices. Continuing to use and access our services means you accept the revisions to the Privacy Policy.",
        "Users may choose to edit/modify or delete/delete any personal information shared for platform use. Please be aware that deleting or deactivating information may affect our service to you. If personal information changes, users will be required to provide supporting documentation related to the change to verify our information.",
        "If you do not agree to the above personal information protection policy, we will not be able to collect and use the information necessary to provide services, so therefore, we cannot provide you with normal services."
    ]
}

export const ContactUs: ContactUsProps = {
    id:"contact-us",
    title: "Contact Us",
    listContent:[
        "If you do not agree to the above personal information protection policy, we will not be able to collect and use the information necessary to provide services, so therefore, we cannot provide you with normal services.",
        "Our contact details are as follows: please contact us at https://www.peakpay.ng, you can also send your feedback or questions to Email: help@peakpay.ng."
    ]
}

export const Permission: PermissionProps = {
  id: "permissions",
  title: "Permissions",
  mainContent:
    "To assess your eligibility and facilitate faster disbursal of your loan, we need these permissions.",
  list: [
    {
      title: "Contact List:",
      content:
        "Monitoring and collection content: We collect and monitor your contact list, which includes name, phone number, account type, recently modified contact information, favourites and other optional data (such as relationship and structural address). Purpose: We collect your contact information to detect close contacts so that you can automatically fill in the data during the loan application process. This information is necessary for risk analysis, allowing us to test reliable reference materials to assess your risk profile and determine your loan eligibility.",
    },
    {
      title: "Location",
      content:
        "We collect location information from our device to reduce the risk associated with your account.",
    },
    {
      title: "Storage",
      content:
        " We require the storage information permission that allows the App to enable you to upload photos and/or documents to complete the application form during your loan application journey.",
    },
  ],
};
