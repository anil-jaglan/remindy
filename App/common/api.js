
import Constants from 'expo-constants';
import uuid from 'uuid';

// const api = Constants.manifest.extra.dev
//    ? Constants.manifest.extra.debuggerHost.split(':').shift().concat(':3000') : 'http://api.remindy.com/';

const url = `http://localhost:3000/events`;

export function getEvents() {
    return fetch(url)
            .then(resp => resp.json())
            .then(events=> events.map(e => ({...e, date: new Date(e.date)})))
            .catch(err => console.error(err));
}

export function saveEvent(name, date) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({name: name, date: new Date(), id: uuid()}),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    })
    .then(resp => resp.json())
    .catch(err => console.error(err));
}