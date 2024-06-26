// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }) {
  return <ChakraProvider disableGlobalStyle>{children}</ChakraProvider>
}