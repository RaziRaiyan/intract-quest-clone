import style from './Navbar.module.css';
import utilityStyle from "@/styles/utilies.module.css";

// logo
import logo from '../../logo/intract.svg';

const Navbar = () => {

    return (
        <header className={style.navbar_container}>
            <div className={utilityStyle._maxWidthSectionConainer}>
                <div className={style.navbar_content_section}>
                    <a aria-current="page" aria-label="home" href="/">
                        <img
                            src={logo}
                            alt="intract logo"
                            style={{ flexShrink: 0 }}
                        />
                    </a>

                    <nav
                        id="nav_container"
                        role="navigation"
                        className={style._nav_links}
                    >
                        <div
                            id="nav_2"
                            className={style._nav_link}
                            style={{ display: "inherit" }}
                        >
                            Compass
                            <div
                                className="badge ms-2"
                                style={{background: 'rgb(100, 53, 233)'}}
                            >
                                New
                            </div>
                        </div>

                        <div
                            id="nav_2"
                            className={style._nav_link}
                            style={{ display: "inherit" }}
                        >
                            Explore
                        </div>

                        <div
                            id="nav_2"
                            className={style._nav_link}
                            style={{ display: "inherit" }}
                        >
                            Reward
                        </div>

                        <div
                            id="nav_2"
                            className={style._nav_link}
                            style={{ display: "inherit" }}
                        >
                            NFTs
                        </div>

                        <div
                            id="nav_2"
                            className={style._nav_link}
                            style={{ display: "inherit" }}
                        >
                            For Projects
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;