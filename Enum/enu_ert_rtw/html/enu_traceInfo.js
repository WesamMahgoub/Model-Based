function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["enu:13"] = "enu.c:35&enu.h:37";
	/* <Root>/Data Type Conversion */
	this.urlHashMap["enu:4"] = "enu.c:34";
	/* <Root>/Data Type Conversion1 */
	this.urlHashMap["enu:5"] = "msg=rtwMsg_reducedBlock&block=enu:5";
	/* <Root>/Scope */
	this.urlHashMap["enu:2"] = "msg=rtwMsg_reducedBlock&block=enu:2";
	/* <Root>/Out1 */
	this.urlHashMap["enu:12"] = "enu.c:32&enu.h:42";
	/* <S1>/Constant */
	this.urlHashMap["enu:1:158"] = "enu.c:33";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "enu"};
	this.sidHashMap["enu"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "enu:1"};
	this.sidHashMap["enu:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "enu:13"};
	this.sidHashMap["enu:13"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Data Type Conversion"] = {sid: "enu:4"};
	this.sidHashMap["enu:4"] = {rtwname: "<Root>/Data Type Conversion"};
	this.rtwnameHashMap["<Root>/Data Type Conversion1"] = {sid: "enu:5"};
	this.sidHashMap["enu:5"] = {rtwname: "<Root>/Data Type Conversion1"};
	this.rtwnameHashMap["<Root>/Enumerated Constant"] = {sid: "enu:1"};
	this.sidHashMap["enu:1"] = {rtwname: "<Root>/Enumerated Constant"};
	this.rtwnameHashMap["<Root>/Mux"] = {sid: "enu:7"};
	this.sidHashMap["enu:7"] = {rtwname: "<Root>/Mux"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "enu:2"};
	this.sidHashMap["enu:2"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "enu:12"};
	this.sidHashMap["enu:12"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "enu:1:158"};
	this.sidHashMap["enu:1:158"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Out"] = {sid: "enu:1:159"};
	this.sidHashMap["enu:1:159"] = {rtwname: "<S1>/Out"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
