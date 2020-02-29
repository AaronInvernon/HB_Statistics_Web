import { PureComponent } from 'react'
import ReactDOM from 'react-dom';

export default class extends PureComponent {

  constructor(props) {
    super(props)
    this.newElement = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.newElement)
  }

  componentWillUnmount() {
    document.body.removeChild(this.newElement)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.newElement
    )
  }

}