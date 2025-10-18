import './Footer.scss'
import Logo from "@/components/Logo";
import {menuItems} from "@/modules/menuItems";
import Socials from "@/components/Socials";

const Footer = (props) => {
  const {
    className,
  } = props

  const extraLinks = ['Terms of Use', 'Privacy Policy',]
  const socialLinks = [
    {
      label: 'Instagram',
      iconName: 'instagram',
    },
    {
      label: 'Facebook',
      iconName: 'facebook',
    },
    {
      label: 'Youtube',
      iconName: 'youtube',
    },
  ]

  return (
    <footer
      className="footer"
      id='contacts'
    >
      <div className="footer__inner container">
        <div className="footer__menu">
          <div className="footer__menu-info">
            <Logo
              className="footer__logo"
              loading="lazy"
            />
            <p className="footer__gifts">
              Gift & Decoration Store
            </p>
          </div>
          <div className="footer__menu-links">
            {menuItems.map(({label, href}, index) => (
              <a className="footer__menu-link" key={index} href={href}>{label}</a>
            ))}

          </div>
        </div>
        <div className="footer__extra">
          <div className="footer__copyright">
            <p className="footer__copyright-text">
              Copyright © <time dateTime="2025">2025</time>
              CabinetAssembly. All rights reserved
            </p>
            <div className="footer__copyright-links">
              {extraLinks.map((extralink, index) => (
                <a className="footer__copyright-link" href="/" key={index}>
                  {extralink}
                </a>
              ))}
            </div>
          </div>

          <Socials
            className="footer__soc1als" links={socialLinks}
          />

        </div>
      </div>

    </footer>
  )
}

export default Footer