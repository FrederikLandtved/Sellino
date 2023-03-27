import React from 'react';

const ThemeContext = React.createContext({
    backgroundColor: 'blue',
    setBackgroundColor: () => {}
});

export default ThemeContext;