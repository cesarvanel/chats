import { useRoutes, createRoutesFromChildren } from "react-router-dom";
import { useSessionContext } from "../context/session.context";
import { ProtectedRoute } from "./protectedRoute";

const Routes = () => {
  const { token } = useSessionContext();

  const routesForPublic = [
    {
      path: "/service",
      element: <div>service</div>,
    },

    {
      path: "/about",
      element: <div>About</div>,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <div>Home</div>,
        },
        {
          path: "/logout",
          element: <div>Home</div>,
        },
      ],
    },

    {
      path: "/about",
      element: <div>About</div>,
    },
  ];

  const routeForNotAuthenticated = [
    {
      path: "/",
      element: <div>Home page</div>,
    },
    {
      element: <div>Login</div>,
    },
  ];

  const router = useRoutes([
    ...routesForPublic,
    ...(!token ? routeForNotAuthenticated : []),
    ...routesForAuthenticatedOnly,
  ]);

  return router;
};
