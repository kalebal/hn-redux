import React from 'react'

export default function ResultItem({ data }) {
  // Eventual ToDos:
  // li's link to article
  // clicking on title expands to show more info

  console.log(data);
  return (
    <li key={data.objectID}>
      <a href={data.url}>{data.title}</a>
      <p> by: {data.author} </p>
    </li>
  )
}
// todo: prop validation -- define shape
