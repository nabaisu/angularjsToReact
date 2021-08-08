export const inputWrapClass = `
<div modal-header="something">
  <button>ola!</button>
</div>
`;

export const outputWrapClass = `
class DefaultClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div modal-header="something">
        <button>ola!</button>
      </div>
    );
  }
}
`;
