let storage = window.localStorage;

export function loadFromStorage(data: string, defaultValue: boolean) {
    let item: string | boolean | null = storage.getItem(data);

    if (item == null || item == undefined) {
        item = defaultValue;
    }

    if(item == 'true') {
        item = true
    }
    if(item == 'false') {
        item = false
    }

    return item;
}

export function saveToStorage(data: string, value: boolean) {
    storage.setItem(data, value.toString());
}