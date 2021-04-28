import React from 'react'

export default function ResultItem({ data }) {
  // Eventual ToDos:
  // clicking on title expands to show more info
  return (
    <li key={data.objectID}>
      <a href={data.url}>{data.title}</a>
      <p> by: {data.author} </p>
    </li>
  )
}
// todo: prop validation -- define shape
