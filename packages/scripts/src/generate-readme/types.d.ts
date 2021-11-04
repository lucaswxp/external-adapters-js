export type AdapterPackage = {
  name: string
  version: string
}

export type AdapterSchema = {
  properties: {
    [key: string]: {
      default?: string | number
      enum?: (string | number)[]
      type?: string
    }
  }
  required: string[]
  type: string
}

export type JsonObject = Record<string, unknown>

export type MaxColChars = number[]

export type TableText = string[][]

export type TextRow = string[]