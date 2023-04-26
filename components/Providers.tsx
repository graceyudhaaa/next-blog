'use client'

import { ReactNode } from "react";

import { ThemeProvider } from "next-themes";

// * Because layout.tsx is only rendered on the server-side, we can use the
// * ThemeProvider and OtherProvider components directly in the RootLayout
// * component. 

// * This is not possible in the app.tsx file because it is rendered
// * on both the server-side and the client-side.

function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" storageKey='theme' enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}

export default Providers