import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";
import RulesPage from "./pages/RulesPage";
import ScreenshotPage from "./pages/screenshots/ScreenshotPage";
import Servers from "./pages/Servers";
import LoginPage from "./pages/LoginPage";
import { getHomePage, fetchServers} from"./actions/homePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    // loader: tokenLoader,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/servers",
        element: <Servers />,
      },
      {
        path: "rules/:id",
        element: <RulesPage />,
      },
      {
        path: "screenshots",
        element: <ScreenshotPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      // {
      //   path: 'login'
      // },
      // {
      //   path: 'servers'
      // }
      // {
      //   path: 'events',
      //   element: <EventsRootLayout />,
      //   children: [
      //     {
      //       index: true,
      //       element: <EventsPage />,
      //       loader: eventsLoader,
      //     },
      //     {
      //       path: ':eventId',
      //       id: 'event-detail',
      //       loader: eventDetailLoader,
      //       children: [
      //         {
      //           index: true,
      //           element: <EventDetailPage />,
      //           action: deleteEventAction,
      //         },
      //         {
      //           path: 'edit',
      //           element: <EditEventPage />,
      //           action: manipulateEventAction,
      //           loader: checkAuthLoader
      //         },
      //       ],
      //     },
      //     {
      //       path: 'new',
      //       element: <NewEventPage />,
      //       action: manipulateEventAction,
      //       loader: checkAuthLoader
      //     },
      //   ],
      // },
      // {
      //   path: '/auth',
      //   element: <AuthenticationPage />,
      //   action: authAction
      // },
      // {
      //   path: 'newsletter',
      //   element: <NewsletterPage />,
      //   action: newsletterAction,
      // },
      // {
      //   path: 'logout',
      //   action: logoutAction
      // }
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomePage());
    dispatch(fetchServers());
  }, [dispatch]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
