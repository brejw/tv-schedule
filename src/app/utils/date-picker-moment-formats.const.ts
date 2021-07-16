import { MatDateFormats } from "@angular/material/core";
import { DATE_FORMAT } from "./date-format.const";

export const DATE_PICKER_MOMENT_FORMATS: MatDateFormats = {
    parse: {
        dateInput: [DATE_FORMAT]
    },
    display: {
        dateInput: DATE_FORMAT,
        monthYearLabel: DATE_FORMAT,
        dateA11yLabel: DATE_FORMAT,
        monthYearA11yLabel: DATE_FORMAT,
    },
};
