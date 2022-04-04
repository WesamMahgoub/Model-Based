/*
 * File: enu.h
 *
 * Code generated for Simulink model 'enu'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Mon Apr 04 21:43:39 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_enu_h_
#define RTW_HEADER_enu_h_
#include <stddef.h>
#ifndef enu_COMMON_INCLUDES_
# define enu_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* enu_COMMON_INCLUDES_ */

#include "enu_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  int32_T In1;                         /* '<Root>/In1' */
} ExtU_enu_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  number Out1[2];                      /* '<Root>/Out1' */
} ExtY_enu_T;

/* Real-time Model Data Structure */
struct tag_RTM_enu_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_enu_T enu_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_enu_T enu_Y;

/* Model entry point functions */
extern void enu_initialize(void);
extern void enu_step(void);
extern void enu_terminate(void);

/* Real-time Model object */
extern RT_MODEL_enu_T *const enu_M;

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<Root>/Scope' : Unused code path elimination
 * Block '<Root>/Data Type Conversion1' : Eliminate redundant data type conversion
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
 * '<Root>' : 'enu'
 * '<S1>'   : 'enu/Enumerated Constant'
 */
#endif                                 /* RTW_HEADER_enu_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
