import {UsefullInfo} from '../usefullInfo/UsefullInfo'
export function PageMain(props) {
    return(  
    <div className='page__main container'>
        <h1 className="page__title">Личная страница</h1>
        <h2 className="page__subtitle">Полезная информация</h2>
        <UsefullInfo/>
    </div>
  )  
  }