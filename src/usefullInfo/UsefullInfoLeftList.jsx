import {UsefullInfoLeftItem} from './UsefullInfoLeftItem'
export function UsefullInfoLeftList({users}) {

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
                <UsefullInfoLeftItem key={post.id} name={post.name}/>
                )}
        </ul>
    );
  }
