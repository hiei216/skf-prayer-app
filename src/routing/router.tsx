import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { VersePickerPage } from "../pages/verse-picker-page";
import { Header } from "../components/header/header";
import { Menu } from "../components/menu/menu";
import { PrayerPickerPage } from "../pages/prayer-picker-page";
import { VerseFilterPage } from "../pages/verse-filter-page";
import { UpNavigation } from "../components/up-navigation/up-navigation";
import { LandingPage } from "../pages/landing-page";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/prayer/",
      element: (
        <>
          <Header />
          <Menu />
          <PrayerPickerPage />
          <UpNavigation />
        </>
      ),
    },
    {
      path: "/verse-of-day/",
      element: (
        <>
          <Header />
          <Menu />
          <VersePickerPage />
        </>
      ),
    },
    {
      path: "/verse-history/",
      element: (
        <>
          <Header />
          <Menu />
          <VerseFilterPage />
        </>
      ),
    },
  ]
);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
