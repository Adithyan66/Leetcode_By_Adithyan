class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const callbacks = this.events.get(eventName);
    callbacks.push(callback);

    return {
      unsubscribe: () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) {
          callbacks.splice(index, 1);
        }
      }
    };
  }

  emit(eventName, args = []) {
    const callbacks = this.events.get(eventName);
    if (!callbacks) {
      return [];
    }
    return callbacks.map(callback => callback(...args));
  }
}
