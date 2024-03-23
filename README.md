# Van Renting Web App

This project is a part of learning [React Router 6](https://www.youtube.com/watch?v=nDGA3km5He4).

## Steps
### 1. Create React with Vite
```shell
$ npm create vite@latest

Need to install the following packages:
create-vite@5.2.1
Ok to proceed? (y) y
✔ Project name: vanRentingWebApp
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

### 2. Install React Router
```shell
$ npm i react-router-dom
```

### 3. Update the src/main.tsx file
```tsx
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App/>
);
```

### 4. Update the src/App.tsx file
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/about' element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  )
};
```

### 5. Install Bootstrap
```shell
$ npm i --save bootstrap @popperjs/core
$ npm i --save-dev sass
```

### 6. Import Bootstap's styles and JS
```scss
// src/scss/styles.scss
@import "bootstrap/scss/bootstrap";
```

```tsx
// src/main.tsx
import './scss/styles.scss'
import 'bootstrap';
```