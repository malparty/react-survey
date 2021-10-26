import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from '@src/App';

// mocks react-dom and its render method
// so that we can assert that render is
// called with <App /> and HTML element with id = root
jest.mock('react-dom', () => ({ render: jest.fn() }));

// mock i18n import as we do not need translations setup for this test
jest.mock('@src/i18n', () => ({}));

test('renders with App and root div', () => {
  // Create and append to document body
  // an HTML element with id = root
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  // Requires index.tsx so that react-dom render method is called
  require('../index.tsx');

  // Asserts render was called with <App /> wrapped by <React.ScrictMode>
  // and HTML element with id = root
  expect(ReactDOM.render).toHaveBeenCalledWith(
    <React.StrictMode>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </React.StrictMode>,
    root
  );
});
