import {UsefullInfoLeftList} from './UsefullInfoLeftList'
import {useState, useMemo, useEffect, useRef} from 'react'

export function UsefullInfoLeft() {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState("")
    const inp = useRef()

    useEffect(()=>{
        async function getUsers (){
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const users_json = await response.json()
            setUsers(users_json)
        }        
        getUsers()
    },[])

    function btnClickHandler(){
        setQuery(inp.current.value)
    }

    const searchedUsers = useMemo(() => {
        return [...users].filter(user => user.name.includes(query))
        }, [query, users])

    return(  
    <article className="usefull-info-left">
        <div className="usefull-info-left__search">
            <div className="usefull-info-left__text">
                <input ref={inp} id="film-name-text" type="text" />
            </div>
            <div className="usefull-info-left__button">
                <button onClick={btnClickHandler} id="film-name-button" >Поиск</button>
            </div>
        </div>
        <h2 className="usefull-info-left__title">Пользователи</h2>
        <UsefullInfoLeftList users = {searchedUsers}/>
    </article>
  ) 
  }
