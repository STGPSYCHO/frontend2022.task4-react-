import {Usefull_info_right_textblock} from '../components/Usefull_info_right_textblock'
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
export function Usefull_info_right(props) {
    return(  
    <article className="usefull-info-right">
        <h2 className="usefull-info-right__title">СФУ и Россий­ский универ­ситет спорта стали парт­нёрами</h2>
        <Usefull_info_right_textblock h='Заголовок' p ={text}/> 
        <Usefull_info_right_textblock h='Заголовок' p ={text}/> 
    </article>
  )  
  }

