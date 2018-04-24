$(() => {
  let numList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // 配列numListの順番をランダムに入れ替え
  for (let i = numList.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));

    [numList[i], numList[rand]] = [numList[rand], numList[i]];
  }
  let boxList = $('.box-list');
  let counter = 1;
  let timerId;

  numList.forEach((num) => {
    createBox(num);
  });

  function createBox(num) {
    let boxItem = $('<div class="box-item">')
    boxItem.text(`${num}`);

    boxItem.on('click', () => {
      if (isStartGame) {
        if (num === counter) {
          boxItem.remove();
        }
        counter += 1;

        let boxLength = $('.box-item').length;
        if (!boxLength) {
          clearInterval(timerId);
        }
      }
    });

    boxList.append(boxItem);
  }

  let isStartGame = false;

  $('#start-btn').on('click', () => {
    if (!isStartGame) {
      let startTime = new Date().getTime();

      timerId = setInterval(() => {
        getTime(startTime);
      }, 1000);

      isStartGame = true;
    }
  });

  function getTime(startTime) {
    let elapsedTime;

    if (!isStartGame) {
      elapsedTime = ' 経過時間: 0秒';
    }
    else {
      let currentTime = new Date().getTime();

      let elapsedTimeElemet = Math.floor((currentTime - startTime) / 1000);
      elapsedTime = `経過時間: ${elapsedTimeElemet}秒`;
    }

    $('#time-show').text(elapsedTime);
  }
});