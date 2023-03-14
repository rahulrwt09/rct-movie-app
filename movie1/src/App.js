import Card from "./Component/Card";
import Sdata from "./Component/Sdata";

export default function App() {
  return (
    <div className="App">
      <>
        <h1>List of top 5 Netflix movies</h1>
        <div className="card_container">
          {Sdata.map((el, index)=>(
          <Card
          key= {index}
          imgsrc={el.imgsrc}
          title={el.title}
          sname={el.sname}
          link={el.link}

          />
          ))}
        </div>
      </>
    </div>
  );
}
