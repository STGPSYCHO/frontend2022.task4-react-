import { useState } from "react"

export function FAQ_question(props) {
    const [state, setState] = useState(true)

    function stateHandler(){
        if(state){
            setState(false)
        }
        else{
            setState(true)
        }
    }

    return (
<>
<dt onClick={stateHandler}className={ state ? "faq-page__question" : "faq-page__question active"}>{props.title}</dt>
<dd style={state ? {}:{display:"block"}}className="faq-page__answer">{props.answer}</dd>
</>
    )
  }


