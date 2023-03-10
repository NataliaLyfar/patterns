// one of the most popular patterns of ES6/ES7.
// the essense of the pattern is that there is a so-called subject 
// that interacts with a list of other objects and automatically notifies them of any state changes
// therefore,  this pattern is the basis of such reactive frameworks as React and Vue

class Observable {
    constructor() {
        this.observers = [];
    }
    subscribe(f) {
        this.observers.push(f);
    }
    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}
// now we can create multiple DOM-links
const input = document.querySelector(".input");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");

// we can create multiple observers with links
const updateA = text => a.textContent = text;
const updateB = text => b.textContent = text;
const updateC = text => c.textContent = text;

// then we create an Observable instance and subscribe to the created elements
const headingsObserver = new Observable();
headingsObserver.subscribe(updateA);
headingsObserver.subscribe(updateB);
headingsObserver.subscribe(updateC);

input.addEventListener("keyup", e => {
    headingsObserver.notify(e.target.value);
});