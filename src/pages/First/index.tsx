import {useObserver} from "mobx-react";
import React from "react";
import {Container, Content, Img} from "./style";
import "./style.css";

const First = () => {
    return useObserver(() => (
       <>
           <Container>
               <Img src={require("./skka2.png")}/>
               <Content>
                   <form>
                       <div className="input-container">
                           <label htmlFor="input-field">전화번호:</label>
                           <input type="text" id="input-field" placeholder="Enter text here"/>
                           <input type="submit" id="input-field" value="제출"/>
                       </div>
                   </form>
               </Content>
           </Container>
       </>
    ));
}

export default First;