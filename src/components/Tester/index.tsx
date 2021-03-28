import React, { useState, useContext, useCallback } from 'react'
import { UserContext } from 'utils/tests/helpers'

const CounterStepContext = React.createContext(1)

type CounterStepPriverProps = {
  step: number
  children: React.ReactNode
}

export default function Tester() {
  const { teste } = useContext(UserContext)

  return <h1>{teste}</h1>
}
