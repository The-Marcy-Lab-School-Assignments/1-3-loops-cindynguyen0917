const loop0UpTo10 = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }
};

const loop5to10 = () => {
  for (let i = 5; i <= 10; i++) {
    console.log(i)
  }
};


// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for (let i = 0; i < 10; i += 2) {
    console.log(i)
  }
};

const countdown5to0 = () => {
  for (let i = 5; i >= 0; i--) {
    console.log(i)
  }
};

const loopUpToNum = () => {
};

const fizzbuzz = () => {
};

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
