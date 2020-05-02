import React, { ChangeEvent, useState, FormEvent } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { Input } from '../Input'
import { Button } from '../Button'
import { SCREEN_SIZE } from '../../constants'

const Form = styled.form`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-column-gap: 2rem;
  padding: 1rem 1.5rem;
  margin-bottom: 5rem;

  ${SCREEN_SIZE.BELOW_MOBILE} {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (teamName) {
      navigate(`/${teamName}`)
    }
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <Label htmlFor="teamName">Enter your team name:</Label>
        <Input
          id="teamName"
          value={teamName}
          placeholder="Your mom"
          onChange={(e) => onChange(e)}
        />
      </div>
      <Button isDisabled={!teamName} type="submit">
        Click!
      </Button>
    </Form>
  )
}
