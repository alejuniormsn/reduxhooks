import React from "react"
import {Provider} from 'react-redux'
import store from './store'
import CoursesList from "./components/CoursesList";

function App() {
  return (
    <Provider store={store}>
      <CoursesList />
    </Provider>
  );
}

export default App;
