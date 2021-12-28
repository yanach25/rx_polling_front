import prepareDate from './prepare-date';

const listItemTemplate = (message) => {
  const item = document.createElement('li');
  item.classList.add('list-group-item');
  item.innerHTML = `
      <div class="row">
        <div class="col-4">${message.from}</div>
        <div class="col-6">${message.subject}</div>
        <div class="col-2 d-flex justify-content-end">${prepareDate(message.received)}</div>
      </div>
  `;
  return item;
};

export default listItemTemplate;
