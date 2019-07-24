import React, { ReactElement } from 'react'

function Form(): ReactElement {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <label htmlFor="email">E-Mail:</label>
      <input type="text" id="email" />
      <label htmlFor="role">Role:</label>
      <input type="text" id="role" />
    </form>
  )
}

export default Form
