import  {NavigationItem}  from './NavigationItem'

export function NavigationList(props) {
    return (
    <div className='navigation__list'>
      <NavigationItem name="Главная" class="navigation__item--active"/> 
      <NavigationItem name="Информация" class="navigation__item"/> 
      <NavigationItem name="Новости" class="navigation__item"/> 
      <NavigationItem name="Контакты" class="navigation__item"/> 
    </div>
    )
  }