/*
 * File: enu.c
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

#include "enu.h"
#include "enu_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_enu_T enu_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_enu_T enu_Y;

/* Real-time model */
RT_MODEL_enu_T enu_M_;
RT_MODEL_enu_T *const enu_M = &enu_M_;

/* Model step function */
void enu_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Constant: '<S1>/Constant'
   *  DataTypeConversion: '<Root>/Data Type Conversion'
   *  Inport: '<Root>/In1'
   */
  enu_Y.Out1[0] = (number)enu_U.In1;
  enu_Y.Out1[1] = two;
}

/* Model initialize function */
void enu_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(enu_M, (NULL));

  /* external inputs */
  enu_U.In1 = 0;

  /* external outputs */
  enu_Y.Out1[0] = zero;
  enu_Y.Out1[1] = zero;
}

/* Model terminate function */
void enu_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
