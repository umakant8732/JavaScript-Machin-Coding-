import { useState } from 'react';
import './Accordion.css'


const accordionData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a front-end JavaScript library for building user interfaces or UI components."
  },
  {
    id: 2,
    question: "What are components in React?",
    answer: "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML."
  },
  {
    id: 3,
    question: "What is a state in React?",
    answer: "State is a built-in React object that is used to contain data or information about the component. A component's state can change over time."
  }
];


function Accordion() {

  const [openId, setOpenId] = useState(null)


  return (
    <>
      <div className="accordion-container">
        {
          accordionData.map((accordion) => (

            <div key={accordion.id} className="accordion-item">
              <div className="accordion-header" onClick={() => setOpenId(openId === accordion.id ? null : accordion.id)}>

                <div>
                  {accordion.question}
                </div>
                <span>
                  {openId === accordion.id ? "-" : "+"}
                </span>
              </div>
              {
                openId === accordion.id && (
                  <div className="accordion-body">
                    {accordion.answer}
                  </div>
                )
              }
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Accordion