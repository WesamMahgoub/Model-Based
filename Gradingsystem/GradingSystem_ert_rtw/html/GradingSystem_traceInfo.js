function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/In1 */
	this.urlHashMap["GradingSystem:48"] = "GradingSystem.c:38,63,87&GradingSystem.h:43";
	/* <Root>/Display */
	this.urlHashMap["GradingSystem:46"] = "msg=rtwMsg_SimulationReducedBlock&block=GradingSystem:46";
	/* <Root>/If */
	this.urlHashMap["GradingSystem:5"] = "GradingSystem.c:35,58";
	/* <Root>/If Action
Subsystem */
	this.urlHashMap["GradingSystem:1"] = "GradingSystem.c:41,46";
	/* <Root>/If Action
Subsystem1 */
	this.urlHashMap["GradingSystem:6"] = "GradingSystem.c:49,54";
	/* <Root>/If Action
Subsystem2 */
	this.urlHashMap["GradingSystem:10"] = "GradingSystem.c:66,71";
	/* <Root>/If Action
Subsystem3 */
	this.urlHashMap["GradingSystem:14"] = "GradingSystem.c:74,79";
	/* <Root>/If Action
Subsystem4 */
	this.urlHashMap["GradingSystem:21"] = "GradingSystem.c:90,95";
	/* <Root>/If1 */
	this.urlHashMap["GradingSystem:18"] = "GradingSystem.c:60,83";
	/* <Root>/If2 */
	this.urlHashMap["GradingSystem:19"] = "GradingSystem.c:85,98";
	/* <Root>/Merge */
	this.urlHashMap["GradingSystem:25"] = "GradingSystem.h:38";
	/* <Root>/Out1 */
	this.urlHashMap["GradingSystem:26"] = "GradingSystem.c:100&GradingSystem.h:48";
	/* <S1>/Action Port */
	this.urlHashMap["GradingSystem:3"] = "GradingSystem.c:42";
	/* <S1>/Constant */
	this.urlHashMap["GradingSystem:36"] = "GradingSystem.c:36";
	/* <S2>/Action Port */
	this.urlHashMap["GradingSystem:8"] = "GradingSystem.c:50";
	/* <S2>/Constant */
	this.urlHashMap["GradingSystem:29"] = "GradingSystem.c:37";
	/* <S3>/Action Port */
	this.urlHashMap["GradingSystem:12"] = "GradingSystem.c:67";
	/* <S3>/Constant */
	this.urlHashMap["GradingSystem:30"] = "GradingSystem.c:61";
	/* <S4>/Action Port */
	this.urlHashMap["GradingSystem:16"] = "GradingSystem.c:75";
	/* <S4>/Constant */
	this.urlHashMap["GradingSystem:31"] = "GradingSystem.c:62";
	/* <S5>/Action Port */
	this.urlHashMap["GradingSystem:23"] = "GradingSystem.c:91";
	/* <S5>/Constant */
	this.urlHashMap["GradingSystem:27"] = "GradingSystem.c:86";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "GradingSystem"};
	this.sidHashMap["GradingSystem"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "GradingSystem:1"};
	this.sidHashMap["GradingSystem:1"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "GradingSystem:6"};
	this.sidHashMap["GradingSystem:6"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "GradingSystem:10"};
	this.sidHashMap["GradingSystem:10"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "GradingSystem:14"};
	this.sidHashMap["GradingSystem:14"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "GradingSystem:21"};
	this.sidHashMap["GradingSystem:21"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<Root>/In1"] = {sid: "GradingSystem:48"};
	this.sidHashMap["GradingSystem:48"] = {rtwname: "<Root>/In1"};
	this.rtwnameHashMap["<Root>/Display"] = {sid: "GradingSystem:46"};
	this.sidHashMap["GradingSystem:46"] = {rtwname: "<Root>/Display"};
	this.rtwnameHashMap["<Root>/If"] = {sid: "GradingSystem:5"};
	this.sidHashMap["GradingSystem:5"] = {rtwname: "<Root>/If"};
	this.rtwnameHashMap["<Root>/If Action Subsystem"] = {sid: "GradingSystem:1"};
	this.sidHashMap["GradingSystem:1"] = {rtwname: "<Root>/If Action Subsystem"};
	this.rtwnameHashMap["<Root>/If Action Subsystem1"] = {sid: "GradingSystem:6"};
	this.sidHashMap["GradingSystem:6"] = {rtwname: "<Root>/If Action Subsystem1"};
	this.rtwnameHashMap["<Root>/If Action Subsystem2"] = {sid: "GradingSystem:10"};
	this.sidHashMap["GradingSystem:10"] = {rtwname: "<Root>/If Action Subsystem2"};
	this.rtwnameHashMap["<Root>/If Action Subsystem3"] = {sid: "GradingSystem:14"};
	this.sidHashMap["GradingSystem:14"] = {rtwname: "<Root>/If Action Subsystem3"};
	this.rtwnameHashMap["<Root>/If Action Subsystem4"] = {sid: "GradingSystem:21"};
	this.sidHashMap["GradingSystem:21"] = {rtwname: "<Root>/If Action Subsystem4"};
	this.rtwnameHashMap["<Root>/If1"] = {sid: "GradingSystem:18"};
	this.sidHashMap["GradingSystem:18"] = {rtwname: "<Root>/If1"};
	this.rtwnameHashMap["<Root>/If2"] = {sid: "GradingSystem:19"};
	this.sidHashMap["GradingSystem:19"] = {rtwname: "<Root>/If2"};
	this.rtwnameHashMap["<Root>/Merge"] = {sid: "GradingSystem:25"};
	this.sidHashMap["GradingSystem:25"] = {rtwname: "<Root>/Merge"};
	this.rtwnameHashMap["<Root>/Out1"] = {sid: "GradingSystem:26"};
	this.sidHashMap["GradingSystem:26"] = {rtwname: "<Root>/Out1"};
	this.rtwnameHashMap["<S1>/Action Port"] = {sid: "GradingSystem:3"};
	this.sidHashMap["GradingSystem:3"] = {rtwname: "<S1>/Action Port"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "GradingSystem:36"};
	this.sidHashMap["GradingSystem:36"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Out1"] = {sid: "GradingSystem:4"};
	this.sidHashMap["GradingSystem:4"] = {rtwname: "<S1>/Out1"};
	this.rtwnameHashMap["<S2>/Action Port"] = {sid: "GradingSystem:8"};
	this.sidHashMap["GradingSystem:8"] = {rtwname: "<S2>/Action Port"};
	this.rtwnameHashMap["<S2>/Constant"] = {sid: "GradingSystem:29"};
	this.sidHashMap["GradingSystem:29"] = {rtwname: "<S2>/Constant"};
	this.rtwnameHashMap["<S2>/Out1"] = {sid: "GradingSystem:9"};
	this.sidHashMap["GradingSystem:9"] = {rtwname: "<S2>/Out1"};
	this.rtwnameHashMap["<S3>/Action Port"] = {sid: "GradingSystem:12"};
	this.sidHashMap["GradingSystem:12"] = {rtwname: "<S3>/Action Port"};
	this.rtwnameHashMap["<S3>/Constant"] = {sid: "GradingSystem:30"};
	this.sidHashMap["GradingSystem:30"] = {rtwname: "<S3>/Constant"};
	this.rtwnameHashMap["<S3>/Out1"] = {sid: "GradingSystem:13"};
	this.sidHashMap["GradingSystem:13"] = {rtwname: "<S3>/Out1"};
	this.rtwnameHashMap["<S4>/Action Port"] = {sid: "GradingSystem:16"};
	this.sidHashMap["GradingSystem:16"] = {rtwname: "<S4>/Action Port"};
	this.rtwnameHashMap["<S4>/Constant"] = {sid: "GradingSystem:31"};
	this.sidHashMap["GradingSystem:31"] = {rtwname: "<S4>/Constant"};
	this.rtwnameHashMap["<S4>/Out1"] = {sid: "GradingSystem:17"};
	this.sidHashMap["GradingSystem:17"] = {rtwname: "<S4>/Out1"};
	this.rtwnameHashMap["<S5>/Action Port"] = {sid: "GradingSystem:23"};
	this.sidHashMap["GradingSystem:23"] = {rtwname: "<S5>/Action Port"};
	this.rtwnameHashMap["<S5>/Constant"] = {sid: "GradingSystem:27"};
	this.sidHashMap["GradingSystem:27"] = {rtwname: "<S5>/Constant"};
	this.rtwnameHashMap["<S5>/Out1"] = {sid: "GradingSystem:24"};
	this.sidHashMap["GradingSystem:24"] = {rtwname: "<S5>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
