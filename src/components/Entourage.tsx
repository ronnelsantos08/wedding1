import '../style/Entourage.css'

const Entourage = () => {
  const entourageData = {
    parents: {
      groom: {
        title: 'Parents of the Groom',
        members: ['Edril Budo (Uncle)', 'Wilma V. Budo (Mother)'],
      },
      bride: {
        title: 'Parents of the Bride',
        members: ['Gina Fe C Angue', 'Manolito A. Angue'],
      },
    },
    principalSponsors: {
      mr: {
        title: 'Principal Sponsors (Mr & Mrs)',
        members: [
          'Victor and Charina Solite',
          'Ramil and Rosemarie Talicol',
          'Leciel Tibayan and Sandy Relliquete',
        ],
      },
      ms: {
        title: 'Principal Sponsors (Mr & Mrs)',
        members: [
          'George Nojas II and Naomi D Nojas',
          'Richard Meriel and Daine Anne Meriel',
          'Ronald Astillero and Susan Astillero',
        ],
      },
    },
    weddingParty: {
      bestman: {
        title: 'Bestman',
        members: ['Jimmy Boy Budo'],
      },
      maidOfHonor: {
        title: 'Matron/Maid of Honor',
        members: ['Judy Anne Milay'],
      },
      bridesmaids: {
        title: 'Bridesmaids',
        members: [
          'Yvette Mae Delas Alas',
          'Erica Angue',
          'Agatha Irish Bentir',
          'Elaine Abad',
          'Abigail Hermoso',
          'Jennine Dela Cruz',
        ],
      },
      groomsmen: {
        title: 'Groomsmen',
        members: [
          'Matt Gio Angue',
          'Xavier John Javier',
          'Bryan Jay Edong',
          'Daniel Gaguan',
          'Kerbie Garcia',
          'Dexter B Galaura',
          'Jerry Sabando',
        ],
      },
    },
    secondarySponsors: {
      candle: {
        title: 'Candle',
        members: ['Elaine Abad', 'Matt Gio Angue'],
      },
      veil: {
        title: 'Veil',
        members: ['Abigail Hermoso', 'Dexter Galuara'],
      },
      cord: {
        title: 'Cord',
        members: ['Jennine Dela Cruz', 'Jerry Sabando'],
      },
      ringBearer: {
        title: 'Ring Bearer',
        members: ['Chris Theo B Galaura'],
      },
      bibleBearer: {
        title: 'Bible Bearer',
        members: ['Jon Kurt Tayam'],
      },
      flowerGirls: {
        title: 'Flower Girls',
        members: [
          'Margaux Celestine Meriel',
          'Janeia D Javier',
          'Sofia Avery Angue',
          'Noellee B Galaura',
        ],
      },
    },
  };

  return (
    <>
      <style>
        {`
          /* Updated Lora import to include the 700 font weight */
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&display=swap');

          .whimsical-theme {
            background-color: #fcf8e8;
            color: #4a5746;
            font-family: 'Lora', serif;
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

          .grid-container {
            display: grid;
            gap: 2rem;
            max-width: 900px;
            margin: 0 auto;
          }

          .card {
            background-color: #e6eada;
            border-radius: 15px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
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

          .list {
            list-style: none;
            padding: 0;
            margin: 0;
            text-align: center;
          }

          .list-item {
            padding: 0.25rem 0;
            font-size: 1rem;
            color: #5d6d5c;
          }
          
          .sub-title {
            font-weight: 700; /* This will now work with the updated font import */
            margin-bottom: 0.5rem;
          }

          /* Media queries for responsiveness */
          @media (min-width: 768px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr);
            }
            .grid-item-full {
              grid-column: 1 / -1;
            }
            .card-title {
              text-align: left;
            }
            .list {
              text-align: left;
            }
            .sub-title {
              text-align: left;
            }
          }

          @media (max-width: 767px) {
            .grid-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="whimsical-theme">
        <h1 className="title">Our Entourage</h1>
        <div className="grid-container">
          {/* Parents Section */}
          <div className="card">
            <h2 className="card-title">{entourageData.parents.groom.title}</h2>
            <ul className="list">
              {entourageData.parents.groom.members.map((name, index) => (
                <li key={index} className="list-item">{name}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="card-title">{entourageData.parents.bride.title}</h2>
            <ul className="list">
              {entourageData.parents.bride.members.map((name, index) => (
                <li key={index} className="list-item">{name}</li>
              ))}
            </ul>
          </div>

          {/* Principal Sponsors Section */}
          <div className="card grid-item-full">
            <h2 className="card-title">Principal Sponsors</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <ul className="list">
                {/* Reverting to hardcoded titles for clarity */}
                <p className="s-title">Mr & Mrs Solite</p>
                <li className="list-item">Victor Solite</li>
                <li className="list-item">Charina Solite</li>
              </ul>
              <ul className="list">
                <p className="s-title">Mr & Mrs Talicol</p>
                <li className="list-item">Ramil Talicol</li>
                <li className="list-item">Rosemarie Talicol</li>
              </ul>
              <ul className="list">
                <p className="s-title">Mr Leciel Tibayan and Ms Sandy Relliquete</p>
                <li className="list-item">Leciel Tibayan</li>
                <li className="list-item">Sandy Relliquete</li>
              </ul>
              <ul className="list">
                <p className="s-title">Mr & Mrs Nojas</p>
                <li className="list-item">George Nojas II</li>
                <li className="list-item">Naomi D Nojas</li>
              </ul>
              <ul className="list">
                <p className="s-title">Mr & Mrs Meriel</p>
                <li className="list-item">Richard Meriel</li>
                <li className="list-item">Daine Anne Meriel</li>
              </ul>
              <ul className="list">
                <p className="s-title">Mr & Mrs Astillero</p>
                <li className="list-item">Ronald Astillero</li>
                <li className="list-item">Susan Astillero</li>
              </ul>
            </div>
          </div>

          {/* Wedding Party Section */}
          <div className="card">
            <h2 className="card-title">Bestman & Maid of Honor</h2>
            <ul className="list">
                <p className="s-title">{entourageData.weddingParty.bestman.title}</p>
                <li className="list-item">{entourageData.weddingParty.bestman.members[0]}</li>
            </ul>
            <ul className="list">
                <p className="s-title">{entourageData.weddingParty.maidOfHonor.title}</p>
                <li className="list-item">{entourageData.weddingParty.maidOfHonor.members[0]}</li>
            </ul>
          </div>
          <div className="card">
            <h2 className="card-title">Bridesmaids</h2>
            <ul className="list">
              {entourageData.weddingParty.bridesmaids.members.map((name, index) => (
                <li key={index} className="list-item">{name}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="card-title">Groomsmen</h2>
            <ul className="list">
              {entourageData.weddingParty.groomsmen.members.map((name, index) => (
                <li key={index} className="list-item">{name}</li>
              ))}
            </ul>
          </div>

          {/* Secondary Sponsors Section */}
          <div className="card">
            <h2 className="card-title">Secondary Sponsors</h2>
            <ul className="list">
              <p className="s-title">{entourageData.secondarySponsors.candle.title}</p>
              {entourageData.secondarySponsors.candle.members.map((name, index) => (
                <li key={index} className="list-item">{name}</li>
              ))}
            </ul>
            <ul className="list">
              <p className="s-title">{entourageData.secondarySponsors.veil.title}</p>
              {entourageData.secondarySponsors.veil.members.map((name, index) => (
                <li key={index} className="list-item">{name}</li>
              ))}
            </ul>
            <ul className="list">
              <p className="s-title">{entourageData.secondarySponsors.cord.title}</p>
              {entourageData.secondarySponsors.cord.members.map((name, index) => (
                <li key={index} className="list-item">{name}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2 className="card-title">Bearers & Flower Girls</h2>
            <ul className="list">
              <p className="s-title">{entourageData.secondarySponsors.ringBearer.title}</p>
              <li className="list-item">{entourageData.secondarySponsors.ringBearer.members[0]}</li>
            </ul>
            <ul className="list">
              <p className="s-title">{entourageData.secondarySponsors.bibleBearer.title}</p>
              <li className="list-item">{entourageData.secondarySponsors.bibleBearer.members[0]}</li>
            </ul>
            <ul className="list">
              <p className="s-title">{entourageData.secondarySponsors.flowerGirls.title}</p>
              {entourageData.secondarySponsors.flowerGirls.members.map((name, index) => (
                <li key={index} className="list-item">{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entourage;
