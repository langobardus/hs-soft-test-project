import React from 'react'
import { GenerateDataButton } from '../GenerateDataButton'
import './styles.css'

export type DynamicDataInfoProps = {
  n: number
  setN: (n: number) => void
  m: number
  setM: (m: number) => void
}
export const DynamicDataInfo: React.FC<DynamicDataInfoProps> = ({
  n,
  setN,
  m,
  setM,
}) => {
  return (
    <>
      <div
        className="alert alert-success d-flex align-items-center"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <div>
          In this approach, the data object for the React component is
          dynamically created in chunks.
          <br />
          This approach is suitable for any values of n (depth of the object
          tree) and m (number of children in each node of object)
        </div>
      </div>
      <div className="dynamic-data-info-listing">
        <img src="./img/listing2.png" alt="" />
      </div>
      <GenerateDataButton n={n} setN={setN} m={m} setM={setM} />
    </>
  )
}
