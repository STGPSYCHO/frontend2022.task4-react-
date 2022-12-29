import {Usefull_info_left_item} from '../components/Usefull_info_left_item'
export function Usefull_info_left_list({users}) {

    if (!users.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Пользователи не найдены!
            </h1>
        )
    }
    return (
        <ul className='usefull-info-left__list'>
                {users.map((post) =>
                <Usefull_info_left_item key={post.id} name={post.name}/>
                )}
        </ul>
    );
  }
