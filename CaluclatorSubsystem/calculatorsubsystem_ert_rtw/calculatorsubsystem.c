/*
 * File: calculatorsubsystem.c
 *
 * Code generated for Simulink model 'calculatorsubsystem'.
 *
 * Model version                  : 1.2
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Feb 12 19:02:40 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives: Unspecified
 * Validation result: Not run
 */

#include "calculatorsubsystem.h"
#include "calculatorsubsystem_private.h"

/* Block signals (auto storage) */
B_calculatorsubsystem_T calculatorsubsystem_B;

/* External inputs (root inport signals with auto storage) */
ExtU_calculatorsubsystem_T calculatorsubsystem_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_calculatorsubsystem_T calculatorsubsystem_Y;

/* Real-time model */
RT_MODEL_calculatorsubsystem_T calculatorsubsystem_M_;
RT_MODEL_calculatorsubsystem_T *const calculatorsubsystem_M =
  &calculatorsubsystem_M_;

/* Output and update for atomic system: '<Root>/Subsystem' */
void calculatorsubsystem_Subsystem(uint8_T rtu_In1, uint8_T rtu_In2,
  B_Subsystem_calculatorsubsyst_T *localB)
{
  /* Sum: '<S1>/Add' */
  localB->Add = (uint8_T)((uint32_T)rtu_In1 + rtu_In2);

  /* Product: '<S1>/Divide' */
  localB->Divide = (uint8_T)(rtu_In2 == 0U ? MAX_uint32_T : (uint32_T)rtu_In1 /
    rtu_In2);

  /* Product: '<S1>/Product' */
  localB->Product = (uint16_T)((uint32_T)rtu_In1 * rtu_In2);

  /* Sum: '<S1>/Subtract' */
  localB->Subtract = (uint8_T)(rtu_In1 - rtu_In2);
}

/* Model step function */
void calculatorsubsystem_step(void)
{
  /* Outputs for Atomic SubSystem: '<Root>/Subsystem' */

  /* Inport: '<Root>/In1' incorporates:
   *  Inport: '<Root>/In2'
   */
  calculatorsubsystem_Subsystem(calculatorsubsystem_U.In1,
    calculatorsubsystem_U.In2, &calculatorsubsystem_B.Subsystem);

  /* End of Outputs for SubSystem: '<Root>/Subsystem' */

  /* Outport: '<Root>/Out1' */
  calculatorsubsystem_Y.Out1 = calculatorsubsystem_B.Subsystem.Add;

  /* Outport: '<Root>/Out2' */
  calculatorsubsystem_Y.Out2 = calculatorsubsystem_B.Subsystem.Subtract;

  /* Outport: '<Root>/Out3' */
  calculatorsubsystem_Y.Out3 = calculatorsubsystem_B.Subsystem.Product;

  /* Outport: '<Root>/Out4' */
  calculatorsubsystem_Y.Out4 = calculatorsubsystem_B.Subsystem.Divide;
}

/* Model initialize function */
void calculatorsubsystem_initialize(void)
{
  /* Registration code */

  /* initialize error status */
  rtmSetErrorStatus(calculatorsubsystem_M, (NULL));

  /* block I/O */
  (void) memset(((void *) &calculatorsubsystem_B), 0,
                sizeof(B_calculatorsubsystem_T));

  /* external inputs */
  (void) memset((void *)&calculatorsubsystem_U, 0,
                sizeof(ExtU_calculatorsubsystem_T));

  /* external outputs */
  (void) memset((void *)&calculatorsubsystem_Y, 0,
                sizeof(ExtY_calculatorsubsystem_T));
}

/* Model terminate function */
void calculatorsubsystem_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
