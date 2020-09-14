import React from 'react';
import './TimerButton.css';


interface IProps {
  buttonValue:string,
  buttonAction: any
}
const TimerButton = ({ buttonAction, buttonValue }: IProps) => (
  <div className="button-container" onClick={() => buttonAction()}>
    <p className="button-value">{buttonValue}</p>
  </div>
);
 


export default TimerButton;