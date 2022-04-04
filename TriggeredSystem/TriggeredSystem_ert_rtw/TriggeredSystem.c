/*
 * File: TriggeredSystem.c
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

#include "TriggeredSystem.h"
#include "TriggeredSystem_private.h"

/* Block states (auto storage) */
DW_TriggeredSystem_T TriggeredSystem_DW;

/* Previous zero-crossings (trigger) states */
PrevZCX_TriggeredSystem_T TriggeredSystem_PrevZCX;

/* External inputs (root inport signals with auto storage) */
ExtU_TriggeredSystem_T TriggeredSystem_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_TriggeredSystem_T TriggeredSystem_Y;

/* Real-time model */
RT_MODEL_TriggeredSystem_T TriggeredSystem_M_;
RT_MODEL_TriggeredSystem_T *const TriggeredSystem_M = &TriggeredSystem_M_;

/* Model step function */
void TriggeredSystem_step(void)
{
  int32_T rtb_PulseGenerator;
  ZCEventType zcEvent;
  uint8_T rtb_SW;

  /* DiscretePulseGenerator: '<Root>/Pulse Generator' */
  rtb_PulseGenerator = ((TriggeredSystem_DW.clockTickCounter < 1) &&
                        (TriggeredSystem_DW.clockTickCounter >= 0));
  if (TriggeredSystem_DW.clockTickCounter >= 1) {
    TriggeredSystem_DW.clockTickCounter = 0;
  } else {
    TriggeredSystem_DW.clockTickCounter++;
  }

  /* End of DiscretePulseGenerator: '<Root>/Pulse Generator' */

  /* Outputs for Triggered SubSystem: '<Root>/Triggered Subsystem' incorporates:
   *  TriggerPort: '<S1>/Trigger'
   */
  zcEvent = rt_ZCFcn(RISING_ZERO_CROSSING,
                     &TriggeredSystem_PrevZCX.TriggeredSubsystem_Trig_ZCE,
                     ((real_T)rtb_PulseGenerator));
  if (zcEvent != NO_ZCEVENT) {
    /* Chart: '<S1>/Chart1' incorporates:
     *  Inport: '<Root>/In1'
     */
    /* Gateway: Triggered
       Subsystem/Chart1 */
    /* During: Triggered
       Subsystem/Chart1 */
    /* Entry Internal: Triggered
       Subsystem/Chart1 */
    /* Transition: '<S3>:23' */
    if (TriggeredSystem_U.In1 == 1.0) {
      /* Transition: '<S3>:24' */
      /* Transition: '<S3>:26' */
      rtb_SW = 1U;

      /* Transition: '<S3>:27' */
    } else {
      /* Transition: '<S3>:25' */
      rtb_SW = 0U;
    }

    /* End of Chart: '<S1>/Chart1' */

    /* Chart: '<S1>/Chart' */
    /* Transition: '<S3>:28' */
    /* Gateway: Triggered
       Subsystem/Chart */
    /* During: Triggered
       Subsystem/Chart */
    /* Entry Internal: Triggered
       Subsystem/Chart */
    /* Transition: '<S2>:3' */
    if (rtb_SW == 1) {
      /* Outport: '<Root>/Out1' */
      /* Transition: '<S2>:4' */
      /* Transition: '<S2>:6' */
      TriggeredSystem_Y.Out1 = 1U;

      /* Transition: '<S2>:7' */
    } else {
      /* Outport: '<Root>/Out1' */
      /* Transition: '<S2>:5' */
      TriggeredSystem_Y.Out1 = 0U;
    }

    /* End of Chart: '<S1>/Chart' */
    /* Transition: '<S2>:8' */
  }

  /* End of Outputs for SubSystem: '<Root>/Triggered Subsystem' */
}

/* Model initialize function */
void TriggeredSystem_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(TriggeredSystem_M, (NULL));

  /* states (dwork) */
  (void) memset((void *)&TriggeredSystem_DW, 0,
                sizeof(DW_TriggeredSystem_T));

  /* external inputs */
  TriggeredSystem_U.In1 = 0.0;

  /* external outputs */
  TriggeredSystem_Y.Out1 = 0U;

  /* Start for DiscretePulseGenerator: '<Root>/Pulse Generator' */
  TriggeredSystem_DW.clockTickCounter = 0;
  TriggeredSystem_PrevZCX.TriggeredSubsystem_Trig_ZCE = UNINITIALIZED_ZCSIG;

  /* SystemInitialize for Triggered SubSystem: '<Root>/Triggered Subsystem' */
  /* SystemInitialize for Outport: '<Root>/Out1' incorporates:
   *  SystemInitialize for Chart: '<S1>/Chart'
   */
  TriggeredSystem_Y.Out1 = 0U;

  /* End of SystemInitialize for SubSystem: '<Root>/Triggered Subsystem' */
}

/* Model terminate function */
void TriggeredSystem_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
