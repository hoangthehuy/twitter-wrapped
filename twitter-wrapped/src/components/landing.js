import * as React from "react";
import {Form, Image, Input} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import Twitter_Logo from "../assets/Twitter_Logo_Blue.svg";
import "./landing.css";

export const Search = ({onSubmit}) => {
    const [name, setName] = React.useState("");

    const handleChange = (event) => {
        const val = event.target.value;
        setName(val);
    };

    return (
    <div>
        <center>    
        <Image id="twitter-logo" src={Twitter_Logo} alt="twitter" avatar size="small"/>
        <div>
            <span id="wrapped"> Wrapped </span>
        </div>
        <br/>
        <Form onSubmit={() => onSubmit(name)}>
        <Form.Field inline>
            <Input size='large' icon='search' placeholder='Twitter username here' onChange={handleChange}/>
        </Form.Field>
        </Form>
        </center>
    </div>
    );

};
