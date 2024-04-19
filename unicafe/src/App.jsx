import { useState } from 'react'

const Statictics = (props) => {  
  const total = props.goodValue + props.neutralValue + props.badValue
  if (total > 0) {
    return (  
      <div>
        <table>
          <tbody>
            <tr>
              {/* <td>&nbsp;</td> */}
              <th>Feedback</th>
              <th>Value</th>
            </tr>
            <tr>
              <td>{props.goodText}</td>
              <td>{props.goodValue}</td>
            </tr>
            <tr>
              <td>{props.neutralText}</td>
              <td>{props.neutralValue}</td>          
            </tr>
            <tr>
              <td>{props.badText}</td>
              <td>{props.badValue}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{(total/3).toFixed(1)}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td> {((100*props.goodValue)/total).toFixed(1)} % </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return <div>No feedbak given</div>
}

const Button = props => 
  <button onClick={props.handleClick}>
    {props.text}
  </button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedBack</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statictics</h1>
      <Statictics goodValue={good} goodText="good" neutralValue={neutral} neutralText="neutral" badValue={bad} badText="bad"/>      
    </div>
  )
}

export default App