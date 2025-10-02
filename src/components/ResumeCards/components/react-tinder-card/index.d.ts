import React from 'react'

export type Direction = 'left' | 'right' | 'up' | 'down'

export type SwipeHandler = (direction: Direction) => void
export type CardLeftScreenHandler = (direction: Direction) => void
export type SwipeRequirementFufillUpdate = (direction: Direction) => void
export type SwipeRequirementUnfufillUpdate = () => void


export interface API {
  swipe(dir?: Direction): Promise<void>
  restoreCard(): Promise<void>
}

export interface Props {
  ref?: React.Ref<API>
  flickOnSwipe?: boolean
  onSwipe?: SwipeHandler
  onCardLeftScreen?: CardLeftScreenHandler
  preventSwipe?: string[]
  swipeRequirementType?: 'velocity' | 'position'
  swipeThreshold?: number
  onSwipeRequirementFulfilled?: SwipeRequirementFufillUpdate
  onSwipeRequirementUnfulfilled?: SwipeRequirementUnfufillUpdate
  className?: string
  children?: React.ReactNode
}

declare const TinderCard: React.FC<Props>

export default TinderCard
