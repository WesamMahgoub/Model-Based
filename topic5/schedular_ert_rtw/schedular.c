/*
 * File: schedular.c
 *
 * Code generated for Simulink model 'schedular'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Mon Apr 04 20:42:43 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "schedular.h"
#include "schedular_private.h"

/* Block signals (auto storage) */
B_schedular_T schedular_B;

/* Block states (auto storage) */
DW_schedular_T schedular_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_schedular_T schedular_Y;

/* Real-time model */
RT_MODEL_schedular_T schedular_M_;
RT_MODEL_schedular_T *const schedular_M = &schedular_M_;

/* Model step function */
void schedular_step(void)
{
  /* Chart: '<Root>/Chart' incorporates:
   *  Constant: '<Root>/Constant'
   *  Inport: '<S2>/In1'
   */
  if (schedular_DW.temporalCounter_i1 < 3U) {
    schedular_DW.temporalCounter_i1++;
  }

  /* Gateway: Chart */
  /* During: Chart */
  if (schedular_DW.is_active_c3_schedular == 0U) {
    /* Entry: Chart */
    schedular_DW.is_active_c3_schedular = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:2' */
    schedular_DW.temporalCounter_i1 = 0U;
  } else {
    /* During 'CallFunction': '<S1>:1' */
    if (schedular_DW.temporalCounter_i1 >= 1U) {
      /* Outputs for Function Call SubSystem: '<Root>/Function-Call Subsystem' */
      /* Transition: '<S1>:5' */
      /* Event: '<S1>:3' */
      schedular_B.In1 = 1.0;

      /* End of Outputs for SubSystem: '<Root>/Function-Call Subsystem' */
      schedular_DW.temporalCounter_i1 = 0U;
    }
  }

  /* End of Chart: '<Root>/Chart' */

  /* Outport: '<Root>/Out1' */
  schedular_Y.Out1 = schedular_B.In1;
}

/* Model initialize function */
void schedular_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(schedular_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &schedular_B), 0,
                sizeof(B_schedular_T));

  /* states (dwork) */
  (void) memset((void *)&schedular_DW, 0,
                sizeof(DW_schedular_T));

  /* external outputs */
  schedular_Y.Out1 = 0.0;

  /* SystemInitialize for Chart: '<Root>/Chart' */
  schedular_DW.temporalCounter_i1 = 0U;
  schedular_DW.is_active_c3_schedular = 0U;
}

/* Model terminate function */
void schedular_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
