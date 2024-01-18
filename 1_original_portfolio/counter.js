// function of setupCounter, is just a while loop count function.
// It counts how many times a specific elment has been clicked and reports that out.

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
