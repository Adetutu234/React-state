import React from "react";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    person: {
      fullName: "Jane Doe Montgomery",
      bio: "Here to have fun",
      imgSrc: "https://wpstaq-ap-southeast-2-media.s3.amazonaws.com/phaustralia/wp-content/uploads/media/2022/07/mobile-hero-1.png",
      profession: "Software Developer",
    },
    shows:false,
    elapsedTime:0
  };
  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

toggle = () => {
     this.setState((prevState)=>({
      shows:!prevState.shows
     }))
   }
   
  render() {
    return <div className="mt-3">
      {this.state.shows && (
      <div className="shadow-lg p-7 space-y-3 font-bold text-blue-700 bg-slate-600/10 w-90 m-10 mb-4">
        <img src={this.state.person.imgSrc} alt="" className="h-70 w-70"/>
        <p>Name: <span className="font-normal text-black">{this.state.person.fullName}</span></p>
        <p>Bio: <span className="font-normal text-black">{this.state.person.bio}</span></p>
        <p>Proffession: <span className="font-normal text-black">{this.state.person.profession}</span></p>
      </div>
      )}
      <Button text={'Click me'} className={'ml-10 px-6 py-2 rounded-lg bg-blue-700 hover:bg-black hover:text-blue-700 hover:shadow-2xl w-fit font-medium'} onClick={this.toggle} />
      <p className="text-gray-700 font-semibold ml-10 mt-4">
          Time Since Component Mounted: {this.state.elapsedTime} seconds
      </p>

    </div>
  }
}
export default App;