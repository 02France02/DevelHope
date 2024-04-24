//possiamo usare anche la Destrutturazione,  ovvero un modo più
export function Card({ image, title, isVisited, children }) {
  const styleCard = {
    width: "300px",
    marginBottom: "20px",
    border: "1px solid black",
    background: "white",
  };

  const vititedLable = isVisited ? "✅Visitata" : "❌Non Visitata";

  //   //se è true,  non tornarmi la card
  //   if (isVisited) {
  //     return null
  //   }

  return (
    <>
      <div className="single-card" style={styleCard}>
        <div className="header-img">
          <img src={image} alt="Rebrand-Logo" style={{ width: "100%" }} />
        </div>
        <div className="main">
          <h3>{title}</h3>
          <span>{children}</span>
          {/* se è true,  stampami visitata */}
          {/* {isVisited ? <p>✅Visitata</p> : <p>❌Non Visitata</p>} */}
          {/* <p>{isVisited ? "✅Visitata" : "❌Non Visitata"}</p> */}
          {/* <p>{vititedLable}</p> */}

          {/* RENDERING CONDIZIONALE: Se è visitata, Manda Direttamente il P */}
          {isVisited && <p>✅Visitata</p>}
          {!isVisited && <p>❌Non Visitata</p>}
        </div>
      </div>
    </>
  );
}

/* export function Card(props) {
  const styleCard = {
    width: "300px",
    marginBottom: "20px",
    border: "1px solid black",
  };
  //chiamiamo i props che abbiamo modificato nel foglio app
  const image = props.image;
  const title = props.title;
  const description = "lorem ipsum dolor sit";

  return (
    <>
      <div className="single-card" style={styleCard}>
        <div className="header-img">
          <img src={image} alt="Rebrand-Logo" style={{ width: "100%" }} />
        </div>
        <div className="main">
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
}
 */
