import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  DYNAMIC_DATA_GENERATION,
  RECURSIVE_DATA_GENERATION,
} from '../../constants'
import { IRecursiveData } from '../../interfaces'
import { TSoursData } from '../../types'
import { addNewChildren } from '../utils'
import './styles.css'

export type TCountryContext = {
  visibleContext: boolean
  setVisibleContext: (v: boolean) => void
}
export const CountryContext = createContext<TCountryContext>({
  visibleContext: true,
  setVisibleContext: () => null,
})

export type CountriesItemProps = {
  data: IRecursiveData
  soursData: TSoursData
  ni: number
  m: number
}
export const CountriesItem: React.FC<CountriesItemProps> = ({
  data,
  soursData,
  ni,
  m,
}) => {
  const [visibleState, setVisibleState] = useState(false)
  const { visibleContext, setVisibleContext } = useContext(CountryContext)
  const dataNew = { ...data }
  useEffect(() => {
    if (!visibleContext) {
      setVisibleState(false)
      setVisibleContext(true)
    }
  }, [setVisibleContext, visibleContext])

  const lastChildren =
    soursData === DYNAMIC_DATA_GENERATION ||
    soursData === RECURSIVE_DATA_GENERATION
      ? ni === 0
      : !data.children || data.children?.length === 0

  return (
    <div className="countries-container">
      <div
        className={`countries-item ${lastChildren ? 'last-children' : ''}`}
        onClick={() => {
          if (soursData === DYNAMIC_DATA_GENERATION && ni > 0)
            dataNew.children = addNewChildren(
              ni,
              m,
              dataNew.children as IRecursiveData[]
            )
          else if (soursData === DYNAMIC_DATA_GENERATION)
            dataNew.children = addNewChildren(
              ni,
              m,
              dataNew.children as IRecursiveData[]
            )

          setVisibleContext(!lastChildren)
          setVisibleState(!visibleState)
        }}
      >
        {data.name}
      </div>
      {data.children?.map((item) => {
        if (!visibleState) return <></>
        return (
          <CountriesItem
            key={item.name}
            data={item}
            soursData={soursData}
            ni={ni - 1}
            m={m}
          />
        )
      })}
    </div>
  )
}
