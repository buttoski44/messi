import React from "react";

export default function useCountdown (from : number) {
    const [time, setTime] = React.useState<number>(from);
    React.useEffect(() => {
        if(time <= 0) return;

        const timeOut = setTimeout(() => {
            setTime(time - 1)
        },1000)

        return () => clearTimeout(timeOut)
    },[time])

    return time;
}

