/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  setTimeout(() => {
    postMessage('set timeout');
   }, 5000);
  setInterval(() => {
    postMessage(response);
   }, 1000);
  postMessage('processing...');
});
