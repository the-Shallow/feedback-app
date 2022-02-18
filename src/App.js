import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import AboutUs from "./pages/AboutUs";
import AboutIconLink from "./components/AboutIconLink";
import { FeedBackContextProvider } from "./context/FeedBackContext";

function App() {

  return (
    <FeedBackContextProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm  />
                  <FeedBackStats  />
                  <FeedBackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutUs />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedBackContextProvider>
  );
}

export default App;