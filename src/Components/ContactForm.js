import React,{useState} from 'react'
import emailjs from 'emailjs-com'





export default function ContactForm() {
    const [name,setName] =useState('');
    const [subjet,setSubject]=  useState('')
    const [email,setEmail]= useState('')

    const [nameErr,setNameErr] =useState({})
    const [subjectErr,setSubjectErr]= useState({})
    const [emailErr,setEmailErr] = useState({})

    function sendEmail(e) {
        e.preventDefault();

        const isValid =formValidation();

        if(isValid){
    
        emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, e.target, 
            process.env.REACT_APP_USERID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setName('')
          setSubject('')
          setEmail('')
        }
        
      }

      const formValidation  = () =>{
            const nameErr ={}
            const subjectErr ={}
            const emailErr ={}
            let isValid =true

            if(name ===''){
            nameErr.nameEmpty='Please fill in your name'
            isValid = false
            }
            if(subjet ===''){
                subjectErr.emptySubject='please enter the subject'
                isValid=false
            }
            if(!email.includes("@" && ".com")){
                emailErr.invalidEmail  ="invalidEmail"
                isValid=false
            }
            setNameErr(nameErr)
            setSubjectErr(subjectErr)
            setEmailErr(emailErr)
            return isValid

            }
      

    return (
        <div>
        <div className="">
        <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto ">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="from_name" value={name}
                        onChange={(e)=>{setName(e.target.value)}} />
                        {Object.keys(nameErr).map((key)=>{
                            return <div className='form-control'>{nameErr[key]}</div>
                        })}
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}/>
                        {Object.keys(emailErr).map((key)=>{
                            return <div className='form-control'>{emailErr[key]}</div>
                        })}
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Subject" name="subject" value={subjet}
                        onChange={(e)=>{setSubject(e.target.value)}}/>
                        {Object.keys(subjectErr).map((key)=>{
                            return <div className='form-control'>{subjectErr[key]}</div>
                        })}
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )                    
    }
