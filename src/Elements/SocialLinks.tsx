import { FaGithub, FaLinkedin } from "react-icons/fa"

interface StandardProps {
    className: string
}

export default ({ className }: StandardProps): JSX.Element => {
    return <div className={className}>
        <a href="https://github.com/leiDnedyA"><FaGithub /></a> <a href="https://www.linkedin.com/in/ayden-diel-9b0972191/"><FaLinkedin /></a>
    </div>
}
