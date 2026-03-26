type Callback = (data?: any) => void

const listeners: Record<string, Callback[]> = {}

export function emit(event: string, data?: any) {
    listeners[event]?.forEach(cb => cb(data))
}

export function on(event: string, cb: Callback) {
    if (!listeners[event]) listeners[event] = []
    listeners[event].push(cb)
}