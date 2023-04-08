import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Landing,
  Profile,
  ProfileLayout,
  Posts,
  Gallery,
  Todo,
  Error,
} from "../pages";
import { loader as landingLoaders } from "../pages/Landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        loader={landingLoaders}
        element={<Landing />}
        errorElement={<Error />}
      />
      <Route
        path="/profile/:id"
        element={<ProfileLayout />}
        errorElement={<Error />}
      >
        <Route index element={<Profile />} />
        <Route path="post" element={<Posts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todo" element={<Todo />} />
      </Route>
    </>
  )
);
const NavigationRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default NavigationRoutes;
