// helpers/index.js
export const getPercent = function (currentInvest, goalInvest) {
  return Math.round((currentInvest * 100) / goalInvest)
}
export const getLeftDate = function (date) {
  const DAY = 1000 * 24 * 60 * 60
  const currentDate = new Date()
  const investDate = new Date(date)
  return Math.round(Math.abs(currentDate - investDate) / DAY)
}
