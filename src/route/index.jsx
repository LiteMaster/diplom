import {
    RouterProvider,
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/main";
import Lagues from "../components/leagues";
import Teams from "../components/teams";
import LaguesMatches from "../components/leaguesMatches";
import TeamsMatches from "../components/teamsMatches";

  export function AppRoute() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: ( <Main /> ),
      },
      {
        path: "/leagues",
        element: ( <Lagues/> ),
      },
      {
        path: "/leagues/:id",
        element: ( <LaguesMatches/> ),
      },
      {
        path: "/teams",
        element: ( <Teams/> ),
      },
      {
        path: "/teams/:id",
        element: ( <TeamsMatches/> ),
      }
    ]);
    return <RouterProvider router={router} />;

  }