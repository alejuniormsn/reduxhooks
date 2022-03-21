import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function addCourseActionCreator(title) {
  return { type: 'ADD_COURSE', payload: { title: title } }
}

export default function CoursesList() {
  const qty = 8 // quantidade de itens a ser exibida na lista
  const courses = useSelector(state => state.data.slice(0, qty))
  const dispatch = useDispatch()

  function addCourse() {
    dispatch(addCourseActionCreator('Novo Curso'))
  }

  return (
    <>
      <ul>
        {courses.map(course => <li key={course}>{course}</li>)}
      </ul>
      <button type="button" onClick={addCourse}>Adicionar Curso</button>
    </>
  )
}
