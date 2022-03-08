import { useHistory } from "react-router-dom";

export function Footer() {
  const history = useHistory();
  return (
    <div className='footer'>
      <div className='footer-icon-link'>
        <h4 className="footer-words" varient="text" onClick={() => history.push("/")}>Home</h4>
        <h4 className="footer-words" varient="text" onClick={() => history.push("/about")}>About</h4>
        <h4 className="footer-words" varient="text" color="inherit" onClick={() => history.push("/salad")}>Salad</h4>

      </div>
      <div className='footer-icon-link'>
        <a target="_blank" rel="noreferrer" href='https://www.facebook.com'>
          <img className="icon-f" src="https://pyxis.nymag.com/v1/imgs/11d/582/c7b0487c6e26db4f5be6eb679e3620d2ce-facebook.2x.rsocial.w600.jpg" alt="facebook" />
        </a>

        <a target="_blank" rel="noreferrer" href='https://www.instagram.com'>
          <img className="icon-insta" src="https://xessories.pk/wp-content/uploads/2018/12/Popular_Social_Media-08-512-1.png" alt="instagram" />
        </a>

        <a target="_blank" rel="noreferrer" href='https://twitter.com'>
          <img className="icon-twitter" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-iD_ebE82snC0KxQGcRWNcse8CBocN6BFv4LbCb-Gu7lLYcfmePRDFe1_y3pRTjsc-s&usqp=CAU" alt="twitter" />
        </a>

        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com'>
          <img className="icon-linked" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnBEIPrcPU5NaFeVWG8z8T1Ad7wkRWtY_PQkOXmxzBtsSN906RWiawAPAZn1SdkbbKwY&usqp=CAU" alt="linked in" />
        </a>

      </div>
      <div>
        <h4 className="footer-words">Ⓒ Copyright 2022 | Sandee Foody Court</h4>
      </div>
    </div>
  );
}
