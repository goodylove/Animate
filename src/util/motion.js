export const container = (containerChildren, delayChild) => (
    {
        hidden: {},
        show: {
            transtion: {
                containerChildren,
                delayChild,
                  
                
            }
        }
    }
)

export const poppin = {
    hidden: {
        opacity: 0,
        y:-50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "linear",
            type: "tween",
            delay: 0.2,
            duration: 2
            
        }
        
    }
}

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      
    },
  },
});