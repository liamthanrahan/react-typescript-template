import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Button from 'react-bootstrap/Button'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 20px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`
const CountDisplay = styled.div`
  display: inline-block;
  margin-left: 10px;
  user-select: none;
`

const Input = styled.input`
  margin-right: 5px;
`

function Home() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('Test Text')
  const [savedText, setSavedText] = useState('')
  return (
    <Container>
      <Section>
        <Title>Home</Title>
      </Section>
      <Section>
        <Row>
          <Button onClick={() => setCount(count + 1)}>
            <FaPlus />
          </Button>
          <CountDisplay>
            Count:
            {count}
          </CountDisplay>
        </Row>
      </Section>
      <Section>
        <Row>
          Text Value:
          {savedText}
        </Row>
        <Row>
          <Input value={text} onChange={evt => setText(evt.target.value)} />
          <Button onClick={() => setSavedText(text)}>Submit</Button>
        </Row>
      </Section>
    </Container>
  )
}

export default Home
