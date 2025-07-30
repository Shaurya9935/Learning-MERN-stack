const randomDelay = async () => {
  return new Promise((resolve, reject) => {
    let timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};
const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
  };

async function main() {

  let t = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 100);

  let text = [
    "Initializing Hacking",
    "Reading Your Files",
    "Password Files Detected",
    "Sending all passwords and personal files to the server",
    "Cleaning up",
  ];
  for (const item of text) {
    await addItem(item);
  }
  await randomDelay()
  clearInterval(t)
}
main();
