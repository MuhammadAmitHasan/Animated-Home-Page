# Components

This folder contains all the reusable components used throughout the project. Reusable components help maintain a modular and organized codebase, promoting code reusability and consistency in UI elements.

## Folder Structure

/src
/components
/Button
- Button.js
- Button.css
/Header
- Header.js
- Header.css
...

## Guidelines
- Each component should have its own folder with a clear and concise name.
- Follow the Atomic Design principles if applicable (Atoms, Molecules, Organisms).
- Styles should be kept within the component's folder, following a similar structure.


## Usage
To use a component, import it into your desired file:

```jsx
import React from 'react';
import Button from '../components/Button/Button';

const MyPage = () => {
  return (
    <div>
      <Button label="Click me" onClick={() => console.log('Button clicked')} />
      {/* Other components */}
    </div>
  );
};

```



