import React from 'react';
import * as rtl from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App';

jest.mock("./api/fetchShow");

test("App fetches and renders show data", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);

    const {queryAllByText, rerender} = rtl.render(<App />);

    const fetchingData = queryAllByText(/fetching data.../i)

    expect(fetchingData.toHaveLength(1));
    await rtl.waitFor(() => {
        expect(queryAllByText(/summary/i)).toHaveLength(1);
    });
});



const mockData = {
    image: { original: "original"},
    name: "name",
    summary: "<p>summary</p>",
    _embedded: {
        episodes: [{
            id: "1",
            image: { medium: "medium_image"},
            name: "name",
            season: 3,
            number: 2,
            summary: "<p>Summary</p>",
            runtime: 20
        }]
    }
};