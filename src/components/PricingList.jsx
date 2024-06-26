import { NavLink } from "react-router-dom";
import { blueCheckbox } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
import { useAuth0 } from '@auth0/auth0-react'

const PricingList = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[26rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[4.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[3.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          {
            isAuthenticated ?
            <NavLink to="/form">
              <Button
                className="w-full mb-6"
                white={!!item.price}
              >
                {item.price ? "Get started" : "Contact us"}
              </Button>
            </NavLink> :
            <Button
              className="w-full mb-6"
              onClick={() => loginWithRedirect()}
              white={!!item.price}
            >
              {item.price ? "Get started" : "Contact us"}
            </Button>
          }

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-4 border-t border-n-6"
              >
                <img src={blueCheckbox} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
