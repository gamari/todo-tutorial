/*
executeTasksを次のような仕様で書いてください。

- durationに書かれた時間、処理を止めてください。
- duration硬直後、task.titleをコンソールに表示してください。
- 最後の「完了」と表示してください。

表示:
task1
task2
task3
*/
const tasks = [
  { title: "task1", duration: 2000 },
  { title: "task2", duration: 1000 },
  { title: "task3", duration: 3000 },
];

async function sleep(duration) {
  await new Promise((resolve) => setTimeout(resolve, duration));
}

async function executeTasks(tasks) {
  for (let task of tasks) {
    await sleep(task.duration);
    console.log(task.title);
  }

  console.log("完了");
}

executeTasks(tasks);

/*
function test() {
  task1();
  task2();
  task3();
}

new Promise((resolve, reject) => {
  resolve() or reject();
}).then((val) => {
}).then({ ...})
.then({})


asycn function test() {
  await test2();
  await test3();
  test4();
  await test5();
}

async test2() {}
async test3() {}

*/
