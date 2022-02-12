/*
 * File: factorialforloop.h
 *
 * Code generated for Simulink model 'factorialforloop'.
 *
 * Model version                  : 1.4
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Fri Feb 11 12:02:09 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#ifndef RTW_HEADER_factorialforloop_h_
#define RTW_HEADER_factorialforloop_h_
#include <stddef.h>
#ifndef factorialforloop_COMMON_INCLUDES_
# define factorialforloop_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* factorialforloop_COMMON_INCLUDES_ */

#include "factorialforloop_types.h"

/* Macros for accessing real-time model data structure */
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

/* External inputs (root inport signals with auto storage) */
typedef struct {
  uint8_T Input;                       /* '<Root>/Input' */
} ExtU_factorialforloop_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  real_T Output;                       /* '<Root>/Output' */
} ExtY_factorialforloop_T;

/* Real-time Model Data Structure */
struct tag_RTM_factorialforloop_T {
  const char_T * volatile errorStatus;
};

/* External inputs (root inport signals with auto storage) */
extern ExtU_factorialforloop_T factorialforloop_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_factorialforloop_T factorialforloop_Y;

/* Model entry point functions */
extern void factorialforloop_initialize(void);
extern void factorialforloop_step(void);
extern void factorialforloop_terminate(void);

/* Real-time Model object */
extern RT_MODEL_factorialforloop_T *const factorialforloop_M;

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
 * '<Root>' : 'factorialforloop'
 * '<S1>'   : 'factorialforloop/For Iterator Subsystem'
 */
#endif                                 /* RTW_HEADER_factorialforloop_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
