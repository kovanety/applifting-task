import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem auto;
  font-style: italic;
`

const Author = styled.cite`
  display: block;
  width: 100%;
  padding: 1rem 2rem 0 0;
  text-align: right;
`

export const Quote = () => (
  <Container>
    <p>
      <q>It's really simple, you just need to click as fast as you can.</q>
      <Author>- anonymous</Author>
    </p>
  </Container>
)
