import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Tabs.css'



const tabData = [
  {
    id: 1,
    title: "HTML",
    content: "HTML is the standard markup language for documents designed to be displayed in a web browser."
  },
  {
    id: 2,
    title: "CSS",
    content: "CSS is the language we use to style an HTML document. It describes how elements should be displayed."
  },
  {
    id: 3,
    title: "JavaScript",
    content: "JavaScript is the programming language of the Web, allowing you to implement complex features on web pages."
  }
];




function Tabs() {

  const [activeTab, setActiveTab] = useState(1)






  return <>
    <Link to="/" className="back-link" style={{ display: 'block', maxWidth: '500px', margin: '20px auto 0' }}>← Back to Dashboard</Link>
    <div className="tabs-container">


      <div className="tabs-header">

        {
          tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={tab.id === activeTab ? "active" : ""}
            >
              {tab.title}
            </button>
          ))
        }

      </div>


      <div className="tabs-content">
        {
          tabData.map((tab) => (

            activeTab === tab.id && (
              <div key={tab.id}>
                <h2>{tab.title}</h2>
                <p>{tab.content}</p>
              </div>
            )
          ))
        }
      </div>



    </div>


  </>


}

export default Tabs