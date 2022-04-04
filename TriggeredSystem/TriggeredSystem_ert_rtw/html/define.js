function CodeDefine() { 
this.def = new Array();
this.def["rt_OneStep"] = {file: "ert_main_c.html",line:34,type:"fcn"};
this.def["main"] = {file: "ert_main_c.html",line:71,type:"fcn"};
this.def["TriggeredSystem_DW"] = {file: "TriggeredSystem_c.html",line:20,type:"var"};
this.def["TriggeredSystem_PrevZCX"] = {file: "TriggeredSystem_c.html",line:23,type:"var"};
this.def["TriggeredSystem_U"] = {file: "TriggeredSystem_c.html",line:26,type:"var"};
this.def["TriggeredSystem_Y"] = {file: "TriggeredSystem_c.html",line:29,type:"var"};
this.def["TriggeredSystem_M_"] = {file: "TriggeredSystem_c.html",line:32,type:"var"};
this.def["TriggeredSystem_M"] = {file: "TriggeredSystem_c.html",line:33,type:"var"};
this.def["TriggeredSystem_step"] = {file: "TriggeredSystem_c.html",line:36,type:"fcn"};
this.def["TriggeredSystem_initialize"] = {file: "TriggeredSystem_c.html",line:113,type:"fcn"};
this.def["TriggeredSystem_terminate"] = {file: "TriggeredSystem_c.html",line:144,type:"fcn"};
this.def["DW_TriggeredSystem_T"] = {file: "TriggeredSystem_h.html",line:41,type:"type"};
this.def["PrevZCX_TriggeredSystem_T"] = {file: "TriggeredSystem_h.html",line:46,type:"type"};
this.def["ExtU_TriggeredSystem_T"] = {file: "TriggeredSystem_h.html",line:51,type:"type"};
this.def["ExtY_TriggeredSystem_T"] = {file: "TriggeredSystem_h.html",line:56,type:"type"};
this.def["RT_MODEL_TriggeredSystem_T"] = {file: "TriggeredSystem_types_h.html",line:20,type:"type"};
this.def["rt_ZCFcn"] = {file: "rt_zcfcn_c.html",line:19,type:"fcn"};
this.def["int8_T"] = {file: "rtwtypes_h.html",line:47,type:"type"};
this.def["uint8_T"] = {file: "rtwtypes_h.html",line:48,type:"type"};
this.def["int16_T"] = {file: "rtwtypes_h.html",line:49,type:"type"};
this.def["uint16_T"] = {file: "rtwtypes_h.html",line:50,type:"type"};
this.def["int32_T"] = {file: "rtwtypes_h.html",line:51,type:"type"};
this.def["uint32_T"] = {file: "rtwtypes_h.html",line:52,type:"type"};
this.def["real32_T"] = {file: "rtwtypes_h.html",line:53,type:"type"};
this.def["real64_T"] = {file: "rtwtypes_h.html",line:54,type:"type"};
this.def["real_T"] = {file: "rtwtypes_h.html",line:60,type:"type"};
this.def["time_T"] = {file: "rtwtypes_h.html",line:61,type:"type"};
this.def["boolean_T"] = {file: "rtwtypes_h.html",line:62,type:"type"};
this.def["int_T"] = {file: "rtwtypes_h.html",line:63,type:"type"};
this.def["uint_T"] = {file: "rtwtypes_h.html",line:64,type:"type"};
this.def["ulong_T"] = {file: "rtwtypes_h.html",line:65,type:"type"};
this.def["char_T"] = {file: "rtwtypes_h.html",line:66,type:"type"};
this.def["uchar_T"] = {file: "rtwtypes_h.html",line:67,type:"type"};
this.def["byte_T"] = {file: "rtwtypes_h.html",line:68,type:"type"};
this.def["creal32_T"] = {file: "rtwtypes_h.html",line:78,type:"type"};
this.def["creal64_T"] = {file: "rtwtypes_h.html",line:83,type:"type"};
this.def["creal_T"] = {file: "rtwtypes_h.html",line:88,type:"type"};
this.def["cint8_T"] = {file: "rtwtypes_h.html",line:95,type:"type"};
this.def["cuint8_T"] = {file: "rtwtypes_h.html",line:102,type:"type"};
this.def["cint16_T"] = {file: "rtwtypes_h.html",line:109,type:"type"};
this.def["cuint16_T"] = {file: "rtwtypes_h.html",line:116,type:"type"};
this.def["cint32_T"] = {file: "rtwtypes_h.html",line:123,type:"type"};
this.def["cuint32_T"] = {file: "rtwtypes_h.html",line:130,type:"type"};
this.def["pointer_T"] = {file: "rtwtypes_h.html",line:148,type:"type"};
this.def["ZCDirection"] = {file: "zero_crossing_types_h.html",line:25,type:"type"};
this.def["ZCSigState"] = {file: "zero_crossing_types_h.html",line:28,type:"type"};
this.def["ZCEventType"] = {file: "zero_crossing_types_h.html",line:41,type:"type"};
}
CodeDefine.instance = new CodeDefine();
var testHarnessInfo = {OwnerFileName: "", HarnessOwner: "", HarnessName: "", IsTestHarness: "0"};
var relPathToBuildDir = "../ert_main.c";
var fileSep = "\\";
var isPC = true;
function Html2SrcLink() {
	this.html2SrcPath = new Array;
	this.html2Root = new Array;
	this.html2SrcPath["ert_main_c.html"] = "../ert_main.c";
	this.html2Root["ert_main_c.html"] = "ert_main_c.html";
	this.html2SrcPath["TriggeredSystem_c.html"] = "../TriggeredSystem.c";
	this.html2Root["TriggeredSystem_c.html"] = "TriggeredSystem_c.html";
	this.html2SrcPath["TriggeredSystem_h.html"] = "../TriggeredSystem.h";
	this.html2Root["TriggeredSystem_h.html"] = "TriggeredSystem_h.html";
	this.html2SrcPath["TriggeredSystem_private_h.html"] = "../TriggeredSystem_private.h";
	this.html2Root["TriggeredSystem_private_h.html"] = "TriggeredSystem_private_h.html";
	this.html2SrcPath["TriggeredSystem_types_h.html"] = "../TriggeredSystem_types.h";
	this.html2Root["TriggeredSystem_types_h.html"] = "TriggeredSystem_types_h.html";
	this.html2SrcPath["rt_zcfcn_c.html"] = "../rt_zcfcn.c";
	this.html2Root["rt_zcfcn_c.html"] = "rt_zcfcn_c.html";
	this.html2SrcPath["rt_zcfcn_h.html"] = "../rt_zcfcn.h";
	this.html2Root["rt_zcfcn_h.html"] = "rt_zcfcn_h.html";
	this.html2SrcPath["rtwtypes_h.html"] = "../rtwtypes.h";
	this.html2Root["rtwtypes_h.html"] = "rtwtypes_h.html";
	this.html2SrcPath["zero_crossing_types_h.html"] = "../zero_crossing_types.h";
	this.html2Root["zero_crossing_types_h.html"] = "zero_crossing_types_h.html";
	this.getLink2Src = function (htmlFileName) {
		 if (this.html2SrcPath[htmlFileName])
			 return this.html2SrcPath[htmlFileName];
		 else
			 return null;
	}
	this.getLinkFromRoot = function (htmlFileName) {
		 if (this.html2Root[htmlFileName])
			 return this.html2Root[htmlFileName];
		 else
			 return null;
	}
}
Html2SrcLink.instance = new Html2SrcLink();
var fileList = [
"ert_main_c.html","TriggeredSystem_c.html","TriggeredSystem_h.html","TriggeredSystem_private_h.html","TriggeredSystem_types_h.html","rt_zcfcn_c.html","rt_zcfcn_h.html","rtwtypes_h.html","zero_crossing_types_h.html"];
