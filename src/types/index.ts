import {
  RECURSIVE_DATA_GENERATION,
  DYNAMIC_DATA_GENERATION,
  EXTERNAL_DATA,
  STATIC_DATA,
} from '../constants/index'

export type TSoursData =
  | typeof RECURSIVE_DATA_GENERATION
  | typeof DYNAMIC_DATA_GENERATION
  | typeof STATIC_DATA
  | typeof EXTERNAL_DATA
