import React, { useState } from 'react'




function Bform(props) {
    const [text, setText] = useState("")
    function capitalizeWord(word) {
        if (word.length === 0) {
            return word;
        } else {
            const capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
            return capitalizedWord;
        }
      }
      
      function capitalizeSentence(sentence) {
        const words = sentence.split(" ");
      
        const capitalizedWords = words.map(word => capitalizeWord(word));
        console.log(capitalizedWords)
        const capitalizedSentence = capitalizedWords.join(" ");
        return capitalizedSentence;
      }

   let handleCpChange=()=>{

    let newText=capitalizeSentence(text)
   
    setText(newText)
    }
    let handleUpChange=()=>{

        let newText= text.toUpperCase()
       
        setText(newText)
        }

        let handleLoChange=()=>{

            let newText= text.toLowerCase()
           
            setText(newText)
            }

let handleChangeClick=(event)=>{
   
    setText(event.target.value)
}

    return (
        <div>

            <div style={{ padding: 100 }}>
                <label><h2 htmlFor='floatingTextarea2'>{props.heading}</h2></label>
                <div className="form-floating">
                    <textarea className="form-control" value={text} onChange={handleChangeClick} id="floatingTextarea2" style={{ height: 150 }}/>
                </div>
                <div className='display flex '>
       <button className="btn btn-primary m-1"  onClick={handleCpChange}  type="submit">Capitalize</button>
       <button className="btn btn-secondary m-1"  onClick={handleUpChange}  type="submit">UpperCase</button>
       <button className="btn btn-info m-1"  onClick={handleLoChange}  type="submit">LowerCase</button>
            </div>
            </div>

        </div>
    )
}

export default Bform