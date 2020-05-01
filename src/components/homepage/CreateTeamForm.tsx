import React, { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

import { Input } from '../shared/Input'
import { Button } from '../shared/Button'

const Form = styled.form`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-column-gap: 2rem;
  padding: 1rem 1.5rem;
  margin-bottom: 5rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-style: italic;
`

export const CreateTeamForm = () => {
  const [teamName, setTeamName] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value)
  }

  return (
    <Form>
      <div>
        <Label htmlFor="teamName">Enter your name:</Label>
        <Input
          id="teamName"
          value={teamName}
          placeholder="Your mom"
          onChange={(e) => onChange(e)}
        />
      </div>
      <Button onClick={() => {}} isDisabled={!teamName}>
        Click!
      </Button>
    </Form>
  )
}
