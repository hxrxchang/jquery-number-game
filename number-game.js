$(() => {
  let numList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = numList.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));

    [numList[i], numList[rand]] = [numList[rand], numList[i]];
  }
  let boxList = $('.box-list');
  let counter = 1;

  numList.forEach((num) => {
    createBox(num);
  });

  function createBox(num) {
    let boxItem = $('<div class="box-item">')
    boxItem.text(`${num}`);

    boxItem.on('click', () => {
      if (num === counter) {
        boxItem.remove();
      }
      counter += 1;
    });

    boxList.append(boxItem);
  }
});