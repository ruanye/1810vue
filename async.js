const p = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('买苹果');
    }, 2000);
  });
};
const bcd = res => new Promise((resolve, reject) => {
  if (res === '买苹果') {
    resolve('武老师家的店');
  }
  resolve('不是黑店');
});
async function eat() {
  const res = await p(); // 苹果
  console.log(res);
  return await bcd(res);
}
eat().then((data) => {
  console.log(data);
});
