import React                from 'react';

import { store }            from './src/store';
import { Navigation }       from './src/navigation';
import { ThemeProvider }    from './src/context/Theme/ThemeProvider';
import { AuthProvider }      from './src/context/Auth/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
    <ThemeProvider>
       <Navigation/>
    </ThemeProvider>
    </AuthProvider>

    );
}

