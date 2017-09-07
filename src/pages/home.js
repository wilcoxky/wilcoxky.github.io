import { h, Component } from "preact";
import styled from "styled-components";

import { Page, Section } from '../components';
const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  &:hover {
    border: 2px solid pink;
  }
`;

export default class Home extends Component {
  render(props, state) {
    return (
      <Page>
        <Section>
          <p>hello world</p>
        </Section>
      </Page>
    );
  }
}
