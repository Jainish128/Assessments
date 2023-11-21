import React, { useState } from 'react';
import './Accordion.css';

function Accordion() {

    const accordionData = [
        {
            id: 1,
            quetion:"What is your return policy ? ",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam architecto quasi, eligendi ex voluptatibus minima, ratione neque sequi eaque repellat illo facilis labore soluta quis optio quibusdam natus accusantium? "
        },
        {
            id: 2,
            quetion:"How do I track my order ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam architecto quasi, eligendi ex voluptatibus minima, ratione neque sequi eaque repellat illo facilis labore soluta quis optio quibusdam natus accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam architecto quasi, eligendi ex voluptatibus minima, ratione neque sequi eaque repellat illo facilis labore soluta quis optio quibusdam natus accusantium?"
        },
        {
            id: 3,
            quetion:"Can I Purchase Items Again.",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam architecto quasi, eligendi ex voluptatibus minima, ratione neque sequi eaque repellat illo facilis labore soluta quis optio quibusdam natus accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam architecto quasi, eligendi ex voluptatibus minima, ratione neque sequi eaque repellat illo facilis labore soluta quis optio quibusdam natus accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam architecto quasi, eligendi ex voluptatibus minima, ratione neque sequi eaque repellat illo facilis labore soluta quis optio quibusdam natus accusantium?"
        }
    ];

    const [isExpanded, setIsExpanded] = useState(null);

    const toggleAccordion = (id) => {
        setIsExpanded(isExpanded === id ? null : id);
    };



    
 





  return (
    <div>
        <div className="container mt-5">

            <h1 className='text-center mb-5'> React Assessment : Accordion in React </h1>

            <main className="main_accordion">
                {
                    accordionData.map((item) => (
                        <div key={item.id} className={`accordion-item ${isExpanded === item.id ? 'expanded' : ''}`} > 
                            <div className="quetion" onClick={()=>toggleAccordion(item.id)}>
                                <p> {item.quetion} </p>
                                <div className="icon">
                                    <i className={` fa-solid fa-angle-${isExpanded === item.id ? 'down' : 'right'}`}></i>
                                </div>
                            </div>

                        {
                            isExpanded === item.id && (
                                <div className="answer">
                                {item.answer}
                                </div>
                            )
                        }
                        </div>
                    ))
                }

            </main>




            {/* <main className="main_accordion">
                <div className="quetion" onClick={toggleAccordion}>
                    <p> Quetion Quetion Quetion Quetion Quetion </p>
                    <div className="icon">
                        <i className={` fa-solid fa-angle-${isExpanded ? 'down' : 'right'}`}></i>
                    </div>
                </div>
                {
                    isExpanded && (
                        <div className="answer">
                            Answer <br />
                            Answer <br />
                            Answer <br />
                        </div>
                    )
                }
            </main> */}

        </div>
    </div>
  )
}

export default Accordion