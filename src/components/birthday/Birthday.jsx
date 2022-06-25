import React from 'react'
import data from '../data/data'
import { useState } from 'react'

function Birthday() {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    setPeople(() => people.filter((person) => person.id !== id))
  }
  return (
    <div className='conteudo'>
      <h1 className='conteudo__titulo'>It's their birthday!</h1>
      {people.map(({ ...person }) => {
        return (
          <section className='conteudo__section' key={person.id}>
            <img src={person.img} alt='perfil' className='conteudo__img' />
            <div className='conteudo__descricao'>
              <h1>{person.nome}</h1>
              <h2>fazendo {person.idade} anos</h2>
            </div>
            <span
              onClick={() => removeItem(person.id)}
              className='material-symbols-outlined'
            >
              delete
            </span>
          </section>
        )
      })}
    </div>
  )
}

export default Birthday
