export function GetZPercent(z) {
  if (z < -6.5) {
    return 0.0
  }

  if (z > 6.5) {
    return 1.0
  }

  let factK = 1
  let sum = 0
  let term = 1
  let k = 0
  const loopStop = Math.exp(-23)

  while (Math.abs(term) > loopStop) {
    term =
      (((0.3989422804 * Math.pow(-1, k) * Math.pow(z, k)) / (2 * k + 1) / Math.pow(2, k)) * Math.pow(z, k + 1)) / factK
    sum += term
    k++
    factK *= k
  }

  sum += 0.5

  return sum
}
