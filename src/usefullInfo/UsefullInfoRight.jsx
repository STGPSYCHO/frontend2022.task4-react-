import {UsefullInfoRightTextblock} from './UsefullInfoRightTextblock'
let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
export function UsefullInfoRight(props) {
    return(  
    <article className="usefull-info-right">
        <h2 className="usefull-info-right__title">СФУ и Россий­ский универ­ситет спорта стали парт­нёрами</h2>
        <UsefullInfoRightTextblock h='Заголовок' p ={text}/> 
        <UsefullInfoRightTextblock h='Заголовок' p ={text}/> 
    </article>
  )  
  }

