import * as React from 'react'
import Site from './Site'

export interface HelloProps {
  compiler: string
  framework: string
}

const Hello = (props: HelloProps) => (
  <div>
    <h1>
      Hello from {props.compiler} and {props.framework}!
    </h1>
    <Site />
  </div>
)

export default Hello
