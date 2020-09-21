const { withRouter } = ReactRouterDOM


class _Modal extends React.Component {
    state = {
        isShown: true,
        returnTo: null
    }
    closeModal = () => {
        this.setState({ isShown: false })
        this.props.history.push(this.state.returnTo)
    }
    componentDidMount() {
        const returnTo = this.props.returnTo;
        // console.log(returnTo);
        this.setState({returnTo})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.setState({ isShown: true })
        }
    }
    render() {
        const { isShown } = this.state
        const { children } = this.props
        return (
            <div className={ `modal-wrapper ${isShown ? '' : 'hide'}` } onClick={ this.closeModal } >
                <div className="modal-content" onClick={ (ev) => ev.stopPropagation() }>
                    <button onClick={ this.closeModal }>X</button>
                    { children }
                </div>
            </div >
        )
    }
}

export const Modal = withRouter(_Modal);