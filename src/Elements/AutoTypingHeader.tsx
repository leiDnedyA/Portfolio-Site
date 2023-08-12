import React from "react";
import { useState, useEffect, useRef } from "react"

interface Props{
    className?: string;
    useDots?: boolean;
    text: string;
}

interface State {
    textIndex: number;
    currentText: string;
    finished: boolean;
    loadingDotsCount: number;
}

const SKIP_CHARS = new Set(['\uD83D']);

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
        let fullText = this.props.text
        
        const updateTypedText = () => {
            
            if (this.state.textIndex < fullText.length) {
                console.log(SKIP_CHARS.has(this.props.text[this.state.textIndex + 1]), this.props.text[this.state.textIndex]);
                let stateChanged = false;
                if (this.state.textIndex < fullText.length - 1) {
                    if (SKIP_CHARS.has(fullText[this.state.textIndex])) {
                        this.setState({ textIndex: this.state.textIndex + 2 })
                        stateChanged = true;
                    }
                }
                if (!stateChanged) {
                    this.setState({ textIndex: this.state.textIndex + 1 })
                }
                
            }
            if (this.state.textIndex == fullText.length) {
                this.setState({ finished: true });
            }

        }

        const updateDots = () => {

            if (this.state.loadingDotsCount >= this.maxLoadingDots) {
                this.setState({ loadingDotsCount: this.minLoadingDots });
            } else {
                this.setState({ loadingDotsCount: this.state.loadingDotsCount + 1 });
            }

            let loadingDots = '.'.repeat(this.state.loadingDotsCount);
            
            this.setState({ currentText: fullText + loadingDots });
        
        }

        this.interval = setInterval(() => {
            if (!this.state.finished){
                updateTypedText();
            }else if (this.props.useDots){
                clearInterval(this.interval);
                updateDots();
                this.interval = setInterval(updateDots, this.dotsDelay);
            }
            let newText = fullText.slice(0, this.state.textIndex)
            this.setState({ currentText: newText});

        }, this.typingDelay);
    }

    componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    render(): JSX.Element {
        return <h1 className={this.props.className ? this.props.className : '' /* becasue className is optional */}>{this.state.currentText}</h1>
    }

}