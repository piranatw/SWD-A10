'use client'

import { useState } from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

export default function DateReserve() {
    const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
    const [venue, setVenue] = useState("");

    return (
        <div className="flex flex-col gap-8">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                label="Event date"
                value={reserveDate}
                onChange={(value) => setReserveDate(value)}
                slotProps={{textField: {variant: "standard", fullWidth: true}}}/>
            </LocalizationProvider>

            <TextField
            variant="standard"
            required
            fullWidth
            name="Name-Lastname"
            label="Name-Lastname"/>

            <TextField
            variant="standard"
            required
            fullWidth
            name="Contact-Number"
            label="Contact-Number"/>

            <FormControl variant="standard" required fullWidth>
                <InputLabel id="venue-label">Venue</InputLabel>
                <Select
                labelId="venue-label"
                id="venue"
                name="venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}>
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
