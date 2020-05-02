export const formatThousands = (numberToFormat: number) =>
  numberToFormat.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1 `)
