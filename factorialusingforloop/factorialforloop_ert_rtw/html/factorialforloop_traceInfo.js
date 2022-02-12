function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Input */
	this.urlHashMap["factorialforloop:7"] = "factorialforloop.h:37";
	/* <Root>/Constant */
	this.urlHashMap["factorialforloop:15"] = "factorialforloop.c:41,53";
	/* <Root>/For Iterator
Subsystem */
	this.urlHashMap["factorialforloop:1"] = "factorialforloop.c:35,54";
	/* <Root>/Output */
	this.urlHashMap["factorialforloop:5"] = "factorialforloop.c:43&factorialforloop.h:42";
	/* <S1>/For Iterator */
	this.urlHashMap["factorialforloop:3"] = "factorialforloop.c:36";
	/* <S1>/Product */
	this.urlHashMap["factorialforloop:9"] = "factorialforloop.c:44";
	/* <S1>/Unit Delay */
	this.urlHashMap["factorialforloop:8"] = "factorialforloop.c:38,45,49";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "factorialforloop"};
	this.sidHashMap["factorialforloop"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "factorialforloop:1"};
	this.sidHashMap["factorialforloop:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/Input"] = {sid: "factorialforloop:7"};
	this.sidHashMap["factorialforloop:7"] = {rtwname: "<Root>/Input"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "factorialforloop:15"};
	this.sidHashMap["factorialforloop:15"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/For Iterator Subsystem"] = {sid: "factorialforloop:1"};
	this.sidHashMap["factorialforloop:1"] = {rtwname: "<Root>/For Iterator Subsystem"};
	this.rtwnameHashMap["<Root>/Output"] = {sid: "factorialforloop:5"};
	this.sidHashMap["factorialforloop:5"] = {rtwname: "<Root>/Output"};
	this.rtwnameHashMap["<S1>/Num"] = {sid: "factorialforloop:2"};
	this.sidHashMap["factorialforloop:2"] = {rtwname: "<S1>/Num"};
	this.rtwnameHashMap["<S1>/For Iterator"] = {sid: "factorialforloop:3"};
	this.sidHashMap["factorialforloop:3"] = {rtwname: "<S1>/For Iterator"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "factorialforloop:9"};
	this.sidHashMap["factorialforloop:9"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Unit Delay"] = {sid: "factorialforloop:8"};
	this.sidHashMap["factorialforloop:8"] = {rtwname: "<S1>/Unit Delay"};
	this.rtwnameHashMap["<S1>/Fact"] = {sid: "factorialforloop:4"};
	this.sidHashMap["factorialforloop:4"] = {rtwname: "<S1>/Fact"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
