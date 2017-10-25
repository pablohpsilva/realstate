import { render } from 'inferno';
import App from '@/App';

const createDiv = () => {
  return document.createElement('div');
}

expect.addSnapshotSerializer({
  test: (val) => val && val.children,
  print: (val) => `${val.children.toString()}`
})

it('renders without crashing', () => {
  const appRendered = render(<App />, createDiv());
  expect(appRendered).toMatchSnapshot()
});

it('renders a div with a className App-header', () => {
  const appRendered = render(<App />, createDiv());
  expect(appRendered.children[0].className).toBe('App-header')
  expect(appRendered).toMatchSnapshot()
})