import { useState } from 'react';
import './Faq.css';
import { Link } from 'react-router-dom';

const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces, primarily maintained by Facebook."
  },
  {
    id: 2,
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript that allows you to write HTML directly within React."
  },
  {
    id: 3,
    question: "What is a Component?",
    answer: "A component is a reusable, independent piece of UI that can manage its own state and logic."
  },
  {
    id: 4,
    question: "What is State in React?",
    answer: "State is an object that holds some information that may change over the lifetime of the component."
  }
];

function Faq() {

  const [openId, setOpenId] = useState(null)

  return (
    <>
      <Link to="/" className="back-link" style={{ display: 'block', maxWidth: '600px', margin: '20px auto 0' }}>← Back to Dashboard</Link>


      <div className="faq-container">
        <h1>FAQ</h1>
        <div className="faq-list">
          {
            faqData.map((item) => (
              <div key={item.id} className="faq-item">
                <div className="faq-question" onClick={() => setOpenId(openId === item.id ? null : item.id)}>
                  <div>
                    {item.question}
                  </div>
                  <span>
                    {openId === item.id ? "-" : "+"}
                  </span>
                </div>

                {
                  item.id === openId && (
                    <div className="faq-answer">
                      {item.answer}
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Faq;
