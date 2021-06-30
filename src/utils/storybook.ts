export const mapEnumKeys = (elEnum: Record<string, unknown>, trim: number): Record<string, unknown> => {
  let arr = Object.keys(elEnum)

  if (Math.abs(trim) !== 0) {
    arr = arr.slice(0, trim)
  }

  return arr.reduce((acc: Record<string, unknown>, member) => {
    acc[member] = member
    return acc
  }, {})
}
