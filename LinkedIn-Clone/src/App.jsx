import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />
          {/* Feed */}
          <Feed />

          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    </>
  );
}

export default App;
