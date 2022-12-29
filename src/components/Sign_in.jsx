import sign_in from "../assets/images/sign-in.png"

export function Sign_in(props) {
    return(  
        <div className="navigation__user sign-in-button">
            <a className="sign-in-button__item-name" href="#">Ваше имя</a>
            <a className="sign-in-button__item" href="#">
                <div className="sign-in-button__circle">
                    <img className="sign-in-button__img" src={sign_in} alt="Иконка человека"/>
                </div>  
            </a>
        </div>
      ) 
  }