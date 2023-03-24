export interface perkContentInterface {
    perkImage: string;
    perkTitle: string;
    perkText: string;
}

export const PerkContent: perkContentInterface[] = [
    {
        perkImage: '/assets/images/home/aboutImage1.png',
        perkTitle: 'Apply',
        perkText: "Easily and quickly apply for loan with our hassle-free process created to get you that loan."
    },
    {
        perkImage: '/assets/images/home/aboutImage2.png',
        perkTitle: 'Borrow',
        perkText: "Borrow up to ₦500,000 with low interest as a new user and upgrade as you go with PeakPay."
    },
    {
        perkImage: '/assets/images/home/aboutImage3.png',
        perkTitle: 'Repay',
        perkText: "Repaying a loan has never been this seamless! Enjoy flexible repayment periods and plans."
    }
]