import { ways } from "@/data"


function WayToteach(props){
  return(
    <ul>
      <li>
      {props.title}
     </li>
    </ul>
  )
}

export default function Banner(){


    return(
        <div className="banner">
                <div className="banner_left">
                  <h1 className="txt5">
                   ПЛОМБЫ И СИСТЕМЫ  <br />
                   КОНТРОЛЯ
                  </h1>

                  <ul className="ul2">
                    <li>
                      <WayToteach title={ways[0].title}/>
                    </li>

                    <li>
                      <WayToteach title={ways[1].title}/>
                    </li>

                    <li>
                      <WayToteach title={ways[2].title}/>
                    </li>
                  </ul>
                </div>

              </div>
    )
}