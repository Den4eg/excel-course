const CODES = {
  A: 65,
  Z: 90
}


function createCell(_, index) {
  return `
        <div class="cell" contenteditable data-col="${index}"></div>
    `
}

function toColumn(col, index) {
  const resize = col
  ? `<div data-resize="col" class="col-resize"></div>`
  : ''
  return `
  <div data-type="resizeble"  data-col="${index}" class="column">
    ${col}
    ${resize}
  </div>
`
}


function createRow(content, index = '') {
  const resize = index ? '<div data-resize="row" class="row-resize"></div>' : ''
  return `
  <div class="row">
    <div class="row-info">
        ${index ? index : ''}
        ${resize}
    </div>
    <div class="row-data">
      ${content}
      
     </div>
</div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 25) {
  const colsCount = CODES.Z - CODES.A
  const rows = []
  const cols = new Array(colsCount + 1)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  const cells = new Array(colsCount + 1)
      .fill('')
      .map(createCell)
      .join('')

  rows.push(createRow(cols))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(cells, i + 1))
  }

  return rows.join('')
}
