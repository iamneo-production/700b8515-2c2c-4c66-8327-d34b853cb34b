import { queryByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import Status from '../../components/Customer/Status/Status';


describe('Status', () => {
    
    render(<MemoryRouter><Status /></MemoryRouter>)

    test('fe_react_customerStatus', () => {
       const  status = screen.queryByTestId('status');
	   
	   expect(status).toBeTruthy();
    })

})