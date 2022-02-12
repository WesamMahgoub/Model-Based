/*
 * File: factorialforloop.c
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

#include "factorialforloop.h"
#include "factorialforloop_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_factorialforloop_T factorialforloop_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_factorialforloop_T factorialforloop_Y;

/* Real-time model */
RT_MODEL_factorialforloop_T factorialforloop_M_;
RT_MODEL_factorialforloop_T *const factorialforloop_M = &factorialforloop_M_;

/* Model step function */
void factorialforloop_step(void)
{
  int32_T s1_iter;
  real_T UnitDelay_DSTATE;

  /* Outputs for Iterator SubSystem: '<Root>/For Iterator Subsystem' incorporates:
   *  ForIterator: '<S1>/For Iterator'
   */
  /* InitializeConditions for UnitDelay: '<S1>/Unit Delay' */
  UnitDelay_DSTATE = 1.0;

  /* Constant: '<Root>/Constant' */
  for (s1_iter = 1; s1_iter < 256; s1_iter++) {
    /* Outport: '<Root>/Output' incorporates:
     *  Product: '<S1>/Product'
     *  UnitDelay: '<S1>/Unit Delay'
     */
    factorialforloop_Y.Output = (real_T)s1_iter * UnitDelay_DSTATE;

    /* Update for UnitDelay: '<S1>/Unit Delay' */
    UnitDelay_DSTATE = factorialforloop_Y.Output;
  }

  /* End of Constant: '<Root>/Constant' */
  /* End of Outputs for SubSystem: '<Root>/For Iterator Subsystem' */
}

/* Model initialize function */
void factorialforloop_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(factorialforloop_M, (NULL));

  /* external inputs */
  factorialforloop_U.Input = 0U;

  /* external outputs */
  factorialforloop_Y.Output = 0.0;
}

/* Model terminate function */
void factorialforloop_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
