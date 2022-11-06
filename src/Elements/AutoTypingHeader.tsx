import React from "react";
import { useState, useEffect, useRef } from "react"

interface Props {
    className: string;
    text: string;
}

interface State {
    textIndex: number;
    currentText: string;
    finished: boolean;
    loadingDotsCount: number;
}

export default class AutoTypingHeader extends React.Component<Props, State>{

    state = { textIndex: 0, currentText: '', finished: false, loadingDotsCount: 0}; //current index that the text is being typed to
    interval: any = null;

    minLoadingDots = 1;
    maxLoadingDots = 3;
    typingDelay = 50;
    dotsDelay = 500;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {
        this.interval = setInterval(() => {
            if (!this.state.finished){
                if (this.state.textIndex < this.props.text.length) {
                    this.setState({ textIndex: this.state.textIndex + 1 })
                }
                if (this.state.textIndex == this.props.text.length) {
                    this.setState({ finished: true });
                }
            }else{
                clearInterval(this.interval);
                this.interval = setInterval(()=>{
                    if (this.state.loadingDotsCount >= this.maxLoadingDots) {
                        this.setState({ loadingDotsCount: this.minLoadingDots });
                    } else {
                        this.setState({ loadingDotsCount: this.state.loadingDotsCount + 1 });
                    }

                    let loadingDots = '.'.repeat(this.state.loadingDotsCount);
                    
                    this.setState({ currentText: this.props.text + loadingDots });
        
                }, this.dotsDelay);
            }
            let newText = this.props.text.slice(0, this.state.textIndex)
            this.setState({ currentText: newText});

        }, this.typingDelay);
    }

    componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    render(): JSX.Element {
        return <h1 className={this.props.className}>{this.state.currentText}</h1>
    }

}