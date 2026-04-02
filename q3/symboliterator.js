let myCollection = {
  items: ["A", "B", "C"],

  [Symbol.iterator]: function () {
    let index = 0;
    let items = this.items;

    return {
      next: function () {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// Using for...of
for (let item of myCollection) {
  console.log(item);
}
