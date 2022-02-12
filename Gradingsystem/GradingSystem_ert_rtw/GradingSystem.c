/*
 * File: GradingSystem.c
 *
 * Code generated for Simulink model 'GradingSystem'.
 *
 * Model version                  : 1.5
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Feb 12 20:10:18 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "GradingSystem.h"
#include "GradingSystem_private.h"

/* Block signals (auto storage) */
B_GradingSystem_T GradingSystem_B;

/* External inputs (root inport signals with auto storage) */
ExtU_GradingSystem_T GradingSystem_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_GradingSystem_T GradingSystem_Y;

/* Real-time model */
RT_MODEL_GradingSystem_T GradingSystem_M_;
RT_MODEL_GradingSystem_T *const GradingSystem_M = &GradingSystem_M_;

/* Model step function */
void GradingSystem_step(void)
{
  /* If: '<Root>/If' incorporates:
   *  Constant: '<S1>/Constant'
   *  Constant: '<S2>/Constant'
   *  Inport: '<Root>/In1'
   */
  if ((GradingSystem_U.In1 >= 0.0) && (GradingSystem_U.In1 < 50.0)) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem' incorporates:
     *  ActionPort: '<S1>/Action Port'
     */
    GradingSystem_B.Merge = 69U;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem' */
  } else {
    if ((GradingSystem_U.In1 >= 50.0) && (GradingSystem_U.In1 < 65.0)) {
      /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem1' incorporates:
       *  ActionPort: '<S2>/Action Port'
       */
      GradingSystem_B.Merge = 68U;

      /* End of Outputs for SubSystem: '<Root>/If Action Subsystem1' */
    }
  }

  /* End of If: '<Root>/If' */

  /* If: '<Root>/If1' incorporates:
   *  Constant: '<S3>/Constant'
   *  Constant: '<S4>/Constant'
   *  Inport: '<Root>/In1'
   */
  if ((GradingSystem_U.In1 >= 65.0) && (GradingSystem_U.In1 < 75.0)) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem2' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    GradingSystem_B.Merge = 67U;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem2' */
  } else {
    if ((GradingSystem_U.In1 >= 75.0) && (GradingSystem_U.In1 < 85.0)) {
      /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem3' incorporates:
       *  ActionPort: '<S4>/Action Port'
       */
      GradingSystem_B.Merge = 66U;

      /* End of Outputs for SubSystem: '<Root>/If Action Subsystem3' */
    }
  }

  /* End of If: '<Root>/If1' */

  /* If: '<Root>/If2' incorporates:
   *  Constant: '<S5>/Constant'
   *  Inport: '<Root>/In1'
   */
  if ((GradingSystem_U.In1 >= 85.0) && (GradingSystem_U.In1 < 100.0)) {
    /* Outputs for IfAction SubSystem: '<Root>/If Action Subsystem4' incorporates:
     *  ActionPort: '<S5>/Action Port'
     */
    GradingSystem_B.Merge = 65U;

    /* End of Outputs for SubSystem: '<Root>/If Action Subsystem4' */
  }

  /* End of If: '<Root>/If2' */

  /* Outport: '<Root>/Out1' */
  GradingSystem_Y.Out1 = GradingSystem_B.Merge;
}

/* Model initialize function */
void GradingSystem_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(GradingSystem_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &GradingSystem_B), 0,
                sizeof(B_GradingSystem_T));

  /* external inputs */
  GradingSystem_U.In1 = 0.0;

  /* external outputs */
  GradingSystem_Y.Out1 = 0U;
}

/* Model terminate function */
void GradingSystem_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
