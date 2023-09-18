import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView} from 'react-hook-inview'

function FadeBox({ children}) {

    const controls = useAnimation()
    const [ ref, inView ] = useInView()

    React.useEffect(() => {
        if(inView){
            controls.start("visible")
        }
    },[ controls, inView])
  return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        whileInView="visible"
        viewport={{once: true}}
        transition={{type: 'spring', stiffness: 300}}
        variants={{
            hidden: { opacity: 0, y:10 },
            visible: { opacity: 1, y: 0 }
        }}
    >
        {children}
    </motion.div>
  )
}

export default React.memo(FadeBox)