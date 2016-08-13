
class App extends React.Component {
  constructor(props) {
    super(props);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.state = {
      videolist: window.exampleVideoData,
      firstvid: window.exampleVideoData[0]
    };

  }

  updatePlayer (vid) {

    this.setState({
      firstvid: vid
      
    });

    
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.firstvid}/>
        </div>
        <div className="col-md-5">
          <VideoList func={this.updatePlayer} videos={this.state.videolist}/>

        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
