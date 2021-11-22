/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import shortid from 'shortid'
import countries from '../data/countries.json'
import { CountriesItem, CountryContext } from './CountriesItem'
import { addNewChildren, generateData } from './utils'
import { TSoursData } from '../types'
import {
  DYNAMIC_DATA_GENERATION,
  EXTERNAL_DATA,
  RECURSIVE_DATA_GENERATION,
  STATIC_DATA,
} from '../constants'
import { GET_EXTERNAL_DATA } from '../query'
import { IRecursiveData } from '../interfaces'
import { SoursDataButton } from './SoursDataButton'
import { RecursiveDataInfo } from './RecursiveDataInfo'
import { DynamicDataInfo } from './DynamicDataInfo'

export const App: React.FC = () => {
  const [visibleContext, setVisibleContext] = useState(true)
  const [soursData, setSoursData] = useState(STATIC_DATA as TSoursData)
  const [n, setN] = useState(5)
  const [m, setM] = useState(4)
  const changeSoursData = (newSoursData: TSoursData) => {
    setN(5)
    setM(4)
    setSoursData(newSoursData)
  }

  const { loading, error, data } = useQuery(GET_EXTERNAL_DATA)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const externalData = data.data as IRecursiveData[]

  let dataNew
  switch (soursData) {
    case RECURSIVE_DATA_GENERATION:
      dataNew = generateData(n, m)
      break
    case DYNAMIC_DATA_GENERATION:
      dataNew = [] as IRecursiveData[]
      dataNew = addNewChildren(n, m, dataNew)
      break
    case STATIC_DATA:
      dataNew = countries.data
      break
    case EXTERNAL_DATA:
    default:
      dataNew = externalData
  }

  return (
    <div className="App container">
      <SoursDataButton soursData={soursData} setSoursData={changeSoursData} />
      {soursData === RECURSIVE_DATA_GENERATION && (
        <RecursiveDataInfo n={n} setN={setN} m={m} setM={setM} />
      )}
      {soursData === DYNAMIC_DATA_GENERATION && (
        <DynamicDataInfo n={n} setN={setN} m={m} setM={setM} />
      )}
      <CountryContext.Provider value={{ visibleContext, setVisibleContext }}>
        {dataNew?.map((item) => (
          <CountriesItem
            key={shortid.generate()}
            data={item}
            soursData={soursData}
            ni={n - 1}
            m={m}
          />
        ))}
      </CountryContext.Provider>
    </div>
  )
}
