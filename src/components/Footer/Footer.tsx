import React from 'react';
import './Footer.css';


const footerWrapperStyle: React.CSSProperties = { maxWidth: "1200px" };
const prefixTextStyle: React.CSSProperties = { opacity: 0.75 };

const Footer = () => {
    
    return (
        <div className="footer-sticky bg-black">
            <div className="container">
                <div className="footer-wrapper pt-4">
                    <div className="footer-brand w-block">
                        <div>
                            <a
                                className="brand w-nav-brand w--current "
                                href="/"
                            >
                                <div className="d-none d-md-block">
                                    <div className="text-white h3 mb-0">
                                        intract.
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="footer-paragraph-holder">
                            <p>
                                We are your personal guide for exploring web3
                                projects &amp; earning 100x rewards
                            </p>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="footer-block">
                            <div className="title-small">Intract</div>
                            <a className="footer-link " href="/quests">
                                Explore Quests
                            </a>
                            <a className="footer-link " href="/communities">
                                Comunities
                            </a>
                            <a className="footer-link " href="/alpha-hub">
                                Alpha Hub
                            </a>
                        </div>
                        <div className="footer-block">
                            <div className="title-small">Earn</div>
                            <a className="footer-link " href="/referral">
                                Refer &amp; Earn
                            </a>
                            <a className="footer-link " href="/leaderboard">
                                Leaderboard
                            </a>
                            <a className="footer-link " href="/achievements">
                                Achievements
                            </a>
                        </div>
                        <div className="footer-block">
                            <div className="title-small">About</div>
                            <a
                                href="https://docs.intract.io"
                                target="_blank"
                                className="footer-link "
                            >
                                Product Roadmap
                            </a>
                            <a
                                href="https://docs.intract.io/for-project/affiliate-+-sign-up-usd500-bonus"
                                target="_blank"
                                className="footer-link "
                            >
                                Affiliate Program
                            </a>
                            <a
                                href="https://docs.intract.io/for-business/sign-up-program"
                                target="_blank"
                                className="footer-link "
                            >
                                Sign up Program
                            </a>
                            <a
                                href="https://forms.gle/tdjCuL1HJ1EzhQpq8"
                                target="_blank"
                                className="footer-link "
                            >
                                Growth Community
                            </a>
                            <a className="footer-link " href="/blogs">
                                Blogs
                            </a>
                        </div>
                        <div className="footer-block">
                            <div className="title-small">Support</div>
                            <a
                                href="https://intract-io.notion.site/Intract-Quests-Campaigns-FAQ-6ac66e1a71374f0b9d1f90fe92c7928f?pvs=4"
                                target="_blank"
                                className="footer-link "
                            >
                                Help Center
                            </a>
                            <a
                                href="https://app.intract.io"
                                target="_blank"
                                className="footer-link "
                            >
                                Create your quest
                            </a>
                            <a
                                href="https://intract.gitbook.io/website-policies/intract-terms-of-use"
                                target="_blank"
                                className="footer-link "
                            >
                                Terms of Service
                            </a>
                            <a
                                href="https://intract.gitbook.io/website-policies/intract-privacy-policy"
                                target="_blank"
                                className="footer-link "
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="https://intract.gitbook.io/website-policies/intract-community-guidelines"
                                target="_blank"
                                className="footer-link "
                            >
                                Community Guidelines
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-divider">
                    <p style={footerWrapperStyle}>
                        <span className="text-white" style={prefixTextStyle}>
                            Disclaimer:{" "}
                        </span>
                        Crypto Products, Virtual Digital Assets, and NFTs are
                        unregulated and can be highly risky. There may be no
                        regulatory recourse for any loss from such transactions.
                        We advise the viewer to proceed with caution. Nothing in
                        this website or any communication published by us
                        amounts to, is intended to be, or should be construed as
                        investment or purchase advice of any kind or financial
                        advice or promotion under any applicable laws. Any
                        decision made based on the content provided on this
                        website or any communication published by us shall not
                        be attributable to us.
                    </p>
                </div>
                <div className="footer-divider">
                    <div className="footer-copyright-holder">
                        <div className="footer-copyright-center">
                            Created by{" "}
                            <a
                                href="http://business.intract.io/"
                                target="_blank"
                                className="white-link"
                            >
                                Intract
                            </a>
                        </div>
                    </div>
                    <div className="footer-copyright-holder">
                        <div className="footer-copyright-center">
                            <div className="text-center ">
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="bg-dark rounded pointer mx-2 p-2 fs-5">
                                        <i className="bi-twitter text-primary"></i>
                                    </div>
                                    <div className="bg-dark rounded pointer mx-2 p-2 fs-5">
                                        <i className="bi-discord text-info"></i>
                                    </div>
                                    <div className="bg-dark rounded pointer mx-2 p-2 fs-5">
                                        <i className="bi-telegram text-primary"></i>
                                    </div>
                                    <div className="bg-dark rounded pointer mx-2 p-2 fs-5">
                                        <i className="bi-spotify text-success"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer;