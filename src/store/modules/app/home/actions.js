export function functionRequest(data) {
    return {
        type: '@home/NAME_EVENT_DISPATCH_REQUEST',
        payload: data,
    };
}

export function functionSuccess(data) {
    return {
        type: '@home/NAME_EVENT_DISPATCH_SUCCESS',
        payload: data,
    };
}

