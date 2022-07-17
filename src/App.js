
import './App.css';
import  img from './assets/sh.jpg';

import { FaGoogle } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

import { FaAt } from "react-icons/fa";



function App() {
  return (
    <div className="App">
     <div classNmae="box">
     <img src ={img} alt="image analyze"></img>
   <div classNmae="sub-main">
     <h3>Zoho.</h3>
     <p className="tol"> A centra where teams can work, plan,<br/> and achieve amazing things together.</p>
     </div>
     </div>
    
     <div className="box">
     <select name="lang" id="lang">
     <option value="English">English(USA)</option>
     <option value="Arabic">Arabic</option>
    
   </select>
     <p className="Free">Start For Free</p>
     <h1>Sign up to Zoho.</h1>
     <p className="create ">Please fill in this form to create an account.<a href="/">login</a></p><br/>
     
     <div class="input-icons">
     <label for="email"><b>E-mail</b></label><br/>
     <input type="text" placeholder="name@gmail.com" name="email"  required /> <FaAt  className='icon' color= "rgba(126, 124, 124, 0.863)" />
 </div>
 
    
 <div class="input-icons">
 <label for="psw"><b>Password</b></label><br/>
 <input type="password" placeholder="6+characters,1 Capital Letter" name="psw" required/>
 < FaUnlock   className='icon' color= "rgba(126, 124, 124, 0.863)"  />
</div>

  
    
     

 
       <button type="button" className="createA">create an account </button><br/>
       <button type="submit" className="signupbtn"> <FaGoogle  color="rgb(46, 46, 230)" />,
       Sign Up with Google</button><br/>
       <p className="lastp"> This site protected by reCAPTCHA and <br/>the Google <a href="/" >Terms & Privacy</a></p>
     </div> 
     < signUp/>


    </div>
  );
}

export default App;
