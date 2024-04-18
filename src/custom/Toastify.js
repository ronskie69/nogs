import { useToast } from '@chakra-ui/react';
import React from 'react'

function useToastify() {
  const [ state, setState ] = React.useState(null);
  const toast = useToast();

  React.useEffect(() => {
      if(state && !toast.isActive('email')){

        console.log(state)
          toast({
              title: state.title,
              status: state.status,
              position: 'bottom',
              variant: 'solid',
              id: state.id,
              duration: 2000,
              isClosable: true
          })
      }
      setState(null)
  }, [state, toast])

  return setState
}

export default useToastify