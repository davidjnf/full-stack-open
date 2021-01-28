import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ value, text, percentage }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good <= 0 && neutral <= 0 && bad <= 0) {
    return <div>no feedback given</div>;
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <Statistic value={good} text="good" />
          </tr>
          <tr>
            <Statistic value={neutral} text="neutral" />
          </tr>
          <tr>
            <Statistic value={bad} text="bad" />
          </tr>
          <tr>
            <Statistic value={good + neutral + bad} text="all" />
          </tr>
          <tr>
            <Statistic value={(good + neutral + bad) / 3} text="average" />
          </tr>
          <tr>
            <Statistic
              value={((good - (neutral + bad)) / (good + neutral + bad)) * 100}
              text="positive"
              percentage="%"
            />
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
