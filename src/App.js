import logo from './logo.svg';
import Home from './Component/Home/Home';
import Topics from './Component/Topics/Topics';
import Main from './Layout/Main';
import Blog from './Component/Blog/Blog';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path:'/',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        }, 
        {
          path: '/statistic',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:quizId',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <AllQuiz></AllQuiz>
        }

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
