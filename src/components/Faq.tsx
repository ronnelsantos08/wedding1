import  { useState } from 'react';

const Faq = () => {
  // State for the FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      question: 'What is the wedding dress code?',
      answer: 'The dress code is formal. We kindly ask that you wear shades of blue and refrain from wearing white or cream.',
    },
    {
      question: 'Can I bring a plus-one?',
      answer: 'Our wedding is an intimate event, and we can only accommodate guests who are specifically named on the invitation. We appreciate your understanding.',
    },
    {
      question: 'Are children allowed at the ceremony and reception?',
      answer: 'While we love your children, our wedding is an adults-only event with the exception of those in the wedding party. We hope this allows you to enjoy a relaxing evening!',
    },
    {
      question: 'Where can I find the wedding RSVP?',
      answer: 'Details about our RSVP can be found on our wedding website, under the "RSVP" section.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

          .whimsical-theme {
            min-height:100vh;
            background-color: #fcf8e8;
            color: #4a5746;
            font-family: serif;
            padding: 2rem 1rem;
          }

          .title {
            font-family: 'Playfair Display', serif;
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 2rem;
            color: #4a5746;
            position: relative;
            font-weight: 700;
          }
          
          .title::after {
            content: '';
            display: block;
            width: 50px;
            height: 2px;
            background-color: #d1b0b5;
            margin: 0.5rem auto 0;
          }

          .card-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-align: center;
            border-bottom: 1px solid #c9d2c1;
            padding-bottom: 0.5rem;
          }

          .faq-container {
            max-width: 900px;
            margin: 2rem auto;
            border-radius: 15px;
            background-color: #e6eada;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }

          .faq-item {
            border-bottom: 1px solid #c9d2c1;
            padding: 1rem 0;
          }

          .faq-item:last-child {
            border-bottom: none;
          }

          .faq-question {
            font-weight: 700;
            font-family: 'Playfair Display', serif;
            font-size: 1.1rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #4a5746;
          }
          
          .faq-question:hover {
            color: #d1b0b5;
          }
          
          .faq-question svg {
            transition: transform 0.3s ease;
          }

          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out, padding 0.3s ease-out;
            padding: 0 1rem;
            color: #5d6d5c;
          }
          
          .faq-answer.open {
            max-height: 200px; /* Adjust as needed for content */
            padding: 1rem 1rem 0;
          }
          
          .faq-item.open .faq-question svg {
            transform: rotate(180deg);
          }

          @media (min-width: 768px) {
            .card-title {
              text-align: left;
            }
          }

          @media (max-width: 767px) {
            
          }
        `}
      </style>

      <div className="whimsical-theme">
        <div className="faq-container">
          <h2 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  {item.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)' }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
