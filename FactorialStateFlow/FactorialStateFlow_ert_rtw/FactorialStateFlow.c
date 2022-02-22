/*
 * File: FactorialStateFlow.c
 *
 * Code generated for Simulink model 'FactorialStateFlow'.
 *
 * Model version                  : 1.7
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Feb 22 23:12:22 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "FactorialStateFlow.h"
#include "FactorialStateFlow_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_FactorialStateFlow_T FactorialStateFlow_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_FactorialStateFlow_T FactorialStateFlow_Y;

/* Real-time model */
RT_MODEL_FactorialStateFlow_T FactorialStateFlow_M_;
RT_MODEL_FactorialStateFlow_T *const FactorialStateFlow_M =
  &FactorialStateFlow_M_;

/* Model step function */
void FactorialStateFlow_step(void)
{
  /* Gateway: Chart */
  /* During: Chart */
  /* Entry Internal: Chart */
  /* Transition: '<S1>:4' */
  /*  factorial  */
  /* Transition: '<S1>:7' */
  /* Transition: '<S1>:9' */
}

/* Model initialize function */
void FactorialStateFlow_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(FactorialStateFlow_M, (NULL));

  /* external inputs */
  FactorialStateFlow_U.In1 = 0.0;

  /* external outputs */
  FactorialStateFlow_Y.Out1 = 0.0;

  /* ConstCode for Outport: '<Root>/Out1' */
  FactorialStateFlow_Y.Out1 = 0.0;
}

/* Model terminate function */
void FactorialStateFlow_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
