export const inputNgClick = `
<common-modal modal-header="test">
  <div class="row more-head-room">
    <button class="pull-right" ng-click="submitEmail();">
      hello
    </button>
    <button class="button__reject" ng-click="closeDialog()">
      Cancel
    </button>
  </div>
</common-modal>;
`;

export const outputNgClick = `
<common-modal modal-header="test">
  <div class="row more-head-room">
    <button class="pull-right" onClick={submitEmail()}>
      hello
    </button>
    <button class="button__reject" onClick={closeDialog()}>
      Cancel
    </button>
  </div>
</common-modal>;
`;
