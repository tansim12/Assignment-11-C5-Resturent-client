import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { SkeletonTheme } from "react-loading-skeleton";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </SkeletonTheme>
      </HelmetProvider>
      <Toaster></Toaster>
    </QueryClientProvider>
  </React.StrictMode>
);
