import React from 'react';

export default function AdminHomePage() {
  return (
    <div>
      {/* Assume customerName and documentsType are coming from props or state */}
      <div data-testid="customerName">John Doe</div>
      <div data-testid="documentsType">Passport</div>
      <button data-testid="approveButton">Approve</button>

      {/* Add a button to link to the Review component */}
      <div style={{ marginTop: '20px' }}>
        <button>
          <a href="/review">Go to Review</a>
        </button>
      </div>
    </div>
  );
}
