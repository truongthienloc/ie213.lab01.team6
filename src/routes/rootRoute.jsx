import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { DefaultLayout } from "~/layouts/DefaultLayout";
import { FollowPage } from "~/pages/FollowPage";
import { HomePage } from "~/pages/HomePage";
import { ReservationPage } from "~/pages/ReservationPage";
import { ResultPage } from "~/pages/ResultPage";

export const rootRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/follow" element={<FollowPage />} />
      <Route path="/reservation" element={<ReservationPage />} />
    </Route>
  )
);
