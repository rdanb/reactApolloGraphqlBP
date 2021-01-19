module.exports = {
  ['person']: input => ({
    val1: input.toString(),
    val2: (input * input).toString(),
  }),

  ['facility']: input => ({
    val3: (input * 55).toString(),
    val4: (input + 100).toString(),
  }),

  ['exposure']: input => ({
    val5: parseFloat(input
      .toString()
      .split('')
      .reverse() // @R mby install TS. ai niste functii aici
      .join('') // @R mby unit tests
    ).toString()
    .replace(/^/, input < 0 ? '-' : '')
  })
}
