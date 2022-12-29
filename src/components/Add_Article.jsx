import { useState } from "react"

export function Add_Article({create}) {

    const [post, setPost] = useState({title: '', text: '',imgsrc:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', text: '',imgsrc:''})
        resetButton()
    }

    function cancelCreatePost(e){
        e.preventDefault()
        setPost({title: '', text: '',imgsrc:''})
        resetButton()
    }
    function addButtonHandler(){
        if(addButton){
            setAddButton(false)
        }
    }
    function resetButton(){
        if(!addButton){
            setAddButton(true)
        }
    }
    const [addButton, setAddButton] = useState(true)
    return (
        <div className="article-add" >
        <div className="article-add__button" style={addButton ? {} : {display:'none'}}>
            <button className="article-add__button-add" id="article-add__button" 
             onClick={addButtonHandler}>Добавить</button>
        </div>
        <form className="article-add__form form" style={addButton? {display:'none'} : {display:'flex'}} >
            <div className="form__inputs">
                <label for="article-text__name" >Название статьи</label>
                <input  value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" className="article-text-name" id="article-text-name"/>
                <label for="article-text__url" >Ссылка на картинку</label>
                <input  value={post.imgsrc} onChange={e => setPost({...post, imgsrc: e.target.value})} type="text" className="article-text-url" id="article-text-url"/>
                <label for="article-text-description" >Описание</label>
                <textarea value={post.text} onChange={e => setPost({...post, text: e.target.value})} className="article-text__description" id="article-text-description"></textarea>
                <div className="form__buttons">
                    <button onClick={cancelCreatePost} className="article-add__button-cancel" id="article-add__button-cancel">Отмена</button>
                    <button onClick={addNewPost} className="article-add__button-create" id="article-add__button-create">Создать</button>
                </div>
            </div>
        </form>
    </div>
    )
  }
