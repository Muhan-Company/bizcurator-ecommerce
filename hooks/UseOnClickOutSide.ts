import { useEffect, RefObject } from "react";

type EventHandler = (event: MouseEvent | TouchEvent) => void;

export default function UseOnClickOutSide(ref: RefObject<HTMLElement>, handler: EventHandler) {
    useEffect(() => {
        const listener: EventHandler = (event) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}
