import * as React from 'react';
import { Component } from 'react';

const Register = () => {


    const [isSubmited, setIsSubmited] = React.useState(false);
    const [formInfo, setFormInfo] = React.useState({
        first: '',
        last: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmited(true);
        let first = (document.querySelector('#fname') as HTMLInputElement).value;
        let last = (document.querySelector('#lname') as HTMLInputElement).value;
        let email = (document.querySelector('#email') as HTMLInputElement).value;
        let newObj = {
            ...formInfo,
            first,
            last,
            email
        };
        setFormInfo(newObj);
        console.log(newObj);     
    }

    // const fnameWasChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value + ' was changed');
    //     setFormInfo({
    //         ...formInfo,
    //         first: e.target.value
    //     });
    // }

    // const inputWasChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     switch (e.target.name) {
    //         case ('fname'):
    //             setFormInfo({
    //                 ...formInfo,
    //                 first: e.target.value
    //             });
    //             break;
    //             case ('lname'):
    //             setFormInfo({
    //                 ...formInfo,
    //                 last: e.target.value
    //             });
    //             break;
    //             case ('email'):
    //             setFormInfo({
    //                 ...formInfo,
    //                 email: e.target.value
    //             });
    //             break;
    //         default:
    //             break;
    //     }
    // }

    // const inputWasChanged = (e:React.ChangeEvent<HTMLInputElement>, field:string) => {
    //     let newObj = {
    //         ...formInfo,
    //         [field]: e.target.value
    //     };
    //     setFormInfo(newObj);
    // }

    return (
        <div className='mainPageTemplate mainPageHeight'>
            <h1 className='mainPageHeadling headlingMain'>Register</h1>
            <form onSubmit={(e) => {handleSubmit(e)}} id='registerForm' className="registerForm">
                <div>
                    <input name='fname' placeholder='first' id='fname' type="text" className="formInput" />
                    <input name='lname' placeholder='last' id='lname' type="text" className="formInput" />
                </div>
                <div>
                    <label htmlFor="lbl">Email:</label>
                    <input type="text" id='email' name='email' placeholder='Email' />
                </div>
                <input type="submit" value='submit' />
            </form>
            <div>
                {isSubmited && 
                <div>
                    <p>name: {formInfo.first}</p>
                    <p>last: {formInfo.last}</p>
                    <p>email: {formInfo.email}</p>
                </div> }
            </div>
        </div>
    )
}

export default Register;