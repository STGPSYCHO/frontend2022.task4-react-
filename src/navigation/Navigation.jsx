import {NavigationMenu} from './NavigationMenu'
import {SignIn} from '../components/SignIn'

export function Navigation(props) {
  return(  
    <div className='container'>
        <nav className='navigation'>
            <NavigationMenu/>
            <SignIn/>
         </nav>
    </div>
    ) 
}