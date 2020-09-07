import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import { MDBBtn } from "mdbreact";
import './App.css';
import {  MDBCard, MDBRow,MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Pr} from './Components/Pr'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask,MDBIcon, MDBContainer } from
"mdbreact";
import './index.css'
import {CardExample} from './Components/Comp'
import {FooterPage} from './Components/Foot'
export const PS=()=>{
  return (
    <div class="containr">
            <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className=" pi img-fluid" alt="" 
            height="40"/>
            
            
       
           
                 <h4 className="PN">PRODUCTS
            </h4>
            
            <br/>
            
            <h4 className="PR">
            $15.98
            </h4>
            <div className="btncon">
            <div className="b1">
            <MDBBtn color='white' className=" font-weight-bold rounded strong">
           Call
                <MDBIcon className="pl-1" icon='phone'size='1x' /></MDBBtn>
            </div>
            <div className="b2">
           <MDBBtn color='white' className=" font-weight-bold rounded strong">
           Chat
                <MDBIcon className="pl-1" icon='comment-al'size='1x'/></MDBBtn>
            </div>
            </div>
               <br/>
             <hr className="#c4c4c4 d-flex justify-content-center text-center accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "250px" }} />
         
            <div className="pd">
            </div>
         <p className="des">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est ante, sollicitudin a luctus non, ultrices in augue. Vivamus vulputate non metus nec egestas. Vestibulum sit amet egestas ex. Sed auctor, justo et lobortis bibendum, lacus nisl elementum dolor, nec laoreet orci sem sit amet tellus. In malesuada cursus ultricies. Fusce tincidunt sodales iaculis. Nullam sollicitudin tincidunt venenatis. Nulla posuere dolor et rhoncus dictum. Aenean sapien tellus, faucibus a velit non, posuere consequat tortor.
         </p>
            </div>
      
    );
  
}