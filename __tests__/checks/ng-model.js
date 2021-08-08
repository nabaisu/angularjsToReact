export const inputNgModel = `
<common-modal modal-header="something">
<div class="paf-notify-inputs">
  <div class="form-group">
    <label class="no-extra-margin" for="paf-size">test:
        <input class="form-control sm-modal" id='paf-size' ng-model="emailTextDialog.size"/>
    </label>
  </div>
  <div class="form-group">
    <label class="no-extra-margin" for="paf-timing">test2:
        <input class="form-control sm-modal" id='paf-timing' ng-model="timing"/>
    </label>
  </div>
  <div class="form-group">
    <label class="no-extra-margin" for="paf-note">Note:
        <textarea rows="3" class="form-control sm-modal" id='paf-note' ng-model="emailTextDialog['body']"></textarea>
    </label>
  </div>
</div>
</common-modal>
`;

export const outputNgModel = `
<common-modal modal-header="something">
<div class="paf-notify-inputs">
  <div class="form-group">
    <label class="no-extra-margin" for="paf-size">test:
        <input class="form-control sm-modal" id='paf-size' value={this.state.emailTextDialog.size}/>
    </label>
  </div>
  <div class="form-group">
    <label class="no-extra-margin" for="paf-timing">test2:
        <input class="form-control sm-modal" id='paf-timing' value={this.state.timing}/>
    </label>
  </div>
  <div class="form-group">
    <label class="no-extra-margin" for="paf-note">Note:
        <textarea rows="3" class="form-control sm-modal" id='paf-note' value={this.state.emailTextDialog['body']}></textarea>
    </label>
  </div>
</div>
</common-modal>
`;
