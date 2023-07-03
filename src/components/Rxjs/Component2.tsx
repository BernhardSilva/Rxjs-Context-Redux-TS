//Rxjs

import { useEffect, useState } from "react"
import { sharingInformationService } from "../../services/sharing-information.service";


const Component2 = () => {

  const [count, setCount] = useState(0)

  const subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    subscription$.subscribe(data => {
      !!data && setCount(count + 1)
    })

  })

  return (
    <div>
      <b>Count: {count}</b>
    </div>
  )
}

export default Component2