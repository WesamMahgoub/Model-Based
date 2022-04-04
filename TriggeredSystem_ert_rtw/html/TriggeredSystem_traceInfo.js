function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["TriggeredSystem:1"] = "TriggeredSystem.c:61&TriggeredSystem.h:50";
	/* <Root>/Display */
	this.urlHashMap["TriggeredSystem:18"] = "msg=rtwMsg_reducedBlock&block=TriggeredSystem:18";
	/* <Root>/Pulse
Generator */
	this.urlHashMap["TriggeredSystem:16"] = "TriggeredSystem.c:42,51,130&TriggeredSystem.h:40";
	/* <Root>/Scope */
	this.urlHashMap["TriggeredSystem:61"] = "msg=rtwMsg_reducedBlock&block=TriggeredSystem:61";
	/* <Root>/Triggered
Subsystem */
	this.urlHashMap["TriggeredSystem:3"] = "TriggeredSystem.c:53,109,134,140&TriggeredSystem.h:45";
	/* <Root>/Out1 */
	this.urlHashMap["TriggeredSystem:15"] = "TriggeredSystem.c:93,100,135&TriggeredSystem.h:55";
	/* <S1>/Trigger */
	this.urlHashMap["TriggeredSystem:5"] = "TriggeredSystem.c:54";
	/* <S1>/Chart */
	this.urlHashMap["TriggeredSystem:8"] = "TriggeredSystem.c:83,105,136";
	/* <S1>/Chart1 */
	this.urlHashMap["TriggeredSystem:19"] = "TriggeredSystem.c:60,81";
	/* <S2>:3 */
	this.urlHashMap["TriggeredSystem:8:3"] = "TriggeredSystem.c:91";
	/* <S2>:4 */
	this.urlHashMap["TriggeredSystem:8:4"] = "TriggeredSystem.c:94";
	/* <S2>:5 */
	this.urlHashMap["TriggeredSystem:8:5"] = "TriggeredSystem.c:101";
	/* <S2>:6 */
	this.urlHashMap["TriggeredSystem:8:6"] = "TriggeredSystem.c:95";
	/* <S2>:7 */
	this.urlHashMap["TriggeredSystem:8:7"] = "TriggeredSystem.c:98";
	/* <S2>:8 */
	this.urlHashMap["TriggeredSystem:8:8"] = "TriggeredSystem.c:106";
	/* <S3>:23 */
	this.urlHashMap["TriggeredSystem:19:23"] = "TriggeredSystem.c:69";
	/* <S3>:24 */
	this.urlHashMap["TriggeredSystem:19:24"] = "TriggeredSystem.c:71";
	/* <S3>:25 */
	this.urlHashMap["TriggeredSystem:19:25"] = "TriggeredSystem.c:77";
	/* <S3>:26 */
	this.urlHashMap["TriggeredSystem:19:26"] = "TriggeredSystem.c:72";
	/* <S3>:27 */
	this.urlHashMap["TriggeredSystem:19:27"] = "TriggeredSystem.c:75";
	/* <S3>:28 */
	this.urlHashMap["TriggeredSystem:19:28"] = "TriggeredSystem.c:84";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "TriggeredSystem"};
	this.sidHashMap["TriggeredSystem"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "TriggeredSystem:3"};
	this.sidHashMap["TriggeredSystem:3"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "TriggeredSystem:8"};
	this.sidHashMap["TriggeredSystem:8"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "TriggeredSystem:19"};
	this.sidHashMap["TriggeredSystem:19"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "TriggeredSystem:1"};
	this.sidHashMap["TriggeredSystem:1"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "TriggeredSystem:18"};
	this.sidHashMap["TriggeredSystem:18"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/Pulse Generator"] = {sid: "TriggeredSystem:16"};
	this.sidHashMap["TriggeredSystem:16"] = {rtwname: "<Root>/Pulse Generator"};
	this.rtwnameHashMap["<Root>/Scope"] = {sid: "TriggeredSystem:61"};
	this.sidHashMap["TriggeredSystem:61"] = {rtwname: "<Root>/Scope"};
	this.rtwnameHashMap["<Root>/Triggered Subsystem"] = {sid: "TriggeredSystem:3"};
	this.sidHashMap["TriggeredSystem:3"] = {rtwname: "<Root>/Triggered Subsystem"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "TriggeredSystem:15"};
	this.sidHashMap["TriggeredSystem:15"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/In1"] = {sid: "TriggeredSystem:4"};
	this.sidHashMap["TriggeredSystem:4"] = {rtwname: "<S1>/In1"};
	this.rtwnameHashMap["<S1>/Trigger"] = {sid: "TriggeredSystem:5"};
	this.sidHashMap["TriggeredSystem:5"] = {rtwname: "<S1>/Trigger"};
	this.rtwnameHashMap["<S1>/Chart"] = {sid: "TriggeredSystem:8"};
	this.sidHashMap["TriggeredSystem:8"] = {rtwname: "<S1>/Chart"};
	this.rtwnameHashMap["<S1>/Chart1"] = {sid: "TriggeredSystem:19"};
	this.sidHashMap["TriggeredSystem:19"] = {rtwname: "<S1>/Chart1"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "TriggeredSystem:6"};
	this.sidHashMap["TriggeredSystem:6"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>:3"] = {sid: "TriggeredSystem:8:3"};
	this.sidHashMap["TriggeredSystem:8:3"] = {rtwname: "<S2>:3"};
	this.rtwnameHashMap["<S2>:4"] = {sid: "TriggeredSystem:8:4"};
	this.sidHashMap["TriggeredSystem:8:4"] = {rtwname: "<S2>:4"};
	this.rtwnameHashMap["<S2>:5"] = {sid: "TriggeredSystem:8:5"};
	this.sidHashMap["TriggeredSystem:8:5"] = {rtwname: "<S2>:5"};
	this.rtwnameHashMap["<S2>:6"] = {sid: "TriggeredSystem:8:6"};
	this.sidHashMap["TriggeredSystem:8:6"] = {rtwname: "<S2>:6"};
	this.rtwnameHashMap["<S2>:7"] = {sid: "TriggeredSystem:8:7"};
	this.sidHashMap["TriggeredSystem:8:7"] = {rtwname: "<S2>:7"};
	this.rtwnameHashMap["<S2>:8"] = {sid: "TriggeredSystem:8:8"};
	this.sidHashMap["TriggeredSystem:8:8"] = {rtwname: "<S2>:8"};
	this.rtwnameHashMap["<S3>:23"] = {sid: "TriggeredSystem:19:23"};
	this.sidHashMap["TriggeredSystem:19:23"] = {rtwname: "<S3>:23"};
	this.rtwnameHashMap["<S3>:24"] = {sid: "TriggeredSystem:19:24"};
	this.sidHashMap["TriggeredSystem:19:24"] = {rtwname: "<S3>:24"};
	this.rtwnameHashMap["<S3>:25"] = {sid: "TriggeredSystem:19:25"};
	this.sidHashMap["TriggeredSystem:19:25"] = {rtwname: "<S3>:25"};
	this.rtwnameHashMap["<S3>:26"] = {sid: "TriggeredSystem:19:26"};
	this.sidHashMap["TriggeredSystem:19:26"] = {rtwname: "<S3>:26"};
	this.rtwnameHashMap["<S3>:27"] = {sid: "TriggeredSystem:19:27"};
	this.sidHashMap["TriggeredSystem:19:27"] = {rtwname: "<S3>:27"};
	this.rtwnameHashMap["<S3>:28"] = {sid: "TriggeredSystem:19:28"};
	this.sidHashMap["TriggeredSystem:19:28"] = {rtwname: "<S3>:28"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
