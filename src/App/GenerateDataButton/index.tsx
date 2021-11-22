import React from 'react'

export type GenerateDataButtonProps = {
  n: number
  setN: (n: number) => void
  m: number
  setM: (m: number) => void
}
export const GenerateDataButton: React.FC<GenerateDataButtonProps> = ({
  n,
  setN,
  m,
  setM,
}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">n = </span>
      <input
        type="text"
        className="form-control"
        placeholder="n - depth of JSON tree"
        aria-label="n - depth of JSON tree"
        value={n}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setN(+e.currentTarget.value)
        }
      />
      <span className="input-group-text">m = </span>
      <input
        type="text"
        className="form-control"
        placeholder="m - number of children"
        aria-label="m - number of children"
        value={m}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setM(+e.currentTarget.value)
        }
      />
    </div>
  )
}
