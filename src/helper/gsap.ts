import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const fadeInAndSlideIn = (
  element: string | HTMLElement,
  y = 0,
  duration = 0.5,
  ease = "ease"
) => {
  return gsap.from(element, {
    opacity: 0,
    y,

    duration: duration,
    ease,
  });
};

export const fadeInAndSlideInFromX = (
  element: string | HTMLElement,
  x = 0,
  duration = 0.5,
  ease = "ease"
) => {
  return gsap.from(element, {
    opacity: 0,
    x,

    duration: duration,
    ease,
  });
};

export const commonElementTriggerSettings = {
  start: "top 80%",
  end: "bottom 70%",
};

export const createTimeline = (trigger: string | null) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      // scrub: 1,
      ...commonElementTriggerSettings,
    },
  });
};
