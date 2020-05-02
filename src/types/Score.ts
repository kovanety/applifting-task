interface Score {
  order: number
  team: string
  clicks: number
  isCurrent?: boolean
}

export type Scores = Array<Score>
