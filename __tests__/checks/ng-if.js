export const inputNgIf = `
<div class="modal-header-combined {{customized}}" ng-show="!waitLoad">
  <div ng-if="!customized" class="modal-header-combined__header heading-2">
    {{ modalHeader }}
  </div>
  <p class="random" ng-if="second">
    {{ modalHeader }}
  </p>
  <div class="modal-header-combined__content" ng-transclude></div>
</div>
`;

export const outputNgIf = `
<div class="modal-header-combined {{customized}}" ng-show="!waitLoad">
  {!customized ? (
    <div class="modal-header-combined__header heading-2">{{ modalHeader }}</div>
  ) : null}
  {second && <p class="random">{{ modalHeader }}</p>}
  <div class="modal-header-combined__content" ng-transclude></div>
</div>
`;