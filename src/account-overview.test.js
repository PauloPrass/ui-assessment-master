import { render, screen } from '@testing-library/react';
import Header from './components/Header';

const accountOverviewStub = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    number: '020 3362 4208'
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  }
}

test('should render contact name', () => {
  render(<Header props={accountOverviewStub}/>);
  const name = screen.getByText(/John Smith/i);
  expect(name).toBeInTheDocument();
});

test('should render contact email', () => {
  render(<Header props={accountOverviewStub}/>);
  const email = screen.getByText(/john.smith@feefo.com/i);
  expect(email).toBeInTheDocument();
});

test('should render contact number', () => {
  render(<Header props={accountOverviewStub}/>);
  const number = screen.getByText(/020 3362 4208/i);
  expect(number).toBeInTheDocument();
});