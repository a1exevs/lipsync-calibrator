import Ajv from 'ajv';

import { isNil, isUndefined } from 'src/common/helpers/guards';
import { interpolateStrings } from 'src/common/helpers/string';
import { currentLang } from 'src/common/land/lang.helper';
import { Nillable } from 'src/common/types/common';
import { jsonShapesDataStructureScheme } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-scheme';
import { ValidatorOutput } from 'src/ui/app-content/content/three-d-model-viewer/nav-bar/validators/json-structure-validator.types';

export function validateSelectedJSONStructure(shapeDataStr: Nillable<string | ArrayBuffer>): ValidatorOutput {
  try {
    const validateFn = new Ajv().compile(jsonShapesDataStructureScheme);
    const baseErrorMessage = currentLang.errors.INCORRECT_JSON_FILE_STRUCTURE;
    if (isNil(shapeDataStr)) {
      return { isValid: false, error: baseErrorMessage, data: [] };
    }
    const shapeData = JSON.parse(shapeDataStr as string);
    const valid = validateFn(shapeData);
    if (!valid) {
      const error = validateFn.errors?.map(e => e.message).join('; ');
      const additionalErrorMessage = !isUndefined(error)
        ? interpolateStrings(` ${currentLang.errors.ERRORS}`, error)
        : '';

      return { isValid: false, error: baseErrorMessage + additionalErrorMessage, data: [] };
    }
    return { isValid: true, data: shapeData };
  } catch (e) {
    if (e instanceof Error) {
      return { isValid: false, error: e?.message, data: [] };
    }
    return { isValid: false, data: [] };
  }
}
