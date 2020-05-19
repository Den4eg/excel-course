import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['input', 'click']
    })
  }

  onInput() {
    console.log('Implemented')
  }

  onClick() {
    console.log('Implemented')
  }
  toHTML() {
    return createTable(10)
  }
}