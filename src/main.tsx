import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routing/routes';

const queryClient = new QueryClient({
  // // We can set the default options for all queries here
  // defaultOptions: {
  //   queries: {
  //     // React Query will retry failed queries 3 times by default
  //     retry: 3,
  //     // If no component is using the data, it will be garbage collected (removed from the cache) after 5 minutes
  //     cacheTime: 300_000, // 5 minutes#
  //     // After 10 seconds of receiving the data it will be considered stale (outdated)
  //     staleTime: 10 * 1000, // 10 seconds
  //     // Defaults to true - disable refetch when going between tabs
  //     refetchOnWindowFocus: false,
  //     // Defaults to true - disable refetch when the browser window comes back online
  //     refetchOnReconnect: false,
  //     refetchOnMount: false,
  //   },
  // },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
