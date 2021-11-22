import { IRecursiveData } from '../interfaces'

export const generateData = (n: number, m: number): IRecursiveData[] => {
  const generateDataItem = []
  for (let i = 0; i < m; i += 1) {
    if (n === 0) return generateDataItem
    generateDataItem[i] = {
      name: `item: ${i + 1} - ${n}`,
      children: generateData(n - 1, m),
    }
  }
  return generateDataItem
}

export const addNewChildren = (
  ni: number,
  m: number,
  itemData: IRecursiveData[]
): IRecursiveData[] => {
  const generateDataItem = itemData
  for (let i = 0; i < m; i += 1) {
    generateDataItem[i] = {
      name: `item: ${i + 1} - ${ni}`,
      children: [],
    }
  }
  return generateDataItem
}
