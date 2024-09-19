import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/home_page/home_page';
// import ProjectPage from './pages/projects_page/project_page';
// import AboutPage from './pages/about_page/about_page';
import routesConfig from './routes/routes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;