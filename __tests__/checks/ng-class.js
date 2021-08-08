export const inputNgClass = `
<div>
  <div ng-class="{'highlight-column' : something.other}"></div>
  <div class="first" ng-class="{'second' : ola()}"></div>
</div>
`;

export const outputNgClass = `
<div>
  <div class={\` \${something.other ? 'highlight-column' : null}\`}></div>
  <div class={\`first \${ola() ? 'second' : null}\`}></div>
</div>
`;
