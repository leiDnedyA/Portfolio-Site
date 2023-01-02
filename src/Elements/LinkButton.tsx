import { ReactElement } from 'react';
import './LinkButton.css'

interface Props {
    text: string | ReactElement;
    link?: string | URL;
    file?: File;
}

export default ( props: Props )=> <div className="LinkButton">
    <button onClick={()=>{
        if(props.link){
            window.location.replace(props.link);
        }
    }} >{props.text}</button>
</div>