export const inputClassName = `
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

export const outputClassName = `
<common-modal modal-header="test">
  <div className="row more-head-room">
    <button className="pull-right" ng-click="submitEmail();">
      hello
    </button>
    <button className="button__reject" ng-click="closeDialog()">
      Cancel
    </button>
  </div>
</common-modal>;
`;