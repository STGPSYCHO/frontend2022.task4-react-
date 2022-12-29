import {Navigation_menu} from '../components/Navigation_menu'
import {Sign_in} from '../components/Sign_in'

export function Navigation(props) {
  return(  
    <div className='container'>
        <nav className='navigation'>
            <Navigation_menu/>
            <Sign_in/>
         </nav>
    </div>
    ) 
}