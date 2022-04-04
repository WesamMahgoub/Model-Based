/*
 * File: TriggeredSystem.h
 *
 * Code generated for Simulink model 'TriggeredSystem'.
 *
 * Model version                  : 1.7
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Mon Apr 04 10:23:12 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_TriggeredSystem_h_
#define RTW_HEADER_TriggeredSystem_h_
#include <stddef.h>
#include <string.h>
#ifndef TriggeredSystem_COMMON_INCLUDES_
# define TriggeredSystem_COMMON_INCLUDES_
#include "rtwtypes.h"
#include "zero_crossing_types.h"
#endif                                 /* TriggeredSystem_COMMON_INCLUDES_ */

#include "TriggeredSystem_types.h"
#include "rt_zcfcn.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  int32_T clockTickCounter;            /* '<Root>/Pulse Generator' */
} DW_TriggeredSystem_T;

/* Zero-crossing (trigger) state */
typedef struct {
  ZCSigState TriggeredSubsystem_Trig_ZCE;/* '<Root>/Triggered Subsystem' */
} PrevZCX_TriggeredSystem_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  real_T In1;                          /* '<Root>/In1' */
} ExtU_TriggeredSystem_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint8_T Out1;                        /* '<Root>/Out1' */
} ExtY_TriggeredSystem_T;

/* Real-time Model Data Structure */
struct tag_RTM_TriggeredSystem_T {
  const char_T * volatile errorStatus;
};

/* Block states (auto storage) */
extern DW_TriggeredSystem_T TriggeredSystem_DW;

/* External inputs (root inport signals with auto storage) */
extern ExtU_TriggeredSystem_T TriggeredSystem_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_TriggeredSystem_T TriggeredSystem_Y;

/* Model entry point functions */
extern void TriggeredSystem_initialize(void);
extern void TriggeredSystem_step(void);
extern void TriggeredSystem_terminate(void);

/* Real-time Model object */
extern RT_MODEL_TriggeredSystem_T *const TriggeredSystem_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Display' : Unused code path elimination
 * Block '<Root>/Scope' : Unused code path elimination
 */

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'TriggeredSystem'
 * '<S1>'   : 'TriggeredSystem/Triggered Subsystem'
 * '<S2>'   : 'TriggeredSystem/Triggered Subsystem/Chart'
 * '<S3>'   : 'TriggeredSystem/Triggered Subsystem/Chart1'
 */
#endif                                 /* RTW_HEADER_TriggeredSystem_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
