export const inputNgRepeat = `
<div>
  <ul>
    <li ng-repeat="som in something">{som.name}</li>
    <p ng-repeat="(outo, i) in outros">
      <ul>
        <li ng-repeat="item in items">other thing</li>
      </ul>
    </p>
  </ul>
</div>
`;

export const outputNgRepeat = `
<div>
  <ul>
    {something.map(som => {
      return <li key={som.id}>{som.name}</li>;
    })}
    {outros.map((outo, i) => {
      return (
        <p key={outo.id}>
          <ul>
            {items.map(item => {
              return <li key={item.id}>other thing</li>;
            })}
          </ul>
        </p>
      );
    })}
  </ul>
</div>
`;
