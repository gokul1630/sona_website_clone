import React from 'react'

function ContactModel(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.contact}</td>
    </tr>
  )
}

export default ContactModel
