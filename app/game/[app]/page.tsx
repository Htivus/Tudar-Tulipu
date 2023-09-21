// pages/_app.tsx
import { AppProps } from 'next/app'; 
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// Import the AppProps type

function MyApp({ Component, pageProps }: AppProps) { // Use AppProps for type annotations
  return (
    <DndProvider backend={HTML5Backend}>
      <Component {...pageProps} />
    </DndProvider>
  );
}

export default MyApp;
