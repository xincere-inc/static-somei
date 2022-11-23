import { KeenSliderInstance, useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import styles from './slider.module.scss'

export const Slider = ({children} : {children : JSX.Element[]}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    selector: `.${styles.item}`,
    loop: true,
    slides: {
      perView: 1,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div ref={ref} className={styles.wrapper}>
        { children }
        <LeftArrow instanceRef={instanceRef.current!} />
        <RightArrow instanceRef={instanceRef.current!} />
        {loaded && instanceRef.current ? (
          <SliderDots instanceRef={instanceRef.current!} currentSlide={currentSlide} />
        ) : null}
      </div>
    </>
  )
}

export const SliderItem = ({children} : {children: JSX.Element | string}) => {
  return <div className={styles.item}>{ children }</div>
}

const SliderDots = ({
  instanceRef,
  currentSlide
} : {
  instanceRef: KeenSliderInstance,
  currentSlide: number
}) => {
  return (
    <div className={styles.dots}>
      {[...Array(instanceRef.track.details.slides.length)].map((_, i) => i)
      .map((idx) => {
        return (
          <button
            key={idx}
            onClick={() => instanceRef.moveToIdx(idx)}
            className={styles.dot + (currentSlide === idx ? ` ${styles.active}` : "")}
          ></button>
        )
      })}
    </div>
  )
}

const LeftArrow = ({instanceRef} : {instanceRef: KeenSliderInstance}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${styles.arrow} ${styles.left}`}
      onClick={(e: any) =>
        e.stopPropagation() || instanceRef.prev()
      }
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

const RightArrow = ({instanceRef} : {instanceRef: KeenSliderInstance}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`${styles.arrow} ${styles.right}`}
      onClick={(e: any) =>
        e.stopPropagation() || instanceRef.next()
      }
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}