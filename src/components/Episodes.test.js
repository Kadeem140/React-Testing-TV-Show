  
import React from 'react';
// import {render, fireEvent, waitFor, act} from '@testing-library/react'; 
import * as rtl from '@testing-library/react'; 

import Episodes from './Episodes'; //import Component to be tested on

test("Renders Episodes with and without props", () => {
     const mockData = {
        id: "1",
        image: { medium: "medium_image"},
        name: "name",
        season: 3,
        number: 2,
        summary: "<p>Summary</p>",
        runtime: 20
    }

    const  {queryAllByText, rerender} = rtl.render(<Episodes episodes={[]} />);

    expect(queryAllByText(/season/i)).toBeTruthy(); // searches for an element with the text season to be truthful

    rerender(<Episodes episodes={[mockData]} />);
    expect(queryAllByText(/name/i)).toHaveLength(1);
});