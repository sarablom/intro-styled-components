import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactCard from "./ContactCard";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/faq"
            element={
              <FrequentlyAskedQuestions
                question="What does “CSS” stand for?"
                answer="Cool Styling Strategy"
              />
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <ContactCard
                avatarSrc="/course-materials/cat-300px.jpg"
                name="Mittens"
                email="meow@gmail.com"
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <LoginForm
                handleSubmit={(ev) => {
                  ev.preventDefault();
                  alert("Submitted!");
                }}
              />
            }
          ></Route>
        </Routes>
      </Router>
      <GlobalStyles />
    </div>
  );
}

export default App;
