import { isPast, isFuture } from 'date-fns'

export const getStatus = (startDate: Date, endDate: Date): string => {
  if (isPast(endDate)) return 'Past'
  if (isFuture(startDate)) return 'Upcoming'
  if (isPast(startDate) && isFuture(endDate)) return 'Active'
  return ''
}
