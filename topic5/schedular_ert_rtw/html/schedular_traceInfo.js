function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Chart */
	this.urlHashMap["schedular:11"] = "schedular.c:35,65,90&schedular.h:47,48";
	/* <Root>/Constant */
	this.urlHashMap["schedular:9"] = "schedular.c:36";
	/* <Root>/Function-Call
Generator */
	this.urlHashMap["schedular:6"] = "msg=rtwMsg_CodeGenerationReducedBlock&block=schedular:6";
	/* <Root>/Function-Call
Subsystem */
	this.urlHashMap["schedular:2"] = "schedular.c:55,60";
	/* <Root>/Out1 */
	this.urlHashMap["schedular:8"] = "schedular.c:67&schedular.h:53";
	/* <S1>:1 */
	this.urlHashMap["schedular:11:1"] = "schedular.c:53";
	/* <S1>:2 */
	this.urlHashMap["schedular:11:2"] = "schedular.c:50";
	/* <S1>:5 */
	this.urlHashMap["schedular:11:5"] = "schedular.c:56";
	/* <S1>:3 */
	this.urlHashMap["schedular:11:3"] = "schedular.c:57";
	/* <S2>/In1 */
	this.urlHashMap["schedular:3"] = "schedular.c:37&schedular.h:38";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "schedular"};
	this.sidHashMap["schedular"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "schedular:11"};
	this.sidHashMap["schedular:11"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "schedular:2"};
	this.sidHashMap["schedular:2"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<Root>/Chart"] = {sid: "schedular:11"};
	this.sidHashMap["schedular:11"] = {rtwname: "<Root>/Chart"};
	this.rtwnameHashMap["<Root>/Constant"] = {sid: "schedular:9"};
	this.sidHashMap["schedular:9"] = {rtwname: "<Root>/Constant"};
	this.rtwnameHashMap["<Root>/Function-Call Generator"] = {sid: "schedular:6"};
	this.sidHashMap["schedular:6"] = {rtwname: "<Root>/Function-Call Generator"};
	this.rtwnameHashMap["<Root>/Function-Call Subsystem"] = {sid: "schedular:2"};
	this.sidHashMap["schedular:2"] = {rtwname: "<Root>/Function-Call Subsystem"};
	this.rtwnameHashMap["<Root>/Lamp"] = {sid: "schedular:7"};
	this.sidHashMap["schedular:7"] = {rtwname: "<Root>/Lamp"};
	this.rtwnameHashMap["<Root>/Toggle Switch"] = {sid: "schedular:10"};
	this.sidHashMap["schedular:10"] = {rtwname: "<Root>/Toggle Switch"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "schedular:8"};
	this.sidHashMap["schedular:8"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>:1"] = {sid: "schedular:11:1"};
	this.sidHashMap["schedular:11:1"] = {rtwname: "<S1>:1"};
	this.rtwnameHashMap["<S1>:2"] = {sid: "schedular:11:2"};
	this.sidHashMap["schedular:11:2"] = {rtwname: "<S1>:2"};
	this.rtwnameHashMap["<S1>:5"] = {sid: "schedular:11:5"};
	this.sidHashMap["schedular:11:5"] = {rtwname: "<S1>:5"};
	this.rtwnameHashMap["<S1>:3"] = {sid: "schedular:11:3"};
	this.sidHashMap["schedular:11:3"] = {rtwname: "<S1>:3"};
	this.rtwnameHashMap["<S2>/In1"] = {sid: "schedular:3"};
	this.sidHashMap["schedular:3"] = {rtwname: "<S2>/In1"};
	this.rtwnameHashMap["<S2>/function"] = {sid: "schedular:4"};
	this.sidHashMap["schedular:4"] = {rtwname: "<S2>/function"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "schedular:5"};
	this.sidHashMap["schedular:5"] = {rtwname: "<S2>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
