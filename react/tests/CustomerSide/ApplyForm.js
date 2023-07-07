import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import ApplyForm from '../../components/Customer/ApplyForm/ApplyForm';


describe('HomePage Component', () => {
    
    render(<MemoryRouter><ApplyForm /></MemoryRouter>)

    test('fe_react_customerHome', () => {
       const  customerName = screen.queryByTestId('customerName');
       const  documentsType = screen.queryByTestId('documentsType');
       const  submitFormButton = screen.queryByTestId('submitFormButton');

       expect(customerName).toBeTruthy();
       expect(documentsType).toBeTruthy();
       expect(submitFormButton).toBeTruthy();
    })

})