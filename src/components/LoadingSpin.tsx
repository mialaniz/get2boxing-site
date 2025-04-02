"use client";
import { CircularProgress, Backdrop } from "@mui/material";

export default function LoadingSpin({isLoading}: {isLoading: boolean}) {
    return (
        <div>
            <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>

        </div>

    );
}