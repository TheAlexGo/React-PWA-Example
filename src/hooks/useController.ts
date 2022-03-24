import React from 'react';
import { ControllerContext } from '../controller';

export function useController() {
    return React.useContext(ControllerContext);
}
