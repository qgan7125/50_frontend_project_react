import { render, screen} from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Project from './index';

const props =         {
    "name": "Expanding Cards",
    "backgroundImage": "01ExpandingCards.png",
    "day": 1,
    "link": "01ExpandingCards"
}

describe("Project box test cases", () => {
    test("snapshot test for Project box", async () => {
        const view = (
            render(
                <Router>
                    <Project {...props} />
                </Router>,
            ));
        expect(view.asFragment()).toMatchSnapshot();
    });

    test("All component should be rendered", async () => {
        render(
            <Router>
                <Project {...props} />
            </Router>,
        );

        // Test the day
        const day = screen.queryByText("Day 1");
        expect(day).toBeInTheDocument();
        // Test the title
        const name = screen.queryByText("Expanding Cards");
        expect(name).toBeInTheDocument();
        // Test button
        const buttonEl = screen.queryByText("Live Demo");
        expect(buttonEl).toBeInTheDocument();
        // Test image
        const bgImg = await screen.queryByTestId("project_container");
        expect(bgImg).toHaveStyle(`background-image: url(${process.env.PUBLIC_URL + '/assests/' + props.backgroundImage})`)
    })
})