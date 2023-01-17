export function Article({gridState, articles}) {
    return (
        <div className={gridState ? "article" : 'article article--list'} >
            {articles.map((article) =>
                <article key={article.id} className={gridState ? "article-content" : 'article-content article-content--list'}>
                    <img className="article__img" src={article.imgsrc} alt={article.alt}/>
                    <div className={gridState ? "article__content" : 'article__content article__content--list'}>
                        <div className="article__wrapper">
                            <h3 className="article__title">{article.title}</h3>
                            <p className="article__text">{article.text}</p>    
                        </div>
                        <footer>
                            <p className="article__date">{article.date}</p>
                        </footer>
                    </div>
                </article>
            )}
        </div>
    )
  }

