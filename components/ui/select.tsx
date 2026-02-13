import * as React from "react"
import { cn } from "@/lib/utils"
// Note: A full Select component is complex. For MVP, using a styled native select.
// This is a strategic decision to keep MVP simple without full headless UI dependencies.

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> { }

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div className="relative">
                <select
                    className={cn(
                        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {children}
                </select>
                {/* Chevron Icon could go here */}
            </div>
        )
    }
)
Select.displayName = "Select"

export { Select }
