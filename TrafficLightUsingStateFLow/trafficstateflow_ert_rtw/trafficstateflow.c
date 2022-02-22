/*
 * File: trafficstateflow.c
 *
 * Code generated for Simulink model 'trafficstateflow'.
 *
 * Model version                  : 1.13
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Tue Feb 22 22:52:53 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "trafficstateflow.h"
#include "trafficstateflow_private.h"

/* Named constants for Chart: '<Root>/Chart' */
#define trafficstate_IN_NO_ACTIVE_CHILD ((uint8_T)0U)
#define trafficstateflow_IN_Green_     ((uint8_T)1U)
#define trafficstateflow_IN_Ready_     ((uint8_T)2U)
#define trafficstateflow_IN_Stop_      ((uint8_T)3U)

/* Block signals (auto storage) */
B_trafficstateflow_T trafficstateflow_B;

/* Block states (auto storage) */
DW_trafficstateflow_T trafficstateflow_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_trafficstateflow_T trafficstateflow_Y;

/* Real-time model */
RT_MODEL_trafficstateflow_T trafficstateflow_M_;
RT_MODEL_trafficstateflow_T *const trafficstateflow_M = &trafficstateflow_M_;

/* Model step function */
void trafficstateflow_step(void)
{
  /* Chart: '<Root>/Chart' */
  if (trafficstateflow_DW.temporalCounter_i1 < 31U) {
    trafficstateflow_DW.temporalCounter_i1++;
  }

  /* Gateway: Chart */
  /* During: Chart */
  if (trafficstateflow_DW.is_active_c3_trafficstateflow == 0U) {
    /* Entry: Chart */
    trafficstateflow_DW.is_active_c3_trafficstateflow = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:2' */
    trafficstateflow_DW.is_c3_trafficstateflow = trafficstateflow_IN_Stop_;
    trafficstateflow_DW.temporalCounter_i1 = 0U;

    /* Entry 'Stop_': '<S1>:1' */
    trafficstateflow_B.red = 0U;
    trafficstateflow_B.yellow = 0U;
    trafficstateflow_B.green = 0U;
  } else {
    switch (trafficstateflow_DW.is_c3_trafficstateflow) {
     case trafficstateflow_IN_Green_:
      /* During 'Green_': '<S1>:4' */
      if (trafficstateflow_DW.temporalCounter_i1 >= 15U) {
        /* Transition: '<S1>:9' */
        trafficstateflow_DW.is_c3_trafficstateflow = trafficstateflow_IN_Stop_;
        trafficstateflow_DW.temporalCounter_i1 = 0U;

        /* Entry 'Stop_': '<S1>:1' */
        trafficstateflow_B.red = 0U;
        trafficstateflow_B.yellow = 0U;
        trafficstateflow_B.green = 0U;
      } else {
        trafficstateflow_B.red = 0U;
        trafficstateflow_B.yellow = 0U;
        trafficstateflow_B.green = 1U;
      }
      break;

     case trafficstateflow_IN_Ready_:
      /* During 'Ready_': '<S1>:3' */
      if (trafficstateflow_DW.temporalCounter_i1 >= 15U) {
        /* Transition: '<S1>:8' */
        trafficstateflow_DW.is_c3_trafficstateflow = trafficstateflow_IN_Green_;
        trafficstateflow_DW.temporalCounter_i1 = 0U;

        /* Entry 'Green_': '<S1>:4' */
        trafficstateflow_B.red = 0U;
        trafficstateflow_B.yellow = 0U;
        trafficstateflow_B.green = 0U;
      } else {
        trafficstateflow_B.red = 0U;
        trafficstateflow_B.yellow = 1U;
        trafficstateflow_B.green = 0U;
      }
      break;

     default:
      /* During 'Stop_': '<S1>:1' */
      if (trafficstateflow_DW.temporalCounter_i1 >= 15U) {
        /* Transition: '<S1>:5' */
        trafficstateflow_DW.is_c3_trafficstateflow = trafficstateflow_IN_Ready_;
        trafficstateflow_DW.temporalCounter_i1 = 0U;

        /* Entry 'Ready_': '<S1>:3' */
        trafficstateflow_B.red = 0U;
        trafficstateflow_B.yellow = 0U;
        trafficstateflow_B.green = 0U;
      } else {
        trafficstateflow_B.red = 1U;
        trafficstateflow_B.yellow = 0U;
        trafficstateflow_B.green = 0U;
      }
      break;
    }
  }

  /* End of Chart: '<Root>/Chart' */

  /* Outport: '<Root>/Out1' */
  trafficstateflow_Y.Out1 = trafficstateflow_B.red;

  /* Outport: '<Root>/Out2' */
  trafficstateflow_Y.Out2 = trafficstateflow_B.yellow;

  /* Outport: '<Root>/Out3' */
  trafficstateflow_Y.Out3 = trafficstateflow_B.green;
}

/* Model initialize function */
void trafficstateflow_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(trafficstateflow_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &trafficstateflow_B), 0,
                sizeof(B_trafficstateflow_T));

  /* states (dwork) */
  (void) memset((void *)&trafficstateflow_DW, 0,
                sizeof(DW_trafficstateflow_T));

  /* external outputs */
  (void) memset((void *)&trafficstateflow_Y, 0,
                sizeof(ExtY_trafficstateflow_T));

  /* SystemInitialize for Chart: '<Root>/Chart' */
  trafficstateflow_DW.temporalCounter_i1 = 0U;
  trafficstateflow_DW.is_active_c3_trafficstateflow = 0U;
  trafficstateflow_DW.is_c3_trafficstateflow = trafficstate_IN_NO_ACTIVE_CHILD;
  trafficstateflow_B.red = 0U;
  trafficstateflow_B.yellow = 0U;
  trafficstateflow_B.green = 0U;
}

/* Model terminate function */
void trafficstateflow_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
