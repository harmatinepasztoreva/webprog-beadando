import { useState } from "react";

function DateCounterApp() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  function nextStep() {
    setStep((s) => s + 1);
  }

  function prevStep() {
    setStep((s) => s - 1);
  }

  function nextCount() {
    setCount((c) => c + step);
  }

  function prevCount() {
    setCount((c) => c - step);
  }

  return (
    <>
      <div>
        <button onClick={prevStep}>-</button>
        <span>Ugrások száma: {step}</span>
        <button onClick={nextStep}>+</button>
      </div>
      <div>
        <button onClick={prevCount}>-</button>
        <span>Számlálás: {count}</span>
        <button onClick={nextCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? `Ma van `
            : count > 0
            ? `${count} nap múlva `
            : `${Math.abs(count)} nappal ezelőtt `}
        </span>
        <span>{date.toLocaleDateString("hu-HU",{
          year:"numeric", 
          month: "long", 
          day: "numeric",
          weekday: "long",})}</span>
      </p>
    </>
  );
}

export default DateCounterApp;
