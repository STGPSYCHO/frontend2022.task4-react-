import {useState} from 'react'
import {FAQ} from '../faq/FAQ'
import {AddArticle} from '../article/AddArticle'
import {Article} from '../article/Article'


const defaultArticles = [{id:1, imgsrc:'./src/assets/images/left.png', alt:"Стол с периферией", 
title:"Boost your conversion rate", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
date:"Mar 16, 2020 · 6 min read"},
{id:2, imgsrc:'./src/assets/images/center.png', alt:"Ноутбук на столе", 
title:"How to use search engine optimization to drive sales", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
date:"Mar 10, 2020 · 4 min read"},
{id:3, imgsrc:'./src/assets/images/right.png', alt:"Imac на столе", 
title:"Improve your customer experience", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
date:"Feb 12, 2020 · 11 min read"}]

export function Posts(props) {


    const [grid, setGridView] = useState(true)
    const [articles, setArticle] = useState(defaultArticles)

    const createPost = (newPost) => {
        setArticle([...articles, newPost])
    }
    function GridViewHandler(){
        setGridView(true)
    }
    function ListViewHandler(){
        setGridView(false)
    }
    return (
        <div className="container">
            <h2 className="page__title-two">Интересные статьи</h2>
            <div className="icons">
                <button className={grid ? "icon__button" : 'icon__button icon__button--active'} id="icon__list-button" onClick={ListViewHandler}>
                    <svg  viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 6H21.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.5 12H21.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.5 18H21.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.5 6H3.51" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.5 12H3.51" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.5 18H3.51" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button className={grid ? "icon__button icon__button--active" : 'icon__button'} id="icon__grid-button" onClick={GridViewHandler}>
                    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 3H3.5V10H10.5V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.5 3H14.5V10H21.5V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.5 14H14.5V21H21.5V14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5 14H3.5V21H10.5V14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>

            <p className="page__subtitle-two">Описать, о чем эти статьи, кратко</p>
            <Article gridState={grid} articles={articles}/>
            <AddArticle create={createPost}/>
            <FAQ/>
        </div>

    )
  }


