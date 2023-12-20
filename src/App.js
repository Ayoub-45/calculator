import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator-container">
          <div className="display">{}</div>
          <div className="controllers-container">
            <div className="AC button" id="clear">
              AC
            </div>
            <div className="divide button" id="divide">
              /
            </div>
            <div className="button" id="multiply">
              X
            </div>
            <div className="button">7</div>
            <div className="button">8</div>
            <div className="button">9</div>
            <div className="button" id="substract">
              -
            </div>
            <div className="button">4</div>
            <div className="button">5</div>
            <div className="button">6</div>
            <div className="button" id="add">
              +
            </div>
            <div className="button">1</div>
            <div className="button">2</div>
            <div className="button">3</div>
            <div className="button equals" id="equals">
              =
            </div>
            <div className="button button-0">0</div>
            <div className="button" id="decimal">
              .
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
