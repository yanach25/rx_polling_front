import 'bootstrap/dist/css/bootstrap.min.css';
import { ajax } from 'rxjs/ajax';
import { filter, map, switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';
import listItemTemplate from './list-item-template';

const group = document.querySelector('.list-group');
let empty = document.querySelector('#empty');
interval(2000).pipe(
    switchMap(() => ajax('https://ahj-http-yanach.herokuapp.com/messages/unread')),
    map((data) => data.response),
    filter((response) => response.status === 'ok'),
    map((response) => response.messages),
).subscribe((messages) => {
    messages.forEach((message) => {
        const messageTmpl = listItemTemplate(message);
        group.prepend(messageTmpl);
    });

    if (empty) {
        empty.remove();
        empty = null;
    }
});