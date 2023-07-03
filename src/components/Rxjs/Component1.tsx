//Rxjs

import { sharingInformationService } from "../../services/sharing-information.service"

const Component1 = () => {

  return (
    <div>
      <button onClick={() => { sharingInformationService.setSubject(true) }}>SEND INFO</button>
      <button onClick={() => { sharingInformationService.setSubject(false) }}>DON'T SEND INFO</button>
    </div>
  )
}

export default Component1