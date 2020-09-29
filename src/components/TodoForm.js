import React, {useState, useEffect, useRef } from 'react'

function TodoForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '')
const [isButtonDisabled, setButtonState] = useState(true)

const inputRef = useRef(null)

useEffect( () => {
  inputRef.current.focus()
})

const handleChange = e =>{
  setInput(e.target.value)
  setButtonState(e.target.value.length < 3 )
}

const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
    id: Math.floor(Math.random() * 10000),
     text: input
    })

    setInput('');
    setButtonState(true);
};
console.log(isButtonDisabled)
    return (
      <form className="formulario" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
          <input
          type='text'
          placeholder='Altere sua lista'
          value={input} 
          name='text'
          className='linha-formulario-editado'
          onChange={handleChange}
          ref={inputRef}
          />
       <button className='botao-editando'> Atualizar</button> 
          </>
          ) :  (
            <>
        <input
        type='text'
        placeholder='Adicione aqui a sua lista'
        value={input} 
        name='text'
        className='inserir-tarefa'
        onChange={handleChange}
        ref={inputRef}
        />
     <button 
       className='botao-tarefa' 
       disabled={isButtonDisabled}
       > Adc Tarefa
       
       </button>
          </> 
      ) } 
    </form>
    );
}

export default TodoForm
