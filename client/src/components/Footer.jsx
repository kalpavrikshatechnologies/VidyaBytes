import React from "react";

export default function Footer() {
    return (
        <div className="flex flex-col h-screen">
            <footer>
                <div className="container mx-auto py-4 text-center">
                    Copyright &copy; {new Date().getFullYear()} VidyaBytes
                </div>
            </footer>
        </div>
    )
}