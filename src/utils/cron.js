const regex = /^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g
const constraints = [[1, 31], [1, 12], [0, 6]]
class Schedule {
  constructor(fields, start, end) {
    /* @type {Array} */
    this._dates = fields[0]
    /* @type {Array} */
    this._months = fields[1]
    /* @type {Array} */
    this._days = fields[2]
    /* @type {Date} */
    this._start = start
    /* @type {Date} */
    this._end = end
    /* @type {Date} */
    this._pointer = start
  }
  _findNext() {
    let next
    while (true) {
      if (this._end.getTime() - this._pointer.getTime() < 0) {
        throw Error(`out of range, end is ${this._end}, current is ${this._pointer}`)
      }
      const month = this._pointer.getMonth()
      const date = this._pointer.getDate()
      const day = this._pointer.getDay()
      if (this._months.indexOf(month + 1) === -1) {
        this._pointer.setMonth(month + 1)
        this._pointer.setDate(1)
        continue
      }
      if (this._dates.indexOf(date) === -1) {
        this._pointer.setDate(date + 1)
        continue
      }
      if (this._days.indexOf(day) === -1) {
        this._pointer.setDate(date + 1)
        continue
      }
      next = new Date(this._pointer)
      break
    }
    return next
  }
  next() {
    let value = this._findNext()
    this._pointer.setDate(this._pointer.getDate() + 1)
    return {
      value: value,
      done: !this.hasNext()
    }
  }
  hasNext() {
    try {
      this._findNext()
      return true
    } catch (error) {
      return false
    }
  }
}
function parseField(field, constraints) {
  const low = constraints[0]
  const high = constraints[1]
  let result = []
  let pointer
  field = field.replace(/\*/g, low + '-' + high)
  if (field.match(regex)) {
    field.replace(regex, function($0, lower, upper, step) {
      step = parseInt(step) || 1
      lower = Math.max(lower, low)
      upper = Math.min(upper, high)
      pointer = lower
      do {
        result.push(pointer)
        pointer += step
      } while (pointer <= upper)
    })
  }
  return result
}
function parse(expr, start, end) {
  const atoms = expr.replace(/^\s\s*|\s\s*$/g, '').split(/\s+/)
  const fields = []
  atoms.forEach((atom, index) => {
    const constraint = constraints[index]
    fields.push(parseField(atom, constraint))
  })
  return new Schedule(fields, start, end)
}
export default {
  parse
}