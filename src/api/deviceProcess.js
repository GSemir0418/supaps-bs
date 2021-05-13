import requestUtils from "./requestUtils";

class DeviceProcess {
  requestPrefix= '/api/WebChart/';

  async GetResultUnitLoadList(CaseId,FlowsheetId,ProcessingId) {
    return window.axios({
      method: 'get',
      url: `${this.requestPrefix}GetResultUnitLoadList${requestUtils.convertParam({CaseId,FlowsheetId,ProcessingId})}`
    });
  }
}

export default new DeviceProcess();
