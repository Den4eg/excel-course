import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    })
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizeble"]');
      const $index = $parent.data.col
      const coords = $parent.getCoords();
      document.onmousemove = e => {
        const delta = e.pageX - coords.right
        const value = coords.width + delta
        $parent.$el.style.width = value + 'px'
        this.$root.findAll(`[data-col="${$index}"]`)
            .forEach(element => {
              element.style.width = value + 'px'
            })
      }
    }
    document.onmouseup = () => {
      document.onmousemove = null
    }
  }


  toHTML() {
    return createTable(10);
  }
}
