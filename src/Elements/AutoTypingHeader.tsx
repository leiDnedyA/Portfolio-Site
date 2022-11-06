import React from "react";
import { useState, useEffect, useRef } from "react"

interface Props {
    className: string;
    text: string;
}

interface State {
    textIndex: number;
    currentText: string;
}

// export default (props: Props): JSX.Element => {
//     const [index, setIndex] = useState(0);
    
//     const fullText: string = props.text;
//     const typingDelay = .25;

//     useEffect(() => {

//         const update = setInterval(() => {
//             setIndex(prevIndex => {
//                 if (prevIndex < fullText.length - 1) {
//                     return prevIndex + 1;
//                 }
//                 return prevIndex;
//             });
//         }, 1000 * typingDelay);

//     }, []);

//     return <h1 className={props.className}> {fullText.slice(0, index)} </h1>
// }

export default class AutoTypingHeader extends React.Component<Props, State>{
    
    state = { textIndex: 0, currentText: ''}; //current index that the text is being typed to
    interval: any = null;

    constructor(props: Props){
        super(props);
    }

    componentDidMount(): void {
        this.interval = setInterval(()=>{
            if(this.state.textIndex < this.props.text.length){
                this.setState({ textIndex: this.state.textIndex + 1 })
            }
            this.setState({ currentText: this.props.text.slice(0, this.state.textIndex) } );
        }, 100);
    }

    componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    render(): JSX.Element {
        return <h1 className={this.props.className}>{this.state.currentText}</h1>
    }

}