'use client'


import { getQueryClient } from '@/component/TanstackQueryOption';
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react'


export default function TanstackQueryProvider({ children }: { children: ReactNode }) {

  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
      />  
    </QueryClientProvider>
  )
}
