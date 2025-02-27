import { ethers } from 'ethers'

interface StateRootBatchHeader {
  batchIndex: ethers.BigNumber
  batchRoot: string
  batchSize: ethers.BigNumber
  prevTotalElements: ethers.BigNumber
  extraData: string
}

export interface StateBatchHeader {
  batch: StateRootBatchHeader
  stateRoots: string[]
}
