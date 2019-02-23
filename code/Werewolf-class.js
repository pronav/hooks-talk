class Werewolf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWolf: props.isWolf
    }
    this.toggle = () => {
      this.setState({ isWolf: !this.state.isWolf })
    }
  }

  render() {
    return <div onClick={this.toggle}>
      {this.state.isWolf ? '🐺' : '👨'}
    </div>
  }
}