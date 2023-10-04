import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

// type= desktop, mobile, responsive, static
// defaultDay = kosong:today, set:'YYYY-MM-DD'
export default function DatePickers({
    type = "static",
    defaultDay,
    className = "",
    ...props
}) {
    let element;
    switch (type) {
        case "desktop":
            element = (
                // <DemoItem label="Desktop variant">
                    <DesktopDatePicker defaultValue={dayjs(defaultDay)} />
                // </DemoItem>
            );
            break;
        case "mobile":
            element = (
                // <DemoItem label="Mobile variant">
                    <MobileDatePicker defaultValue={dayjs(defaultDay)} />
                // </DemoItem>
            );
            break;
        case "responsive":
            element = <DatePicker defaultValue={dayjs(defaultDay)} />;
            break;
        case "static":
            element = (
                // <DemoItem label="Static variant">
                    <StaticDatePicker defaultValue={dayjs(defaultDay)} />
                // </DemoItem>
            );
            break;
    }
    return (
        <>
            <div {...props} className={"" + className}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                            "DatePicker",
                            "MobileDatePicker",
                            "DesktopDatePicker",
                            "StaticDatePicker",
                        ]}
                    >
                        {element}
                    </DemoContainer>
                </LocalizationProvider>
            </div>
        </>
    );
}
