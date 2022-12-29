import {Usefull_info} from '../components/Usefull_info'
export function Page_main(props) {
    return(  
    <div className='page__main container'>
        <h1 className="page__title">Личная страница</h1>
        <h2 className="page__subtitle">Полезная информация</h2>
        <Usefull_info/>
    </div>
  )  
  }