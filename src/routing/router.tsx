import React, { Suspense, ReactNode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const VersePickerPage = React.lazy(() => import("../pages/verse-picker-page"));
const PrayerPickerPage = React.lazy(() => import("../pages/prayer-picker-page"));
const VerseFilterPage = React.lazy(() => import("../pages/verse-filter-page"));
const Header = React.lazy(() => import("../components/header/header"));
const Menu = React.lazy(() => import("../components/menu/menu"));
const LandingPage = React.lazy(() => import("../pages/landing-page"));
const UpNavigation = React.lazy(() => import("../components/up-navigation/up-navigation"));

const withSuspense = (children: ReactNode) => (
  <Suspense fallback={<div>Loading...</div>}>
    {children}
  </Suspense>
);

const router = createBrowserRouter([
{
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/prayer/",
      element: 
        <>
          <Header />
          <Menu />
          {withSuspense(
            <>
            <PrayerPickerPage />
            <UpNavigation />
            </>
          )}
        </>
    },
    {
      path: "/verse-of-day/",
      element: 
        <>
          <Header />
          <Menu />
          {withSuspense(
          <VersePickerPage />
          )}
        </>
    },
    {
      path: "/verse-history/",
      element: 
        <>
          <Header />
          <Menu />
          {withSuspense(
          <VerseFilterPage />
        )}
        </>
    },    
  ]
);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
