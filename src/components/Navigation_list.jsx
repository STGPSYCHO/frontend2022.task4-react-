import  {Navigation_item}  from '../components/Navigation_item'

export function Navigation_list(props) {
    return (
    <div className='navigation__list'>
      <Navigation_item name="Главная" class="navigation__item--active"/> 
      <Navigation_item name="Информация" class="navigation__item"/> 
      <Navigation_item name="Новости" class="navigation__item"/> 
      <Navigation_item name="Контакты" class="navigation__item"/> 
    </div>
    )
  }