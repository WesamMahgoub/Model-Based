function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["calculatorsubsystem:8"] = "calculatorsubsystem.c:56&calculatorsubsystem.h:51";
	/* <Root>/In2 */
	this.urlHashMap["calculatorsubsystem:9"] = "calculatorsubsystem.c:57&calculatorsubsystem.h:52";
	/* <Root>/Subsystem */
	this.urlHashMap["calculatorsubsystem:1"] = "calculatorsubsystem.c:33,54,62&calculatorsubsystem.h:36,46";
	/* <Root>/Out1 */
	this.urlHashMap["calculatorsubsystem:10"] = "calculatorsubsystem.c:64&calculatorsubsystem.h:57";
	/* <Root>/Out2 */
	this.urlHashMap["calculatorsubsystem:11"] = "calculatorsubsystem.c:67&calculatorsubsystem.h:58";
	/* <Root>/Out3 */
	this.urlHashMap["calculatorsubsystem:12"] = "calculatorsubsystem.c:70&calculatorsubsystem.h:59";
	/* <Root>/Out4 */
	this.urlHashMap["calculatorsubsystem:13"] = "calculatorsubsystem.c:73&calculatorsubsystem.h:60";
	/* <S1>/Add */
	this.urlHashMap["calculatorsubsystem:17"] = "calculatorsubsystem.c:37&calculatorsubsystem.h:39";
	/* <S1>/Divide */
	this.urlHashMap["calculatorsubsystem:18"] = "calculatorsubsystem.c:40&calculatorsubsystem.h:40";
	/* <S1>/Product */
	this.urlHashMap["calculatorsubsystem:19"] = "calculatorsubsystem.c:44&calculatorsubsystem.h:38";
	/* <S1>/Subtract */
	this.urlHashMap["calculatorsubsystem:20"] = "calculatorsubsystem.c:47&calculatorsubsystem.h:41";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "calculatorsubsystem"};
	this.sidHashMap["calculatorsubsystem"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "calculatorsubsystem:1"};
	this.sidHashMap["calculatorsubsystem:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "calculatorsubsystem:8"};
	this.sidHashMap["calculatorsubsystem:8"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/In2"] = {sid: "calculatorsubsystem:9"};
	this.sidHashMap["calculatorsubsystem:9"] = {rtwname: "<Root>/In2"};
	this.rtwnameHashMap["<Root>/Subsystem"] = {sid: "calculatorsubsystem:1"};
	this.sidHashMap["calculatorsubsystem:1"] = {rtwname: "<Root>/Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "calculatorsubsystem:10"};
	this.sidHashMap["calculatorsubsystem:10"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<Root>/Out2"] = {sid: "calculatorsubsystem:11"};
	this.sidHashMap["calculatorsubsystem:11"] = {rtwname: "<Root>/Out2"};
	this.rtwnameHashMap["<Root>/Out3"] = {sid: "calculatorsubsystem:12"};
	this.sidHashMap["calculatorsubsystem:12"] = {rtwname: "<Root>/Out3"};
	this.rtwnameHashMap["<Root>/Out4"] = {sid: "calculatorsubsystem:13"};
	this.sidHashMap["calculatorsubsystem:13"] = {rtwname: "<Root>/Out4"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "calculatorsubsystem:15"};
	this.sidHashMap["calculatorsubsystem:15"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/In2"] = {sid: "calculatorsubsystem:16"};
	this.sidHashMap["calculatorsubsystem:16"] = {rtwname: "<S1>/In2"};
	this.rtwnameHashMap["<S1>/Add"] = {sid: "calculatorsubsystem:17"};
	this.sidHashMap["calculatorsubsystem:17"] = {rtwname: "<S1>/Add"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "calculatorsubsystem:18"};
	this.sidHashMap["calculatorsubsystem:18"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "calculatorsubsystem:19"};
	this.sidHashMap["calculatorsubsystem:19"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Subtract"] = {sid: "calculatorsubsystem:20"};
	this.sidHashMap["calculatorsubsystem:20"] = {rtwname: "<S1>/Subtract"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "calculatorsubsystem:21"};
	this.sidHashMap["calculatorsubsystem:21"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S1>/Out2"] = {sid: "calculatorsubsystem:22"};
	this.sidHashMap["calculatorsubsystem:22"] = {rtwname: "<S1>/Out2"};
	this.rtwnameHashMap["<S1>/Out3"] = {sid: "calculatorsubsystem:23"};
	this.sidHashMap["calculatorsubsystem:23"] = {rtwname: "<S1>/Out3"};
	this.rtwnameHashMap["<S1>/Out4"] = {sid: "calculatorsubsystem:24"};
	this.sidHashMap["calculatorsubsystem:24"] = {rtwname: "<S1>/Out4"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
