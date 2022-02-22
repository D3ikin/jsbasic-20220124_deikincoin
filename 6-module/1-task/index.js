export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.elem = this.render();
  }

  render() {
    this.tableEl = document.createElement('TABLE');
    this.tHead = document.createElement('THEAD');
    this.tBody = document.createElement('TBODY');

    this.tHead.insertAdjacentHTML('beforeEnd',
    `
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    `)

    this.tableEl.append(this.tHead);
    this.tableEl.append(this.tBody);


    for (const userInfo of this.data) {
      this.tBody.insertAdjacentHTML('beforeEnd',
        `
          <tr>
            <td>${userInfo.name}</td>
            <td>${userInfo.age}</td>
            <td>${userInfo.salary}</td>
            <td>${userInfo.city}</td>
            <td><button>X</button></td>
          </tr>
        `)
		}

    this.tableEl.addEventListener('click', this.onClick)

    return this.tableEl
  }

  onClick(event) {
    let clickBtn = event.target.tagName === 'BUTTON';

    if(clickBtn) {
      event.target.closest('tr').remove();
    }
  }

}



