import { useState } from "react"

export function FAQQuestion(props) {
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
<dt onClick={stateHandler}className="faq-page__question">{props.title}</dt>
<dd style={state ? {}:{display:"block"}}className="faq-page__answer">{props.answer}</dd>
</>
    )
  }


