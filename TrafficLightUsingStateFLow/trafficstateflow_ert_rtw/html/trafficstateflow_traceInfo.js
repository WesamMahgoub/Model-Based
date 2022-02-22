function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["trafficstateflow:1"] = "trafficstateflow.c:19,41,119,151&trafficstateflow.h:38,39,40,57,58,59";
	/* <Root>/Out1 */
	this.urlHashMap["trafficstateflow:25"] = "trafficstateflow.c:121&trafficstateflow.h:64";
	/* <Root>/Out2 */
	this.urlHashMap["trafficstateflow:26"] = "trafficstateflow.c:124&trafficstateflow.h:65";
	/* <Root>/Out3 */
	this.urlHashMap["trafficstateflow:27"] = "trafficstateflow.c:127&trafficstateflow.h:66";
	/* <S1>:4 */
	this.urlHashMap["trafficstateflow:1:4"] = "trafficstateflow.c:64,88";
	/* <S1>:3 */
	this.urlHashMap["trafficstateflow:1:3"] = "trafficstateflow.c:82,106";
	/* <S1>:1 */
	this.urlHashMap["trafficstateflow:1:1"] = "trafficstateflow.c:57,70,100";
	/* <S1>:2 */
	this.urlHashMap["trafficstateflow:1:2"] = "trafficstateflow.c:53";
	/* <S1>:5 */
	this.urlHashMap["trafficstateflow:1:5"] = "trafficstateflow.c:102";
	/* <S1>:9 */
	this.urlHashMap["trafficstateflow:1:9"] = "trafficstateflow.c:66";
	/* <S1>:8 */
	this.urlHashMap["trafficstateflow:1:8"] = "trafficstateflow.c:84";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "trafficstateflow"};
	this.sidHashMap["trafficstateflow"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "trafficstateflow:1"};
	this.sidHashMap["trafficstateflow:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "trafficstateflow:1"};
	this.sidHashMap["trafficstateflow:1"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/green signal"] = {sid: "trafficstateflow:5"};
	this.sidHashMap["trafficstateflow:5"] = {rtwname: "<Root>/green signal"};
	this.rtwnameHashMap["<Root>/red signal"] = {sid: "trafficstateflow:2"};
	this.sidHashMap["trafficstateflow:2"] = {rtwname: "<Root>/red signal"};
	this.rtwnameHashMap["<Root>/yellow signal"] = {sid: "trafficstateflow:4"};
	this.sidHashMap["trafficstateflow:4"] = {rtwname: "<Root>/yellow signal"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "trafficstateflow:25"};
	this.sidHashMap["trafficstateflow:25"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "trafficstateflow:26"};
	this.sidHashMap["trafficstateflow:26"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "trafficstateflow:27"};
	this.sidHashMap["trafficstateflow:27"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<S1>:4"] = {sid: "trafficstateflow:1:4"};
	this.sidHashMap["trafficstateflow:1:4"] = {rtwname: "<S1>:4"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "trafficstateflow:1:3"};
	this.sidHashMap["trafficstateflow:1:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "trafficstateflow:1:1"};
	this.sidHashMap["trafficstateflow:1:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "trafficstateflow:1:2"};
	this.sidHashMap["trafficstateflow:1:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "trafficstateflow:1:5"};
	this.sidHashMap["trafficstateflow:1:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S1>:9"] = {sid: "trafficstateflow:1:9"};
	this.sidHashMap["trafficstateflow:1:9"] = {rtwname: "<S1>:9"};
	this.rtwnameHashMap["<S1>:8"] = {sid: "trafficstateflow:1:8"};
	this.sidHashMap["trafficstateflow:1:8"] = {rtwname: "<S1>:8"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
