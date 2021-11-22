import React from 'react'
import {
  EXTERNAL_DATA,
  DYNAMIC_DATA_GENERATION,
  RECURSIVE_DATA_GENERATION,
  STATIC_DATA,
} from '../../constants'
import { TSoursData } from '../../types'
import './styles.css'

export type SoursDataButtonProps = {
  soursData: TSoursData
  setSoursData: (soursData: TSoursData) => void
}
export const SoursDataButton: React.FC<SoursDataButtonProps> = ({
  soursData,
  setSoursData,
}) => {
  return (
    <div className="sours-data-button form-check">
      <input
        type="radio"
        className="btn-check"
        name="sours-data"
        id="static-data"
        autoComplete="off"
        checked={soursData === STATIC_DATA}
        onChange={() => setSoursData(STATIC_DATA)}
      />
      <label className="btn btn-outline-primary" htmlFor="static-data">
        Static data
      </label>
      {` `}
      <input
        type="radio"
        className="btn-check"
        name="sours-data"
        id="recursive-data-generation"
        autoComplete="off"
        checked={soursData === RECURSIVE_DATA_GENERATION}
        onChange={() => setSoursData(RECURSIVE_DATA_GENERATION)}
      />
      <label
        className="btn btn-outline-warning"
        htmlFor="recursive-data-generation"
      >
        Recursively generated data
      </label>
      {` `}
      <input
        type="radio"
        className="btn-check"
        name="sours-data"
        id="dynamic-data-generation"
        autoComplete="off"
        checked={soursData === DYNAMIC_DATA_GENERATION}
        onChange={() => setSoursData(DYNAMIC_DATA_GENERATION)}
      />
      <label
        className="btn btn-outline-primary"
        htmlFor="dynamic-data-generation"
      >
        Dynamically generated data
      </label>
      {` `}
      <input
        type="radio"
        className="btn-check"
        name="sours-data"
        id="external-data"
        autoComplete="off"
        checked={soursData === EXTERNAL_DATA}
        onChange={() => setSoursData(EXTERNAL_DATA)}
      />
      <label className="btn btn-outline-primary" htmlFor="external-data">
        External data
      </label>
    </div>
  )
}
