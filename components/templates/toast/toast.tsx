"use client";

import { RefObject, useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { ToastProps } from "./type";
import { useToast } from "./useToast";
import {
  animationVariables,
  closeButtonClasses,
  closeIcon,
  getIcon,
  iconClasses,
  wrapperClasses,
} from "./utils";

export const Toast = (props: ToastProps) => {
  const { type = "info", message = "---", id } = props;
  let { icon = "", duration = 3000 } = props;
  icon = icon === "" ? getIcon(type) : icon;
  duration = typeof duration === "string" ? +duration : duration;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const { remove, position } = useToast();

  //auto dismiss
  const dismissRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (duration) {
      dismissRef.current = setTimeout(() => {
        remove(id, wrapperRef as RefObject<HTMLDivElement>);
      }, duration);
    }

    return () => {
      if (dismissRef.current) {
        clearTimeout(dismissRef.current);
      }
    };
  }, [duration, id, remove]);

  // progressBar
  const progressBarRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const complete = 100;

    if (duration) {
      progressBarRef.current = setInterval(() => {
        if (progress < complete) {
          setProgress((prev) => prev + 1);
        } else {
          return;
        }
      }, duration / complete);
    }

    return () => {
      if (progressBarRef.current) {
        clearInterval(progressBarRef.current);
      }
    };
  }, [duration, progress]);
  return (
    <div
      style={{ ["--elm-translate" as string]: animationVariables[position] }}
      className={clsx(
        wrapperClasses[type],
        "animate-toastIn",
        "flex justify-between items-center overflow-hidden rounded-md shadow-lg my-3 relative"
      )}
      ref={wrapperRef}
      role={"alert"}
    >
      {!!duration && (
        <div className="absolute bottom-0 right-0 left-0 w-full h-1 bg-neutral-100 dark:bg-neutral-500">
          <span
            className="absolute bg-neutral-200 left-0 top-0 bottom-0 h-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {icon && (
        <div className={clsx(iconClasses[type], "flex p-3")}>
          <div className="inline-flex justify-center items-center w-6 h-6">
            <span className="sr-only w-5 h-5">{type} Icon</span>
            {icon}
          </div>
        </div>
      )}
      <div className="text-[10px] font-[350] flex-grow p-3">{message}</div>
      <button
        aria-label="Close"
        onClick={() => {
          remove(id, wrapperRef as RefObject<HTMLDivElement>);
        }}
        className={closeButtonClasses}
      >
        <span className="sr-only">Close</span>
        {closeIcon}
      </button>
    </div>
  );
};
