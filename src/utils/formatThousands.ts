export const formatThousands = (numberToFormat: string) =>
  numberToFormat.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1 `)
