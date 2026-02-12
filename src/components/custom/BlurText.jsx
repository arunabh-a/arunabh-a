'use client';
import { useRef, useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";

const BlurText = ({
    text = "",
    delay = 200,
    className = "",
    animateBy = "words", // 'words' or 'letters'
    direction = "top", // 'top' or 'bottom'
    threshold = 0.1,
    rootMargin = "0px", // optional
    highlightText,
    easing = "easeOutCubic",
}) => {
    const elements = animateBy === "words" ? text.split(" ") : text.split("");
    const [inView, setInView] = useState(false);
    const ref = useRef();
    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom =
        direction === "top"
            ? {
                  filter: "blur(10px)",
                  opacity: 0,
                  transform: "translate3d(0,-50px,0)",
              }
            : {
                  filter: "blur(10px)",
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
              };

    const defaultTo = [
        {
            filter: "blur(5px)",
            opacity: 0.5,
            transform:
                direction === "top"
                    ? "translate3d(0,5px,0)"
                    : "translate3d(0,-5px,0)",
        },
        { filter: "blur(0px)", opacity: 1, transform: "translate3d(0,0,0)" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin },
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        elements.length + 1,
        [...elements, highlightText].map((_, i) => ({
            from: defaultFrom,
            to: inView
                ? async (next) => {
                      for (const step of defaultTo) {
                          await next(step);
                      }
                      animatedCount.current += 1;
                      //   if (animatedCount.current === elements.length && onAnimationComplete) {
                      //     onAnimationComplete();
                      //   }
                  }
                : defaultFrom,
            delay: i * delay,
            config: { easing },
        })),
    );

    return (
        <p
            ref={ref}
            className={`blur-text ${className} flex flex-wrap font-mono text-xl md:text-5xl  text-foreground`}
        >
            {springs.map((props, index) => (
                <animated.span
                    key={index}
                    style={props}
                    className="inline-block transition-transform will-change-[transform,filter,opacity]"
                >
                    {elements[index] === " " ? "\u00A0" : elements[index]}
                    {animateBy === "words" &&
                        index < elements.length - 1 &&
                        "\u00A0"}
                </animated.span>
            ))}
            <animated.span
                style={springs[elements.length]}
                className={`blur-text ${className} lg:text-5xl font-mono text-xl inline-block transition-transform will-change-[transform,filter,opacity] text-[#6175F8] `}
            >
                {highlightText}
            </animated.span>
        </p>
    );
};

export default BlurText;
