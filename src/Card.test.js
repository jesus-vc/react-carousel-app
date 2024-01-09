import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("renders without crashing", () => {
  render(<Card />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(
    <Card
      caption={TEST_IMAGES[1].caption}
      src={TEST_IMAGES[1].src}
      currNum={1}
      totalNum={3}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
