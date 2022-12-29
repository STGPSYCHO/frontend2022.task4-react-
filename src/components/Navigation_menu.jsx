import  {Navigation_list}  from '../components/Navigation_list'
import logo from "../assets/images/logo.png"

export function Navigation_menu(props) {
    return (
    <div className='navigation__menu'>
        <img src={logo} className="navigation__img" alt="Иконка ИКИТ"/>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
        </label> 
        <Navigation_list/>
    </div>
    )
  }