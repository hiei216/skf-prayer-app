import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as Sentry from "@sentry/react";

import App from "./App.tsx";
import "./index.css";

Sentry.init({
  dsn: "https://f6642b0b1cad8c28b32553ef03dde344@o4508978855870464.ingest.de.sentry.io/4508984607047760"
});

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
);
