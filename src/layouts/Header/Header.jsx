import './Header.scss'
import classNames from 'classnames'
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";
import {menuItems} from "@/modules/menuItems";

const Header = (props) => {
  const {
    url,
  } = props


  return (
    <header
      className="header" data-js-overlay-menu=""
    >
      <div className="header__inner container">
        <Logo
          loading="eager"
          className="header__logo"
          id='home'
        />
        <dialog
          className="header__overlay-menu-dialog"
          data-js-overlay-menu-dialog=""
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map(({label, href}, index) => (
                <li className="header__menu-item" key={index}>
                  <a
                    className={classNames('header__menu-link', {
                      'is-active': href === url
                    })}
                    href={href}
                  >
                    {label}

                  </a>
                </li>

              ))}
            </ul>
          </nav>
          <div className="header__actions">


            <Button
              className="header__button"
              label="Favorites"
              href="/favorites"
              isLabelHidden
              mode="transparent"
              iconName="heart1"
              hasFillIcon
            />
          </div>
        </dialog>

        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{
            'data-js-overlay-menu-burger-button': '',
          }}
        />
      </div>
    </header>
  )
}

export default Header