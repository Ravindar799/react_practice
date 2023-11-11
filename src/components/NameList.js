import React from 'react'
import ParentLIst from './ParentList'
import ParentList from './ParentList'

function NameList() {
  const names = ['ravidnar', 'rahul','pooja']
  const persons = [
    {
    id:1,
    name:'ravidnar',
    age:30,
    skill:'React',
  }, {
    id:2,
    name:'rahul',
    age:30,
    skill:'dsa',
  }, {
    id:3,
    name:'pooja',
    age:30,
    skill:'html',
  },
 ]
//  const personList = persons.map( person => <ParentList key = {person.id} ParentList = {persons}/>)
const nameList = names.map((name,index) => <h2 key = {index}>{index} {name}</h2>)
  return (
    <div >
      {nameList}
    </div>
  )
}

export default NameList
