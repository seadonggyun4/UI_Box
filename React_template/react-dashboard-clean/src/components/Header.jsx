//images
import logo from '../img/logo.svg'
import logoTitle from '../img/logo-title.svg'

export default function Header(){
    return(
        // <!-- ==================== [ header ]  ==================== -->
        <header className="header">
            <div className="header-content responsive-wrapper">
                {/* <!-- logo --> */}
                <div className="header-logo">
                    <a href="#1">
                        <div>
                            <img src={logo} alt="logo"/>
                        </div>
                        <img src={logoTitle} alt="logo-title"/>
                    </a>
                </div>
                {/* <!-- navigation --> */}
                <div className="header-navigation">
                    <nav className="header-navigation-links">
                        <a className='links-item' href="#1"> Home </a>
                        <a className='links-item' href="#2"> Dashboard </a>
                        <a className='links-item' href="#3"> 프로젝트 </a>
                        <a className='links-item' href="#4"> 엔터프라이즈 </a>
                        <a className='links-item' href="#5"> 리포트 </a>
                        <a className='links-item' href="#6"> 마이메뉴 </a>
                    </nav>
                    <div className="header-navigation-actions">
                        <a href="#1" className="button">
                            <i className="ph-lightning-bold"></i>
                            <span>App Upgrade</span>
                        </a>
                        <a href="#2" className="icon-button">
                            <i className="ph-gear-bold"></i>
                        </a>
                        <a href="#3" className="icon-button">
                            <i className="ph-bell-bold"></i>
                        </a>
                        <a href="#4" className="avatar">
                            <img src="https://uifaces.co/our-content/donated/gPZwCbdS.jpg" alt="" />
                        </a>
                    </div>
                </div>
                {/* <!-- button --> */}
                <a href="#1" className="button">
                    <i className="ph-list-bold"></i>
                    <span>Menu</span>
                </a>
            </div>
        </header>
    )
}